(function () {
  "use strict";

  const KEY = "dailyDevotion.v2";
  const N = devotionsData.length;
  const byId = Object.fromEntries(devotionsData.map(d => [d.id, d]));

  // ───────── Dates (local, YYYY-MM-DD) ─────────
  const pad = n => String(n).padStart(2, "0");
  const toKey = d => d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  const fromKey = k => { const [y, m, d] = k.split("-").map(Number); return new Date(y, m - 1, d); };
  const todayKey = () => toKey(new Date());
  const addDays = (k, n) => { const d = fromKey(k); d.setDate(d.getDate() + n); return toKey(d); };
  const daysBetween = (a, b) => {
    const [ay, am, ad] = a.split("-").map(Number), [by, bm, bd] = b.split("-").map(Number);
    return Math.round((Date.UTC(by, bm - 1, bd) - Date.UTC(ay, am - 1, ad)) / 864e5);
  };
  const isKey = k => typeof k === "string" && /^\d{4}-\d{2}-\d{2}$/.test(k);
  const fmtDate = (k, opts) => fromKey(k).toLocaleDateString(undefined, opts || { weekday: "short", month: "short", day: "numeric", year: "numeric" });
  const fmtTime = iso => new Date(iso).toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });

  // ───────── State ─────────
  const defaults = () => ({ theme: null, tab: "study", role: null, startDate: todayKey(), childName: "", entries: {} });

  // Wording that changes with the Dad / Mom setting (devotion text lives in devotions-data.js)
  const ROLE_TEXT = {
    dad: { label: "Dad", realitySub: "Fatherhood & Leadership", realityHead: "As a husband and father today", mdReality: "As a husband & father" },
    mom: { label: "Mom", realitySub: "Motherhood & Leadership", realityHead: "As a wife and mother today", mdReality: "As a wife & mother" }
  };
  // Kids' names: a comma-separated list, e.g. "Ava, Ben, Cole"
  const MAX_NAMES = 120;
  function parseKids(str) {
    const seen = new Set();
    return String(str || "").split(",").map(n => n.trim().replace(/\s+/g, " "))
      .filter(n => n && !seen.has(n.toLowerCase()) && seen.add(n.toLowerCase())).slice(0, 12);
  }
  const normalizeKids = str => parseKids(str).join(", ");
  function kidsPhrase() {
    const k = parseKids(state.childName);
    return k.length <= 1 ? (k[0] || "") : k.slice(0, -1).join(", ") + " & " + k[k.length - 1];
  }
  const role = () => (state.role === "mom" ? "mom" : "dad");
  const realityText = p => (typeof p.reality === "string" ? p.reality : (p.reality[role()] || p.reality.dad));

  function sanitize(raw) {
    const d = defaults();
    if (!raw || typeof raw !== "object") return d;
    const entries = {};
    if (raw.entries && typeof raw.entries === "object") {
      for (const [k, e] of Object.entries(raw.entries)) {
        if (!isKey(k) || !e || typeof e !== "object") continue;
        entries[k] = {
          id: byId[e.id] ? e.id : undefined,
          study: e.study && typeof e.study === "object" ? e.study : {},
          family: e.family && typeof e.family === "object" ? e.family : {}
        };
      }
    }
    return {
      theme: raw.theme === "dark" || raw.theme === "light" ? raw.theme : null,
      tab: raw.tab === "family" ? "family" : "study",
      role: raw.role === "dad" || raw.role === "mom" ? raw.role : null,
      startDate: isKey(raw.startDate) ? raw.startDate : d.startDate,
      childName: typeof raw.childName === "string" ? normalizeKids(raw.childName.slice(0, MAX_NAMES)) : "",
      entries
    };
  }

  function load() {
    try { return sanitize(JSON.parse(localStorage.getItem(KEY))); } catch (e) { return defaults(); }
  }

  let state = load();
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { alert("Couldn't save. Browser storage may be full or disabled."); } };
  save(); // persist startDate on first run

  // Session-only UI state
  const ui = { date: todayKey(), card: 0, seen: new Set([0]), revealed: false, prayerLine: 0, timer: null };

  // ───────── Devotion lookup ─────────
  function devotionFor(dateKey) {
    const e = state.entries[dateKey];
    if (e && e.id && byId[e.id]) return byId[e.id];
    const i = ((daysBetween(state.startDate, dateKey) % N) + N) % N;
    return devotionsData[i];
  }

  // Returns the entry for a date, creating it (and pinning its passage) on first write
  function entryFor(dateKey, create) {
    let e = state.entries[dateKey];
    if (!e && create) e = state.entries[dateKey] = { id: devotionFor(dateKey).id, study: {}, family: {} };
    return e;
  }
  const study = (k) => (entryFor(k || ui.date, false) || {}).study || {};
  const fam = (k) => (entryFor(k || ui.date, false) || {}).family || {};
  const setStudy = (field, value, k) => { entryFor(k || ui.date, true).study[field] = value; save(); };
  const setFamily = (field, value, k) => { entryFor(k || ui.date, true).family[field] = value; save(); };

  // Text fields waiting on their autosave debounce; flushed before any re-render
  const pending = new Set();
  const flushPending = () => { [...pending].forEach(fn => fn()); };

  // ───────── Streaks ─────────
  function streak(kind) {
    const done = k => !!(state.entries[k] && state.entries[k][kind] && state.entries[k][kind].completedAt);
    let k = todayKey();
    if (!done(k)) k = addDays(k, -1); // today isn't over yet; streak stays alive
    let n = 0;
    while (done(k)) { n++; k = addDays(k, -1); }
    return n;
  }

  // ───────── DOM helper ─────────
  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v === false || v == null) continue;
      if (k === "class") node.className = v;
      else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v === true ? "" : v);
    }
    [].concat(children == null ? [] : children).forEach(c => {
      if (c == null || c === false) return;
      node.append(c instanceof Node ? c : document.createTextNode(String(c)));
    });
    return node;
  }
  const $ = id => document.getElementById(id);

  // Autosaving textarea / input, bound to the date it was rendered for
  function field(kind, name, opts) {
    const dateKey = ui.date;
    const get = () => (kind === "study" ? study : fam)(dateKey);
    const set = v => (kind === "study" ? setStudy : setFamily)(name, v, dateKey);
    const tag = opts.input ? "input" : "textarea";
    const node = el(tag, {
      id: kind + "-" + name, class: opts.short ? "short" : "", placeholder: opts.placeholder || "",
      ...(opts.input ? { type: "text" } : { rows: opts.short ? 2 : 4 })
    });
    node.value = get()[name] || "";
    const status = el("div", { class: "saved", "aria-live": "polite" });
    let t;
    const commit = () => {
      clearTimeout(t);
      pending.delete(commit);
      if ((get()[name] || "") === node.value) return;
      set(node.value);
      status.textContent = "Saved";
      setTimeout(() => { status.textContent = ""; }, 1200);
    };
    node.addEventListener("input", () => { clearTimeout(t); pending.add(commit); t = setTimeout(commit, 500); });
    node.addEventListener("blur", commit);
    const wrap = [];
    if (opts.label) wrap.push(el("label", { class: "lbl", for: node.id }, opts.label));
    wrap.push(node, status);
    return wrap;
  }

  // ───────── My Study ─────────
  function renderStudy(d) {
    const s = study();
    const highlights = new Set(s.highlights || []);
    const p = d.personal;

    let prevVerse = null;
    const verses = d.passage.map(v => {
      const [ch, vs] = v.ref.split(":").map(Number);
      const gap = prevVerse && !(prevVerse[0] === ch && prevVerse[1] + 1 === vs);
      prevVerse = [ch, vs];
      return el("button", {
        type: "button", class: "verse" + (gap ? " gap-before" : ""), "aria-pressed": String(highlights.has(v.ref)),
        onclick: e => {
          const cur = new Set(study().highlights || []);
          cur.has(v.ref) ? cur.delete(v.ref) : cur.add(v.ref);
          setStudy("highlights", d.passage.map(x => x.ref).filter(r => cur.has(r)));
          e.currentTarget.setAttribute("aria-pressed", String(cur.has(v.ref)));
          hintEl.textContent = hintText(cur.size);
        }
      }, [el("sup", {}, v.ref), v.text]);
    });
    const hintText = n => n === 0 ? "Tap 1–2 verses that stand out to you." : n + " verse" + (n > 1 ? "s" : "") + " highlighted." + (n > 2 ? " Narrow it to the one or two that hit hardest." : "");
    const hintEl = el("p", { class: "hint" }, hintText(highlights.size));

    const done = s.completedAt;
    const completeBtn = el("button", {
      type: "button", class: "btn big " + (done ? "done" : "primary"),
      onclick: () => {
        flushPending();
        if (study().completedAt) {
          if (!confirm("Mark this study as not complete?")) return;
          setStudy("completedAt", null);
        } else {
          setStudy("completedAt", new Date().toISOString());
        }
        render();
      }
    }, done ? "✓ Personal Study Complete" : "Complete Personal Study");

    return el("article", {}, [
      el("div", { class: "day-head" }, [el("h2", {}, d.title), el("div", { class: "ref" }, d.reference + " (NIV)")]),

      el("section", { class: "step" }, [
        el("h3", { class: "step-title" }, [el("span", { class: "step-num" }, "1"), "The Read"]),
        el("div", { class: "step-sub" }, "Observation"),
        el("details", { class: "context" }, [el("summary", {}, "Background"), el("p", {}, p.context)]),
        el("div", { class: "verses" }, verses),
        hintEl,
        ...field("study", "summary", { label: "The passage in my own words", placeholder: "What is happening, and what is the main point?" })
      ]),

      el("section", { class: "step" }, [
        el("h3", { class: "step-title" }, [el("span", { class: "step-num" }, "2"), "The Reveal"]),
        el("div", { class: "step-sub" }, "Understanding"),
        el("div", { class: "prompt-card" }, [el("h4", {}, "God’s Character & Grace"), el("p", {}, p.grace)]),
        ...field("study", "grace", { placeholder: "Who God is, what He promises, how His grace rescues…" }),
        el("div", { class: "prompt-card" }, [el("h4", {}, "Human Nature & Warning"), el("p", {}, p.warning)]),
        ...field("study", "warning", { placeholder: "Pride, idleness, false teaching, the pull of the flesh…" })
      ]),

      el("section", { class: "step" }, [
        el("h3", { class: "step-title" }, [el("span", { class: "step-num" }, "3"), "The Reality Check"]),
        el("div", { class: "step-sub" }, ROLE_TEXT[role()].realitySub),
        el("div", { class: "prompt-card" }, [el("h4", {}, ROLE_TEXT[role()].realityHead), el("p", {}, realityText(p))]),
        ...field("study", "reality", { placeholder: "Be honest and specific." }),
        ...field("study", "action", { label: "One concrete action or mindset shift today", short: true, placeholder: "e.g. Put the phone away from dinner to bedtime." })
      ]),

      el("section", { class: "step" }, [
        el("h3", { class: "step-title" }, [el("span", { class: "step-num" }, "4"), "The Response"]),
        el("div", { class: "step-sub" }, "Prayer"),
        ...field("study", "prayer", { placeholder: p.prayerStarter }),
        completeBtn,
        done ? el("p", { class: "complete-note" }, "Saved " + fmtDate(ui.date, { month: "short", day: "numeric" }) + " at " + fmtTime(done) + ". You can keep editing.") : null
      ])
    ]);
  }

  // ───────── Family Table ─────────
  const CARDS = [
    { name: "Big Idea", mins: 2 },
    { name: "Action Read", mins: 4 },
    { name: "Questions", mins: 5 },
    { name: "Prayer", mins: 2 }
  ];

  function listenRegex(f) {
    const forms = f.listenFor.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    return new RegExp("\\b(" + forms.join("|") + ")\\b", "gi");
  }

  function expectedTaps(d) {
    const f = d.family;
    const text = f.keyVerses.map(r => (d.passage.find(p => p.ref === r) || {}).text || "").join(" ");
    return (text.match(listenRegex(f)) || []).length * (f.readTimes || 1);
  }

  function verseWithMarks(text, re, on) {
    if (!on) return [text];
    const out = [];
    let last = 0;
    text.replace(re, (m, _g, idx) => {
      out.push(text.slice(last, idx), el("mark", {}, m));
      last = idx + m.length;
      return m;
    });
    out.push(text.slice(last));
    return out;
  }

  function timerButton(mins) {
    const t = ui.timer;
    const running = t && t.card === ui.card && t.end;
    const remaining = running ? Math.max(0, Math.ceil((t.end - Date.now()) / 1000)) : mins * 60;
    const label = running
      ? (remaining > 0 ? "⏱ " + Math.floor(remaining / 60) + ":" + pad(remaining % 60) : "⏰ Time’s up, wrap it up")
      : "⏱ Start " + mins + "-min timer";
    return el("button", {
      type: "button", class: "timer" + (running ? " running" : "") + (running && remaining === 0 ? " over" : ""), id: "cardTimer",
      onclick: () => {
        if (running) { stopTimer(); } else { startTimer(mins); }
        render();
      }
    }, label);
  }
  function startTimer(mins) {
    stopTimer();
    ui.timer = { card: ui.card, end: Date.now() + mins * 60000, iv: setInterval(() => {
      const b = $("cardTimer");
      if (!b || !ui.timer) return stopTimer();
      const rem = Math.max(0, Math.ceil((ui.timer.end - Date.now()) / 1000));
      b.textContent = rem > 0 ? "⏱ " + Math.floor(rem / 60) + ":" + pad(rem % 60) : "⏰ Time’s up, wrap it up";
      if (rem === 0) { b.classList.add("over"); clearInterval(ui.timer.iv); }
    }, 250) };
  }
  function stopTimer() { if (ui.timer) clearInterval(ui.timer.iv); ui.timer = null; }

  function cardBigIdea(d) {
    return [
      el("div", { class: "card-label" }, "1 · The Big Idea"),
      el("h2", {}, d.title),
      el("div", { class: "ref" }, d.reference + " (NIV)"),
      el("p", { class: "big-idea" }, d.family.bigIdea)
    ];
  }

  function cardActionRead(d) {
    const f = d.family;
    const re = listenRegex(f);
    const taps = fam().taps || 0;
    const expected = expectedTaps(d);

    const countEl = el("span", { id: "tapCount" }, String(taps));
    const msg = el("div", { class: "reveal-msg", "aria-live": "polite" },
      ui.revealed ? revealText(taps, expected, f.listeningWord) : "");

    return [
      el("div", { class: "ar-head" }, [
        el("div", { class: "card-label" }, "2 · The Action Read"),
        el("div", { class: "listen-badge" }, "👂 Listening word: " + f.listeningWord),
        el("p", { class: "listen-how" }, f.listenAction)
      ]),
      el("div", { class: "action-verses" }, f.keyVerses.map(r => {
        const v = d.passage.find(p => p.ref === r);
        return el("p", {}, [el("sup", {}, r), ...verseWithMarks(v.text, re, ui.revealed)]);
      })),
      el("div", { class: "ar-tap" }, [
        el("div", { class: "tapper-row" }, [
          el("button", {
            type: "button", class: "tapper", "aria-label": "I heard it! Count: " + taps,
            onclick: e => {
              const n = (fam().taps || 0) + 1;
              setFamily("taps", n);
              countEl.textContent = String(n);
              e.currentTarget.setAttribute("aria-label", "I heard it! Count: " + n);
              if (navigator.vibrate) navigator.vibrate(15);
              if (ui.revealed) msg.textContent = revealText(n, expected, f.listeningWord);
            }
          }, [countEl, el("small", {}, "I HEARD IT!")]),
          el("div", { class: "tap-tools" }, [
            el("button", { type: "button", class: "btn mini", onclick: () => { ui.revealed = !ui.revealed; render(); } }, ui.revealed ? "Hide answer" : "How many were there?"),
            el("button", { type: "button", class: "btn mini", onclick: () => { setFamily("taps", 0); ui.revealed = false; render(); } }, "Reset count")
          ])
        ]),
        msg
      ])
    ];
  }
  function revealText(taps, expected, word) {
    const base = "“" + word + "” appeared " + expected + " time" + (expected === 1 ? "" : "s") + ". ";
    if (taps === expected) return base + "You got it exactly! 🎉";
    return base + "You counted " + taps + ". Great listening!";
  }

  function cardQuestions(d) {
    const f = d.family;
    const name = kidsPhrase();
    return [
      el("div", { class: "card-label" }, "3 · Two Table Questions"),
      el("div", { class: "qcard" }, [
        el("div", { class: "who" }, name ? "For " + name : "For the kids"),
        el("p", {}, f.question1),
        f.question1Hint ? el("details", {}, [el("summary", {}, "Answer for Mom & Dad"), f.question1Hint]) : null
      ]),
      el("div", { class: "qcard" }, [
        el("div", { class: "who" }, "For the whole family"),
        el("p", {}, f.question2)
      ])
    ];
  }

  function cardPrayer(d) {
    const f = d.family;
    const done = fam().completedAt;
    const lines = el("ol", { class: "prayer-lines" }, f.prayer.map((line, i) => el("li", {}, el("button", {
      type: "button", class: i === ui.prayerLine ? "current" : "",
      onclick: () => { ui.prayerLine = i; render(); }
    }, line))));

    return [
      el("div", { class: "card-label" }, "4 · Repeat-After-Me Prayer"),
      el("p", { class: "prayer-how" }, "Read a line, then everyone repeats it. Tap a line, or press Space, to move to the next one."),
      lines,
      el("div", { class: "gratitude" }, [
        el("strong", {}, "🙏 Gratitude check: Name one thing you are thankful to God for today."),
        ...field("family", "gratitude", { input: true, placeholder: "What was everyone thankful for?" }),
        el("button", {
          type: "button", class: "btn big " + (done ? "done" : "primary"),
          onclick: () => {
            flushPending();
            if (fam().completedAt) {
              if (!confirm("Mark the family devotional as not complete?")) return;
              setFamily("completedAt", null);
            } else {
              setFamily("completedAt", new Date().toISOString());
              stopTimer();
            }
            render();
          }
        }, done ? "✓ Family Devotional Complete" : "Complete Family Devotional"),
        done ? el("p", { class: "complete-note" }, "Logged at " + fmtTime(done) + ". Family streak: " + streak("family") + " 🔥") : null
      ])
    ];
  }

  function goCard(i) {
    const to = Math.max(0, Math.min(CARDS.length - 1, i));
    if (to === ui.card) return;
    ui.card = to;
    ui.seen.add(to);
    stopTimer();
    render();
  }

  function renderFamily(d) {
    const builders = [cardBigIdea, cardActionRead, cardQuestions, cardPrayer];
    const steps = el("div", { class: "steps", role: "list" }, CARDS.map((c, i) => el("button", {
      type: "button", role: "listitem", class: ui.seen.has(i) ? "seen" : "",
      "aria-current": i === ui.card ? "step" : false,
      onclick: () => goCard(i)
    }, [c.name, el("small", {}, c.mins + " min")])));

    const card = el("section", { class: "card card-" + (ui.card + 1), "aria-live": "polite" }, builders[ui.card](d));

    let x0 = null;
    card.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
    card.addEventListener("touchend", e => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 70 && !e.target.closest(".tapper")) goCard(ui.card + (dx < 0 ? 1 : -1));
    });

    const nav = el("div", { class: "cardnav" }, [
      el("button", { type: "button", class: "btn", disabled: ui.card === 0, onclick: () => goCard(ui.card - 1) }, "‹ Back"),
      timerButton(CARDS[ui.card].mins),
      el("button", { type: "button", class: "btn primary", disabled: ui.card === CARDS.length - 1, onclick: () => goCard(ui.card + 1) }, "Next ›")
    ]);
    return [steps, card, nav];
  }

  // ───────── Shell ─────────
  function render() {
    flushPending();
    const d = devotionFor(ui.date);
    const family = state.tab === "family";
    document.body.classList.toggle("family", family);

    // Header: streaks, theme icon
    $("streaks").replaceChildren(
      el("span", { title: "Personal study streak" }, ["📖 ", el("b", {}, String(streak("study")))]),
      el("span", { title: "Family streak" }, ["🏡 ", el("b", {}, String(streak("family")))])
    );
    $("themeBtn").textContent = isDark() ? "☀️" : "🌙";
    $("themeBtn").setAttribute("aria-label", isDark() ? "Switch to day mode" : "Switch to night mode");

    // Date bar
    const today = todayKey();
    $("dateLabel").textContent = ui.date === today ? "Today · " + fmtDate(ui.date, { weekday: "short", month: "short", day: "numeric" }) : fmtDate(ui.date);
    $("dateInput").value = ui.date;
    $("todayBtn").disabled = ui.date === today;

    // Tabs
    const e = state.entries[ui.date];
    document.querySelectorAll(".tabs button").forEach(b => {
      const active = b.dataset.tab === state.tab;
      b.setAttribute("aria-selected", String(active));
      b.tabIndex = active ? 0 : -1;
      const kind = b.dataset.tab === "study" ? "study" : "family";
      b.classList.toggle("done-dot", !!(e && e[kind] && e[kind].completedAt));
    });
    $("view").setAttribute("aria-labelledby", "tab-" + state.tab);

    const content = family ? renderFamily(d) : [renderStudy(d)];
    $("view").replaceChildren(...content);
  }

  function setDate(k) {
    if (!isKey(k)) return;
    ui.date = k;
    ui.card = 0; ui.seen = new Set([0]); ui.revealed = false; ui.prayerLine = 0;
    stopTimer();
    render();
    window.scrollTo({ top: 0 });
  }

  function isDark() {
    return state.theme ? state.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  }

  // ───────── Export ─────────
  function buildMarkdown() {
    flushPending();
    const keys = Object.keys(state.entries).sort();
    const parts = ["# Daily Devotion Journal", "", "_Scripture quotations: NIV®. Copyright © 1973, 1978, 1984, 2011 by Biblica, Inc.™ Used by permission._", ""];
    let count = 0;
    const has = s => s && String(s).trim();
    for (const k of keys) {
      const e = state.entries[k];
      const d = byId[e.id] || devotionFor(k);
      const s = e.study || {}, f = e.family || {};
      const anyStudy = s.completedAt || ["summary", "grace", "warning", "reality", "action", "prayer"].some(x => has(s[x])) || (s.highlights || []).length;
      if (!anyStudy && !f.completedAt && !has(f.gratitude)) continue;
      count++;
      parts.push("## " + fmtDate(k, { weekday: "long", year: "numeric", month: "long", day: "numeric" }) + ": " + d.title, "", "**" + d.reference + " (NIV)**", "");
      if ((s.highlights || []).length) {
        parts.push("**Highlighted verses**", "");
        s.highlights.forEach(r => { const v = d.passage.find(p => p.ref === r); if (v) parts.push("> **" + r + "** " + v.text, ">"); });
        if (parts[parts.length - 1] === ">") parts.pop();
        parts.push("");
      }
      const sec = (title, val) => { if (has(val)) parts.push("**" + title + "**", "", String(val).trim(), ""); };
      sec("In my own words", s.summary);
      sec("God’s character & grace", s.grace);
      sec("Human nature & warning", s.warning);
      sec(ROLE_TEXT[role()].mdReality, s.reality);
      sec("One concrete action today", s.action);
      sec("Prayer", s.prayer);
      const status = [];
      if (s.completedAt) status.push("Personal study completed " + fmtTime(s.completedAt));
      if (f.completedAt) status.push("Family devotional completed " + fmtTime(f.completedAt));
      if (has(f.gratitude)) status.push("Family gratitude: " + String(f.gratitude).trim());
      if (status.length) parts.push("_" + status.join(" · ") + "_", "");
      parts.push("---", "");
    }
    if (!count) parts.push("_No journal entries yet._");
    return parts.join("\n");
  }

  window.addEventListener("pagehide", () => flushPending());

  function download(name, text, type) {
    const a = el("a", { href: URL.createObjectURL(new Blob([text], { type })), download: name });
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }
  function flash(msg) { $("settingsStatus").textContent = msg; setTimeout(() => { $("settingsStatus").textContent = ""; }, 2500); }

  // ───────── Archive ─────────
  function renderArchive() {
    const keys = Object.keys(state.entries).sort().reverse().filter(k => {
      const e = state.entries[k], s = e.study || {}, f = e.family || {};
      return s.completedAt || f.completedAt || Object.entries(s).some(([x, v]) => x !== "completedAt" && (Array.isArray(v) ? v.length : String(v || "").trim())) || (f.taps || 0) > 0 || String(f.gratitude || "").trim();
    });
    const list = $("archiveList");
    if (!keys.length) { list.replaceChildren(el("p", { class: "muted" }, "Nothing yet. Completed and in-progress days will show up here.")); return; }
    list.replaceChildren(...keys.map(k => {
      const e = state.entries[k], d = byId[e.id] || devotionFor(k);
      return el("button", {
        type: "button", class: "archive-item",
        onclick: () => { $("archiveDialog").close(); setDate(k); }
      }, [
        el("span", {}, [el("div", { class: "t" }, d.title), el("div", { class: "d" }, fmtDate(k) + " · " + d.reference)]),
        el("span", { class: "badges" }, [
          el("span", { class: "badge" + (e.study && e.study.completedAt ? " on" : "") }, "📖 Study"),
          el("span", { class: "badge" + (e.family && e.family.completedAt ? " on" : "") }, "🏡 Family")
        ])
      ]);
    }));
  }

  // ───────── Wiring ─────────
  document.querySelectorAll(".tabs button").forEach(b => b.addEventListener("click", () => {
    state.tab = b.dataset.tab; save(); stopTimer(); render(); window.scrollTo({ top: 0 });
  }));
  $("prevDate").addEventListener("click", () => setDate(addDays(ui.date, -1)));
  $("nextDate").addEventListener("click", () => setDate(addDays(ui.date, 1)));
  $("todayBtn").addEventListener("click", () => setDate(todayKey()));
  $("dateInput").addEventListener("change", e => setDate(e.target.value));

  $("themeBtn").addEventListener("click", () => {
    state.theme = isDark() ? "light" : "dark";
    document.documentElement.dataset.theme = state.theme;
    save(); render();
  });
  if (state.theme) document.documentElement.dataset.theme = state.theme;
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => { if (!state.theme) render(); });

  const fs = $("fullscreenBtn");
  if (!document.fullscreenEnabled) fs.hidden = true;
  fs.addEventListener("click", () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen().catch(() => {});
  });

  document.querySelectorAll("dialog [data-close]").forEach(b => b.addEventListener("click", () => b.closest("dialog").close()));
  document.querySelectorAll("dialog").forEach(dlg => dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); }));

  $("archiveBtn").addEventListener("click", () => { renderArchive(); $("archiveDialog").showModal(); });
  $("settingsBtn").addEventListener("click", () => {
    $("childName").value = state.childName;
    syncRoleButtons();
    $("startDate").value = state.startDate;
    $("settingsDialog").showModal();
  });
  $("childName").addEventListener("input", e => { state.childName = e.target.value.slice(0, MAX_NAMES); save(); render(); });
  $("childName").addEventListener("change", e => { state.childName = normalizeKids(e.target.value); e.target.value = state.childName; save(); render(); });

  // Dad / Mom toggle (Settings) and first-run welcome
  function setRole(r) { state.role = r; save(); syncRoleButtons(); render(); }
  function syncRoleButtons() {
    document.querySelectorAll("[data-role]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.role === role())));
  }
  document.querySelectorAll("#settingsDialog [data-role]").forEach(b => b.addEventListener("click", () => { setRole(b.dataset.role); flash(ROLE_TEXT[role()].label + " mode on."); }));
  document.querySelectorAll("#welcomeDialog [data-role]").forEach(b => b.addEventListener("click", () => {
    state.childName = normalizeKids($("welcomeKids").value.slice(0, MAX_NAMES));
    setRole(b.dataset.role);
    $("welcomeDialog").close();
  }));
  $("welcomeDialog").addEventListener("cancel", e => e.preventDefault()); // a choice is needed once
  $("startDate").addEventListener("change", e => { if (isKey(e.target.value)) { state.startDate = e.target.value; save(); render(); flash("Plan start date updated."); } });

  $("exportMd").addEventListener("click", () => { download("devotion-journal-" + todayKey() + ".md", buildMarkdown(), "text/markdown"); flash("Markdown downloaded."); });
  $("copyMd").addEventListener("click", () => {
    const md = buildMarkdown();
    (navigator.clipboard ? navigator.clipboard.writeText(md) : Promise.reject())
      .then(() => flash("Copied. Paste it into your notes."))
      .catch(() => { download("devotion-journal-" + todayKey() + ".md", md, "text/markdown"); flash("Clipboard unavailable, so it downloaded instead."); });
  });
  $("exportJson").addEventListener("click", () => { download("devotion-backup-" + todayKey() + ".json", JSON.stringify(state, null, 2), "application/json"); flash("Backup downloaded."); });
  $("importJson").addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;
    file.text().then(text => {
      const parsed = sanitize(JSON.parse(text));
      if (!confirm("Replace everything in this browser with this backup (" + Object.keys(parsed.entries).length + " days)?")) return;
      state = parsed; save();
      if (state.theme) document.documentElement.dataset.theme = state.theme; else delete document.documentElement.dataset.theme;
      render(); flash("Backup restored.");
    }).catch(() => flash("That file isn't a valid backup."))
      .finally(() => { e.target.value = ""; });
  });
  $("resetAll").addEventListener("click", () => {
    if (!confirm("Erase ALL journal entries, highlights and streaks in this browser? Export a backup first if you want to keep them.")) return;
    state = defaults(); save(); delete document.documentElement.dataset.theme;
    $("settingsDialog").close(); setDate(todayKey());
  });

  // Keyboard: ←/→ move between family cards; Space advances the prayer line on card 4
  document.addEventListener("keydown", e => {
    if (state.tab !== "family" || e.altKey || e.ctrlKey || e.metaKey) return;
    if (e.target.closest("textarea, input, select, dialog")) return;
    if (e.key === "ArrowRight" || e.key === "PageDown") { e.preventDefault(); goCard(ui.card + 1); }
    else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); goCard(ui.card - 1); }
    else if (e.key === " " && ui.card === 3 && !e.target.closest("button")) {
      e.preventDefault(); ui.prayerLine = Math.min(devotionFor(ui.date).family.prayer.length - 1, ui.prayerLine + 1); render();
    }
  });

  // If the app stays open past midnight, roll "today" forward when it regains focus
  let lastToday = todayKey();
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "visible") return;
    const t = todayKey();
    if (t !== lastToday) { if (ui.date === lastToday) setDate(t); else render(); lastToday = t; }
  });

  render();
  if (!state.role) $("welcomeDialog").showModal();
})();

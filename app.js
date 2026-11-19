(function () {
  "use strict";

  const KEY = "dailyDevotion.v1";
  const TOTAL = PLAN.days.length;

  const defaults = () => ({
    mode: "personal",
    day: 1,
    version: { personal: "ESV", family: "NIrV" },
    done: { personal: {}, family: {} },
    notes: { personal: {}, family: {} }
  });

  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY));
      if (!raw) return defaults();
      const d = defaults();
      return {
        mode: raw.mode === "family" ? "family" : "personal",
        day: clampDay(raw.day),
        version: Object.assign(d.version, raw.version),
        done: { personal: Object.assign({}, raw.done && raw.done.personal), family: Object.assign({}, raw.done && raw.done.family) },
        notes: { personal: Object.assign({}, raw.notes && raw.notes.personal), family: Object.assign({}, raw.notes && raw.notes.family) }
      };
    } catch (e) {
      return defaults();
    }
  }

  function clampDay(n) {
    n = parseInt(n, 10);
    return n >= 1 && n <= TOTAL ? n : 1;
  }

  let state = load();
  const save = () => localStorage.setItem(KEY, JSON.stringify(state));

  // Small DOM helper: el("p", {class: "x"}, "text" | Node | [children])
  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (k === "class") node.className = v;
      else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v);
    }
    [].concat(children == null ? [] : children).forEach(c =>
      node.append(c instanceof Node ? c : document.createTextNode(c)));
    return node;
  }

  const $ = id => document.getElementById(id);
  const dayData = () => PLAN.days[state.day - 1];
  const weekData = w => PLAN.weeks.find(x => x.week === w);

  function passageLink(ref) {
    const url = "https://www.biblegateway.com/passage/?search=" +
      encodeURIComponent(ref) + "&version=" + encodeURIComponent(state.version[state.mode]);
    return el("a", { href: url, target: "_blank", rel: "noopener" }, ref + " (" + state.version[state.mode] + ")");
  }

  function notesBox(label, placeholder) {
    const status = el("div", { class: "saved", "aria-live": "polite" });
    const ta = el("textarea", { "aria-label": label, placeholder: placeholder });
    ta.value = state.notes[state.mode][state.day] || "";
    let t;
    ta.addEventListener("input", () => {
      clearTimeout(t);
      t = setTimeout(() => {
        const v = ta.value;
        if (v.trim()) state.notes[state.mode][state.day] = v;
        else delete state.notes[state.mode][state.day];
        save();
        status.textContent = "Saved";
        setTimeout(() => { status.textContent = ""; }, 1200);
      }, 400);
    });
    return [el("h3", {}, label), ta, status];
  }

  function completeButton() {
    const isDone = !!state.done[state.mode][state.day];
    return el("button", {
      type: "button",
      class: "complete" + (isDone ? " is-done" : ""),
      onclick: () => {
        if (isDone) delete state.done[state.mode][state.day];
        else state.done[state.mode][state.day] = new Date().toISOString().slice(0, 10);
        if (!isDone && state.day < TOTAL) state.day += 1;
        save();
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, isDone ? "✓ Completed " + state.done[state.mode][state.day] + " (tap to undo)" : "Mark complete & go to next day");
  }

  function renderPersonal(d) {
    const p = d.personal;
    return [
      el("h2", {}, d.title),
      el("p", { class: "passage" }, ["Read: ", passageLink(d.passage)]),
      el("p", { class: "muted" }, "Read the whole passage slowly before the reflection. Read it twice if you can."),
      el("h3", {}, "Reflection"),
      ...p.reflection.map(t => el("p", {}, t)),
      el("h3", {}, "Ask yourself"),
      el("ol", { class: "q" }, p.questions.map(q => el("li", {}, q))),
      el("h3", {}, "Pray"),
      el("p", {}, p.prayer),
      ...notesBox("Journal", "What is God showing you? What will you do about it today?"),
      completeButton()
    ];
  }

  function renderFamily(d) {
    const f = d.family;
    const mv = weekData(d.week).memoryVerse;
    return [
      el("h2", {}, d.title),
      el("p", { class: "passage" }, ["From ", passageLink(d.passage)]),
      el("p", { class: "muted" }, "Read the story aloud, or read the passage from a kids' Bible. Open with a short prayer."),
      el("h3", {}, "The story"),
      ...f.story.map(t => el("p", {}, t)),
      el("h3", {}, "Memory verse (this week)"),
      el("blockquote", { class: "verse" }, [mv.text, el("cite", {}, mv.ref + " (WEB)")]),
      el("h3", {}, "Talk about it"),
      el("ul", { class: "q" }, [
        el("li", {}, [el("span", { class: "tier" }, "Little ones"), f.questions.little]),
        el("li", {}, [el("span", { class: "tier" }, "Older kids"), f.questions.older]),
        el("li", {}, [el("span", { class: "tier" }, "Mom & Dad answer"), f.questions.parents])
      ]),
      el("h3", {}, "Do it together"),
      el("p", {}, f.activity),
      el("h3", {}, "Close in prayer"),
      el("p", { class: "muted" }, "Let each person pray one sentence, even the youngest."),
      ...notesBox("Family notes", "What did the boys say? Prayer requests to remember?"),
      completeButton()
    ];
  }

  function render() {
    const d = dayData();
    document.body.classList.toggle("family", state.mode === "family");
    document.querySelectorAll(".toggle button").forEach(b =>
      b.setAttribute("aria-pressed", String(b.dataset.mode === state.mode)));

    $("dayTitle").textContent = "Day " + d.day + " of " + TOTAL;
    $("weekTitle").textContent = "Week " + d.week + ": " + weekData(d.week).theme;
    $("prev").disabled = state.day <= 1;
    $("next").disabled = state.day >= TOTAL;
    $("version").value = state.version[state.mode];

    const dots = $("dots");
    dots.replaceChildren(...PLAN.days.map(x => el("button", {
      type: "button",
      class: (state.done[state.mode][x.day] ? "done " : "") + (x.day === state.day ? "current" : ""),
      "aria-label": "Day " + x.day + (state.done[state.mode][x.day] ? ", completed" : ""),
      onclick: () => { state.day = x.day; save(); render(); }
    }, String(x.day))));

    $("devotion").replaceChildren(...(state.mode === "personal" ? renderPersonal(d) : renderFamily(d)));
  }

  // ── wiring ──
  document.querySelectorAll(".toggle button").forEach(b =>
    b.addEventListener("click", () => { state.mode = b.dataset.mode; save(); render(); }));
  $("prev").addEventListener("click", () => { state.day = clampDay(state.day - 1); save(); render(); });
  $("next").addEventListener("click", () => { state.day = clampDay(state.day + 1); save(); render(); });
  $("version").addEventListener("change", e => { state.version[state.mode] = e.target.value; save(); render(); });

  $("export").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const a = el("a", { href: URL.createObjectURL(blob), download: "daily-devotion-backup-" + new Date().toISOString().slice(0, 10) + ".json" });
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  $("import").addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;
    file.text().then(text => {
      JSON.parse(text); // validate before overwriting
      if (!confirm("Replace all current progress and notes with this backup?")) return;
      localStorage.setItem(KEY, text);
      state = load(); save(); render();
    }).catch(() => alert("That file isn't a valid backup."))
      .finally(() => { e.target.value = ""; });
  });

  $("reset").addEventListener("click", () => {
    if (!confirm("Erase all progress and notes in both modes? Export a backup first if you want to keep them.")) return;
    state = defaults(); save(); render();
  });

  render();
})();

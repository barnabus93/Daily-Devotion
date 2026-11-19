(function () {
  "use strict";

  const KEY = "dailyDevotion.v1";
  const TOTAL = PLAN.days.length;

  const defaults = () => ({
    mode: "personal",
    day: 1,
    slide: 0,
    childName: "",
    version: { personal: "ESV", family: "NIrV" },
    done: { personal: {}, family: {} },
    notes: { personal: {}, family: {} }
  });

  function clampDay(n) {
    n = parseInt(n, 10);
    return n >= 1 && n <= TOTAL ? n : 1;
  }

  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY));
      if (!raw || typeof raw !== "object") return defaults();
      const d = defaults();
      const obj = (x) => (x && typeof x === "object" ? x : {});
      return {
        mode: raw.mode === "family" ? "family" : "personal",
        day: clampDay(raw.day),
        slide: Number.isInteger(raw.slide) && raw.slide >= 0 ? raw.slide : 0,
        childName: typeof raw.childName === "string" ? raw.childName.slice(0, 30) : "",
        version: Object.assign(d.version, obj(raw.version)),
        done: { personal: { ...obj(obj(raw.done).personal) }, family: { ...obj(obj(raw.done).family) } },
        notes: { personal: { ...obj(obj(raw.notes).personal) }, family: { ...obj(obj(raw.notes).family) } }
      };
    } catch (e) {
      return defaults();
    }
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

  function setDay(n) {
    state.day = clampDay(n);
    state.slide = 0;
    save();
    render();
  }

  function passageLink(ref) {
    const v = state.version[state.mode];
    const url = "https://www.biblegateway.com/passage/?search=" +
      encodeURIComponent(ref) + "&version=" + encodeURIComponent(v);
    return el("a", { href: url, target: "_blank", rel: "noopener" }, ref + " (" + v + ")");
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
        if (isDone) {
          delete state.done[state.mode][state.day];
          save();
          render();
          return;
        }
        state.done[state.mode][state.day] = new Date().toISOString().slice(0, 10);
        if (state.day < TOTAL) setDay(state.day + 1); else { save(); render(); }
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, isDone ? "✓ Completed " + state.done[state.mode][state.day] + " (tap to undo)" : "Mark complete & go to next day");
  }

  // ── Personal: one scrolling page ──
  function renderPersonal(d) {
    const p = d.personal;
    return el("article", { class: "card" }, [
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
    ]);
  }

  // ── Family: slides sized for the TV ──
  function familySlides(d) {
    const f = FAMILY[d.day];
    const mv = weekData(d.week).memoryVerse;
    const name = state.childName.trim();
    const n = f.story.length;

    return [
      [
        el("div", { class: "big-icon", "aria-hidden": "true" }, f.icon),
        el("h2", {}, d.title),
        el("p", { class: "passage" }, ["From ", passageLink(d.passage)]),
        el("p", { class: "hint" }, "Get cozy, and start with a short prayer.")
      ],
      ...f.story.map((t, i) => [
        el("div", { class: "slide-label" }, "The Story · " + (i + 1) + " of " + n),
        el("p", {}, t)
      ]),
      [
        el("div", { class: "slide-label" }, "Memory Verse"),
        el("p", { class: "verse-text" }, "“" + mv.text + "”"),
        el("p", { class: "verse-ref" }, mv.ref),
        el("p", { class: "hint" }, "Say it together three times. Add hand motions!")
      ],
      [
        el("div", { class: "slide-label" }, name ? "Your turn, " + name + "!" : "Your turn!"),
        el("ul", { class: "qlist" }, f.ask.map(q => el("li", {}, q)))
      ],
      [
        el("div", { class: "slide-label" }, "Mom & Dad Share"),
        el("p", {}, f.parents)
      ],
      [
        el("div", { class: "slide-label" }, "Let's Do It!"),
        el("p", {}, f.activity)
      ],
      [
        el("div", { class: "slide-label" }, "Let's Pray"),
        el("p", {}, (name || "Everyone") + " prays one sentence, then pray a blessing over the baby together."),
        el("div", { class: "finish" }, [...notesBox("Family notes", "What did he say? Prayer requests to remember?"), completeButton()])
      ]
    ];
  }

  function renderFamily(d) {
    const slides = familySlides(d);
    const last = slides.length - 1;
    if (state.slide > last) state.slide = last;
    const i = state.slide;

    const go = (to) => { state.slide = Math.max(0, Math.min(last, to)); save(); render(); };
    const slide = el("section", { class: "slide", "aria-live": "polite" }, slides[i]);

    // Swipe left/right on touch screens
    let x0 = null;
    slide.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
    slide.addEventListener("touchend", e => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      x0 = null;
      if (Math.abs(dx) > 60) go(i + (dx < 0 ? 1 : -1));
    });

    const nav = el("div", { class: "slidenav" }, [
      el("button", { type: "button", onclick: () => go(i - 1), ...(i === 0 ? { disabled: "" } : {}) }, "‹ Back"),
      el("div", { class: "progress", "aria-label": "Step " + (i + 1) + " of " + slides.length },
        slides.map((_, k) => el("span", { class: k <= i ? "on" : "" }))),
      el("button", { type: "button", class: "primary", onclick: () => go(i + 1), ...(i === last ? { disabled: "" } : {}) }, "Next ›")
    ]);
    return [slide, nav];
  }

  function render() {
    const d = dayData();
    const family = state.mode === "family";
    document.body.classList.toggle("family", family);
    document.querySelectorAll(".toggle button").forEach(b =>
      b.setAttribute("aria-pressed", String(b.dataset.mode === state.mode)));

    $("dayTitle").textContent = "Day " + d.day + " of " + TOTAL;
    $("weekTitle").textContent = "Week " + d.week + ": " + weekData(d.week).theme;
    $("prev").disabled = state.day <= 1;
    $("next").disabled = state.day >= TOTAL;
    $("version").value = state.version[state.mode];
    if (document.activeElement !== $("childName")) $("childName").value = state.childName;

    $("dots").replaceChildren(...PLAN.days.map(x => el("button", {
      type: "button",
      class: (state.done[state.mode][x.day] ? "done " : "") + (x.day === state.day ? "current" : ""),
      "aria-label": "Day " + x.day + (state.done[state.mode][x.day] ? ", completed" : ""),
      onclick: () => setDay(x.day)
    }, String(x.day))));

    const content = family ? renderFamily(d) : [renderPersonal(d)];
    $("devotion").replaceChildren(...content);
  }

  // ── wiring ──
  document.querySelectorAll(".toggle button").forEach(b =>
    b.addEventListener("click", () => { state.mode = b.dataset.mode; state.slide = 0; save(); render(); }));
  $("prev").addEventListener("click", () => setDay(state.day - 1));
  $("next").addEventListener("click", () => setDay(state.day + 1));
  $("version").addEventListener("change", e => { state.version[state.mode] = e.target.value; save(); render(); });
  $("childName").addEventListener("input", e => { state.childName = e.target.value.slice(0, 30); save(); render(); });

  // Arrow keys / space step through family slides (useful with a laptop or keyboard while casting)
  document.addEventListener("keydown", e => {
    if (state.mode !== "family" || e.altKey || e.ctrlKey || e.metaKey) return;
    if (e.target.closest("textarea, input, select")) return;
    const fwd = ["ArrowRight", "PageDown", " "].includes(e.key);
    const back = ["ArrowLeft", "PageUp"].includes(e.key);
    if (!fwd && !back) return;
    e.preventDefault();
    const btn = document.querySelectorAll(".slidenav button")[fwd ? 1 : 0];
    if (btn && !btn.disabled) btn.click();
  });

  const fsBtn = $("fullscreen");
  if (!document.fullscreenEnabled) fsBtn.hidden = true;
  fsBtn.addEventListener("click", () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen().catch(() => {});
  });

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

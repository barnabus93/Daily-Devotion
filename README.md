# Daily Devotion

A two-part daily Christian devotional. It's a static site (HTML, CSS, vanilla JS) with no build step, ready to drop onto Netlify.

- **My Study**: a personal devotional for a dad or a mom (pick on first run, or change anytime in ⚙️ Settings), in four steps:
  1. **The Read** (observation): the NIV passage with tap-to-highlight verses, background notes, and a summary box
  2. **The Reveal** (understanding): *God's Character & Grace* and *Human Nature & Warning* prompts
  3. **The Reality Check**: how the truth meets your role at home today, with separate Dad and Mom prompts, plus one concrete action
  4. **The Response**: a written prayer, then **Complete Personal Study** (timestamped)
- **Family Table**: the same passage as four tap-through cards for about 10–15 minutes with young kids (about 4–8):
  1. **Big Idea** (2 min)
  2. **Action Read** (4 min): key verses, a *Listening Word* and a big tap counter (with "How many were there?" reveal)
  3. **Two Table Questions** (5 min): one for the kids (with an answer hint for parents; add their names in Settings), one for the whole family
  4. **Repeat-After-Me Prayer** (2 min) + **Gratitude Check** → **Complete Family Devotional**

Also included: daily streaks (📖 study, 🏡 family), a past-entries archive, night mode, optional per-card timers, full screen for casting to a TV (layouts fit landscape and portrait), Markdown journal export (download or copy), and JSON backup/restore.

## Sharing with other parents
Send them the Netlify link. Each person's journal, streaks and settings live only in their own browser, so nothing one parent writes is visible to anyone else, and there are no accounts. On first open, the app asks whether they're a Dad or a Mom and (optionally) their kids' names.

## Deploy
Netlify: point it at this repo (publish directory `.`; `netlify.toml` is included) or drag the folder into Netlify Drop. Locally, just open `index.html`.

## Storage
Everything is saved in the browser's `localStorage`. It does not sync between devices, and clearing site data erases it. Use **⚙️ → Export backup** regularly, and **Download/Copy Markdown** to move reflections into your notes.

## Content: `devotions-data.js`
`devotionsData` is a plain array, one object per day. The app moves through it by date from the **plan start date** (⚙️ Settings) and starts over at the end. A day you've journaled stays pinned to the passage you used. To add a week, copy an entry, give it the next `id`, and fill it in:

| Field | Purpose |
|---|---|
| `title`, `reference` | Shown at the top of both tabs |
| `passage` | `[{ ref: "2:20", text: "…" }]`: NIV text, word for word |
| `personal.context / grace / warning / prayerStarter` | Background and the step 2 and 4 prompts |
| `personal.reality.dad`, `personal.reality.mom` | The step 3 Reality Check prompt for each role |
| `family.bigIdea` | 1–2 sentences, faithful to the context, for young kids |
| `family.keyVerses` | 2–4 refs from `passage` for the Action Read card |
| `family.listeningWord`, `listenFor`, `listenAction`, `readTimes` | The listening game; the expected count is computed from `listenFor` |
| `family.question1`, `question1Hint`, `question2` | Table questions |
| `family.prayer` | 3–4 short repeat-after-me lines |

### Scripture (NIV)
All passage text in the starter week was checked word for word against the NIV on BibleGateway, including LORD in capitals where the NIV uses small caps. Biblica allows quoting up to 500 NIV verses without written permission, provided they aren't a complete book and are under 25% of the work's text, and the copyright notice (already in the footer) is shown. Keep that limit in mind as you add weeks to a public site.

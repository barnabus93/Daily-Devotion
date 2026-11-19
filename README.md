# Daily Devotion

A static daily devotional with two modes:

- **Personal**: a passage to read, a short reflection, two questions, a prayer and a private journal. It's a single scrolling page.
- **Family**: full-screen slides meant to be cast to the TV. A title with a big picture, the story one short paragraph at a time, the weekly memory verse, two questions for your child, one for Mom & Dad, an activity, then prayer and notes. Written for a 5-year-old.

Both modes use the **same passage each day**, so you can study it alone and then lead the family through it.

## Use it
Open `index.html` in a browser, or host the folder on GitHub Pages so you can open it from any device. No build step, no server, no database.

**On the TV:** cast the browser tab, switch to **Family**, and press the full-screen button (⛶). Move with **Next/Back**, the arrow keys or spacebar, or swipe on a touch screen. Text scales to the screen in both landscape and portrait.

Set your child's name under **Settings & backup** so questions say "Your turn, ___!"

## Storage
Progress, notes, the current slide, mode, Bible version and your child's name are saved in `localStorage` in the browser. That means:
- Clearing site data erases them. Use **Settings & backup → Export backup** now and then.
- Data does not sync between devices or browsers.

## Content
- `content.js`: the shared plan (weeks, themes, memory verses, passages) and the personal devotionals.
- `family.js`: the family slides, keyed by day. Rewrite this file as the kids grow. `content.js` doesn't need to change.

There are 14 days so far: Week 1 "Who Is Jesus?" and Week 2 "Trusting God When It's Hard". Passages link to BibleGateway in the version you choose. Memory verses are quoted from the World English Bible (public domain).

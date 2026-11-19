# Daily Devotion

A static, offline-friendly daily devotional with two modes:

- **Personal**: a passage to read, a short reflection, two questions, a prayer and a private journal.
- **Family**: the same passage retold as a story, a weekly memory verse, three levels of questions (little ones / older kids / Mom & Dad), an activity and family notes.

Both modes use the **same passage each day**, so you can study it alone and then lead the family through it.

## Use it
Open `index.html` in a browser (or host the folder on GitHub Pages). No build step, no server, no database.

## Storage
Progress, notes, the current mode and Bible version are saved in `localStorage` in the browser. That means:
- Clearing site data erases them. Use **Settings & backup → Export backup** now and then.
- Data does not sync between devices or browsers.

## Content
The plan lives in `content.js` (14 days so far: Week 1 "Who Is Jesus?", Week 2 "Trusting God When It's Hard"). Add days and weeks following the same shape. Passages link to BibleGateway in the version you choose. Memory verses are quoted from the World English Bible (public domain).

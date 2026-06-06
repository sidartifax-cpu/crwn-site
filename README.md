# CRWN — Official Website

**Poet. Performer. Storyteller. Curator.**

---

## 🚀 Getting Started (No Coding Required)

### How to open locally
Just double-click `index.html` — it opens in any browser.
> ⚠️ Audio previews require a live server. Use [VS Code Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) or deploy to GitHub Pages.

---

## 📁 Folder Structure

```
crwn-site/
│
├── index.html              ← Main page (edit text + image paths here)
│
├── css/
│   └── player.css          ← Music player styles (don't edit)
│
├── js/
│   ├── songs.js            ← ✏️  ADD / EDIT SONGS HERE
│   └── player.js           ← Player engine (don't edit)
│
└── assets/
    ├── images/             ← Drop all images here
    │   ├── crwn-logo.png       ← Nav + footer logo
    │   ├── hero-bg.png         ← Hero background
    │   ├── hero-artist.png     ← Artist photo (center hero)
    │   ├── featured-work.jpg   ← Featured Work section image
    │   ├── o-section.png       ← Torn paper "O" banner
    │   ├── album-cover.jpg     ← Elevationships album cover
    │   ├── btn-gold.png        ← Gold brushstroke button texture
    │   ├── btn-purple.png      ← Purple brushstroke button texture
    │   ├── btn-black.png       ← Black brushstroke button texture
    │   └── og-image.jpg        ← Social share image (1200x630px)
    │
    └── audio/              ← Drop all .mp3 files here
        ├── song-01.mp3
        ├── song-02.mp3
        └── ... (up to song-10.mp3)
```

---

## 🎵 How to Add / Change Songs

Open `js/songs.js` — everything is labeled clearly.

```js
{
  id: 1,
  title: "Your Song Title",       // ← Change this
  album: "Elevationships",        // ← Change this
  duration: "3:24",               // ← Change this (display only)
  audioSrc: "assets/audio/song-01.mp3",    // ← Drop mp3 here
  coverArt: "assets/images/album-cover.jpg", // ← Cover image
  purchaseUrl: "https://yourstore.com/song", // ← Buy link
  purchaseLabel: "Buy Track — $1.29",        // ← Button text
  previewStart: 0  // ← Start preview at this second (0 = beginning)
}
```

**Steps:**
1. Drop your `.mp3` into `assets/audio/`
2. Name it `song-01.mp3`, `song-02.mp3`, etc.
3. Open `js/songs.js` and fill in the title, duration, purchase URL
4. Save and refresh

---

## 🖼️ How to Change Images

### Method 1 — Same filename (easiest)
Replace the file in `assets/images/` with the same name.
Example: Replace `hero-bg.jpg` with your new background — same name, done.

### Method 2 — New filename
1. Drop your new image into `assets/images/`
2. Open `index.html`
3. Search (`Ctrl+F`) for the old filename
4. Replace it with your new filename

Every image in `index.html` has a comment above it:
```html
<!-- CHANGE IMAGE: Hero background — replace hero-bg.jpg in assets/images/ -->
<img src="assets/images/hero-bg.jpg" alt="...">
```

---

## ✏️ How to Change Text

Open `index.html` and search (`Ctrl+F`) for:
- `<!-- CHANGE TEXT:` — to find editable text
- `<!-- CHANGE LINK:` — to find editable links
- `<!-- CHANGE IMAGE:` — to find editable images

---

## 🔗 How to Change Links

Search `index.html` for `<!-- CHANGE LINK:` — each one has a comment.

**Social links** are near the top (search `social-bar`):
```html
<a href="https://instagram.com/YOURHANDLE" ...>
```

**Show ticket links** — search for `sf-tix`:
```html
<a href="https://earbystudios.com" class="sf-tix">
```

---

## 🛒 How to Set Up Purchase Links

In `js/songs.js`, each song has a `purchaseUrl`:
```js
purchaseUrl: "https://yourstore.com/track-name"
```

Set this to any URL:
- Your own Shopify/WooCommerce product page
- Gumroad link
- Bandcamp track
- Any payment link

The player shows a purchase button that opens this URL.

---

## 🌐 Deploy to GitHub Pages (Free)

1. Create a free account at [github.com](https://github.com)
2. Click **New Repository** — name it `crwn-site` (or anything)
3. Upload all files (drag and drop the whole folder)
4. Go to **Settings → Pages**
5. Under *Branch*, select `main` → click **Save**
6. Your site is live at: `https://yourusername.github.io/crwn-site`

> 🎵 **Audio note:** GitHub Pages serves files correctly for audio.
> Just make sure your `.mp3` files are in `assets/audio/` before pushing.

---

## ⌨️ Player Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` | Play / Pause |
| `→` | Next track |
| `←` | Previous track |
| `Esc` | Close player |

---

## 🎛️ Player Settings (js/songs.js)

```js
const PLAYER_CONFIG = {
  previewDuration: 45,     // Change preview length (seconds)
  autoPlayNext: false,     // Auto-play next song after preview
  showPreviewBadge: true,  // Show "45-Sec Preview" badge
  albumTitle: "Elevationships",
  artistName: "CRWN",
};
```

---

## 📞 Need Help?

Every editable section in `index.html` is marked with comments.
The only files you need to edit are:
- `index.html` — images, text, links
- `js/songs.js` — all song data

Everything else runs automatically.

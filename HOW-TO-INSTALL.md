# MenthorQ Level Importer — iPhone (home-screen app)

This folder IS the app. It runs entirely in Safari on your phone: the screenshot never
leaves the device, and after the first open it works offline. No App Store, no developer
account, no Xcode.

## Put it online (one time, ~5 minutes, free)

Safari only installs home-screen apps from an https:// address, so the folder needs a host.
GitHub Pages is free and permanent.

1. Go to github.com → New repository → name it `menthorq-importer` → Public → Create.
2. Upload every file in this folder (drag the whole folder contents onto the repo page →
   "Add file → Upload files"). Keep the folder structure: `assets/` and `tesseract/` must
   stay as folders. Commit.
3. Repo → Settings → Pages → Source: "Deploy from a branch" → Branch: main, folder: / (root)
   → Save. Wait a minute.
4. Your app is at `https://<your-username>.github.io/menthorq-importer/`

If you'd rather not use GitHub: Netlify Drop (drop the folder, get a link) works the same
way and is also free.

## Install on the iPhone

1. Open that address in **Safari** (not Chrome — iOS only installs from Safari).
2. Tap the Share button → **Add to Home Screen** → Add.
3. Open it from the home screen. It runs full-screen with its own icon.

The first open downloads the OCR engine (~12 MB) and caches it. After that it's offline.

## Using it on the phone

- **Choose images** opens Photos — pick the EOD and Intraday screenshots together.
- **Paste image** reads an image you copied (long-press a screenshot → Copy). Safari will
  ask permission the first time.
- **Copy EOD / Copy Intraday** puts the level rows on the clipboard. Then open TradingView,
  edit the indicator, and paste into the Levels box.

Expect 30–60 seconds per screenshot on a phone; the OCR runs three passes per price chip.
A newer iPhone is faster.

## Updating

Upload the new folder contents over the old ones and commit. The phone picks it up on the
next open (the service worker replaces its cache).

## What's inside

- `index.html`, `assets/` — the app (same build as the desktop 1.3.4, no desktop code)
- `tesseract/` — the OCR engine (SIMD build for modern iPhones, plain build as fallback)
- `manifest.webmanifest`, icons, `sw.js`, `register-sw.js` — home-screen and offline support

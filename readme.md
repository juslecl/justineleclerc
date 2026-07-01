# Your Name — Academic Website

A simple, colorful, tabbed personal site (General / Publications / Talks / Teaching / Hobbies), built with plain HTML/CSS/JS — no build step needed.

## Structure

```
.
├── index.html       # page structure & content — edit your text here
├── css/
│   └── style.css    # colors, fonts, layout
├── js/
│   └── main.js       # tab-switching behavior
└── images/
    └── (put your photo here)
```

## Editing your content

1. Open `index.html` and search for `EDIT ME` — replace each one with your own text, dates, and links.
2. **Photo:** add your image file to `images/` (e.g. `images/photo.jpg`), then in `index.html` replace:
   ```html
   <div class="avatar">YN</div>
   ```
   with:
   ```html
   <div class="avatar"><img src="images/photo.jpg" alt="Your Name"></div>
   ```
3. **More entries:** duplicate the `.pub-item`, `.talk-item`, `.teach-card`, or `.hobby-card` blocks in `index.html` to add publications, talks, courses, or hobbies.
4. **Colors:** open `css/style.css` and edit the hex values at the top under `:root` (`--c-general`, `--c-pub`, `--c-talks`, `--c-teach`, `--c-hobby`) to re-theme the whole site at once.

## Publishing on GitHub Pages

1. Create a new repository on GitHub (e.g. `yourusername.github.io` for a root site, or any name for a project site).
2. Push all files in this folder to the repo, keeping the folder structure intact.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select the `main` branch and `/ (root)`, then save.
5. Your site will be live at `https://yourusername.github.io/` (or `https://yourusername.github.io/repo-name/` for a project repo) within a minute or two.

## Local preview

Just open `index.html` in a browser — no server required. (If fonts don't load, make sure you have an internet connection, since they're pulled from Google Fonts.)

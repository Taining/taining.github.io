# TaiNing Wang — Static Academic Homepage (GitHub Pages)

This is a **pure static HTML/CSS/JS** site (no build step). It works on GitHub Pages immediately.

## 1) Quick deploy on GitHub Pages
1. Create a new GitHub repository, e.g. `tainingw.github.io` (recommended) or any repo name.
2. Upload these files to the repo root.
3. GitHub repo → **Settings** → **Pages**
   - Source: *Deploy from a branch*
   - Branch: `main` (or `master`) / root
4. Your site will appear at:
   - `https://<username>.github.io/` for the `tainingw.github.io` repo
   - or `https://<username>.github.io/<repo>/` for other repos

## 2) Customize the site
Open these files and replace placeholders:
- `YOUR_EMAIL@luc.edu`
- `YOUR_GOOGLE_SCHOLAR_URL`
- `YOUR_DBLP_URL`
- `YOUR_GITHUB_URL`
- `YOUR_CV_PDF_URL`

Update content:
- `index.html`: About, news, selected publications
- `publications.html`: Full publication list
- `research.html`, `teaching.html`, `service.html`

## 3) Add a custom domain (optional)
If you want to use `tainingw.com` with GitHub Pages:
1. GitHub Pages settings → Custom domain: `www.tainingw.com`
2. Create a `CNAME` record in your domain DNS to `<username>.github.io`
3. (Optional) Add a `CNAME` file in repo root containing: `www.tainingw.com`

## 4) Upgrade path (optional): auto publications from BibTeX
If later you want an auto-generated publications list (from `.bib`, Scholar, or DBLP),
I can set up a Jekyll/Hugo version that generates publications automatically.

---
Generated: 2026-02-18


## Populated content
This version was populated from the public content on https://sites.google.com/view/tainingwang/ (your current tainingw.com homepage).

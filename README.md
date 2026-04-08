# Phat Pham Portfolio (Next.js 15)

A modern, responsive portfolio focused on Data Engineering internship applications.

## Why `tienphat.me` may show blank initially

This project uses Next.js App Router, so GitHub Pages cannot serve source files directly.
It must first run a static export build (`out/`) and deploy that build artifact.

## Folder structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── CNAME
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── public/
├── README.md
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── HeroSection.tsx
│   │   └── ProjectCard.tsx
│   └── data/
│       └── projects.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Deployment (GitHub Pages + custom domain)

1. Push this repo to GitHub.
2. In **Settings → Pages**, set **Source = GitHub Actions**.
3. Ensure DNS for `tienphat.me` points to GitHub Pages correctly.
4. The workflow `.github/workflows/deploy-pages.yml` will build and deploy automatically.

## Run locally

```bash
npm install
npm run dev
```

## Quick production fallback

If GitHub Pages is still configured to serve from the repository root, `index.html` + `styles.css` now provide a direct static portfolio page so `https://tienphat.me` still renders correctly.

# Phat Pham Portfolio

Modern, minimal, dark-mode portfolio for **Phat Pham (Phạm Tiến Phát)**, tailored for **Data Engineering Intern** and **Junior Data Engineer** applications.

## 1. Clone the repository

If your current folder already has its own `.git` history, clone this site into a fresh folder first:

```powershell
cd C:\Users\ADMIN\Documents
git clone https://github.com/tapheret2/tapheret2.github.io.git
cd tapheret2.github.io
```

## 2. Recommended folder structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── scripts/
│   └── build.mjs
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── phat-pham.jpg
│   ├── index.html
│   └── input.css
├── CNAME
├── package.json
└── README.md
```

## 3. Set up and run locally

Install dependencies and start the live preview server:

```powershell
npm install
npm run dev
```

Local preview runs at `http://127.0.0.1:3000`.

To create the production-ready GitHub Pages build:

```powershell
npm run build
```

## 4. Hero section

The complete Hero section is implemented in `src/index.html`. It includes:

- Attached portrait photo
- Bilingual name presentation
- Target role positioning
- Professional summary
- GitHub, LinkedIn, and Kaggle calls to action
- Data engineering specialty pills

## 5. About section

The complete About section is also in `src/index.html`, with copy focused on:

- Pipeline thinking
- Data cleaning and ETL
- Analytics-ready datasets
- Practical project delivery

It includes the three requested support cards:

- `Pipeline Thinking`
- `Analytics Foundation`
- `Practical Delivery`

## 6. Skills section

The Skills section is in `src/index.html` and uses responsive glass cards with inline SVG icons. It is grouped into:

- `Languages & Querying`
- `Data Engineering`
- `Analytics & ML`
- `Tools & Workflow`

## 7. ProjectCard example

The reusable ProjectCard pattern is implemented directly in `src/index.html` under the `Featured Projects` section.

The first card uses **Event Analytics Pipeline** as the example pattern, and the same structure is reused for:

- Gold Price Forecast
- SME Management System
- Kickstarter DApp Contract
- Kaggle Projects

## 8. Commit and push to update https://tienphat.me

After reviewing the site locally, push it to GitHub:

```powershell
git add .
git commit -m "Create static portfolio for Phat Pham"
git push origin main
```

Then:

1. Open the **Actions** tab on GitHub and confirm the Pages workflow succeeds.
2. Visit `https://tienphat.me`.
3. Hard refresh the page if the old build is still cached.

## Notes

- `CNAME` keeps the custom domain mapped to `tienphat.me`.
- GitHub Pages deploys the generated `out/` folder through `.github/workflows/deploy-pages.yml`.
- `src/output.css` is generated so the site still works if GitHub Pages is temporarily serving the repository root.
- If `https://tienphat.me` shows the README instead of the portfolio, go to `Settings > Pages > Build and deployment > Source` and switch it to `GitHub Actions`.

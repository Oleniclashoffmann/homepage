# olehoffmann.ml

Personal homepage, built with [Astro](https://astro.build) and deployed to GitHub Pages at
https://olehoffmann.ml.

## Edit
- `src/data/profile.ts` — name, About text, links, Education/Industry timelines, papers.
  Timeline entries support `period`, `bullets`, nested `children` and a `logo`.
- `public/img/logos/` — institution and company logos; `public/img/papers/` — paper teaser figures
- `src/content/blog/*.md` — blog posts; the Posts box appears once the first post has `draft: false`
- `src/content/projects/*.md` — project pages; the Projects box appears once the first project has `draft: false`

Both content folders contain a hidden example (`draft: true`) to copy from.

## Run locally
```bash
npm install
npm run dev      # http://localhost:4321
```

## Deploy
Every push to `main` builds and deploys the site via `.github/workflows/deploy.yml`.
`public/CNAME` holds the custom domain.

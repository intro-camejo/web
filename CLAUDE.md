# Docusaurus Educational Website

Website for "Introduccion al Desarrollo de Software" (Camejo) - FIUBA.
Built with Docusaurus v3.10, React 19, TypeScript 5.9.

- Production: https://www.intro-camejo.com.ar
- Repo: https://github.com/intro-camejo/web

## Setup & Commands

- Node.js 24.19.0 LTS + npm 11 required (pinned in `.nvmrc`, enforced via `engines` + `engine-strict`)
  - `nvm use` picks up the pinned version
- `npm install` - Install dependencies (~15 s warm, 60+ s cold, never cancel)
- `npm run start` - Dev server at http://localhost:3000/ (15+ sec initial compile)
- `npm run build` - Production build (~35 sec)
- `npm run serve` - Serve production build (requires build first)
- `npm run typecheck` - TypeScript check (passes clean)
- `npm run audit` - Fail on high/critical advisories

`.npmrc` sets `ignore-scripts=true`, so dependency lifecycle scripts do not run on
install. No current dependency needs them. If one ever does, run it explicitly with
`npm install --ignore-scripts=false --foreground-scripts` rather than removing the setting.

## Project Structure

```
src/
  pages/           # Custom pages: index.tsx, cronograma.mdx, regimen-cursada.md,
                   # trabajos-practicos.md, markdown-page.md
  components/      # React components: HomepageFeatures, Cronograma
  data/            # cronograma.json, docentes.json
  css/             # Global CSS (custom.css)
docs/
  Material/        # Course docs: Apuntes, Guias, Clases
static/
  img/             # Static images
  files/           # Downloadable files
  admin/           # Decap CMS admin panel (index.html, config is inline)
.github/workflows/ # deploy.yml - publishes a redirect stub to GitHub Pages
```

### Key Config Files

- `docusaurus.config.js` - Site config (title, navbar, footer, prism themes)
- `sidebars.js` - Auto-generated sidebar from docs/ folder structure
- `static/admin/index.html` - Decap CMS config (inline in `CMS.init`, not a `config.yml`)

## Decap CMS (Admin Panel)

- Accessible at `/admin/`
- Decap CMS v3 with GitHub backend, authenticating via an OAuth proxy on Railway
- The page auto-detects `localhost` / `127.0.0.1` and switches to the local proxy
  backend, so local testing needs no config edit - just run `npx decap-server`
  alongside `npm run start`
- Media uploads go to `static/img/`
- Commit messages follow Spanish convention: `contenido: crear/actualizar/eliminar ...`

## Content

- **Language**: All content is in Spanish (locale: `es`)
- **Docs**: Add to `docs/Material/`. Use `.md` for simple content, `.mdx` for content with React components
- **Pages**: Add to `src/pages/`

## Deployment

- `.github/workflows/deploy.yml` publishes only a **redirect page** to `gh-pages`,
  pointing at https://www.intro-camejo.com.ar. It does not build the site.
- The actual site build/deploy happens outside this repo's workflows.

## Validation

No linting or automated tests exist. Before committing:
1. `npm run build` - Must complete without errors
2. `npm run typecheck` - Must pass clean
3. `npm run start` - Verify site loads and key pages render

## Known Issues

- `npm audit` reports high-severity advisories that all trace to a single transitive
  package, `image-size` (pulled in by `@docusaurus/mdx-loader`). Every published
  version is flagged and no fix exists upstream yet. It only runs at build time
  against the repo's own images, so the practical risk here is negligible. Expect
  `npm run audit` to be non-zero until Docusaurus ships a bump.
- Content warning: broken anchors in `docs/Material/Clases/clase-bash`.
- Docker build is slow (~15 min); prefer local dev.

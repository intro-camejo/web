# Docusaurus Educational Website

Website for "Introduccion al Desarrollo de Software" (Camejo) - FIUBA.
Built with Docusaurus v3.7.0, React 19, TypeScript 5.8.

- Production: https://intro-camejo.github.io/web/
- Repo: https://github.com/intro-camejo/web

## Setup & Commands

- Node.js >= 16.14 required (v18 recommended)
- `npm install` - Install dependencies (takes 60+ seconds, never cancel)
- `npm run start` - Dev server at http://localhost:3000/web/ (15+ sec initial compile)
- `npm run build` - Production build (~38 sec)
- `npm run serve` - Serve production build (requires build first)
- `npm run typecheck` - TypeScript check (known JSX namespace failures, non-blocking)

## Project Structure

```
src/
  pages/           # Custom pages (.md, .mdx, .tsx): cronograma, playlist, trabajos-practicos, regimen-cursada
  components/      # React components: HomepageFeatures, Cronograma
  css/             # Global CSS (custom.css)
docs/
  Material/        # Course docs and study materials (Apuntes, Guias, Clases, Diapos)
blog/              # Blog posts (markdown/MDX)
static/
  img/             # Static images
  admin/           # Decap CMS admin panel (config.yml + index.html)
.github/workflows/ # deploy.yml - GitHub Pages deployment on push to main
```

### Key Config Files

- `docusaurus.config.js` - Site config (title, navbar, footer, prism themes)
- `sidebars.js` - Auto-generated sidebar from docs/ folder structure
- `static/admin/config.yml` - Decap CMS configuration

## Decap CMS (Admin Panel)

- Accessible at `/web/admin/` in production
- Uses Decap CMS v3 with GitHub backend, authenticating via OAuth proxy on Railway
- Manages two collections:
  - **Blog** (`blog/`): Posts with slug, title, authors, tags, and markdown body
  - **Material de Catedra** (`docs/Material/`): Nested docs with title, sidebar_label, sidebar_position, and markdown body
- Media uploads go to `static/img/`
- Commit messages follow Spanish convention: `contenido: crear/actualizar/eliminar ...`

## Content

- **Language**: All content is in Spanish (locale: `es`)
- **Docs**: Add to `docs/Material/`. Use `.md` for simple content, `.mdx` for content with React components
- **Pages**: Add to `src/pages/`
- **Blog**: Add to `blog/`

## Deployment

- GitHub Actions (`.github/workflows/deploy.yml`) auto-deploys to GitHub Pages on push to `main`
- Uses `npm ci --force` + `npm run build`, publishes `build/` to `gh-pages` branch
- Slack notification on deploy (suppress with `-silent` suffix in commit message)

## Validation

No linting or automated tests exist. Before committing:
1. `npm run build` - Must complete without errors
2. `npm run start` - Verify site loads and key pages render

## Known Issues

- TypeScript compilation has JSX namespace errors (does not prevent builds)
- npm security vulnerabilities in dependencies (mostly webpack-dev-server, not actionable)
- Docker build is very slow (~15 min); prefer local dev

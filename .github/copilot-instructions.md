# Docusaurus Educational Website

Docusaurus v3.10 educational website for "Introducción al Desarrollo de Software" at FIUBA,
built with React 19 and TypeScript 5.9.

Always reference these instructions first and fallback to search or bash commands only when you
encounter unexpected information that does not match the info here.

## Working Effectively

### Initial Setup
- Node.js 24.19.0 LTS + npm 11 are required. The version is pinned in `.nvmrc` (`nvm use`) and
  enforced by `engines` in `package.json` plus `engine-strict=true` in `.npmrc`, so installing
  under an older Node will fail outright rather than warn.
- `npm install` - Install dependencies. NEVER CANCEL: 60+ seconds cold. Set timeout to 3+ minutes.
- `.npmrc` sets `ignore-scripts=true`. Dependency lifecycle scripts do not run on install; no
  current dependency needs them.

### Build and Development
- `npm run build` - Build for production. NEVER CANCEL: ~35 seconds. Set timeout to 3+ minutes.
- `npm run start` - Dev server at http://localhost:3000/. Initial compile 15+ seconds.
- `npm run serve` - Serve the production build. Requires a successful build first.
- `npm run typecheck` - TypeScript check. Passes clean; a failure here is a real regression.
- `npm run audit` - Fails on high/critical advisories. See Known Issues for the expected baseline.

### Docker (Not Recommended)
- `docker compose up --build` - EXTREMELY SLOW: 15+ minutes. Set timeout to 30+ minutes minimum.
- Use local development instead of Docker for faster iteration.

## Validation

### Manual Testing Requirements
After making any changes, ALWAYS test these scenarios:
1. **Build Success**: `npm run build` completes without errors
2. **Types**: `npm run typecheck` passes clean
3. **Development Server**: `npm run start` and verify the site loads at http://localhost:3000/
4. **Navigation Test**: Verify these key pages load:
   - Homepage: http://localhost:3000/
   - Material: http://localhost:3000/docs/Material
   - Cronograma: http://localhost:3000/cronograma
   - Régimen de cursada: http://localhost:3000/regimen-cursada
   - Trabajos Prácticos: http://localhost:3000/trabajos-practicos
5. **Production Build**: `npm run serve` and verify the production site works

### No Linting or Testing
- This repository has NO linting configuration (no ESLint, Prettier, etc.)
- This repository has NO automated tests
- Manual validation is the only quality assurance method available

## Deployment and CI

### GitHub Actions
- `.github/workflows/deploy.yml` publishes only a **redirect stub** to the `gh-pages` branch,
  pointing at https://www.intro-camejo.com.ar. It does not install dependencies or build the site.
- The actual site build/deploy happens outside this repository's workflows.

### Build Output
- Production files are generated in the `build/` directory
- Build includes static HTML, CSS, JS, and assets

## Repository Structure

### Key Directories
```
src/
  pages/          # Custom pages (index.tsx, cronograma.mdx, regimen-cursada.md,
                  # trabajos-practicos.md, markdown-page.md)
  components/     # React components (Home, Docentes, Cronograma)
  data/           # cronograma.json, docentes.json
  css/            # Global CSS styles
docs/
  Material/       # Course materials (Apuntes, Guias, Clases)
static/           # Static assets (img/, files/, admin/)
.github/
  workflows/      # GitHub Actions
```

### Important Files
- `docusaurus.config.js` - Main Docusaurus configuration
- `sidebars.js` - Documentation sidebar configuration
- `package.json` - Dependencies, npm scripts, `engines`, dependency `overrides`
- `.npmrc` / `.nvmrc` - Install hardening and pinned Node version
- `tsconfig.json` - TypeScript configuration
- `babel.config.js` - Babel configuration for Docusaurus
- `static/admin/index.html` - Decap CMS panel; its config is inline in `CMS.init`

## Common Tasks

### Adding Content
- **New documentation**: Add files to `docs/Material/`
- **New page**: Add files to `src/pages/`
- **Custom components**: Add to `src/components/`

### Content Format
- Use `.md` for simple Markdown content
- Use `.mdx` for content that needs React components
- All content is in Spanish (locale `es`)

### Dependency Changes
- The lockfile is the source of truth. Use `npm ci` in automation, never `--force`.
- Prefer raising a version floor in `package.json` over adding an `overrides` entry.
- Existing `overrides` (`serialize-javascript`, `sockjs` > `uuid`) exist to patch transitive
  advisories with no upstream fix path. Re-check whether they are still needed after any
  Docusaurus upgrade, and drop them once they are redundant.

## Known Issues

- `npm audit` reports high-severity advisories that all trace to one transitive package,
  `image-size` (via `@docusaurus/mdx-loader`). Every published version is flagged and no upstream
  fix exists yet. It runs at build time against the repo's own images, so practical risk is
  negligible. Expect `npm run audit` to be non-zero until Docusaurus ships a bump.
- Broken anchors in `docs/Material/Clases/clase-bash` (build warning, not an error).
- `docusaurus.config.js` still uses the deprecated `onBrokenMarkdownLinks` option; it moves to
  `markdown.hooks.onBrokenMarkdownLinks` in Docusaurus v4.
- Docker build is impractically slow for development.

## Troubleshooting

1. **Build fails**: Check for syntax errors in MDX files or configuration
2. **`npm install` fails on an engines check**: You are on the wrong Node. Run `nvm use`.
3. **Development server won't start**: Ensure port 3000 is available
4. **Missing dependencies**: Run `npm install` if node_modules is missing

### When Making Changes
- ALWAYS test builds before committing: `npm run build`
- ALWAYS run `npm run typecheck`
- Test key page navigation manually
- Check browser console for any runtime errors

This repository prioritizes content and functionality over code quality tooling. Focus on ensuring
content renders correctly and the site builds successfully.

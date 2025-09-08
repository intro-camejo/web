# Docusaurus Educational Website

This is a Docusaurus v3.7.0 educational website for "Introducción al Desarrollo de Software" course at FIUBA, built with React 19.1.0 and TypeScript 5.8.3.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Initial Setup
- Ensure Node.js >= 16.14 is installed (Node.js v18+ recommended for compatibility)
- `npm install` - Install dependencies. NEVER CANCEL: Takes 60+ seconds. Set timeout to 3+ minutes.
- Ignore security vulnerabilities warnings (19 known vulnerabilities exist in dependencies)

### Build and Development
- `npm run build` - Build the website for production. NEVER CANCEL: Takes 45+ seconds. Set timeout to 3+ minutes.
- `npm run start` - Start development server at http://localhost:3000/web/. NEVER CANCEL: Initial compilation takes 15+ seconds. Set timeout to 2+ minutes.
- `npm run serve` - Serve production build at http://localhost:3000/web/. Requires successful build first.
- `npm run typecheck` - Check TypeScript types. KNOWN ISSUE: Currently fails with JSX namespace errors in 2 files. This is expected.

### Docker (Not Recommended)
- `docker compose up --build` - EXTREMELY SLOW: Takes 15+ minutes just for dependency installation. NEVER CANCEL: Set timeout to 30+ minutes minimum.
- Use local development instead of Docker for faster iteration.

## Validation

### Manual Testing Requirements
After making any changes, ALWAYS test these scenarios:
1. **Build Success**: Run `npm run build` and verify it completes without errors
2. **Development Server**: Run `npm run start` and verify site loads at http://localhost:3000/web/
3. **Navigation Test**: Verify these key pages load correctly:
   - Homepage: http://localhost:3000/web/
   - Material: http://localhost:3000/web/docs/intro
   - Blog: http://localhost:3000/web/blog
   - Cronograma: http://localhost:3000/web/cronograma
   - Trabajos Prácticos: http://localhost:3000/web/trabajos-practicos
4. **Production Build**: Run `npm run serve` and verify the production site works

### No Linting or Testing
- This repository has NO linting configuration (no ESLint, Prettier, etc.)
- This repository has NO automated tests
- Manual validation is the only quality assurance method available

## Deployment and CI

### GitHub Actions
- `.github/workflows/deploy.yml` automatically deploys to GitHub Pages on main branch commits
- Deployment uses Node.js 18 and runs `npm ci --force` then `npm run build`
- Slack notifications are sent unless commit message ends with "-silent"

### Build Output
- Production files are generated in `build/` directory
- Site is deployed to https://intro-camejo.github.io/web/
- Build includes static HTML, CSS, JS, and assets

## Repository Structure

### Key Directories
```
src/
  pages/           # Custom pages (cronograma.mdx, playlist.mdx, etc.)
  components/      # React components (HomepageFeatures, Cronograma)
  css/            # Global CSS styles
docs/
  Material/       # Course documentation and materials
blog/             # Blog posts (markdown/MDX)
static/           # Static assets (images, files)
.github/
  workflows/      # GitHub Actions for deployment
```

### Important Files
- `docusaurus.config.js` - Main Docusaurus configuration
- `sidebars.js` - Documentation sidebar configuration  
- `package.json` - Dependencies and npm scripts
- `tsconfig.json` - TypeScript configuration
- `babel.config.js` - Babel configuration for Docusaurus

## Common Tasks

### Adding Content
- **New documentation**: Add files to `docs/Material/` directory
- **New blog post**: Add files to `blog/` directory
- **New page**: Add files to `src/pages/` directory
- **Custom components**: Add to `src/components/` directory

### Content Format
- Use `.md` for simple Markdown content
- Use `.mdx` for content that needs React components
- Blog posts support frontmatter with date, title, authors
- Documentation supports sidebars configuration

### Known Issues
- TypeScript compilation fails with JSX namespace errors (not blocking for builds)
- 19 npm security vulnerabilities exist in dependencies (mostly in webpack-dev-server)
- Docker build is impractically slow for development
- Some blog posts have missing author definitions (generates warnings)

### Performance Notes
- Development server hot reload works correctly
- Build process is reasonably fast (~38 seconds)
- Site loads quickly in both development and production modes

## Troubleshooting

### Common Problems
1. **Build fails**: Check for syntax errors in MDX files or configuration
2. **Development server won't start**: Ensure port 3000 is available
3. **TypeScript errors**: These are expected and don't prevent builds from succeeding
4. **Missing dependencies**: Run `npm install` if node_modules is missing

### When Making Changes
- ALWAYS test builds before committing: `npm run build`
- ALWAYS test development server: `npm run start`
- Test key page navigation manually
- Check browser console for any runtime errors
- Consider adding "-silent" to commit messages to avoid Slack notifications

This repository prioritizes content and functionality over code quality tooling. Focus on ensuring content renders correctly and the site builds successfully.
---
description: Tooling, dependencies, and constraints
globs: package.json
alwaysApply: true
---

# Tech Context

- React 18, React Router 6, Webpack 5, Babel.
- Dev server with HMR and historyApiFallback.
- Cypress for e2e; Jest + Testing Library present but not configured here.
- External CSS includes Normalize.css and Font Awesome via CDN in `index.html`.

Constraints:
- Keep existing routes and `#app` root for tests.
- Avoid breaking global Prism usage for syntax highlighting.

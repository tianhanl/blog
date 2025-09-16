---
description: Current focus, next steps, and decisions
globs: *
alwaysApply: true
---

# Active Context

Current focus: Modernize build and routing without changing UI/behavior.

Next steps:
1) Add HtmlWebpackPlugin and migrate `index.html` to a template.
2) Add React.lazy/Suspense for route-level code splitting.
3) Enable StrictMode in `src/main.js`.
4) Verify with `npm run build` and Cypress smoke.

Decisions:
- Keep Prism global by including CDN in HTML template.
- Preserve `#app` container and script placement.

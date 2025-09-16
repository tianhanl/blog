---
description: Architecture and key patterns in the blog app
globs: src/**/*
alwaysApply: true
---

# System Patterns

- Client-side app using React 18 with `react-router-dom@6`.
- State via custom `BlogContext` with reducer and helpers for prev/next.
- Data fetched from `src/api.js` (axios) for labels, list, and article.
- Animations via `react-transition-group` and `animejs`.
- Markdown rendering with `marked`; code highlighting via global Prism.
- Bundled by Webpack 5; entry `src/main.js`, output `dist/`.
- Cypress e2e validates title, layout, routing, and loading state.

Modernization patterns:
- HtmlWebpackPlugin for HTML template injection and hashed script tags.
- Route-level code splitting via `React.lazy` + `Suspense`.
- StrictMode to surface side-effect issues in dev.

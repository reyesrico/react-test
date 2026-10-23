# react-test

A personal dev sandbox for testing React concepts, JavaScript patterns, and TypeScript. Built with Vite.

## Structure

| Path | Purpose |
|---|---|
| `components/` | MainPage app — BarSection, MenuSection, FeedSection |
| `src/client/app/` | Products app — AwesomeComponent + FilterableProductTable |
| `src/client/js/` | Vanilla JS experiments (animations, palindrome, etc.) |
| `ts.ts` | TypeScript class inheritance example |
| `backup/` | Old JS/JSX snippets kept for reference |

## Getting started

```bash
npm ci
```

Use `npm ci` for reproducible installs from the lockfile. Vite 6.4.4 or later
within the 6.x release line is required for the fixes to CVE-2026-112942,
CVE-2026-112943, and CVE-2026-112944, without changing Node.js compatibility.

## Running locally

```bash
npm run dev
```

Opens at `http://localhost:5173`.

- `/` → MainPage (BarSection, MenuSection, FeedSection)
- `/app.html` → Products App (AwesomeComponent + FilterableProductTable)

## Building

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build
```

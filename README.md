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
npm install
```

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

# Next.js + Tiptap + Puppeteer

This repository demonstrates a compact and practical integration of a modern React-based front-end (Next.js), a headless rich text editor (Tiptap) for content editing, and Puppeteer for server-side rendering of HTML content into PDFs or screenshots.

## Features

- Next.js application with client and server components
- Tiptap-based rich-text editor with example toolbar and serialization (HTML/JSON)
- API endpoints using Puppeteer to convert HTML content into PDF or PNG
- Example workflows: `Save content → Generate PDF` and `Preview as screenshot`

## Tech stack

- **Next.js** — React framework for server-rendered and statically-exported apps
- **Tiptap** — headless rich text editor (ProseMirror-based)
- **Puppeteer / puppeteer-core** — headless Chromium for PDF/screenshot generation
- **Node.js** (recommended LTS)

## Prerequisites

- Node.js 18 or later (LTS recommended)
- npm or pnpm or bun
- For production PDF generation on serverless platforms: familiarity with using `puppeteer-core`.

## Development

Start the development server:

```bash
npm run dev
# visit http://localhost:3000
```

Open the editor page, create or paste content, then use the `Export` actions to request a PDF or screenshot from the server.

## Generating PDFs / screenshots with Puppeteer

Notes and best practices:

- When using `page.setContent`, include minimal CSS to ensure predictable PDF layout (fonts, page width, margins).
- For complex pages that fetch assets, prefer rendering the page on the server (SSR) or pass absolute URLs to the HTML.
- On serverless platforms, check platform-specific docs for supported Chromium binaries and cold-start performance.

## Project structure

```
my-project/src
├─ app/
│  ├─ index.ts            # landing page, editor UI
│  ├─ api/
│  │  ├─ pdf.ts  # example API route using puppeteer
│  │  └─ snapshot.ts    # (optional) returns PNG
├─ components/
│  └─ myUi ->TipTapEditor.tsx          # tiptap editor component

```

## License

`MIT LICENSE`

_End of README._

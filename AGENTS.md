# Project Calvino - AI Agent Instructions

This document provides context and instructions for AI agents working on the **Calvino** project. It outlines the architecture, technology stack, development workflows, and coding conventions to ensure consistent and high-quality contributions.

## 1. Project Overview

**Calvino** is an extensible web application celebrating Italo Calvino through independent digital experiments. "Invisible Cities" is the first work; future works such as "Mr Palomar" are added as separate experiences rather than extensions of the existing one.

- **Repository**: `llm-literature/calvino`
- **Type**: Static Web Application (Next.js SSG)

## 2. Technology Stack

- **Runtime & Package Manager**: [Bun](https://bun.sh/) (v1.2+)
- **Framework**: [Next.js](https://nextjs.org/) (v16+, App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**:
  - [Tailwind CSS](https://tailwindcss.com/) (v4.0+)
  - [Shadcn UI](https://ui.shadcn.com/) (Radix UI primitives + Tailwind)
  - `lucide-react` for icons
- **Linting**: ESLint (v8, pinned for compatibility)
- **Deployment**: Static Export (`output: 'export'`)

## 3. Project Structure

```
calvino/
├── app/                    # Next.js App Router directory
│   ├── framework/          # The "1": landing page, work registry, language, shell
│   ├── works/              # The "N": isolated creative implementations
│   │   └── invisible-cities/
│   │       ├── [cityType]/ # Work-owned routes
│   │       └── components/ # Work-owned UI and creative logic
│   ├── globals.css         # Global styles & Tailwind v4 theme configuration
│   ├── layout.tsx          # Root layout (Server Component)
│   └── page.tsx            # Landing page
├── components/             # Shared UI components
│   └── ui/                 # Shadcn UI primitives (Button, Avatar, etc.)
├── lib/                    # Utility functions (cn, etc.)
├── public/                 # Static assets
│   └── works/
│       └── invisible-cities/ # Work-owned data and images
├── tailwind.config.ts      # Tailwind configuration (Legacy/Hybrid)
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## 4. Development Workflow

### Installation

```bash
bun install
```

### Development Server

```bash
bun run dev
```

Runs on `http://localhost:3000`.

### Production Build

```bash
bun run build
```

Generates static files in the `out/` directory (implied by `output: 'export'`).

### Linting

```bash
bun run lint
```

**Note**: ESLint is pinned to v8. Do not upgrade to v9 without resolving config compatibility.

## 5. Coding Conventions & Guidelines

### 1 + N Architecture (Non-negotiable)

- `app/framework/` is the **1**: the Calvino application shell only. It owns the landing page, work registry, top-level language behavior, shared metadata, and truly global primitives.
- `app/works/<work-slug>/` is each **N**: a complete, isolated creative implementation for one literary work. Routes, components, visual systems, local utilities, and work-specific behavior stay inside that directory.
- `public/works/<work-slug>/` contains that work's data and media.
- Register a new work in `app/framework/works.ts`, then build it in new `app/works/<work-slug>/` and `public/works/<work-slug>/` directories.
- Do not import code from one work into another. These experiences intentionally do not share creative UI or business logic.
- Promote code into `app/framework/`, `components/ui/`, or `lib/` only when it is genuinely platform-wide and already needed by more than one work. Do not create speculative abstractions for future works.
- A work may establish its own typography, color, motion, navigation, and component conventions without affecting other works.

### Styling (Tailwind CSS v4)

- Use **Tailwind CSS v4** syntax.
- CSS variables for the theme are defined in `app/globals.css` under the `@theme` block.
- Use `shadcn/ui` components located in `components/ui/` for base interactive elements.
- Prefer `clsx` and `tailwind-merge` (via `lib/utils.ts` `cn()` function) for conditional class merging.

### Components

- **Server Components**: Default for `page.tsx` and `layout.tsx`. Use for data fetching and metadata.
- **Client Components**: Mark with `'use client'` at the top. Required for interactivity (hooks, event listeners) and some Shadcn components (e.g., `Dialog`, `Popover`).
- **Refactoring**: When modifying UI, ensure responsiveness (mobile-first approach).

### Data Fetching

- The project uses **Static Site Generation (SSG)**.
- Invisible Cities data is sourced from `public/works/invisible-cities/data.json`.
- Dynamic routes (`app/works/invisible-cities/[cityType]/[cityName]/page.tsx`) use `generateStaticParams` to pre-render all city pages at build time.
- **Important**: In Next.js 15/16, route `params` are asynchronous. Always `await params` in dynamic pages.

### Image Handling

- Use `next/image`.
- **Constraint**: Image Optimization is **disabled** (`unoptimized: true` in `next.config.js`) because the project is exported as a static site and does not use a Node.js server for image processing at runtime.

## 6. Common Tasks

### Adding a New Shadcn Component

1.  Check if the primitive is installed (`@radix-ui/react-*`).
2.  Create the component file in `components/ui/`.
3.  Ensure it uses the `cn()` utility for class merging.

### Updating City Data

1.  Modify `public/works/invisible-cities/data.json`.
2.  Run `bun run build` to regenerate the static pages.

### Modifying Global Theme

1.  Edit `app/globals.css`.
2.  Update CSS variables inside the `@theme` block or `:root`.

## 7. Known Issues & Gotchas

- **ESLint**: Do not run `bun update` blindly on `eslint`. Keep it at v8.
- **Tailwind v4**: The configuration is a hybrid of `app/globals.css` (CSS-first) and `tailwind.config.ts`. Be careful when moving config between them.
- **Static Export**: API routes and server-side image optimization are not available.

## 8. Future Roadmap

- [ ] Add search functionality for cities.
- [ ] Improve accessibility (a11y) scores.
- [ ] Add more animations using `tailwindcss-animate`.

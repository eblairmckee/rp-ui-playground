# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `bun install` - Install dependencies across all workspaces
- `bun dev` - Start NextJS demo app development server
- `bun build` - Build NextJS demo app for production
- `bun start` - Start NextJS demo app in production mode
- `bun lint` - Run ESLint on demo app

From within specific workspaces:

- `cd apps/demo && bun run dev` - Start demo app development server
- `cd packages/[package-name] && bun run build` - Build specific package

## Architecture Overview

This is a **Bun workspaces monorepo** designed to demo 3 different UI libraries.

### Monorepo Structure

- `apps/demo/` - NextJS demo application showcasing the UI libraries
- `packages/` - Contains 3 UI library packages (to be implemented):
  - `packages/ui-registry/` - New UI library implementation
  - `packages/old/` - Legacy UI library implementation
  - `packages/proposed/` - Proposed UI library implementation
- Root `package.json` - Bun workspace configuration

### Key Technologies

- **Runtime**: Bun (JavaScript runtime and package manager)
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **TypeScript**: Full TypeScript support
- **Monorepo**: Bun workspaces for package management

### Demo Application (apps/demo)

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with PostCSS
- **TypeScript**: Configured with path aliases (`@/*` maps to `./`)
- **Linting**: ESLint with Next.js config
- **Development**: Turbopack for fast development builds

### Workspace Configuration

The root `package.json` defines workspaces for:

- `apps/*` - All applications
- `packages/*` - All UI library packages

This allows importing packages from the monorepo like:

```typescript
import { Button } from "@packages/ui-registry";
import { Card } from "@packages/proposed";
```

### Development Notes

- Uses Bun for package management and script execution
- NextJS demo app supports hot reloading via Turbopack
- Each package in `packages/` will be independently buildable
- No test framework currently configured
- Tailwind CSS v4 uses new `@import "tailwindcss"` syntax

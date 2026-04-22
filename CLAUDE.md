# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mallorca Padel Camp 2026 LTP Edition (MPC) — a single-page marketing website for a padel tournament/camp event in Mallorca (Aug 20–23, 2026). Built with Next.js 14 App Router, Tailwind CSS, and Framer Motion.

## Commands

- **Dev server:** `pnpm dev` (localhost:3000)
- **Build:** `pnpm build`
- **Lint:** `pnpm lint`
- **Package manager:** pnpm (lock file: pnpm-lock.yaml)

## Architecture

**Single-page app** — one route (`src/app/page.tsx`) composed of section components rendered in order: Navbar → Hero → TournamentInfo → Players → Results → Prizes → Location → Sponsors → DownloadPDF → Registration → Footer.

**i18n** — Client-side language switching (EN/ES) via React Context (`src/context/LanguageContext.tsx`). All UI strings live in `src/i18n/en.ts` and `src/i18n/es.ts`. Components access translations through `useLanguage()` hook which returns `{ lang, setLang, t }`. Language preference persisted in localStorage under key `mpc-lang`.

**Styling** — Tailwind CSS with custom design tokens in `tailwind.config.ts`:
- Colors: `deep-blue`, `padel-orange`, `light-gray`, `body-gray`, `dark-navy`, `accent-gold`
- Fonts: `font-heading` (Playfair Display), `font-body` (Inter) — loaded via `next/font/google`
- Custom animations: `fade-in`, `slide-up`, `slide-in-left`, `slide-in-right`, `pulse-glow`, `bounce-subtle`, `float`

**Animations** — Framer Motion used via `AnimatedSection` wrapper component for scroll-triggered entrance animations.

**Static assets** — `public/downloads/` contains a downloadable PDF breakdown of the event.

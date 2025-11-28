# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Minisend Landing Page** - a marketing website for a USDC-to-fiat offramp solution targeting Farcaster creators and Base Network builders. The landing page showcases the product's features and directs users to the main application at https://app.minisend.xyz.

**Important:** The README.md contains extensive documentation about the **main Minisend application** (payment APIs, database schema, etc.), but this repository is **only the landing page**. The landing page does not contain any payment processing logic, API endpoints, or database integrations - it's purely a static marketing site.

## Tech Stack

- **Framework:** Next.js 13.5.4 with App Router
- **UI Library:** React 18
- **Styling:** styled-components 6.1.0 with CSS-in-JS
- **Animation Libraries:**
  - Framer Motion 10.16.4 (scroll-based animations)
  - GSAP 3.12.2 (advanced animations)
  - Lenis (@studio-freight/react-lenis) for smooth scrolling
- **Language:** TypeScript

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### Directory Structure

```
src/
├── app/
│   ├── (home)/
│   │   └── page.tsx          # Main landing page
│   ├── layout.tsx             # Root layout with metadata
│   └── globals.css            # Global styles (SF Pro Display font)
├── components/
│   ├── UI/                    # Page section components
│   │   ├── HeroSection/       # Above-the-fold hero
│   │   ├── Featured/          # Featured companies section
│   │   ├── OffersSection/     # Product offerings
│   │   ├── FinancialFreedom/  # Benefits section
│   │   ├── FinancialFuture/   # Future vision section
│   │   ├── IntroSection/      # Product introduction
│   │   ├── JoinSection/       # Call-to-action
│   │   ├── FAQ/               # Frequently asked questions
│   │   ├── Header/            # Site header
│   │   └── Footer/            # Site footer
│   ├── Common/                # Reusable components
│   │   ├── MaskText/          # Animated text reveal component
│   │   ├── GetStartedButton/  # CTA button (links to app.minisend.xyz)
│   │   ├── AnimatedLink/      # Animated link component
│   │   ├── ParallaxImages/    # Parallax image effects
│   │   └── RevealCover/       # Reveal animation wrapper
│   ├── Layout/                # Layout wrapper with smooth scroll
│   └── index.ts               # Component exports
libs/
├── registry.tsx               # styled-components SSR registry
└── useIsMobile.tsx            # Mobile detection hook
```

### Component Structure Pattern

Each UI component follows this structure:
```
ComponentName/
├── index.tsx       # Main component logic
├── styles.ts       # styled-components styles
└── constants.ts    # Static content (text, phrases for animations)
```

### Key Architectural Patterns

1. **Smooth Scrolling:** ReactLenis wraps the entire app in `Layout/index.tsx` for smooth scroll behavior

2. **styled-components SSR:** The `libs/registry.tsx` provides SSR support for styled-components in Next.js 13 App Router

3. **Animation Patterns:**
   - `MaskText` component handles staggered text reveal animations using Framer Motion
   - Components use `useInView` hook to trigger animations when scrolling into view
   - Phrases are split into arrays in `constants.ts` files for line-by-line animation

4. **Responsive Design:** Components use `useIsMobile()` hook to conditionally render different content/layouts for mobile vs desktop

5. **Component Exports:** All components are exported through `src/components/index.ts` for clean imports

6. **External Links:**
   - Main app: https://app.minisend.xyz
   - Farcaster miniapp: https://farcaster.xyz/miniapps/pXYzGNnbBFu6/minisend

## Styling Approach

- **CSS-in-JS:** All styles use styled-components (no CSS modules or Tailwind)
- **Global Styles:** Defined in `src/components/Layout/GlobalStyles.tsx` (not in globals.css)
- **Typography:** SF Pro Display font loaded via CDN in `globals.css`
- **Theme:** Styles are defined per-component; no global theme provider

## Important Configuration

### Path Aliases

`@/*` maps to `./src/*` (configured in tsconfig.json)

Example:
```typescript
import { GetStartedButton } from '@/components';
```

### Metadata

Comprehensive Open Graph and Twitter Card metadata is defined in `src/app/layout.tsx`:
- Title: "Minisend - Onchain earnings truly spendable"
- Description focuses on USDC conversion, Farcaster, Base, Kenya/Nigeria support
- Social media cards configured for optimal sharing
- Terminology: Use "Base" or "Base chain", not "Base Network" in user-facing text

### Brand Assets

Located in `public/brandkit/`:
- Logos: minisend-logo.png, minisend-white.png
- Favicons: Multiple sizes for different platforms
- QR code: qr-code.jpeg (6rem x 6rem desktop, 5rem x 5rem mobile)
- Base logo: Base_lockup_white.svg
- USDC logo: usdc.svg

## Common Development Tasks

### Adding a New Section Component

1. Create directory in `src/components/UI/NewSection/`
2. Create `index.tsx` (component), `styles.ts` (styled-components), `constants.ts` (content)
3. Export from `src/components/index.ts`
4. Add to `src/app/(home)/page.tsx`

### Modifying Text Content

Static text lives in `constants.ts` files within each component directory. For animated text (using MaskText), content must be formatted as string arrays where each element is one line.

### Updating Animations

- Framer Motion animations typically use the `useInView` hook with `once: true` to trigger on first scroll
- Animation timing is controlled via `transition` objects in motion variants
- Staggered animations use the `custom` prop to pass index for delay calculations

## Terminology Guidelines

- Use "Base" or "Base chain" in user-facing content
- Use "Farcaster" (not Warpcast) when referring to the platform
- "USDC" should always be uppercase
- Currencies: "KES" (Kenyan Shillings), "NGN" (Nigerian Naira)
- "M-Pesa" (hyphenated, capital M and P)

## Copyright

Footer includes copyright: "© 2025 Minisend. All rights reserved."

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mari Father (mari-father.com) homepage - a Next.js website for the AI-powered pet health management service "오래오래" (OraeDOrae).

**Technology Stack**: Next.js 15, TypeScript, Tailwind CSS

## Development Commands

```bash
npm run dev     # Start development server (usually runs on port 3001)
npm run build   # Build for production
npm start       # Start production server
npm run lint    # Run ESLint (not configured yet)
```

## Project Architecture

### Directory Structure
```
app/                 # Next.js App Router pages
├── page.tsx        # Home page
├── service/        # Service information page
├── features/       # Features showcase page
├── about/          # Company information page
├── contact/        # Contact form and info page
├── layout.tsx      # Root layout with Header/Footer
└── globals.css     # Global styles with Tailwind

components/         # Reusable React components
├── Header.tsx      # Main navigation
├── Footer.tsx      # Site footer
├── home/          # Home page sections
├── service/       # Service page components
├── features/      # Features page components
├── about/         # About page components
└── contact/       # Contact page components
```

### Key Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Components**: FAQ accordions, feature tabs, mobile navigation
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessibility**: ARIA labels and semantic markup
- **Korean Content**: All content in Korean for local market

### Color Scheme
- Primary: Blue variants (primary-50 to primary-900)
- Secondary: Orange/yellow variants (secondary-50 to secondary-900)
- Gray scale for text and backgrounds

### Navigation Structure
1. 홈 (Home) - `/`
2. 서비스 (Service) - `/service`
3. 기능 (Features) - `/features`
4. 회사소개 (About) - `/about`
5. 문의 (Contact) - `/contact`

## Development Notes

- Server runs on port 3001 (port 3000 appears to be in use)
- All components are properly typed with TypeScript
- Uses Tailwind CSS utility classes for styling
- Responsive breakpoints: sm (640px), md (768px), lg (1024px)
- Contact form includes client-side validation
- FAQ component has expandable sections
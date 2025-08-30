# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js SaaS landing page template called "Niotech" with multiple home page variants. The project uses Bootstrap for styling and React components for building reusable UI elements.

## Common Commands

### Development
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm start           # Start production server
npm run lint        # Run ESLint
```

### Package Management
```bash
npm install         # Install dependencies
```

## Architecture

### Directory Structure
- `src/app/` - Next.js App Router structure
  - `(home1)/`, `home2/`, `home3/` - Different home page variants using route groups
  - `(innerpage)/` - Inner pages (about, blog, contact, etc.) with shared layout
  - `Components/` - Reusable React components organized by feature
  - `Data/` - JSON files containing static content for components
  - `assets/` - CSS and other assets

### Component Architecture
- **Page Structure**: Each route group has its own layout component
- **Component Organization**: Components are grouped by feature (About, Blog, Header, etc.)
- **Data-Driven**: Components accept props for customization and use JSON files for static content
- **Layout Variants**: Multiple header and component variants (e.g., Header1, About1, About2)

### Key Patterns
- Components use destructured props for configuration
- HTML content is parsed using `html-react-parser` for rich text
- Images use Next.js `Image` component with proper optimization
- CSS classes follow BEM-like naming convention with `cs_` prefix
- Bootstrap grid system and utility classes are used throughout

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **UI**: React 19, Bootstrap 5, React Bootstrap
- **Styling**: Custom CSS with Bootstrap integration
- **Fonts**: Google Fonts (Urbanist, Nunito)
- **Carousel**: React Slick with Slick Carousel
- **Icons**: Bootstrap Icons

### Asset Management
- Static images stored in `/public/assets/images/` with organized subdirectories
- SVG icons in `/public/assets/images/icon/`
- Fonts loaded via Next.js Google Fonts integration
- CSS variables for font families defined in layout
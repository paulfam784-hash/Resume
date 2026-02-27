# Paul Fam Portfolio

## Overview
A static portfolio website for Paul Fam, a food service professional from Broken Arrow, OK. Designed to help him find employment by showcasing his experience, skills, and training.

## Architecture
- **Type**: Single-page React app (static site)
- **Framework**: React + Vite + TypeScript
- **Styling**: Tailwind CSS + Shadcn UI components
- **Animations**: Framer Motion
- **Routing**: wouter (single page, smooth scroll navigation)
- **No database needed** - all content is hardcoded

## Structure
- `client/src/pages/home.tsx` - Main portfolio page with all sections (Hero, About, Skills, Experience, Education & Training, Contact)
- `client/src/App.tsx` - Router setup
- `client/public/Paul_Fam_Resume.pdf` - Downloadable resume
- `client/public/Paul_Fam_Resume.docx` - Downloadable resume (Word)

## Design
- **Fonts**: Plus Jakarta Sans (body), Playfair Display (headings), JetBrains Mono (mono)
- **Primary color**: Teal (172 hue) for personality while remaining professional
- **Theme**: Light mode, clean with subtle background blurs and smooth scroll-triggered animations

## Contact Info
- Email: paulfam784@gmail.com
- Phone: (918) 814-3054
- Location: Broken Arrow, OK 74011

## Deployment
Static site ready for Netlify or Cloudflare Pages. Build output goes to `dist/public`.

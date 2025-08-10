# Frontend Developer Portfolio

A modern, fast, and responsive portfolio built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack
- Vite
- React 18 (TypeScript)
- Tailwind CSS + tailwind-merge + tailwindcss-animate
- shadcn/ui (Radix UI primitives)
- React Router

## Getting Started
1. Clone the repository
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>

2. Install dependencies
   npm i

3. Start the dev server
   npm run dev

## Scripts
- npm run dev: Start local development server
- npm run build: Create a production build
- npm run preview: Preview the production build

## Project Structure
- src/pages: Top-level pages (Home, Projects, Services, Contact)
- src/components: Reusable UI components and shadcn components
- src/hooks: Custom hooks
- src/index.css: Global styles and design tokens
- public/: Static assets

## SEO
- index.html contains title, description, Open Graph, and Twitter meta tags
- Use semantic HTML (header, main, section, nav, footer)
- Ensure a single H1 per page and descriptive alt text on images

## Deployment
- Build the app with npm run build
- Serve the dist/ folder on any static host (e.g., Netlify, Vercel, GitHub Pages, or your own server)

## Customization
- Update brand colors and design tokens in src/index.css and tailwind.config.ts
- Edit page content in src/pages/*
- Add or tweak UI components in src/components/ui

## License
This project is provided as-is for personal or commercial use. Add your preferred license if needed.

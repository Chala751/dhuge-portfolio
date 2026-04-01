# Dugasa Gemechu Portfolio

Monochrome portfolio site for an architecture studio with project detail pages, a founder bio, and light/dark theme support.

Live site: https://duge-portfolio.vercel.app

## Quick Start

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Project Structure

```
app/
	about/                 # Founder bio and credentials
		page.tsx
	components/            # Reusable UI components
		CertificateGallery.tsx
		DocumentsGallery.tsx
		NavBar.tsx
		ThemeToggle.tsx
	data/                  # Shared content/data
		projects.ts
	projects/              # Project detail routes
		[slug]/
			page.tsx
	globals.css            # Global styles + theme tokens
	layout.tsx             # Root layout and fonts
	page.tsx               # Main landing page
public/                  # Static assets (images + PDFs)
```

## Content Updates

- Featured projects and detail pages: update `app/data/projects.ts`.
- About page content: edit `app/about/page.tsx`.
- Images: place files in `public/` and reference them by path.

## Scripts

- `npm run dev` - start the dev server
- `npm run build` - production build
- `npm run start` - run production build

## Tech Stack

- Next.js (App Router)
- Tailwind CSS
- Google Fonts via `next/font`

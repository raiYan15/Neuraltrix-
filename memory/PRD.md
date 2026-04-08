# NeuralTrix AI - PRD

## Problem Statement
Create a corporate website for NeuralTrix AI (AI consulting & software development) based on openxcell.com structure, with navy blue + white corporate style, plain colors. All sections from reference site + individual subpages for every section + careers page.

## Architecture
- **Frontend**: React + Tailwind CSS + Shadcn UI + Framer Motion
- **Backend**: FastAPI + MongoDB
- **Routing**: React Router v7 with 30+ routes
- **Fonts**: Cabinet Grotesk (headings), Satoshi (body), JetBrains Mono (metrics)
- **Icons**: Lucide React + React Icons (Si prefix for tech stack)

## What's Been Implemented (April 6, 2025)

### Homepage (14 sections)
- Sticky header with navigation, Hero section, CEO Letter, Services grid, Solutions list, Case Studies, Tech Stack, Stats, Industries, Why Choose Us (accordion), Testimonials (carousel), Blog Resources, Contact Form (DB connected), Footer

### Subpages (30+ routes)
- **/services** - Listing page + 8 individual service pages (AI, GenAI, Custom Software, Mobile, AI Agents, LLM, DevOps, Data Engineering)
- **/solutions** - Listing page + 5 individual solution pages (DataBrain, MediMind, Talentify, QuikBiz, IntelliBot)
- **/case-studies** - Listing page + 4 individual case study pages
- **/industries** - Listing page + 7 individual industry pages (Retail, Healthcare, Fintech, Education, BFSI, Sports, Real Estate)
- **/blog** - Listing page + 3 individual article pages with full content
- **/about** - Company timeline, leadership team, mission/vision, office locations
- **/careers** - Job listings with expand/collapse, department filters

### Every Subpage Includes
- Hero section with CTAs
- Detailed content (features, process steps, paragraphs)
- Mid-page CTA section
- FAQ accordion
- Contact form with MongoDB storage

### Backend API
- POST /api/contact - Stores form submissions
- GET /api/contact - Retrieves submissions

## Prioritized Backlog
- P1: SEO meta tags per page, Open Graph tags
- P1: Blog CMS / admin panel for managing articles
- P2: Animated counters on stats section
- P2: Image gallery for case studies
- P3: Newsletter subscription functionality
- P3: Search functionality across all pages

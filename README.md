# Miftahul Falaah — Islamic University Web App

A modern web application for **Miftahul Falaah**, an Islamic Seat for Intermediate and Higher Deeni Education, built with Next.js 16, React 19, Tailwind CSS, and AI integration (OpenAI & Watsonx).

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS v4
- **AI:** OpenAI (primary), IBM Watsonx (fallback) for Ask Fatwa
- **Deployment:** Node.js

## Features

- **Home** — Hero, courses, history, article previews
- **About Us** — Founder message and Madrasah history
- **Audio** — Audio program categories (live streaming, Majalis, Jumuah Bayaans, etc.)
- **Articles** — Article listings with featured section
- **Fatawa** — Fatwa listings with search sidebar
- **Ask Fatwa** — Form with AI-assisted preliminary guidance (OpenAI/Watsonx)
- **Gallery** — Photo grid layout
- **Contact Us** — Form, map, and email contacts

## Getting Started

### Prerequisites

- Node.js 20+
- npm or pnpm

### Install

```bash
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Configure:

- **OPENAI_API_KEY** — For AI-assisted Ask Fatwa (optional)
- **WATSONX_AI_APIKEY**, **WATSONX_PROJECT_ID** — For Watsonx fallback (optional)

Without API keys, Ask Fatwa returns a confirmation message only.

### Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Next.js App Router pages & API routes
├── components/       # Header, Footer, UI components
├── data/             # Static content (courses, articles, etc.)
└── lib/              # Utilities
```

## Theme

Dark theme with teal (#0d9488) and gold (#c9a227) accents, tailored for Islamic education.

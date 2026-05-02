# Fraksis

Portfolio site for **Aleksis Aleksandrs Vējš** and **Viesturs Emerbergs**, focused on web development and design work, services, and project highlights.

## Tech stack

| Area | Details |
|------|---------|
| UI | [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`) |
| Build | [Vite](https://vitejs.dev/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) + project CSS in `src/assets/main.css` |
| State | [Pinia](https://pinia.vuejs.org/) |
| Quality | ESLint, Prettier |

## Prerequisites

- **Node.js** (LTS recommended)
- **npm** (or compatible package manager)

## Getting started

```bash
npm install
npm run dev
```

The dev server prints a local URL (typically `http://localhost:5173`).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite in development mode |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint with auto-fix |
| `npm run format` | Format `src/` with Prettier |

## Project layout

- `src/App.vue` — Root layout and section composition
- `src/components/` — Page sections (hero, stack, services, portfolio, contact, etc.) and shared UI
- `src/assets/` — Global styles and static assets
- `vite.config.js` — Vite + Vue plugin, PWA and devtools as configured

## Deployment

After `npm run build`, deploy the contents of **`dist/`** to your host (for example static hosting on cPanel). Configure the server so client-side routes resolve to `index.html` if you add routing later.

## Contact

- **Email:** contact@fraksis.com  
- **Website:** [fraksis.com](https://fraksis.com) (when live)

For collaborations or freelance inquiries, use the contact section on the site or the email above.

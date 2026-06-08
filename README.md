# Tanvir Hossain Parvin — Portfolio

Personal portfolio for **Tanvir Hossain Parvin** — minimalist industrial sci-fi aesthetic built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Optional — override the production site URL for metadata and sitemap:

```bash
NEXT_PUBLIC_SITE_URL=https://tanvirparvin.dev
```

## Build

```bash
npm run build
npm start
```

## Deploy

Works on **Vercel** or **Netlify** without vendor lock-in.

### Vercel

1. Import the repository or folder
2. Set environment variable `NEXT_PUBLIC_SITE_URL` to your domain (e.g. `https://tanvirparvin.dev`)
3. Deploy — no extra configuration required

### Netlify

1. Connect the repository
2. `netlify.toml` includes `@netlify/plugin-nextjs` automatically
3. Set `NEXT_PUBLIC_SITE_URL` in site environment variables
4. Deploy

## Project Structure

```
src/
├── app/              # Next.js app router (layout, page, globals, icon, OG image)
├── components/
│   ├── layout/       # Header, Footer, GridBackground
│   ├── sections/     # Page sections (Hero, About, Projects, etc.)
│   └── ui/           # Reusable UI primitives
├── data/
│   └── content.ts    # All site content — edit here to update copy
└── lib/
    ├── site.ts       # Site URL helper
    └── utils.ts      # Shared utilities
```

## Customization

Update contact links, project details, and bio in `src/data/content.ts`.

## License

Private — all rights reserved.

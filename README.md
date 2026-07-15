# Aarohan Solar

Premium Next.js 15 website for an Indian solar energy company — portfolio-ready and easy to rebrand for client projects.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide Icons + shadcn-style UI primitives
- Mock JSON data (Supabase-ready structure)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

Admin (no auth yet): [http://localhost:3000/admin](http://localhost:3000/admin)

## Admin mode

| Setting | Behaviour |
|---|---|
| `DEMO=true` | Admin is **view-only** (Add / Edit / Save disabled) |
| `DEMO=false` | Admin **edit mode** — mutations go through a **mock Supabase** client |

Copy `.env.example` → `.env`, then restart the dev server after changing `DEMO`.

```bash
# View only (default)
DEMO=true

# Editable + mock Supabase
DEMO=false
```

Mock Supabase lives in `src/lib/supabase/client.ts`. When ready, plug in:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```


## Customize for a client

1. Edit `src/data/company.ts` — name, phone, address, stats
2. Replace images under `public/images/`
3. Update mock content in `src/data/*.ts`
4. Point `company.website` to the live domain for SEO

## Scripts

- `npm run dev` — development
- `npm run build` — production build
- `npm run start` — serve production build

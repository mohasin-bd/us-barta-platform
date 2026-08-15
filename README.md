# US Barta

US Barta is a Next.js application for the Bangladeshi community in the United States. It uses TypeScript, Tailwind CSS, shadcn/ui components, and Prisma with SQLite for local development.

## Prerequisites

- Node.js 20 or later
- Bun

## Local setup

1. Install dependencies:

   ```bash
   bun install
   ```

2. Create a local environment file from the tracked template:

   ```bash
   cp .env.example .env
   ```

3. Generate the Prisma client and create/update the local SQLite schema:

   ```bash
   bun run db:generate
   bun run db:push
   ```

4. Start the development server:

   ```bash
   bun run dev
   ```

Open [http://localhost:3000](http://localhost:3000).

## Available commands

| Command | Purpose |
| --- | --- |
| `bun run dev` | Start the Next.js development server. |
| `bun run lint` | Run ESLint. |
| `bun run build` | Create a production build; TypeScript errors fail the build. |
| `bun run db:generate` | Generate the Prisma client. |
| `bun run db:push` | Apply the Prisma schema to the local SQLite database. |
| `bun run db:migrate` | Create and apply a Prisma migration during development. |

## Repository hygiene

- Never commit `.env` files, databases under `db/`, or credentials.
- Add non-sensitive configuration keys and local defaults to `.env.example` whenever a new environment variable is required.
- Keep schema changes in `prisma/schema.prisma`; do not commit generated local database files.
- Run `bun run lint` and `bun run build` before opening a pull request.

## Deployment

Set `DATABASE_URL` in the deployment environment. For production, use a managed database appropriate for your hosting environment instead of a local SQLite file.

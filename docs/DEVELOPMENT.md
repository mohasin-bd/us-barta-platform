# Development notes

## Environment and local data

`.env` and SQLite database files are local-only. Copy `.env.example` to `.env` for a fresh setup, then run `bun run db:push` to create the database described by `prisma/schema.prisma`.

Do not add secrets, production connection strings, exports, or seed data containing personal information to Git. If a new environment variable is needed, document its safe local default in `.env.example`.

## Verification

Before sharing changes, run:

```bash
bun run lint
bun run build
```

The production build intentionally fails on TypeScript errors so type problems cannot be published unnoticed.

## Database workflow

- Use `bun run db:generate` after changing the Prisma schema.
- Use `bun run db:migrate` when creating a development migration.
- Avoid `bun run db:reset` unless you deliberately intend to erase local database data.

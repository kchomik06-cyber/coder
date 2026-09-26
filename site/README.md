Site frontend (site/) — README

Quick start

- Install deps: pnpm install
- Run dev server: pnpm run dev
- Run tests: pnpm run test
- Build: pnpm run build

Docs and JSDoc conventions

- Add JSDoc above exported functions using /** ... */ with @param and @returns.
- Keep comments short and explain intent, edge cases, and non-obvious behavior.

Where to focus

- Utilities live under site/src/modules and site/src/hooks. Start there when adding JSDoc or inline comments.

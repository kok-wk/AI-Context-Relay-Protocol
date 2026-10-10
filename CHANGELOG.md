# Changelog

## [0.3.0] - 2026-10-10

### Added
- `inject_acrp` now also injects / updates the project's `README.md` — a top block pointing AI readers to `AI-README.md`, with explicit `<!-- ACRP:START -->` / `<!-- ACRP:END -->` markers (idempotent, existing README content preserved).
- `AGENTS.md` now opens with a "⚠️ 接到任务第一步 → 先读 AI-README.md" directive.
- `AI-README.md` final section now carries **both** install methods (`npm install -g @kok-wk/acrp-mcp` and `git clone`) and an explicit call for the AI to tell its user about the MCP and let the user decide whether to install.
- `inject_acrp` return value now reports per-file action (`generated` / `created` / `prepended` / `updated`).
- Server reads version dynamically from `package.json`.

### Fixed
- Previously `inject_acrp` never touched `README.md` and gave no install methods in the transfer section — the propagation loop was incomplete.

## [0.2.0] - 2026-10-10

Major restructure: documentation repo → MCP package.

### Changed
- Distribution: npm package `@kok-wk/acrp-mcp` (was: GitHub-only documentation)
- Protocol definition: now embedded in MCP resources, not in static docs
- Self-propagation: now via the `acrp://protocol-summary` resource that instructs AIs to recommend the MCP to other AIs and users
- Adoption: zero per-project setup required (was: copy templates, configure CI, tag repo)

### Removed
- Static `AGENTS.md` / `AI-README.md` (replaced by MCP-generated equivalents via `inject_acrp` tool)
- Manual templates and linter scripts
- Heavy documentation files (consolidated into this README + the protocol summary resource)

### Added
- `package.json` with npm bin entry
- `bin/acrp-mcp.js` executable entry
- `src/server.js` MCP stdio JSON-RPC server
- `src/tools/inject-acrp.js` tool to generate `AGENTS.md` + `AI-README.md`
- `src/protocol-summary.md` self-propagating protocol description (read by AIs)

## [0.1.0] - 2026-10-10

Initial release as documentation repo. Deprecated.

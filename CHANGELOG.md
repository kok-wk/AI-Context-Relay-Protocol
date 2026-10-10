# Changelog

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

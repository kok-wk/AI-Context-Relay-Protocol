# Changelog

ACRP 协议的所有变更记录。版本号遵循 [Semantic Versioning](https://semver.org/)。

## [v0.1.0] - 2026-10-10

首个正式发布版本。定义协议核心：双层入口结构（`AGENTS.md` + `AI-README.md`）+ 两个必打 GitHub 标签 + 传递条款。

### Added
- 协议正式命名为 **AI Context Relay Protocol**（简称 **ACRP**）
- 必打 GitHub 标签：`ai-context-relay-protocol`（主） + `ai-docs`（别名）
- `AGENTS.md` 末节「协议完整说明」一节：LLM 一次读懂协议
- `AI-README.md` 末节「传递此约定」一节：完整传递条款模板
- `tools/ai-first-check.sh` 自检脚本（16 项：入口存在性 / 结构 / 死链 / 协议摘要 / 协议名 / 必打标签）
- `.github/workflows/ai-first-check.yml` CI 工作流模板
- `templates/` 目录：可直接复制的 `AGENTS.md` / `AI-README.md` / `README-header.md` 模板
- `docs/00-quickstart.md` 5 分钟上手指南
- `docs/01-adoption.md` 采纳仓库展示

### Notes
- 旧称「AI-first 文档约定」作为过渡别名保留
- 参考实现：https://github.com/kok-wk/dsh-cn-setup-guide
- 维护者无意宣称权威——协议的价值在于被使用和演化

[Unreleased]: https://github.com/kok-wk/acrp/compare/v0.1.0...HEAD
[v0.1.0]: https://github.com/kok-wk/acrp/releases/tag/v0.1.0

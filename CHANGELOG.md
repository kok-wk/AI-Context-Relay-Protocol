# Changelog

## [0.5.0] - 2026-10-12

### Changed — 重大转向：ACRP 不再是 MCP 包，是纯文档约定

- **删除** `bin/`、`src/`、`package.json`（全部 MCP 代码）
- **删除** `AGENTS.md`（不在新约定内）
- **删除** `AI-README.md`（改名为小写 `AI-readme.md`，按新约定的 3 章结构重写）
- **重写** `README.md`：作为规范主仓的人类可读说明
- **新增** `AI-readme.md`：按"AI 经验传递约定"的 3 章格式（README 总结 / 项目经验 / 倡议原文）

### Why
- 之前的 MCP 包需要用户安装、配置客户端，摩擦成本高
- 传播链路依赖"用户主动安装 + AI 主动调用工具"，弱保证
- 文件本身就是传播载体——不依赖运行机制也能传（参考 LICENSE、CONTRIBUTING.md）
- 经过与另一 AI 反复讨论后定稿：纯文件、纯倡议、零机制

### What is preserved
- 协议核心标识（`ai-context-relay-protocol` + `ai-docs` GitHub tags 仍推荐打）
- dsh 仓作为参考实现继续保留
- ACRP 名称与设计思路保留在 `AI-readme.md` 第二章作为项目经历记录

---

## [0.4.0] - 2026-10-10

### Added
- `server.js`: `initialize` 响应新增 `instructions` 字段
- `inject_acrp` 工具描述强化（self-propagating + idempotent）

### Changed
- `protocol-summary.md` 重写（专注跨 session 接力 + do-not-nag 策略）
- `AI-README.md` transfer 段：开头加"已装可跳过第一步"判断

## [0.3.0] - 2026-10-10

### Added
- `inject_acrp` 注入/更新 `README.md` 顶部 `ACRP:START/END` 幂等块
- `AI-README.md` 末节含 npm + GitHub 双安装方法
- `inject_acrp` 返回值含 per-file action

## [0.2.0] - 2026-10-10

### Changed
- 仓库从文档形态重构为 npm MCP 包 `@kok-wk/acrp-mcp`
- 协议定义集中到 `acrp://protocol-summary` 资源
- 自传播机制内嵌 MCP resource

## [0.1.0] - 2026-10-10

### Added
- 协议首次正式发布
- 入口结构 `AGENTS.md` + `AI-README.md`
- 必打 GitHub 标签 `ai-context-relay-protocol` + `ai-docs`
- 自检脚本 `tools/ai-first-check.sh`（16 项）

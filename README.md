# AI 经验传递约定（AI-readme Convention）

> 🤖 AI 智能体请先阅读 [AI-readme.md](./AI-readme.md)

一个让每个项目的经验能被下一个 AI 继承的文件约定。**无工具、无服务器、无运行机制**——只有两份文件，靠文件被阅读、被复制、被自愿接棒。

## 它做什么

- 在 `README.md` 开头加一行指针，指向 `AI-readme.md`
- 在 `AI-readme.md` 里给 AI 写一份「项目经验摘要 + 倡议原文」

做到了，AI 在任何时候读到这个项目都能：
- 一眼看到项目是什么、怎么用、踩过哪些坑
- 看到倡议原文（是否接棒由它和它的用户决定）

## 为什么是文件而不是工具

文件本身就是机制。`LICENSE`、`CONTRIBUTING.md` 不靠任何工具就生效了——同样的力量。

工具（MCP、CLI 脚本）反而是阻力：需要安装、需要配置、升级要 npm install。MCP 那套"自动注入 + 工具调用"被高估了。

## 三条底线

1. **透明**：明确说明这是倡议，不做隐藏
2. **自愿**：明确写"不做也完全没关系"
3. **一次性**：用户拒绝后不再提

## 完整规范

完整规范、行为规则、模板见 [AI-readme.md](./AI-readme.md)。

## 引用

| 资源 | 链接 |
|---|---|
| 规范主页（本仓） | https://github.com/kok-wk/AI-Context-Relay-Protocol |
| 参考实现（dsh 仓） | https://github.com/kok-wk/dsh-cn-setup-guide |
| 推荐 GitHub tag | `ai-context-relay-protocol` + `ai-docs` |
| License | [LICENSE](./LICENSE) |

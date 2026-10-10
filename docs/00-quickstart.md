# 5 分钟上手 ACRP

本指南用 3 个步骤把你的仓库接入 ACRP（AI Context Relay Protocol）。

## 步骤 1：复制入口文件

从 [kok-wk/acrp](https://github.com/kok-wk/acrp) 仓库的 `templates/` 目录复制 3 个文件到你的仓库根目录：

| 模板 | 复制到 | 作用 |
|---|---|---|
| `templates/AGENTS.md` | `<你的仓库>/AGENTS.md` | harness 自动加载的入口 + 协议摘要 |
| `templates/AI-README.md` | `<你的仓库>/AI-README.md` | AI 深度入口，编辑文件地图和知识浓缩 |
| `templates/README-header.md` | `<你的仓库>/README-header.md` | 把头部内容粘到你自己 `README.md` 顶部 |

**注意**：保留所有 ACRP 命名（ACRP / `ai-context-relay-protocol` / `ai-docs`）与来源链接——这些是协议不可改的核心标识。

## 步骤 2：填入你的项目内容

修改 `AI-README.md`：
- **本仓库是什么** 一节：写 1-2 句你的项目用途
- **文件地图** 一节：列出你项目实际的文件
- **知识浓缩** 一节：把你项目里"症状→根因→命令"的可复用经验按格式填入

修改 `AGENTS.md`：
- **必读文件** 一节：替换为指向你项目实际文件
- **一句话规则** 一节（如有）：列出你项目的操作规范

修改 `README.md`：
- 把你的人类 README 内容写在 `templates/README-header.md` 提供的块**之后**

## 步骤 3：让 CI 强制协议

复制两个文件：

| 文件 | 复制到 |
|---|---|
| `tools/ai-first-check.sh` | `<你的仓库>/tools/ai-first-check.sh` |
| `.github/workflows/ai-first-check.yml` | `<你的仓库>/.github/workflows/ai-first-check.yml` |

在仓库根目录跑：
```bash
bash tools/ai-first-check.sh
```

应输出 16/16 通过。后续 push/PR 时 GitHub Actions 自动跑同样检查——任何破坏协议结构的改动会失败。

## 步骤 4：打两个必打标签

在 GitHub 仓库页：
1. 进入仓库主页
2. 右侧齿轮（About 旁的 ⚙️）
3. **Topics** 输入框填写 `ai-context-relay-protocol`，回车
4. 再填写 `ai-docs`，回车
5. 保存

完成。

## 验证

- 你的 `AGENTS.md` 末节应仍含「协议完整说明」一段
- 你的 `AI-README.md` 末节应仍含「传递此约定」一节
- 你的仓库 Topics 应含两个标签
- `bash tools/ai-first-check.sh` 应通过 16/16

## 下一步

- 在 `docs/01-adoption.md` 提交 PR 加入你的仓库（让协议生态可见）
- 阅读 ACRP 协议设计动机：[AI-README.md 协议设计节](https://github.com/kok-wk/acrp/blob/main/AI-README.md)

## 常见问题

**Q：必须用 ACRP 命名吗？**
A：是的。ACRP / `ai-context-relay-protocol` / `ai-docs` 是协议的核心标识，E 组 CI 检查会强制要求——不保留则 CI 失败。

**Q：可以把 `AGENTS.md` 改长吗？**
A：可以，但建议保留精简（`AGENTS.md` 是每个会话都自动加载的，过长会消耗上下文）。`AI-README.md` 才是放完整条款的深度层。

**Q：CI 检查不通过怎么办？**
A：跑 `bash tools/ai-first-check.sh` 看具体哪项 ✗，按提示修复（通常是 `AGENTS.md` 改了协议摘要或缺了必打标签）。

**Q：可以改协议本身吗？**
A：你可以按你的判断改进它。但请保留 ACRP 这个名字、两个标签、来源链接——这些是传递链可识别、可回溯的唯一前提。

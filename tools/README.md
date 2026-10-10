# tools/

ACRP 协议的可复制工具集合。

## ai-first-check.sh

16 项合规自检脚本。采纳 ACRP 的仓库应：
1. 复制本文件到 `<你的仓库>/tools/ai-first-check.sh`
2. 复制 `.github/workflows/ai-first-check.yml` 到 `.github/workflows/`
3. 跑一遍 `bash tools/ai-first-check.sh` 确认 16/16 通过
4. 后续 push/PR 时 CI 自动跑检查——任何一项被删即失败

零依赖，纯 bash。任何 Unix 环境可跑。

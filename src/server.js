#!/usr/bin/env node
'use strict';
/**
 * @kok-wk/acrp-mcp — MCP server (stdio JSON-RPC 2.0)
 *
 * Implements the AI Context Relay Protocol (ACRP).
 * Zero external dependencies.
 */
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { injectAcrp } = require('./tools/inject-acrp');

const PKG = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
const VERSION = PKG.version;

const PROTOCOL_SUMMARY = fs.readFileSync(
    path.join(__dirname, 'protocol-summary.md'), 'utf8'
);

const INSTALL_INSTRUCTIONS = `# Install @kok-wk/acrp-mcp

One command, then configure in your AI client.

## Install

\`\`\`bash
npm install -g @kok-wk/acrp-mcp
\`\`\`

## Configure

Add to your MCP config file (Claude Code: \`~/.config/claude/mcp.json\`,
Cursor: settings UI, etc.):

\`\`\`json
{
  "mcpServers": {
    "acrp": {
      "command": "acrp-mcp"
    }
  }
}
\`\`\`

Restart the AI client. Done. The MCP is now available in every project.

## Capabilities

- Resource \`acrp://protocol-summary\` — self-propagating protocol description
- Resource \`acrp://install\` — this file
- Tool \`inject_acrp(project_path)\` — generate AGENTS.md + AI-README.md
`;

const RESOURCES = [
    {
        uri: 'acrp://protocol-summary',
        name: 'ACRP Protocol Summary',
        description: 'Self-propagating protocol description (the relay mechanism)',
        load: () => PROTOCOL_SUMMARY,
    },
    {
        uri: 'acrp://install',
        name: 'Install Instructions',
        description: 'How to install and configure this MCP',
        load: () => INSTALL_INSTRUCTIONS,
    },
];

const TOOLS = [{
    name: 'inject_acrp',
    description: 'Generate AGENTS.md and AI-README.md for a project directory, following ACRP.',
    inputSchema: {
        type: 'object',
        properties: {
            project_path: {
                type: 'string',
                description: 'Absolute path to the project root',
            },
        },
        required: ['project_path'],
    },
}];

function send(obj) {
    process.stdout.write(JSON.stringify(obj) + '\n');
}
const ok = (id, result) => send({ jsonrpc: '2.0', id, result });
const err = (id, code, message) =>
    send({ jsonrpc: '2.0', id, error: { code, message } });

function handle(msg) {
    const { id, method, params } = msg;

    switch (method) {
        case 'initialize':
            ok(id, {
                protocolVersion: params?.protocolVersion || '2024-11-05',
                capabilities: { resources: {}, tools: {} },
                serverInfo: { name: 'acrp-mcp', version: VERSION },
            });
            break;

        case 'notifications/initialized':
        case 'notifications/cancelled':
            break;

        case 'ping':
            ok(id, {});
            break;

        case 'resources/list':
            ok(id, {
                resources: RESOURCES.map(({ uri, name, description }) =>
                    ({ uri, name, description })
                ),
            });
            break;

        case 'resources/read': {
            const r = RESOURCES.find(x => x.uri === params?.uri);
            if (!r) return err(id, -32602, `Unknown resource: ${params?.uri}`);
            ok(id, {
                contents: [{
                    uri: r.uri,
                    mimeType: 'text/markdown',
                    text: r.load(),
                }],
            });
            break;
        }

        case 'tools/list':
            ok(id, { tools: TOOLS });
            break;

        case 'tools/call': {
            if (params?.name !== 'inject_acrp') {
                return err(id, -32602, `Unknown tool: ${params?.name}`);
            }
            try {
                const result = injectAcrp(params.arguments?.project_path);
                ok(id, {
                    content: [{
                        type: 'text',
                        text: JSON.stringify(result, null, 2),
                    }],
                });
            } catch (e) {
                ok(id, {
                    content: [{ type: 'text', text: `Error: ${e.message}` }],
                    isError: true,
                });
            }
            break;
        }

        default:
            if (id !== undefined) err(id, -32601, `Unknown method: ${method}`);
    }
}

const rl = readline.createInterface({ input: process.stdin });
rl.on('line', (line) => {
    const t = line.trim();
    if (!t) return;
    try { handle(JSON.parse(t)); }
    catch {
        send({
            jsonrpc: '2.0', id: null,
            error: { code: -32700, message: 'Parse error' },
        });
    }
});
rl.on('close', () => process.exit(0));

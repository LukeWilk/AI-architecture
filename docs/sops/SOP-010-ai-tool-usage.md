# SOP-010: AI Tool Usage & Data Handling

**Version:** 1.0 · **Owner:** AI Platform Owner + Security · **Applies to:** All engineers

## Purpose & scope

Safe, compliant use of AI coding and planning tools (Cursor, Amazon Q, Bedrock agents, MCP).

## Roles

| Role | RACI |
|------|------|
| AIPO | **A** — platform config, audit |
| SEC | **A** — data classification rules |
| DEV | **R** — compliant daily use |

## Approved tools (primary stack)

| Tool | Use | Data boundary |
|------|-----|---------------|
| Cursor (enterprise) | IDE + agents | No prod PII; enterprise privacy mode |
| Amazon Q Developer | AWS API / IaC help | AWS enterprise boundary |
| Bedrock (via gateway) | Planning agents, batch tasks | VPC endpoint; logged prompts |
| MCP (internal) | ADR, spec, runbook search | Read-only; Accepted/Approved only |

Optional (team discretion): local Ollama for offline snippets — **no company code**.

## Procedure

### Before use

1. Confirm enterprise AI agreements active; privacy mode on in Cursor.
2. Complete onboarding module (SOP-011 step 5).

### During development

3. **Context hygiene** — Load Approved spec + Accepted ADRs via MCP; avoid pasting large prod log dumps.
4. **No prohibited data in prompts** — Prod PII, credentials, full customer records, unredacted security findings.
5. **Synthetic fixtures only** — Test data generated or from approved fixture library.
6. **Verify AI output** — Never merge unreviewed AI-generated code; treat as untrusted input.

### Prohibited

- Pasting production database exports into AI chat
- Sending secrets, API keys, or `.env` contents to models
- Using personal ChatGPT accounts for company code
- Auto-accepting AI architectural decisions (→ SOP-002)

### Audit

7. AIPO samples 1% of enterprise AI logs monthly for policy violations.
8. Violations → SEC review; repeat → access restriction per [SOP-012](SOP-012-exception-handling.md).

## Definition of Done (ongoing)

- [ ] Developer acknowledged AI policy annually
- [ ] No open SEC violations on AI usage

## Related SOPs

- [SOP-004](SOP-004-implementation.md) · [SOP-011](SOP-011-onboarding.md) · [SOP-012](SOP-012-exception-handling.md)

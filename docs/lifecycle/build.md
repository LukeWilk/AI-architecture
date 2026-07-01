---
title: Build
description: Spec-driven implementation, AI coding tools, linters, identity, and developer workflow
docType: hub
phase: build
---

# Build

**Outcome:** Code and IaC on a branch — aligned to approved spec, with no secrets in Git and pre-commit quality enforced.

## Goals

- Implement only against **Approved** spec  
- Enterprise AI tools with MCP context (ADRs, OpenAPI)  
- Pre-commit: format, lint, types, secret scan  
- Task roles and secrets via IaC — not hardcoded

## Key roles

| Role | Accountable for |
|------|-----------------|
| **DEV** | Implementation, PRs, unit tests |
| **ARCH** | Contract adherence, ADR proposals |
| **SEC** | Scan policy, IAM review on new permissions |

→ [Developer perspective](../perspectives/developer) · [Security perspective](../perspectives/security)

## Decision guides

- [AI toolkit catalog](../ai-toolkit)  
- [AI coding tools](../guides/ai-coding-tools)  
- [Spec-driven development](../guides/spec-driven-development)  
- [Linters & static analysis](../guides/static-analysis-linting)  
- [Identity, access & secrets](../guides/identity-access-secrets)

## Topic deep dives

- [Developer workflow](../developer-workflow) · [Identity & access](../identity-access-secrets)

## Reference SOPs

| SOP | Procedure |
|-----|-----------|
| [SOP-004](../sops/SOP-004-implementation) | Implementation |
| [SOP-010](../sops/SOP-010-ai-tool-usage) | AI tool usage |
| [SOP-011](../sops/SOP-011-onboarding) | Engineer onboarding |

## Gates before Verify

- Spec traceability in PR description  
- No secrets in diff (gitleaks)  
- No prod data in fixtures or prompts

---

[← Plan](./plan) · [Lifecycle overview](./index) · [Verify →](./verify)

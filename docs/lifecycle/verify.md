---
title: Verify
description: Automated testing, SAST/SCA, secret scans, PR review, and policy gates
docType: hub
phase: verify
---

# Verify

**Outcome:** Merge-ready `main` — all automated gates green, human review complete, no Critical security findings (or time-bound exception).

## Goals

- Full automated test pyramid in CI  
- Blocking secret/SAST/SCA gates  
- Human reviewer for logic, design, and spec fit  
- AI PR review advisory → blocking when tuned

## Key roles

| Role | Accountable for |
|------|-----------------|
| **DEV** | Fix failures, address review |
| **QA** | Test strategy, gate thresholds |
| **SEC** | Scan policy, exceptions ([SOP-012](../sops/SOP-012-exception-handling)) |

→ [QA perspective](../perspectives/qa) · [Security perspective](../perspectives/security)

## Decision guides

- [Automated testing & QA](../guides/automated-testing-qa)  
- [Linters & static analysis](../guides/static-analysis-linting)  
- [AI guardrails & security](../guides/ai-guardrails-security)  
- [Identity, access & secrets](../guides/identity-access-secrets)

## Topic deep dives

- [QA & guardrails](../qa-guardrails)

## Reference SOPs

| SOP | Procedure |
|-----|-----------|
| [SOP-005](../sops/SOP-005-pr-review) | PR review |
| [SOP-012](../sops/SOP-012-exception-handling) | Security exceptions |

## Non-negotiables

::: warning Block merge
Any **new secret pattern** in diff · **Critical** SAST/SCA (unless documented exception) · Failing contract tests
:::

---

[← Build](./build) · [Lifecycle overview](./index) · [Release →](./release)

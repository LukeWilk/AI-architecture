---
title: Release
description: CI/CD pipelines, progressive deployment, staging validation, and runtime on AWS
docType: hub
phase: release
---

# Release

**Outcome:** Change running in production (or next environment) — with audit trail, rollback path, and tier-appropriate approval.

## Goals

- CI/CD with scan stages **before** deploy  
- Staging validation + PO sign-off where required  
- Progressive prod rollout (canary / blue-green)  
- Metric gate before full promotion

## Key roles

| Role | Accountable for |
|------|-----------------|
| **SRE** | Pipeline, deploy approval (T1), rollback |
| **ARCH** | T1 deploy consult |
| **PO** | Staging behavior acceptance |

→ [DevOps perspective](../perspectives/devops-sre) · [Product manager perspective](../perspectives/product-manager)

## Decision guides

- [CI/CD & release](../guides/ci-cd-release)  
- [Runtime on AWS](../guides/runtime-aws)  
- [Identity, access & secrets](../guides/identity-access-secrets) (CI OIDC, deploy roles)

## Topic deep dives

- [CI/CD & observability](../cicd-observability)

## Reference SOPs

| SOP | Procedure |
|-----|-----------|
| [SOP-006](../sops/SOP-006-release-deploy) | Release & deploy |

## Tier gates (summary)

| Tier | Prod deploy |
|------|-------------|
| **T1** | SRE + ARCH approval, manual gate |
| **T2–T3** | Automated after metric gate |

See [GOVERNANCE](../GOVERNANCE) for full tier model.

---

[← Verify](./verify) · [Lifecycle overview](./index) · [Operate →](./operate)

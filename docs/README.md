---
title: Documentation map
description: Browse by role, lifecycle phase, or topic — use Ctrl+K to search
---

# Documentation Index

Use the **sidebar** to navigate, **Ctrl+K** (or ⌘K) to search all pages, and **On this page** (right) to jump within long guides.

Browse by **role**, **lifecycle phase**, **pillar**, or **decision topic**.

---

## AI toolkit

**Catalog:** [AI toolkit](ai-toolkit.md) — all AI tools and AI-adjacent artifacts (ADR, specs, MCP, portals, review bots) in one place with lifecycle impact.

---

## By lifecycle phase

**Hub pages:** [Lifecycle overview](lifecycle/) — [Plan](lifecycle/plan) · [Build](lifecycle/build) · [Verify](lifecycle/verify) · [Release](lifecycle/release) · [Operate](lifecycle/operate) · [Learn](lifecycle/learn)

| Phase | Decision guides | Topic docs | Reference SOPs |
|-------|-----------------|------------|----------------|
| **Plan** | [Planning & ADR](guides/planning-adr-specs.md) · [Data governance](guides/data-governance.md) | [planning-and-adr.md](planning-and-adr.md) · [data-governance.md](data-governance.md) | [SOP-001](sops/SOP-001-feature-intake.md)–[003](sops/SOP-003-spec-approval.md) |
| **Build** | [AI tools](guides/ai-coding-tools.md) · [Spec-driven](guides/spec-driven-development.md) · [Linters](guides/static-analysis-linting.md) · [Identity & secrets](guides/identity-access-secrets.md) | [developer-workflow.md](developer-workflow.md) | [SOP-004](sops/SOP-004-implementation.md) |
| **Verify** | [Testing](guides/automated-testing-qa.md) · [Guardrails](guides/ai-guardrails-security.md) · [Identity & secrets](guides/identity-access-secrets.md) | [qa-guardrails.md](qa-guardrails.md) | [SOP-005](sops/SOP-005-pr-review.md) |
| **Release** | [CI/CD](guides/ci-cd-release.md) · [Runtime](guides/runtime-aws.md) | [cicd-observability.md](cicd-observability.md) | [SOP-006](sops/SOP-006-release-deploy.md) |
| **Operate** | [Monitoring & tracing](guides/monitoring-tracing-logging.md) · [Dashboards](guides/dashboards-reporting.md) · [Incidents](guides/incident-management.md) | [operations-observability.md](operations-observability.md) | [SOP-007](sops/SOP-007-incident-response.md) |
| **Learn** | [Monitoring as QA](guides/observability-monitoring-qa.md) · [Human-in-the-loop](guides/human-in-the-loop-governance.md) | [GOVERNANCE.md](GOVERNANCE.md) | [SOP-008](sops/SOP-008-post-incident.md) |
| **Cross-cutting** | [Knowledge indexing](guides/knowledge-indexing-portals.md) | — | [SOP-009](sops/SOP-009-artifact-publish.md) · [010](sops/SOP-010-ai-tool-usage.md) |

---

## By role

**Hub:** [Role perspectives](perspectives/)

| Role | Perspective page | Also read |
|------|------------------|-----------|
| **Developer** | [Developer](perspectives/developer.md) | [Developer workflow](developer-workflow.md) · [AI coding tools](guides/ai-coding-tools.md) |
| **DevOps / SRE** | [DevOps / SRE](perspectives/devops-sre.md) | [Operations overview](operations-observability.md) · [CI/CD guide](guides/ci-cd-release.md) |
| **QA / Quality** | [QA](perspectives/qa.md) | [Automated testing](guides/automated-testing-qa.md) · [QA topic](qa-guardrails.md) |
| **Product manager / PO** | [Product manager](perspectives/product-manager.md) | [Planning guide](guides/planning-adr-specs.md) |
| **Scrum Master** | [Scrum Master](perspectives/scrum-master.md) | [Process overview](processes/overview.md) |
| **Program manager** | [Program manager](perspectives/program-manager.md) | [Governance](GOVERNANCE.md) |
| **Team lead / EM** | [Team lead / EM](perspectives/team-lead.md) | [Human-in-the-loop](guides/human-in-the-loop-governance.md) |
| **Architect** | [Architect](perspectives/architect.md) | [Planning & ADR](planning-and-adr.md) |
| **Security** | [Security](perspectives/security.md) | [Identity & secrets](guides/identity-access-secrets.md) · [Data governance](guides/data-governance.md) · [AI guardrails](guides/ai-guardrails-security.md) |

---

## By content pillar

**Hub:** [Pillars overview](pillars/)

| Pillar | Hub | Primary guides |
|--------|-----|----------------|
| **Delivery** | [Delivery](pillars/delivery.md) | Planning, spec-driven, [AI toolkit](ai-toolkit.md), human-in-the-loop |
| **Quality** | [Quality](pillars/quality.md) | Testing, linters, guardrails, monitoring-as-QA |
| **Platform** | [Platform](pillars/platform.md) | CI/CD, runtime AWS |
| **Data & security** | [Data & security](pillars/data-security.md) | Data governance, identity & secrets |
| **Operations** | [Operations](pillars/operations.md) | Monitoring, dashboards, incidents |

---

## Operations & data (guide cluster)

| Guide | Decisions covered |
|-------|-------------------|
| [Data governance layers](guides/data-governance.md) | Classification, access, retention, lineage, AI/RAG scope |
| [Identity, access & secrets](guides/identity-access-secrets.md) | SSO, IAM, RBAC, Secrets Manager, CI OIDC, permission matrix |
| [Monitoring, tracing & logging](guides/monitoring-tracing-logging.md) | OTel, CloudWatch, X-Ray, metrics/logs/traces, RUM |
| [Dashboards & reporting](guides/dashboards-reporting.md) | Golden dashboards, SLO reports, exec/compliance views |
| [Incident management](guides/incident-management.md) | PagerDuty, severity, comms, runbooks, postmortem |
| [Observability & monitoring QA](guides/observability-monitoring-qa.md) | Synthetics, deploy diff, regression feedback loop |

→ Full index (16 guides): [guides/README.md](guides/README.md)

---

## All decision guides

| Guide | Topic |
|-------|-------|
| [AI coding tools](guides/ai-coding-tools.md) | IDE agents, Q, Copilot |
| [Planning, ADR & specs](guides/planning-adr-specs.md) | Planning with AI |
| [Knowledge indexing & portals](guides/knowledge-indexing-portals.md) | ADR/spec discovery |
| [Spec-driven development](guides/spec-driven-development.md) | Contracts + AI codegen |
| [Automated testing & QA](guides/automated-testing-qa.md) | Test pyramid |
| [Linters & static analysis](guides/static-analysis-linting.md) | ESLint, SAST, pre-commit |
| [AI guardrails & security](guides/ai-guardrails-security.md) | Policy, AI review |
| [CI/CD & release](guides/ci-cd-release.md) | Pipelines, canary |
| [Runtime on AWS](guides/runtime-aws.md) | ECS, Lambda, data |
| [Monitoring, tracing & logging](guides/monitoring-tracing-logging.md) | Three pillars |
| [Dashboards & reporting](guides/dashboards-reporting.md) | SLO + exec views |
| [Incident management](guides/incident-management.md) | On-call, incidents |
| [Observability & monitoring QA](guides/observability-monitoring-qa.md) | Prod as QA |
| [Data governance layers](guides/data-governance.md) | Data + AI bounds |
| [Human-in-the-loop & governance](guides/human-in-the-loop-governance.md) | Gates, RACI |
| [Identity, access & secrets](guides/identity-access-secrets.md) | IAM, RBAC, secrets lifecycle |

---

## Operating model (reference only)

| Doc | Contents |
|-----|----------|
| [GOVERNANCE.md](GOVERNANCE.md) | Roles, RACI, tiers, artifact lifecycle |
| [processes/overview.md](processes/overview.md) | Value stream, phase gates |
| [sops/](sops/README.md) | 12 reference procedures |

---

## Other

- [HOW-TO-USE.md](HOW-TO-USE.md) — what this repo is and isn't
- [Adoption roadmap](adoption-roadmap.md) — week-by-week rollout
- [AI toolkit catalog](ai-toolkit.md) — tools and AI-adjacent artifacts
- [Glossary](glossary.md) — terms and abbreviations
- [ARCHITECTURE.md](ARCHITECTURE.md) — conceptual diagrams and layer model

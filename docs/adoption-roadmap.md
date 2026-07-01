---
title: Adoption roadmap
description: Week-by-week path to adopt this reference model — one phase at a time
---

# Adoption roadmap

Don't roll out everything at once. This roadmap helps a team adopt the reference model **incrementally** and record choices in **your** ADRs.

::: tip Reference only
Customize timelines for your org size, compliance tier, and existing tooling.
:::

## Week 1 — Orient

| Day | Action | Read |
|-----|--------|------|
| 1 | Team lead walks through [How to use](./HOW-TO-USE) | [HOW-TO-USE](./HOW-TO-USE) |
| 2 | Pick **one** lifecycle phase to improve first | [Lifecycle hubs](./lifecycle/) |
| 3 | Each role reads their [perspective](./perspectives/) | Role pages |
| 4 | Align on [GOVERNANCE](./GOVERNANCE) roles (adapt RACI) | [GOVERNANCE](./GOVERNANCE) |
| 5 | Record "we start with phase X" in **your** ADR | — |

**Recommended first phase:** [Plan](./lifecycle/plan) (ADR + spec) or [Verify](./lifecycle/verify) (CI gates).

## Weeks 2–3 — Plan & define

| Milestone | Deliverable |
|-----------|-------------|
| Intake template | Customized [SOP-001](./sops/SOP-001-feature-intake) |
| ADR folder | `docs/adr/` in **your** repo + [SOP-002](./sops/SOP-002-adr-lifecycle) |
| Spec approval | [SOP-003](./sops/SOP-003-spec-approval) with ARCH/PO owners |
| Data classification | Glossary started — [Data governance guide](./guides/data-governance) |
| AI policy | [SOP-010](./sops/SOP-010-ai-tool-usage) signed by all engineers |

## Weeks 4–6 — Build & verify

| Milestone | Deliverable |
|-----------|-------------|
| AI tooling | Decision: [AI coding tools guide](./guides/ai-coding-tools) → your ADR |
| Pre-commit | gitleaks + linter — [Linters guide](./guides/static-analysis-linting) |
| CI gates | Secret + unit + SAST on PR — [SOP-005](./sops/SOP-005-pr-review) |
| PR review | Human reviewer required; AI advisory |
| Identity baseline | SSO + no human access keys — [Identity guide](./guides/identity-access-secrets) |

## Weeks 7–9 — Release & platform

| Milestone | Deliverable |
|-----------|-------------|
| CI/CD | [CI/CD guide](./guides/ci-cd-release) → pipeline in **your** repo |
| Staging | PO sign-off gate — [Release hub](./lifecycle/release) |
| Runtime | Compute choice ADR — [Runtime AWS guide](./guides/runtime-aws) |
| Deploy roles | Separate build vs deploy IAM (OIDC) |

## Weeks 10–12 — Operate & learn

| Milestone | Deliverable |
|-----------|-------------|
| Observability | Metrics + traces — [Monitoring guide](./guides/monitoring-tracing-logging) |
| Dashboards | Golden dashboard per service |
| On-call | [Incident guide](./guides/incident-management) + [SOP-007](./sops/SOP-007-incident-response) |
| Postmortem | [SOP-008](./sops/SOP-008-post-incident) for Sev-1/2 |
| Feedback loop | [Monitoring as QA](./guides/observability-monitoring-qa) ticket type |

## Month 4+ — Mature

- [Knowledge indexing](./guides/knowledge-indexing-portals) for agent context  
- Tier model fully enforced ([GOVERNANCE](./GOVERNANCE))  
- Exception process live ([SOP-012](./sops/SOP-012-exception-handling))  
- Quarterly review of pitfalls in [decision guides](./guides/README) you adopted  

## Success metrics (examples)

| Metric | Target |
|--------|--------|
| PRs without Approved spec | → 0 |
| Secret scan bypass merges | → 0 |
| Mean time to rollback | Defined + tested |
| Postmortem action closure | &gt; 90% in 30 days |

## Related

- [Glossary](./glossary) · [Documentation map](./README) · [Architecture](./ARCHITECTURE)

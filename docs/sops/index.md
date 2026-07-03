# Standard Operating Procedures (SOPs)

---
title: Standard Operating Procedures (SOPs)
description: Index and guidance for Standard Operating Procedures referenced across the repository.
---

**Reference playbooks only.** These describe how a team *might* operate — customize for your org, tooling, and compliance tier. **Do not implement CI labels, workflows, or automation from this repository.**

Each SOP follows the same structure: purpose, RACI, steps, Definition of Done, SLA.

**Before customizing:** read the relevant [decision guide](../guides/index.md) for alternatives and pitfalls.

1. **Purpose & scope**
2. **Roles (RACI)**
3. **Prerequisites**
4. **Procedure** (numbered steps)
5. **Definition of Done**
6. **SLA & escalation**
7. **Related SOPs**

---

## SOP index

| SOP | Title | Owner |
|-----|-------|-------|
| [SOP-001](SOP-001-feature-intake.md) | Feature intake & prioritization | PO |
| [SOP-002](SOP-002-adr-lifecycle.md) | ADR creation, review, acceptance | ARCH |
| [SOP-003](SOP-003-spec-approval.md) | Spec authoring & approval | ARCH + PO |
| [SOP-004](SOP-004-implementation.md) | Spec-driven implementation | DEV |
| [SOP-005](SOP-005-pr-review.md) | Pull request review & merge | DEV |
| [SOP-006](SOP-006-release-deploy.md) | Release & deployment | SRE |
| [SOP-007](SOP-007-incident-response.md) | Incident response | SRE |
| [SOP-008](SOP-008-post-incident.md) | Post-incident & regression loop | SRE + DEV |
| [SOP-009](SOP-009-artifact-publish.md) | ADR & spec publish/index | SRE / Platform |
| [SOP-010](SOP-010-ai-tool-usage.md) | AI tool usage & data handling | AIPO + SEC |
| [SOP-011](SOP-011-onboarding.md) | Engineer onboarding | EM |
| [SOP-012](SOP-012-exception-handling.md) | Policy & gate exceptions | SEC / EM |

---

## How SOPs relate to architecture

| Architecture layer | Primary SOPs |
|--------------------|--------------|
| Planning & knowledge | SOP-001, 002, 003, 009 |
| Developer loop | SOP-004, 010, 011 |
| QA & guardrails | SOP-005 (CI gates embedded) |
| CI/CD | SOP-006 |
| Observability | SOP-007, 008 |
| Governance | SOP-012, [GOVERNANCE.md](../GOVERNANCE.md) |

---

## SOP change control

- SOP changes require PR review by process owner + one affected role
- Major changes (new gates, new approvers) require ARCH sign-off
- Version noted in each SOP footer: `SOP-XXX v1.0`

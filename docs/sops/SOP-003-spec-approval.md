# SOP-003: Spec Authoring & Approval

**Version:** 1.0 · **Owner:** Architect + PO · **Gate:** G1

## Purpose & scope

Produce an **Approved** OpenAPI (and optional AsyncAPI/BDD) contract that unlocks implementation (SOP-004).

## Roles

| Role | RACI |
|------|------|
| ARCH | **A** — API design approval |
| PO | **A** — acceptance criteria |
| DEV | R — AI-assisted draft, technical review |
| SEC | C — auth, data exposure |

## Prerequisites

- SOP-001 complete (tier, acceptance criteria draft)
- Accepted ADRs linked for architectural constraints

## Procedure

1. **Branch** — `spec/feature-XXX` from `main`.
2. **AI draft spec** — From ticket + ADRs, generate OpenAPI 3.1 skeleton: paths, schemas, error model, `x-adr` refs.
3. **BDD scenarios** — AI drafts Gherkin for happy path + key edge cases; PO reviews language.
4. **Set status** — `info.x-status: draft` → `in-review` when PR opened.
5. **Review PR** — ARCH: REST/async design, versioning, breaking change policy. PO: scenarios match intent. SEC: auth scopes if external.
6. **Contract lint** — CI runs Spectral (or equivalent); zero errors required.
7. **Approve** — ARCH + PO comment `approved`; set `info.x-status: approved`.
8. **Merge** — Triggers SOP-009; CI applies `implementation-unlocked` label to linked ticket.

## Definition of Done

- [ ] `info.x-status: approved`
- [ ] All operations have: summary, error responses, linked ADR IDs where architectural
- [ ] BDD file linked in spec README or `x-bdd` extension
- [ ] Breaking change section filled if modifying existing API
- [ ] Contract lint CI green

## SLA & escalation

| Milestone | SLA |
|-----------|-----|
| Draft → in-review | ≤ 3 business days after intake |
| in-review → approved | ≤ 2 business days |

Escalation: PO/ARCH disagreement → EM + weekly ARB.

## Related SOPs

- [SOP-001](SOP-001-feature-intake.md) · [SOP-002](SOP-002-adr-lifecycle.md) · [SOP-004](SOP-004-implementation.md) · [SOP-009](SOP-009-artifact-publish.md)

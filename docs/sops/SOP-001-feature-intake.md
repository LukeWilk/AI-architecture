# SOP-001: Feature Intake & Prioritization

**Version:** 1.0 · **Owner:** Product Owner · **Gate:** G0

## Purpose & scope

Convert raw business requests into scored, tier-classified backlog items ready for spec/ADR work (SOP-002, SOP-003).

**In scope:** Epics, features, architectural spikes. **Out of scope:** Production bug fixes (use SOP-007/008 track).

## Roles

| Role | RACI |
|------|------|
| PO | **A/R** — triage, prioritize |
| ARCH | C — feasibility, tier validation |
| DEV | C — estimate complexity |
| SEC | C — data classification when PII involved |

## Prerequisites

- Request logged in backlog tool (Jira/Linear) with requester and business context
- Access to existing service catalog (Backstage)

## Procedure

1. **Log request** — Create ticket with: problem statement, success metric, target date, affected users.
2. **Classify data** — SEC consult if PII, payments, or regulated data (≤ 1 day).
3. **Assign service tier** — ARCH confirms T1/T2/T3 per [GOVERNANCE.md](../GOVERNANCE.md).
4. **AI-assisted sizing** — Planning agent produces: similar past work, draft acceptance criteria, dependency list. PO validates.
5. **Score & prioritize** — PO ranks using RICE or WSJF; documents decision in ticket.
6. **Route** — If architectural fork likely → flag `needs-adr`. If API change → flag `needs-spec`.
7. **Schedule** — Place in refinement queue; link to epic.

## Definition of Done

- [ ] Ticket has tier, priority score, acceptance criteria draft
- [ ] Data classification recorded
- [ ] Flags set: `needs-adr` / `needs-spec` / neither
- [ ] PO comment: approved for define phase

## SLA & escalation

| Milestone | SLA |
|-----------|-----|
| Triage | 2 business days from submission |
| SEC classification (when required) | 1 business day |

Escalation: blocked > SLA → EM.

## Related SOPs

- [SOP-002](SOP-002-adr-lifecycle.md) · [SOP-003](SOP-003-spec-approval.md) · [SOP-012](SOP-012-exception-handling.md)

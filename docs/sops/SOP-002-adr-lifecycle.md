# SOP-002: ADR Lifecycle

**Version:** 1.0 · **Owner:** Architect · **Gate:** G1 (partial)

## Purpose & scope

Create, review, accept, and publish Architecture Decision Records. AI drafts; architect **must** accept before the decision binds the org or AI agents.

## Roles

| Role | RACI |
|------|------|
| ARCH | **A** — accept/reject ADR |
| DEV | R — propose, draft via AI |
| SEC | C — security implications |
| SRE | C — operability, cost |

## Prerequisites

- Ticket flagged `needs-adr` OR implementation blocked on unresolved design choice
- Planning agent or MCP access to existing Accepted ADR corpus

## Procedure

### Create

1. **Identify decision** — One ADR per decision (not per feature). Name: `NNNN-short-title.md`.
2. **AI draft** — Prompt planning agent with: context, constraints, existing ADRs, AWS preference. Output status: `proposed`.
3. **Minimum content** — Context, ≥ 2 options with trade-offs, recommendation, consequences, links to tickets/specs.
4. **Open PR** — Path: `docs/adr/NNNN-*.md`. Tag ARCH + SEC (if external exposure).

### Review

5. **Architect review** — Validate options are real, recommendation fits NFRs, no conflict with Accepted ADRs.
6. **Amend** — AI may refine per comments; human edits always allowed.
7. **Accept or reject** — ARCH sets status `accepted` or `rejected` in front matter. Rejected ADRs stay in Git with rationale.

### Supersede

8. When decision changes, create new ADR; mark old `superseded` with link to successor. Never edit Accepted ADR body in place.

### Publish

9. Merge PR → triggers [SOP-009](SOP-009-artifact-publish.md) indexing.

## Definition of Done

- [ ] Status is `accepted` (or `rejected` with documented reason)
- [ ] No unresolved conflict with other Accepted ADRs
- [ ] Linked from spec (`x-adr`) or ticket if applicable
- [ ] Indexed within 15 min of merge (SOP-009)

## SLA & escalation

| Milestone | SLA |
|-----------|-----|
| Proposed → Accepted | ≤ 3 business days |
| Weekly ARB backlog | Review all Proposed > 5 days |

Escalation: cross-team conflict → Architecture review board (weekly).

## AI boundaries

| AI may | AI may not |
|--------|------------|
| Draft options and recommendation | Set status to `accepted` |
| Retrieve related ADRs | Merge PR |
| Flag conflicts with prior ADRs | Override architect decision |

## Related SOPs

- [SOP-003](SOP-003-spec-approval.md) · [SOP-009](SOP-009-artifact-publish.md) · [GOVERNANCE.md](../GOVERNANCE.md)

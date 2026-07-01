# SOP-004: Spec-Driven Implementation

**Version:** 1.0 · **Owner:** Developer · **Gate:** G2

## Purpose & scope

Implement features using AI-assisted coding bounded by Approved specs and Accepted ADRs.

## Roles

| Role | RACI |
|------|------|
| DEV | **R/A** — implementation |
| ARCH | C — design questions |
| AIPO | I — AI policy compliance |

## Prerequisites

- Ticket has `implementation-unlocked` label
- Approved spec path documented in ticket
- Local dev environment per [SOP-011](SOP-011-onboarding.md)
- [SOP-010](SOP-010-ai-tool-usage.md) acknowledged

## Procedure

1. **Load context** — In Cursor: `@specs/openapi/...`, linked ADRs via MCP, ticket ID in branch name `feat/TICKET-123-...`.
2. **Scaffold** — AI generates handler, DTO, mapper, contract test stubs from OpenAPI operation IDs.
3. **Implement** — Steer AI operation-by-operation; do not implement undeclared endpoints.
4. **Tests** — AI generates/updates: unit, contract (Schemathesis/Pact), integration if DB/queue involved.
5. **Local verification** — `pre-commit run --all-files`; full local test suite green.
6. **Self-review** — Diff against spec: every changed operation maps to OpenAPI path.
7. **Open PR** — Template: spec link, ADR IDs, test evidence, tier label → [SOP-005](SOP-005-pr-review.md).

## Definition of Done (PR ready)

- [ ] All in-scope OpenAPI operations implemented
- [ ] Contract tests cover 100% of touched operations
- [ ] Unit tests for business logic branches
- [ ] No secrets, no prod data in fixtures
- [ ] PR template complete

## Anti-patterns (stop and escalate)

| Situation | Action |
|-----------|--------|
| Spec gap discovered | Stop coding → SOP-003 amendment PR |
| New architectural choice | Stop → SOP-002 ADR Proposed |
| AI suggests undeclared API | Reject; extend spec first |
| Tests fail intermittently | Fix before PR; no `@flaky` without SRE ticket |

## Related SOPs

- [SOP-003](SOP-003-spec-approval.md) · [SOP-005](SOP-005-pr-review.md) · [SOP-010](SOP-010-ai-tool-usage.md)

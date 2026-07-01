# SOP-005: Pull Request Review & Merge

**Version:** 1.0 · **Owner:** Developer (reviewer) · **Gate:** G2

## Purpose & scope

Merge code only when automated guardrails pass and a qualified human approves. AI review is advisory unless configured as blocking for specific rules.

## Roles

| Role | RACI |
|------|------|
| DEV (author) | R |
| DEV (reviewer) | **A** — merge decision |
| ARCH | C — when ADR/spec touched |
| CI system | **A** — objective gates |

## Prerequisites

- PR from SOP-004 with template complete
- CI pipeline configured per tier ([qa-guardrails.md](../qa-guardrails.md))
- Linters, formatters, and static analyzers defined per [Linters & static analysis](../guides/static-analysis-linting.md)

## Procedure

### Author

1. Push branch; ensure all CI checks triggered.
2. Request reviewer (not self for T1/T2).
3. Address AI review comments: fix or document dismiss reason in PR thread.

### Reviewer

4. **Verify traceability** — Spec link, ADR IDs, ticket ID present.
5. **AI review** — Read Bugbot/CodeGuru summary; validate high-severity findings.
6. **Human spot-check** — Focus: error handling, auth, idempotency, test quality (not manual test execution).
7. **Contract alignment** — Spot-check that tests reference OpenAPI operation IDs.
8. **Approve** — Only when all required CI checks green (see checklist below).

### Merge

9. Squash or merge per team convention; delete branch.
10. Release pipeline triggered → [SOP-006](SOP-006-release-deploy.md).

## Required CI checks (minimum)

See [Linters & static analysis](../guides/static-analysis-linting.md) for tool options. Checklist:

| Check | T1 | T2 | T3 |
|-------|----|----|-----|
| Format + lint + types | ✓ | ✓ | ✓ |
| Unit tests | ✓ | ✓ | ✓ |
| Contract tests | ✓ | ✓ | ✓ |
| Integration | ✓ | ✓ | optional |
| E2E | ✓ | ✓ | optional |
| SAST + SCA | ✓ | ✓ | ✓ |
| Secret scan | ✓ | ✓ | ✓ |
| OPA policy | ✓ | ✓ | ✓ |
| AI diff review | ✓ | ✓ | advisory |
| 1 human approval | ✓ | ✓ | ✓ |
| ARCH approval (ADR/spec change) | ✓ | if touched | if touched |

## Definition of Done

- [ ] All required checks green
- [ ] ≥ 1 human approval
- [ ] No unresolved Critical/High security findings
- [ ] Merged to `main`

## SLA & escalation

| Milestone | SLA |
|-----------|-----|
| First review | ≤ 1 business day |
| Author response to feedback | ≤ 1 business day |

Escalation: review stale > 2 days → EM assigns reviewer.

## Related SOPs

- [SOP-004](SOP-004-implementation.md) · [SOP-006](SOP-006-release-deploy.md) · [qa-guardrails.md](../qa-guardrails.md) · [static-analysis-linting.md](../guides/static-analysis-linting.md)

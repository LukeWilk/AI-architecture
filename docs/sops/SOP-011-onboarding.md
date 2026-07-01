# SOP-011: Engineer Onboarding

**Version:** 1.0 · **Owner:** Engineering Manager

## Purpose & scope

Bring a new engineer to productive, compliant contribution within five business days.

## Day 1 — Access & environment

| Step | Action | Owner |
|------|--------|-------|
| 1 | AWS SSO, Git, Backstage, PagerDuty (if on-call roster) — permission sets per [Identity guide](../guides/identity-access-secrets.md) | IT + EM |
| 2 | Clone monorepo; install pre-commit hooks | DEV buddy |
| 3 | Open devcontainer or `make dev`; run test suite once | DEV buddy |
| 4 | Cursor enterprise + MCP servers configured | AIPO doc |

## Day 2 — Context

| Step | Action |
|------|--------|
| 5 | Read [GOVERNANCE.md](../GOVERNANCE.md) + [SOP-010](SOP-010-ai-tool-usage.md); sign acknowledgment |
| 6 | Backstage tour: service catalog, TechDocs, ADR index |
| 7 | Review 2 Accepted ADRs for team's domain |

## Day 3 — Process walkthrough

| Step | Action |
|------|--------|
| 8 | Shadow PR review ([SOP-005](SOP-005-pr-review.md)) |
| 9 | Walk through spec → implement flow with buddy ([SOP-003](SOP-003-spec-approval.md), [SOP-004](SOP-004-implementation.md)) |

## Day 4–5 — First contribution

| Step | Action |
|------|--------|
| 10 | Pick "good first issue" with Approved spec already in place |
| 11 | Open PR; buddy reviews |
| 12 | EM confirms onboarding checklist complete |

## Definition of Done

- [ ] All access provisioned
- [ ] Local tests pass
- [ ] AI policy signed
- [ ] First PR merged or in review

## Related SOPs

- [SOP-010](SOP-010-ai-tool-usage.md) · [developer-workflow.md](../developer-workflow.md) · [Identity guide](../guides/identity-access-secrets.md)

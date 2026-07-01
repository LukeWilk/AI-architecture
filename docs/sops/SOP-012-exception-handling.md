# SOP-012: Policy & Gate Exceptions

**Version:** 1.0 · **Owner:** Security (security exceptions) / EM (process exceptions)

## Purpose & scope

Documented, time-bound exceptions when CI gates or policies cannot be met. **Default: fix forward, not except.**

## Roles

| Role | RACI |
|------|------|
| SEC | **A** — security scan / data policy exceptions |
| EM | **A** — process/timeline exceptions |
| ARCH | C — architectural exceptions |
| DEV | R — exception request |

## Prerequisites

- Blocked merge or deploy with documented failure
- Good-faith effort to remediate (link to attempt PR or ticket)

## Procedure

1. **Request** — Ticket template: gate failed, reason, blast radius, proposed expiry, compensating controls.
2. **Risk assessment** — SEC (security) or ARCH (design) documents risk score.
3. **Approve or deny** — Approver comments on ticket; deny → must fix forward.
4. **Record** — If approved: exception ID, expiry date (max 30 days security, 14 days other), compensating control (e.g., manual SRE review, WAF rule).
5. **CI label** — `exception-SEC-123` applied; pipeline allows specific gate skip (audited).
6. **Renewal** — Requires new approval; max 1 renewal.
7. **Close** — Remediation PR merged; exception revoked.

## Non-exceptionable

- Production customer PII in AI prompts
- Merge with active Critical secret scan finding
- Deploy T1 without canary
- Skip contract tests on API changes

## Definition of Done

- [ ] Exception ticket approved with expiry
- [ ] Compensating control active
- [ ] Remediation tracked before expiry

## SLA

| Type | Review SLA |
|------|------------|
| Security | 1 business day |
| Process | 2 business days |

## Related SOPs

- [SOP-005](SOP-005-pr-review.md) · [SOP-010](SOP-010-ai-tool-usage.md) · [GOVERNANCE.md](../GOVERNANCE.md)

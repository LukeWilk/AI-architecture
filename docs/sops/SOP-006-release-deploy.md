# SOP-006: Release & Deployment

**Version:** 1.0 · **Owner:** SRE · **Gate:** G3

## Purpose & scope

Progressive deployment to AWS with automated verification at each stage. Tier determines approval requirements.

## Roles

| Role | RACI |
|------|------|
| SRE | **A** — prod safety |
| DEV | R — fix deploy failures |
| PO | **A** — staging behavior sign-off (T1/T2 user-facing) |
| ARCH | C — T1 deploy approval |

## Prerequisites

- Merge to `main` or release branch
- Container in ECR with scan pass (no Critical CVEs)
- Feature flags configured in AppConfig if gradual rollout

## Procedure

### Staging

1. **Pipeline trigger** — CodePipeline / GitHub Actions deploys to staging account.
2. **Automated verification** — Contract + integration + E2E against staging; DAST if configured.
3. **Synthetic smoke** — CloudWatch Synthetics canaries pass.
4. **PO staging sign-off** — PO confirms acceptance criteria on staging (not manual QA scripts — demo + green metrics). Record in ticket.

### Production

5. **Pre-deploy** — Verify SLO error budget not exhausted; freeze if burn rate critical.
6. **Deploy strategy** — T1: blue/green or canary 10% → 50% → 100%. T2: automated canary. T3: rolling.
7. **T1 approval** — SRE + ARCH manual approve in pipeline gate before prod promotion.
8. **Metric gate** — Compare error rate, p99 latency vs pre-deploy baseline (15 min window). Auto-rollback on breach.
9. **Post-deploy** — Enable/update monitoring baselines; verify canaries green 30 min.
10. **Close loop** — Update ticket; notify stakeholders.

## Definition of Done

- [ ] Staging synthetics green
- [ ] PO sign-off recorded (T1/T2 user-facing)
- [ ] Prod deploy complete with metric gate passed
- [ ] Canaries green 30 min post-deploy
- [ ] Deploy recorded in change log / Backstage

## SLA & escalation

| Tier | Max deploy window | Rollback trigger |
|------|-------------------|------------------|
| T1 | Business hours preferred | Auto on SLO breach |
| T2 | Anytime with canary | Auto on canary fail |
| T3 | Anytime | Auto on health check fail |

Escalation: failed rollback → Sev-1 [SOP-007](SOP-007-incident-response.md).

## Related SOPs

- [SOP-005](SOP-005-pr-review.md) · [SOP-007](SOP-007-incident-response.md) · [cicd-observability.md](../cicd-observability.md)

# SOP-007: Incident Response

**Version:** 1.0 · **Owner:** SRE · **Gate:** G4

> **Decision guide:** [Incident management](../guides/incident-management.md) · [Monitoring & tracing](../guides/monitoring-tracing-logging.md) · [Dashboards](../guides/dashboards-reporting.md)

## Purpose & scope

Detect, triage, mitigate, and communicate production incidents. AI assists correlation and draft comms; humans own mitigation decisions.

## Roles

| Role | RACI |
|------|------|
| SRE (on-call) | **A/R** — incident commander |
| DEV | R — fix deployment |
| ARCH | C — architectural mitigation |
| SEC | C — security incidents |
| PO | I — customer comms input |

## Severity definitions

| Sev | Criteria | Response |
|-----|----------|----------|
| **1** | T1 outage or data breach | Page immediately; war room |
| **2** | T2 degraded SLO | Page on-call; ticket |
| **3** | T3 / non-customer impact | Ticket next business day |
| **4** | Cosmetic / low risk | Backlog |

## Procedure

### Detect & acknowledge

1. **Alert fires** — CloudWatch, Synthetics, GuardDuty, or deploy metric gate.
2. **Acknowledge** — On-call ack in PagerDuty within SLA (T1: 15 min).
3. **Auto-enrichment** — EventBridge Lambda attaches: recent deploys, trace samples, AI-drafted summary (hypothesis labeled).

### Triage

4. **Classify severity** — Use table above; escalate Sev-1 to EM + ARCH within 1h.
5. **Correlate deploy** — If alert within 30 min of deploy → consider rollback ([SOP-006](SOP-006-release-deploy.md)).
6. **AI log analysis** — Use OpenSearch ML / Bedrock for pattern clustering; **human validates** root cause hypothesis.

### Mitigate

7. **Mitigate first** — Rollback, scale, feature flag off, traffic shift — before deep debugging.
8. **Communicate** — Status page + internal Slack; PO consulted for external messaging (Sev-1/2).
9. **Document** — Incident ticket with timeline, actions, current status.

### Resolve

10. **Verify** — SLOs green; canaries pass 30 min.
11. **Close incident** — Hand off to [SOP-008](SOP-008-post-incident.md) for Sev-1/2.

## Definition of Done

- [ ] Service restored to SLO
- [ ] Incident ticket complete with timeline
- [ ] Stakeholders notified
- [ ] Sev-1/2 → SOP-008 initiated

## SLA

| Sev | Ack | Mitigation target |
|-----|-----|-------------------|
| 1 | 15 min | 1 h to mitigate or rollback |
| 2 | 30 min | 4 h |
| 3 | 4 h | 2 business days |

## Related SOPs

- [SOP-006](SOP-006-release-deploy.md) · [SOP-008](SOP-008-post-incident.md) · [cicd-observability.md](../cicd-observability.md)

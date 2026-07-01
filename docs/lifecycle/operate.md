---
title: Operate
description: Monitoring, tracing, dashboards, incidents, and on-call for production systems
docType: hub
phase: operate
---

# Operate

**Outcome:** Reliable production service — observable, alertable, with defined incident response and SLOs.

## Goals

- Metrics, logs, traces (OpenTelemetry-aligned)  
- Golden dashboards + SLO/error budgets  
- On-call with severity model and runbooks  
- GuardDuty / access anomalies monitored

## Key roles

| Role | Accountable for |
|------|-----------------|
| **SRE** | SLOs, on-call, incident commander |
| **SEC** | Security incidents, breach playbooks |
| **DEV** | Fix forward during incidents |

→ [DevOps perspective](../perspectives/devops-sre) · [Security perspective](../perspectives/security)

## Decision guides

- [Monitoring, tracing & logging](../guides/monitoring-tracing-logging)  
- [Dashboards & reporting](../guides/dashboards-reporting)  
- [Incident management](../guides/incident-management)

## Topic deep dives

- [Operations & observability](../operations-observability)

## Reference SOPs

| SOP | Procedure |
|-----|-----------|
| [SOP-007](../sops/SOP-007-incident-response) | Incident response |

## Pitfalls

| Pitfall | Mitigation |
|---------|------------|
| Alerts without runbooks | Every page links to runbook in repo |
| PII in logs/traces | Redaction standards ([Data governance](../guides/data-governance)) |
| Hero culture on incidents | Blameless postmortem → [Learn](./learn) |

---

[← Release](./release) · [Lifecycle overview](./index) · [Learn →](./learn)

# Guide: Incident Management

**Decision:** How to detect, triage, communicate, and resolve production incidents — with AI assistance but human command.

Related: [SOP-007](../sops/SOP-007-incident-response.md) · [SOP-008](../sops/SOP-008-post-incident.md) · [monitoring-tracing-logging.md](monitoring-tracing-logging.md) · [dashboards-reporting.md](dashboards-reporting.md)

---

## Incident lifecycle

```text
Detect → Ack → Triage → Mitigate → Resolve → Postmortem → Follow-up artifacts
```

Humans **command** incidents; AI **drafts** summaries, log clusters, and ticket text.

---

## On-call & paging

| Platform | Pros | Cons |
|----------|------|------|
| **PagerDuty** | Industry standard; escalation policies | Cost |
| **Opsgenie (Atlassian)** | Jira integration | Similar cost |
| **AWS Incident Manager** | AWS-native | Less feature-rich vs PagerDuty |
| **SNS → email only** | Free | **Pitfall:** not real on-call |

**Recommended:** PagerDuty or Opsgenie for T1/T2; SNS/Slack for T3 informational.

---

## Alert → incident routing

| Pattern | Pros | Cons |
|---------|------|------|
| **CloudWatch Alarm → SNS → PagerDuty** | Simple | Alarm sprawl |
| **EventBridge rules** | Rich routing by tag/severity | Rule maintenance |
| **Alertmanager (Prometheus)** | S grouping/inhibition | Self-operate |
| **Vendor unified alerts** | One pane | Lock-in |

### Enrichment (AI-assisted)

| Step | Automated | Human |
|------|-----------|-------|
| Attach deploy version | Lambda on EventBridge | — |
| Link recent traces | Query by service + time | Validates relevance |
| Draft root-cause hypothesis | Bedrock on log sample | **Must validate** |
| Create Jira/Linear ticket | API call | Assigns owner |

**Pitfall:** Auto-closing incidents when alarm clears but customer still impacted → use SLO-based "all clear" not single metric.

---

## Severity model

| Sev | Example | Response | Comms |
|-----|---------|----------|-------|
| **1** | T1 outage, data breach | Page immediately; incident commander | Status page + exec |
| **2** | Degraded SLO | Page on-call | Internal + optional status |
| **3** | Non-customer impact | Ticket next day | Internal |
| **4** | Cosmetic | Backlog | None |

Align with [GOVERNANCE.md](../GOVERNANCE.md) tiers.

---

## Communication

| Channel | Use |
|---------|-----|
| **Status page (Statuspage, Instatus)** | Customer-facing Sev-1/2 |
| **Slack war room** | Internal coordination |
| **Incident doc (shared)** | Timeline single source of truth |
| **Stakeholder email** | PO/legal for breach |

**Pitfall:** Engineers fix in silence → PO learns from Twitter. Template comms in runbook.

---

## Runbooks

| Approach | Pros | Cons |
|----------|------|------|
| **Markdown in Git / Backstage** | Versioned; AI retrievable via MCP | Must stay current |
| **PagerDuty runbooks** | Linked from alert | Duplicate of Git |
| **AI-generated from architecture** | Fast first draft | Wrong without human review |

Refresh runbooks after every Sev-1/2 ([SOP-008](../sops/SOP-008-post-incident.md)).

---

## Major incident process (reference)

1. **Declare** incident; assign Incident Commander (IC) — usually SRE  
2. **Stabilize** — rollback, scale, feature flag off (mitigate before root cause)  
3. **Communicate** — status page + internal updates on schedule  
4. **Investigate** — traces, logs, deploy correlation; AI assists, humans decide  
5. **Resolve** — SLO green; canaries pass  
6. **Postmortem** — blameless; action items with owners  
7. **Follow-up** — regression test, ADR, alert tuning ([SOP-008](../sops/SOP-008-post-incident.md))

---

## Security & data incidents

| Type | Extra steps |
|------|-------------|
| **Suspected breach** | Engage SEC immediately; preserve logs; restrict AI on incident data |
| **PII exposure** | Legal/privacy; erasure assessment |
| **Ransomware / GuardDuty critical** | Isolate; no AI analysis of malware samples in public models |

Cross-link [data-governance.md](data-governance.md).

---

## Pitfalls

| Pitfall | Why it hurts | Mitigation |
|---------|--------------|------------|
| **Alert without runbook** | On-call improvises | Every T1 alert links runbook |
| **Too many pages** | Burnout; missed real pages | SLO-based alerts; aggregation |
| **AI RCA accepted blindly** | Wrong fix prolongs outage | Label AI output as hypothesis |
| **No incident commander** | Chaos in war room | IC role in SOP-007 |
| **Postmortem skipped** | Repeat incidents | Mandatory Sev-1/2 |
| **Status page never updated** | Customer trust loss | Comms role in severity table |
| **Debugging with prod PII in Slack** | Secondary breach | Redacted summaries only |

---

## Recommended starting point

PagerDuty + EventBridge enrichment + Git runbooks in Backstage + severity table in handbook + blameless postmortem template + SOP-007/SOP-008 adapted to your org.

---

## Related

- [Observability as QA](observability-monitoring-qa.md) · [Dashboards](dashboards-reporting.md)

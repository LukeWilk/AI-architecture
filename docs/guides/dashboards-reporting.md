# Guide: Dashboards & Reporting

**Decision:** What to visualize for on-call, engineering, product, and leadership — and how reporting connects to SLOs and incidents.

Related: [monitoring-tracing-logging.md](monitoring-tracing-logging.md) · [incident-management.md](incident-management.md) · [observability-monitoring-qa.md](observability-monitoring-qa.md)

---

## Audience layers

| Audience | Needs | Refresh | Tooling bias |
|----------|-------|---------|--------------|
| **On-call / SRE** | Golden signals, recent deploys, open incidents | Real-time | CloudWatch, Grafana, Datadog |
| **Service team** | SLO budget, error breakdown, trace links | Daily | Same + custom boards |
| **Product / PO** | Business KPIs, feature flag exposure | Daily/weekly | RUM, custom metrics, BI |
| **Leadership** | Reliability summary, incident trends, cost | Weekly/monthly | Reporting exports, PDF/email |
| **Compliance / audit** | Access logs, data processing evidence | Monthly | CloudTrail, catalog reports |

**Pitfall:** One dashboard for everyone → useless for all. Separate **operational** vs **executive** views.

---

## Dashboard platforms

| Platform | Pros | Cons |
|----------|------|------|
| **CloudWatch Dashboards** | Native; alarm integration | Limited UX; cross-account hard |
| **Amazon Managed Grafana (AMG)** | PromQL + CW data sources | Setup + SSO |
| **Datadog / New Relic** | Best UX; unified APM | Cost at scale |
| **Grafana Cloud** | Managed Grafana | Data egress costs |
| **QuickSight** | Exec BI, SQL sources | Not for second-level on-call |

**Recommended:** CloudWatch or AMG for ops; QuickSight or Grafana for exec/business when needed.

---

## Golden dashboard (per T1 service)

Minimum panels:

1. **Traffic** — requests/sec  
2. **Errors** — rate + top error classes  
3. **Latency** — p50 / p95 / p99  
4. **Saturation** — CPU, queue depth, DB connections  
5. **SLO** — error budget remaining (28d window)  
6. **Deploy markers** — version annotations  
7. **Open alerts** — link to incident ticket  
8. **Synthetic status** — last canary run  

Template in **your** repo; this guide defines content only.

---

## SLO reporting

| Concept | Definition |
|---------|------------|
| **SLI** | Measurable indicator (e.g. successful requests / total) |
| **SLO** | Target (e.g. 99.9% over 30d) |
| **Error budget** | Allowed unreliability before freeze |

| Reporting artifact | Audience | Frequency |
|--------------------|----------|-----------|
| **Error budget burn chart** | Eng + SRE | Daily in standup |
| **SLO compliance report** | Leadership | Monthly |
| **Missed SLO postmortem list** | ARCH + EM | Quarterly review |

Tools: Sloth + Prometheus, Datadog SLOs, AWS Application Signals (evolving), custom CW metrics.

---

## Business & product reporting

| Source | Metrics | Pitfall |
|--------|---------|---------|
| **Application custom metrics** | Conversion, cart abandon | Not wired in AI-generated code |
| **RUM** | Web vitals, JS errors | Privacy consent |
| **Warehouse (Redshift, Snowflake)** | Batch KPIs | Stale vs real-time ops |
| **Event streams (Kinesis → analytics)** | Near-real-time | Schema governance |

AI planning agents can **draft** KPI definitions; PO must approve and link to spec.

---

## Incident & reliability reporting

| Report | Contents | Owner |
|--------|----------|-------|
| **Weekly ops review** | Incidents, MTTR, top alerts | SRE |
| **Monthly reliability** | SLO attainment, repeat incidents | EM |
| **Quarterly architecture** | Trends driving ADR updates | ARCH |

Auto-generate draft narrative from incident DB + metrics (AI); human edits before exec send.

---

## Audit & data governance reporting

| Report | Source |
|--------|--------|
| Who accessed dataset X | Lake Formation audit, CloudTrail |
| PII scan findings | Macie |
| AI model invocations | Bedrock logging |
| Retention compliance | S3 lifecycle + legal hold status |

See [data-governance.md](data-governance.md).

---

## Pitfalls

| Pitfall | Why it hurts | Mitigation |
|---------|--------------|------------|
| **Dashboard sprawl** | Nobody knows canonical view | One golden dashboard per service |
| **Vanity metrics** | Green dashboard, angry customers | Pair with synthetics + RUM |
| **No deploy markers** | Can't correlate releases | CI writes version to metrics |
| **SLO without alert** | Report-only reliability | Burn-rate alerts |
| **Exec dashboard too granular** | Noise | Roll up to SLO + incident count |
| **Manual monthly reports** | Drift; wasted time | Scheduled Grafana/QuickSight |
| **PII in shared dashboards** | Access control failure | Aggregate; no customer IDs in widgets |

---

## Recommended starting point

Golden dashboard per T1 service in CloudWatch or AMG → SLO error budget panel → weekly automated ops email → monthly exec summary from same data source → incident count + MTTR trend.

---

## Related

- [Monitoring, tracing & logging](monitoring-tracing-logging.md) · [Incident management](incident-management.md) · [Observability as QA](observability-monitoring-qa.md)

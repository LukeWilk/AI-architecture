# Guide: Monitoring, Tracing & Logging

**Decision:** How to instrument services and store/query the three pillars — metrics, logs, traces — on AWS.

Related: [operations-observability.md](../operations-observability.md) · [dashboards-reporting.md](dashboards-reporting.md) · [incident-management.md](incident-management.md)

---

## The three pillars

| Pillar | Answers | Typical use |
|--------|---------|-------------|
| **Metrics** | How much? How fast? How many errors? | Dashboards, alerts, SLOs |
| **Logs** | What happened in this request? | Debug, audit, security |
| **Traces** | Where did time go across services? | Latency, dependency failures |

**Golden rule:** Correlate with shared **`trace_id`** / **`request_id`** across all three.

---

## Instrumentation approach

| Approach | Pros | Cons |
|----------|------|------|
| **OpenTelemetry (OTel) SDK** | Vendor-neutral; future-proof | SDK config in each service |
| **AWS Distro for OpenTelemetry (ADOT)** | AWS-supported collector | Collector ops |
| **X-Ray SDK direct** | Simple on AWS | Lock-in; merging with OTel anyway |
| **Auto-instrumentation agents** | Low dev effort | Magic; harder to debug overhead |

**Recommended:** OTel SDK → ADOT collector → export to CloudWatch + X-Ray (and/or vendor).

---

## Metrics

| Backend | Pros | Cons |
|---------|------|------|
| **CloudWatch Metrics** | Native; alarms integrated | Cardinality limits; cost at high card |
| **Amazon Managed Prometheus (AMP)** | PromQL; Grafana native | Operate remote write |
| **Datadog / Dynatrace** | Rich APM metrics | Cost |
| **StatsD / custom push** | Legacy apps | Less standard today |

### What to emit (RED + USE)

| Pattern | Metrics |
|---------|---------|
| **RED (services)** | Rate, Errors, Duration |
| **USE (resources)** | Utilization, Saturation, Errors |
| **Business KPIs** | Orders/min, signups — for reporting |

**Pitfall:** AI-generated code omits custom metrics → template/middleware in **your** service scaffold.

---

## Logging

| Backend | Pros | Cons |
|---------|------|------|
| **CloudWatch Logs** | Native; subscription filters | Query UX vs OpenSearch |
| **OpenSearch (logs)** | Full-text + ML | Cluster cost |
| **S3 + Athena** | Cheap long-term archive | Not real-time |
| **Datadog Logs** | Unified with APM | Cost |

### Structured logging (required)

```json
{
  "timestamp": "ISO8601",
  "level": "info",
  "service": "orders-api",
  "trace_id": "...",
  "message": "order created",
  "order_id": "uuid",
  "duration_ms": 42
}
```

| Practice | Why |
|----------|-----|
| JSON lines | Parseable; AI log analysis works |
| No PII in message | [Data governance](data-governance.md) |
| Consistent field names | Cross-service queries |

**Pitfall:** `console.log(customer)` in AI-generated handlers → Macie/DLP won't save you if logs already shipped.

---

## Tracing

| Backend | Pros | Cons |
|---------|------|------|
| **AWS X-Ray** | Integrated with API Gateway, Lambda, ECS | UI limited vs vendors |
| **OTel → X-Ray + vendor** | Best of both | Dual export cost |
| **Jaeger (self-hosted)** | Open source | Operate Jaeger |
| **Datadog APM / Honeycomb** | Excellent trace UX | Cost |

### Propagation

- W3C `traceparent` header on all HTTP/gRPC  
- Message attributes on SQS/SNS/EventBridge  
- **Pitfall:** Broken context across async boundaries AI code creates → document pattern in ADR

---

## Real user monitoring (RUM)

| Tool | Pros | Cons |
|------|------|------|
| **CloudWatch RUM** | AWS-native | Web-focused |
| **Datadog RUM / Sentry** | Session replay, frontend errors | Privacy review for replay |
| **Web Vitals only** | Lightweight | Less backend correlation |

Links frontend slowness to backend traces when `trace_id` passed from browser (careful with PII).

---

## Synthetic monitoring

| Tool | Pros | Cons |
|------|------|------|
| **CloudWatch Synthetics** | Canaries in AWS | Script maintenance |
| **Pingdom / Checkly** | External perspective | Outside AWS account |
| **Playwright in CI** | Pre-release | Not continuous prod |

See also [observability-monitoring-qa.md](observability-monitoring-qa.md) for QA-oriented synthetics.

---

## Cost & cardinality pitfalls

| Pitfall | Mitigation |
|---------|------------|
| High-cardinality labels (user_id on every metric) | Allowlist labels; aggregate |
| Verbose debug logs in prod | Level per env; dynamic debug with trace flag |
| 100% trace sampling always | Tail-based or adaptive sampling |
| Duplicate telemetry (X-Ray + full vendor double pay) | Single OTel pipeline, fan-out consciously |

---

## Recommended starting point

OTel in services → ADOT sidecar/collector → CloudWatch Logs + Metrics + X-Ray → structured JSON logs with `trace_id` → RED metrics on all T1 APIs → RUM on customer UI → Synthetics on checkout/login paths.

---

## Related

- [Dashboards & reporting](dashboards-reporting.md) · [Incident management](incident-management.md) · [Data governance](data-governance.md)

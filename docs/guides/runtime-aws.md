# Guide: Runtime on AWS

**Decision:** Where application workloads run and how they're exposed.

Related: [ARCHITECTURE.md](../ARCHITECTURE.md) · [identity-access-secrets.md](identity-access-secrets.md)

---

## Compute

| Option | Pros | Cons |
|--------|------|------|
| **ECS Fargate** | No cluster nodes to manage; good default | Less K8s ecosystem |
| **EKS** | Portable K8s; rich ecosystem | Operational overhead; cost |
| **Lambda** | Pay per use; great for event/API thin layers | Cold start; duration limits |
| **EC2 (self-managed)** | Full control | **Pitfall:** you operate the fleet |
| **App Runner** | Simple container deploy | Less control for complex networking |

**Recommended:** Fargate for most services; Lambda for event-driven and low-traffic APIs; EKS only when K8s is org mandate.

---

## API exposure

| Option | Pros | Cons |
|--------|------|------|
| **ALB + ECS** | Flexible; WebSockets | You manage routing rules |
| **API Gateway + Lambda** | Throttling, auth built-in | Cost at high RPS |
| **API Gateway + VPC Link + ALB** | Central auth + container backend | Complexity |
| **CloudFront + WAF front** | Edge caching and protection | Cache invalidation discipline |

---

## Data stores (common patterns)

| Need | Options | Pitfall |
|------|---------|---------|
| Relational | RDS Aurora, RDS PostgreSQL | Publicly accessible RDS |
| Key-value / scale | DynamoDB | Wrong access patterns → cost |
| Cache | ElastiCache Redis | Cache as source of truth |
| Object | S3 | Public bucket ACLs |
| Search (app) | OpenSearch | Confusing with ADR index — separate domains |

---

## AI services on AWS

| Service | Use | Pitfall |
|---------|-----|---------|
| **Bedrock** | Agents, batch, planning | Ungoverned model access per team |
| **Amazon Q** | Developer AWS assist | Not a runtime for customer-facing AI |
| **SageMaker** | Custom models | Overkill for codegen assist |

Keep **customer-facing AI** architecture in ADRs separate from **developer tooling AI**.

---

## Pitfalls

| Pitfall | Why it hurts | Mitigation |
|---------|--------------|------------|
| **EKS by default** | Cost and complexity without need | ADR required for EKS |
| **Lambda for everything** | 15-min limit; debugging pain | Domain-driven split |
| **Hardcoded credentials** | AI generates `AKIA...` in samples | Secrets Manager + lint — see [Identity guide](identity-access-secrets.md) |
| **Single AZ** | AZ outage = outage | Multi-AZ ADR for T1 |
| **No WAF on public APIs** | OWASP exposure | WAF + rate limits |
| **AI suggests wrong service** | e.g. self-hosted Kafka vs EventBridge | ADR corpus + Q guardrails |

---

## Recommended starting point

VPC → private subnets → ECS Fargate behind ALB → RDS/DynamoDB as fit → API Gateway where edge auth needed → Bedrock via VPC endpoint for internal agents.

---

## Related

- [CI/CD & release](ci-cd-release.md) · [Observability](observability-monitoring-qa.md)

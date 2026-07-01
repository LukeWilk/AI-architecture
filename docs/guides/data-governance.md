# Guide: Data Governance Layers

**Decision:** How to classify, control, retain, and trace data — including what may enter AI prompts and RAG indexes.

Related: [data-governance.md](../data-governance.md) · [ai-guardrails-security.md](ai-guardrails-security.md) · [SOP-010](../sops/SOP-010-ai-tool-usage.md) · [monitoring-tracing-logging.md](monitoring-tracing-logging.md)

---

## Layer 1 — Classification & catalog

| Approach | Pros | Cons |
|----------|------|------|
| **Manual labels in catalog (Glue, Collibra, Atlan)** | Business-owned definitions | Drift if not enforced in code |
| **Automated classification (Macie, Microsoft Purview)** | Finds PII in S3/RDS | False positives; tuning |
| **Tag-based (AWS resource tags + ABAC)** | Policy-enforceable | Tag hygiene required |
| **Schema annotations (OpenAPI `x-classification`)** | Close to API contract | Only covers declared fields |

**Recommended:** Combine schema annotations for APIs + Macie for object stores + steward-owned catalog glossary.

### Classification tiers (example)

| Tier | Examples | AI prompt | RAG index | Log/trace |
|------|----------|-----------|-----------|-----------|
| **Public** | Marketing copy | Allowed | Allowed | Allowed |
| **Internal** | Internal APIs docs | Enterprise AI only | Internal index | Allowed masked |
| **Confified** | Customer metadata | Deny by default | Separate restricted index | Redact fields |
| **Restricted** | PII, PCI, PHI | **Never** | **Never** without legal sign-off | Never log raw |

---

## Layer 2 — Access control

| Tool | Scope | Pros | Cons |
|------|-------|------|------|
| **IAM** | AWS resources | Universal on AWS | Coarse without ABAC |
| **Lake Formation** | Data lake tables | Fine-grained LF-tags | Lake-centric |
| **Row/column security (RDS, Redshift)** | Database | Strong for SQL | Per-engine setup |
| **VPC + PrivateLink** | Network path | Data doesn't traverse public internet | Complexity |
| **KMS CMK per tier** | Encryption keys | Audit via CloudTrail | Key management overhead |

**Pitfall:** AI-generated SQL or queries bypass app-layer checks → use least-privilege DB roles + query audit.

→ Full IAM, RBAC, secrets, and CI OIDC patterns: [Guide: Identity, access & secrets](identity-access-secrets.md).

---

## Layer 3 — Retention & deletion

| Approach | Pros | Cons |
|----------|------|------|
| **S3 lifecycle rules** | Automatic tier/expire | Misconfigured rule deletes early |
| **CloudWatch log retention** | Simple per group | Easy to set too long (cost + compliance) |
| **Legal hold (S3 Object Lock)** | Litigation ready | Blocks deletion |
| **Right-to-erasure workflow** | GDPR compliance | Must map all copies (backups, indexes) |

**With AI/RAG:** Embeddings and vector stores are **copies** — deletion must include index purge, not just source S3.

---

## Layer 4 — Lineage & quality

| Tool | Purpose | Pros | Cons |
|------|---------|------|------|
| **OpenLineage / Marquez** | Pipeline lineage | Open standard | Requires instrumentation |
| **AWS Glue Data Catalog** | AWS-native metadata | Integrated with Athena/Glue jobs | AWS-centric |
| **Great Expectations / Soda** | Data quality checks | Catches bad AI training inputs | Another pipeline stage |
| **dbt tests** | Transform layer QA | Dev-friendly | Warehouse-specific |

**Pitfall:** AI generates ETL without documenting lineage → require ADR + lineage emit on new pipelines.

---

## Layer 5 — AI-specific governance

| Control | Purpose | Options |
|---------|---------|---------|
| **Prompt boundary** | Block restricted data in models | Gateway proxy, DLP on egress |
| **RAG scope** | Index only approved docs | Separate indexes by classification |
| **Training prohibition** | Enterprise contract | Cursor/Q/Bedrock enterprise tiers |
| **Synthetic data** | Dev and test | Faker, Gretel, domain fixtures |
| **Audit log** | Who prompted what | Bedrock logging, gateway logs |

Cross-reference [SOP-010](../sops/SOP-010-ai-tool-usage.md).

---

## AWS services map (reference)

| Concern | AWS services |
|---------|--------------|
| Discover PII | Macie, GuardDuty ( exfil patterns ) |
| Catalog | Glue Data Catalog, DataZone |
| Lake access | Lake Formation |
| Encryption | KMS, SSE-S3, TLS |
| Audit | CloudTrail, CloudTrail Lake |
| DLP patterns | Macie custom data identifiers |
| Backup retention | AWS Backup with locked vaults |

Third-party: Collibra, Alation, Immuta, BigID — when enterprise data office already standardized.

---

## Pitfalls

| Pitfall | Why it hurts | Mitigation |
|---------|--------------|------------|
| **Prod snapshot in dev** | Compliance breach | Synthetic fixtures only |
| **Full JSON bodies in logs** | PII in CloudWatch | Redact + allowlist fields |
| **Single RAG index for all docs** | Restricted text in agent context | Split indexes by classification |
| **AI summarizes customer ticket with PII** | Prompt leak | Ticket scrubbing before AI |
| **Retention "forever" on logs** | Cost + legal exposure | Tier-based retention ADR |
| **Classification without enforcement** | Labels ignored | OPA/IAM/Macie alerts |
| **Forgotten vector embeddings** | Erasure requests fail | Index lifecycle tied to source |
| **Cross-border inference** | Regulatory violation | Region-pinned Bedrock, data residency ADR |

---

## Recommended starting point

1. Define 4-tier classification glossary (steward-owned)  
2. Macie on S3 + secret/PII patterns in CI logs  
3. OpenAPI field classification for external APIs  
4. Separate RAG indexes: internal vs restricted (restricted = none for coding agents)  
5. CloudTrail + Bedrock invocation logging  
6. Retention ADR per data domain  

Record choices in **your** project's ADRs.

---

## Related

- [Knowledge indexing & portals](knowledge-indexing-portals.md) · [Monitoring & tracing](monitoring-tracing-logging.md) · [Incident management](incident-management.md)

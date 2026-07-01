# Guide: Human-in-the-Loop & Governance

**Decision:** Where humans must decide, and how governance scales with AI velocity.

Related: [GOVERNANCE.md](../GOVERNANCE.md) · [processes/overview.md](../processes/overview.md)

---

## Why human gates still matter with AI

AI increases **drafting speed** — not **accountability**. Irreversible or high-blast-radius decisions need a named human approver:

- Architecture commitments (ADRs)  
- External API contracts  
- Production promotion (especially T1)  
- Security and data policy  
- Incident command  

---

## Gate models

| Model | Pros | Cons |
|-------|------|------|
| **Heavy gates (enterprise regulated)** | Audit trail; low drift | Slower; frustration if over-applied to T3 |
| **Light gates (startup)** | Speed | Architecture and security debt |
| **Tier-based gates** | Risk-proportional | Requires honest tier classification |

**Recommended:** Tier-based ([GOVERNANCE.md](../GOVERNANCE.md)) — T1 strict, T3 lighter.

---

## RACI alternatives

| Approach | Pros | Cons |
|----------|------|------|
| **Full RACI per phase** | Clear | Documentation overhead |
| **DACI (Driver, Approver, Contributors, Informed)** | Simpler decisions | Less familiar |
| **Code owners only** | Git-native | Misses PO/SRE/accountability |

Use RACI or DACI in **your** handbook; this repo provides a reference RACI in GOVERNANCE.

---

## Human vs AI by activity

| Activity | AI role | Human role |
|----------|---------|------------|
| Draft ADR | Full draft | Accept/reject/edit |
| Draft spec | OpenAPI skeleton | Approve contract |
| Write code | Generate + refactor | Steer; review PR |
| Write tests | Generate from spec | Review quality |
| PR review | First pass comments | Merge decision |
| Staging sign-off | Synthetics data | PO accepts behavior |
| Prod deploy T1 | Metric analysis | SRE/ARCH approve |
| Incident RCA | Log summary draft | SRE validates |
| Policy exception | Risk summary | SEC/EM approve |

---

## Pitfalls

| Pitfall | Why it hurts | Mitigation |
|---------|--------------|------------|
| **Rubber-stamping AI drafts** | Governance theater | Time-boxed review; ARB for cross-team |
| **Too many approvers** | Bottleneck defeats AI speed | Tier-based approvers |
| **Zero human review ("AI said OK")** | Incidents | Merge requires human + CI |
| **Approvers not trained on AI limits** | False confidence | Onboarding module (SOP-011) |
| **No exception process** | Shadow IT bypass | SOP-012 with expiry |
| **PO skipped on staging** | Wrong product ships green | Explicit staging sign-off |
| **Architect unavailable** | De facto code-first | Delegate + ADR backlog SLA |

---

## Recommended starting point

Six phase gates (G0–G5) with tier-scoped approvers; document in team handbook; record **your** choices in **your** ADRs.

Reference procedures: [SOP index](../sops/README.md).

---

## Related

- [AI guardrails](ai-guardrails-security.md) · [Planning & ADR](planning-adr-specs.md)

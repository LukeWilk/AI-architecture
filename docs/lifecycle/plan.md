---
title: Plan
description: Intake, prioritization, data classification, ADRs, and spec approval
docType: hub
phase: plan
---

# Plan

**Outcome:** Approved work ready for implementation — classified, architecturally sound, with an accepted spec and ADRs.

## Goals

- Business priority and acceptance criteria are clear  
- Data classification is assigned at intake  
- Architecture decisions are recorded (ADR) before coding  
- Spec is reviewed and **Approved** (not draft)

## Key roles

| Role | Accountable for |
|------|-----------------|
| **PO** | Priority, acceptance criteria |
| **ARCH** | ADRs, API contracts |
| **SEC / DATA** | Classification, threat model (T1/T2) |
| **Program manager** | Cross-team dependencies |

→ [Product manager perspective](../perspectives/product-manager) · [Architect perspective](../perspectives/architect)

## Decision guides

- [Planning, ADR & specs](../guides/planning-adr-specs)  
- [Data governance layers](../guides/data-governance)  
- [Knowledge indexing & portals](../guides/knowledge-indexing-portals)  
- [Human-in-the-loop & governance](../guides/human-in-the-loop-governance)

## Topic deep dives

- [Planning & ADR](../planning-and-adr) · [Data governance](../data-governance)

## Reference SOPs

| SOP | Procedure |
|-----|-----------|
| [SOP-001](../sops/SOP-001-feature-intake) | Feature intake |
| [SOP-002](../sops/SOP-002-adr-lifecycle) | ADR lifecycle |
| [SOP-003](../sops/SOP-003-spec-approval) | Spec approval |

## Gates before Build

::: decision Recommended gate
No implementation ([SOP-004](../sops/SOP-004-implementation)) until: **Approved spec** + **Accepted ADR(s)** + security sign-off when tier requires it.
:::

## Pitfalls

| Pitfall | Mitigation |
|---------|------------|
| AI-drafted spec merged without review | Human ARCH/PO approval ([SOP-003](../sops/SOP-003-spec-approval)) |
| Skipping ADR for "small" AI changes | ADR for any new pattern or cross-service boundary |
| No classification on ticket | [SOP-001](../sops/SOP-001-feature-intake) checklist |

---

[← Lifecycle overview](./index) · [Build →](./build)

---
title: Glossary
description: Terms used across guides, SOPs, governance, and role perspectives
---

# Glossary

Quick definitions for terms used throughout this reference template. Record **your** org-specific definitions in your own glossary or ADRs.

| Term | Definition |
|------|------------|
| **ADR** | Architecture Decision Record — documents a significant technical choice, status, and consequences |
| **AIPO** | AI Platform Owner — Bedrock/Q/MCP config, prompt policies, agent audit |
| **ARB** | Architecture Review Board — escalated cross-team design decisions |
| **ABAC** | Attribute-Based Access Control — permissions from attributes (tags, tenant, classification) |
| **Accepted ADR** | ADR status meaning the decision is approved and binding for implementation |
| **Approved spec** | Specification reviewed and signed off — required before [SOP-004](./sops/SOP-004-implementation) |
| **Canary deploy** | Rolling out to a small prod slice before full promotion |
| **CI / CD** | Continuous Integration / Continuous Delivery (or Deployment) |
| **Contract test** | Test verifying API consumer/provider agreement (e.g. Pact) |
| **DAST** | Dynamic Application Security Testing — runtime security scanning |
| **DATA (steward)** | Role owning classification glossary and catalog quality |
| **DEV** | Developer — implements against approved spec |
| **EM** | Engineering Manager — escalation, capacity, non-security exceptions |
| **Ephemeral env** | Short-lived stack per PR for integration/E2E tests |
| **Guardrail** | Automated policy that blocks or warns on unsafe code or usage |
| **Human-in-the-loop** | Required human approval at defined gates — AI recommends, humans decide |
| **IAM** | AWS Identity and Access Management |
| **Identity Center** | AWS IAM Identity Center (SSO) for workforce access |
| **IRSA** | IAM Roles for Service Accounts — EKS pod-level AWS permissions |
| **JIT** | Just-in-time — temporary elevation of privileges |
| **KMS** | AWS Key Management Service — encryption key management |
| **LF-tags** | Lake Formation tags for fine-grained data lake access |
| **MCP** | Model Context Protocol — tool/context integration for AI agents |
| **OIDC** | OpenID Connect — federation for CI/CD to AWS without long-lived keys |
| **OPA** | Open Policy Agent — policy-as-code for IaC and pipelines |
| **OTel** | OpenTelemetry — vendor-neutral metrics, logs, traces |
| **PO** | Product Owner — priority and acceptance criteria |
| **RACI** | Responsible, Accountable, Consulted, Informed |
| **RAG** | Retrieval-Augmented Generation — LLM + document index |
| **AI toolkit** | [Catalog](ai-toolkit) of AI tools and adjacent artifacts (ADR, specs, MCP) |
| **RBAC** | Role-Based Access Control — permissions assigned to roles |
| **RUM** | Real User Monitoring — client-side performance and experience |
| **SAST** | Static Application Security Testing |
| **SCA** | Software Composition Analysis — dependency/CVE scanning |
| **SEC** | Security Engineer — threat models, scan policy, exceptions |
| **Secrets Manager** | AWS service for storing and rotating secrets |
| **SLO** | Service Level Objective — target reliability metric |
| **SOP** | Standard Operating Procedure — repeatable team process |
| **Spec-driven** | Implementation bound to an approved specification/contract |
| **SRE** | Site Reliability Engineering / platform — deploy, SLOs, incidents |
| **SSM** | AWS Systems Manager Parameter Store |
| **SSO** | Single Sign-On |
| **STRIDE** | Threat modeling framework (Spoofing, Tampering, …) |
| **T1 / T2 / T3** | Service tiers — increasing rigor for deploy and on-call ([GOVERNANCE](./GOVERNANCE)) |
| **TechDocs / Backstage** | Developer portal patterns for catalog and docs |

## See also

- [GOVERNANCE](./GOVERNANCE) — roles and decision rights  
- [Architecture](./ARCHITECTURE) — layer model  
- [Adoption roadmap](./adoption-roadmap)

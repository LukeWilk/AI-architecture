---
title: Decision Guides
description: Collection of decision guides comparing options, pitfalls, and suggested starting points for adoption.
---

# Decision Guides

Compare options before you adopt them in **your** project. Record the outcome in **your** repo's ADRs — not here.

Each guide includes:

1. **The decision** — what you're choosing and why it matters  
2. **Options compared** — pros, cons, fit  
3. **Pitfalls** — common failures when implementing  
4. **Suggested starting point** — for teams new to AI-native delivery  

---

| # | Guide | Key question |
|---|-------|--------------|
| 1 | [AI coding tools](ai-coding-tools.md) | Which AI assistant(s) for daily development? |
| 1b | [AI toolkit catalog](../ai-toolkit.md) | All AI + adjacent tools (ADR, MCP, specs) in one place |
| 2 | [Planning, ADR & specs](planning-adr-specs.md) | How do AI, ADRs, and specs fit in planning? |
| 3 | [Knowledge indexing & portals](knowledge-indexing-portals.md) | How do teams and agents discover ADRs and specs? |
| 4 | [Spec-driven development](spec-driven-development.md) | How tightly should specs bind AI-generated code? |
| 5 | [Automated testing & QA](automated-testing-qa.md) | What to automate; what stays human? |
| 6 | [Linters & static analysis](static-analysis-linting.md) | ESLint, Ruff, SAST, SCA, pre-commit, Spectral? |
| 7 | [AI guardrails & security](ai-guardrails-security.md) | Policy, AI review, data in prompts |
| 8 | [CI/CD & release](ci-cd-release.md) | How do changes reach AWS safely? |
| 9 | [Runtime on AWS](runtime-aws.md) | Where do services run? |
| 10 | [Monitoring, tracing & logging](monitoring-tracing-logging.md) | Metrics, logs, traces, RUM, synthetics? |
| 11 | [Dashboards & reporting](dashboards-reporting.md) | On-call, SLO, exec, audit views? |
| 12 | [Incident management](incident-management.md) | Paging, severity, comms, runbooks? |
| 13 | [Observability & monitoring QA](observability-monitoring-qa.md) | How does prod monitoring feed dev quality? |
| 14 | [Data governance layers](data-governance.md) | Classification, lineage, AI data bounds? |
| 15 | [Human-in-the-loop & governance](human-in-the-loop-governance.md) | Where must humans decide? |
| 16 | [Identity, access & secrets](identity-access-secrets.md) | SSO, IAM, RBAC, Secrets Manager, CI OIDC? |

---

## Quick comparison matrix

| Area | Option A | Option B | Option C | See guide |
|------|----------|----------|----------|-----------|
| IDE AI | Cursor + MCP | Amazon Q | GitHub Copilot | [#1](ai-coding-tools.md) |
| ADR home | Git `docs/adr/` | Confluence | Backstage only | [#2](planning-adr-specs.md) |
| Agent context | OpenSearch RAG | Kendra | MCP read Git | [#3](knowledge-indexing-portals.md) |
| Contract | OpenAPI | Protobuf + buf | BDD only | [#4](spec-driven-development.md) |
| Linters / SAST | ESLint + Ruff | golangci-lint | Semgrep + CodeQL | [#6](static-analysis-linting.md) |
| CI orchestrator | CodePipeline | GitHub Actions | GitLab CI | [#8](ci-cd-release.md) |
| Compute | ECS Fargate | EKS | Lambda | [#9](runtime-aws.md) |
| Metrics/logs/traces | CloudWatch + X-Ray + OTel | Datadog | AMP + AMG | [#10](monitoring-tracing-logging.md) |
| Dashboards | CloudWatch / Grafana | Datadog | QuickSight (exec) | [#11](dashboards-reporting.md) |
| Incidents | PagerDuty | Opsgenie | AWS Incident Manager | [#12](incident-management.md) |
| Data catalog | Glue + Macie | Collibra | DataZone | [#14](data-governance.md) |
| Identity / secrets | IAM Identity Center + SM | Cognito + custom RBAC | OIDC CI only | [#16](identity-access-secrets.md) |

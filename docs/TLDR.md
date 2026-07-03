# Enterprise AI Delivery — Docs TLDR

Purpose
- A concise, opinionated documentation set for adopting AI‑assisted software delivery. This TLDR summarizes the docs (not the repo code).

Where to start
- Read `HOW-TO-USE.md` — quick browsing & preview guidance.
- Run the adoption checklist in `adoption-roadmap.md` for a pilot rollout.
- For an overview: `ARCHITECTURE.md` and `docs/README.md`.

Main hubs
- Documentation index: `docs/README.md` — browse by lifecycle, role, or pillar.
- Lifecycle: `docs/lifecycle/` — Plan, Build, Verify, Release, Operate, Learn.
- Decision guides: `docs/guides/` — topic guides and comparisons.
- Perspectives: `docs/perspectives/` — role-specific views (Developer, SRE, QA, Security, Product, Architect).
- Pillars: `docs/pillars/` — Delivery, Quality, Platform, Data & Security, Operations.
- SOPs: `docs/sops/` — 12 operational procedures (SOP-001 … SOP-012).

Key pages (short)
- `HOW-TO-USE.md` — how to browse, local preview, conventions.
- `ARCHITECTURE.md` — conceptual model and deployment topology.
- `developer-workflow.md` — spec-driven, AI-assisted developer flow.
- `guides/ai-coding-tools.md` — recommended IDE agents and tool choices.
- `guides/spec-driven-development.md` — contracts-first with AI codegen patterns.
- `guides/automated-testing-qa.md` — test pyramid and AI test-generation rules.
- `cicd-observability.md` — pipeline design, canaries, metric gates.
- `qa-guardrails.md` — CI/AI guardrails and policy-as-code.
- `data-governance.md` — data classification, RAG/index scope, retention.
- `identity-access-secrets.md` — SSO/CI OIDC, secrets lifecycle.
- `operations-observability.md` — monitoring, synthetics, deploy diff.

Lifecycle rules (practical)
- Plan: Write ADRs and Approved specs before implementation (`planning-and-adr.md`).
- Build: Implement against Approved OpenAPI; use pre-commit, formatters, and linters (`developer-workflow.md`).
- Verify: Full CI test pyramid + policy/scans; AI review is advisory (`qa-guardrails.md`).
- Release: Staged canaries, metric gates, automated rollback on regressions (`cicd-observability.md`).
- Operate: Treat monitoring as QA; feed regressions back into CI (`operations-observability.md`).
- Learn: Postmortem → regression PR → ADR/spec updates (`sops/SOP-008-post-incident.md`).

Roles & responsibilities (short)
- PO: product acceptance and staging sign-off.
- ARCH: architecture decisions and ADR acceptance.
- DEV: implement code/tests, follow spec and rules.
- SRE: production safety, deploys, incident command.
- SEC: policy exceptions, data/AI safety.

Tooling (starter)
- IDE: team choice (recommend AI-aware IDE agents).
- Contract: OpenAPI for API contracts.
- CI: GitHub Actions (lint, tests, SAST/SCA, secrets scan).
- Runtime: ECS Fargate / Lambda (EKS when needed).
- Observability: OpenTelemetry + CloudWatch/X-Ray + Synthetics.

Governance & SOPs
- Follow `docs/sops/` for intake, ADR lifecycle, spec approval, implementation, PR-review, release, incidents, and artifact publishing.
- Use policy-as-code (OPA/Cedar) for infra/entitlement checks and gate CI.

Docs preview & build
- Local dev:
  ```bash
  npm ci
  npm run docs:dev
  # open http://localhost:5173
  ```
- Local build:
  ```bash
  BASE_PATH=/AI-architecture/ npm run docs:build
  # serve docs/.vitepress/dist for preview
  ```
- CI: `.github/workflows/deploy-docs.yml` sets `BASE_PATH` to the repository subpath (for example `/AI-architecture/`) using the GitHub Actions expression `github.event.repository.name`, and uploads `docs/.vitepress/dist` to Pages.

Top 3 actionables
1. Read `HOW-TO-USE.md` then `adoption-roadmap.md` — pick a 1–2 week pilot.
2. Adopt spec-driven flow: require Approved OpenAPI for upcoming features and link ADRs to PRs.
3. Add CI guardrails: pre-commit, secrets scan, SAST, contract checks; keep AI review advisory.

Where to read in 30–60 min
1. `HOW-TO-USE.md` (5 min)
2. `adoption-roadmap.md` (5–10 min)
3. `planning-and-adr.md` + `guides/planning-adr-specs.md` (10–15 min)
4. `developer-workflow.md` + `guides/ai-coding-tools.md` (10–15 min)
5. `qa-guardrails.md` + `guides/automated-testing-qa.md` (10–15 min)

Quick contact items
- Want this committed as `docs/TLDR.md` and opened as a PR? (I will create branch, commit, push, and open PR.)



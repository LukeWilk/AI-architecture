# How to Use This Repository

---
title: How to Use this Repository
description: Instructions for browsing, developing, and previewing the docs; recommended workflows for local and GitHub Pages usage.
---

## What this is

A **reference template** of best practices for using AI in enterprise software delivery on AWS. It is documentation and decision guidance only.

## What this is not

- **Not** a starter kit, framework, or monorepo to clone into production
- **Not** a source of CI configs, IaC modules, application code, or MCP server implementations
- **Not** prescriptive about a single "correct" stack — every major choice includes alternatives

## How to browse

### On GitHub (recommended)

Push to GitHub and enable **Pages → GitHub Actions** (see the root README).

Then open:

**`https://<your-org>.github.io/AI-architecture/`**

Full UI: search (Ctrl+K), sidebar, rendered Mermaid diagrams, page outlines.

### Local dev

```bash
npm install
npm run docs:dev
```

Open `http://localhost:5173` in your browser.

### Markdown in the repo

1. **New to the model** → [Adoption roadmap](adoption-roadmap.md) or [Architecture overview](ARCHITECTURE.md)
2. **By lifecycle phase** → [Lifecycle hubs](lifecycle/)
3. **Choosing a tool or pattern** → [Decision guides](guides/README.md)
4. **By role** → [Role perspectives](perspectives/)
5. **AI tools & artifacts** → [AI toolkit catalog](ai-toolkit.md)
6. **Defining team process** → [Governance](GOVERNANCE.md) + [SOPs](sops/README.md)
7. **Terms** → [Glossary](glossary.md) · [Documentation map](documentation-map.md)

## How to adopt in your project

| Step | Action |
|------|--------|
| 1 | Pick one delivery phase (e.g. planning + ADR) — don't roll out everything at once |
| 2 | Read the relevant **decision guide**; discuss pros/cons with your team |
| 3 | Record **your** choice in **your** project's ADRs (not in this repo) |
| 4 | Customize the reference SOP for your org size, compliance tier, and tooling |
| 5 | Revisit pitfalls in the guide when something goes wrong |

## Document types

| Type | Purpose | Example |
|------|---------|---------|
| **Guide** | Compare alternatives; pros/cons; pitfalls | [Linters & static analysis](guides/static-analysis-linting.md) |
| **Perspective** | Same cycle from one role's viewpoint | [Role perspectives](perspectives/) |
| **Topic doc** | Conceptual depth on one area | [planning-and-adr.md](planning-and-adr.md) |
| **SOP** | Repeatable procedure to adapt | [SOP-002](sops/SOP-002-adr-lifecycle.md) |
| **Governance** | Roles, gates, decision rights | [GOVERNANCE.md](GOVERNANCE.md) |

## Conventions in this repo

- **"Recommended for most teams"** — sensible default, not a mandate
- **"Primary / optional"** — adoption order, not exclusivity
- **Pitfall callouts** — in each [decision guide](guides/README.md)
- Diagrams illustrate concepts; your topology will differ

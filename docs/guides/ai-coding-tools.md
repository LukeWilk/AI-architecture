# Guide: AI Coding Tools

**Decision:** Which AI-assisted development tools should the organization standardize on?

**Full catalog:** [AI toolkit](../ai-toolkit.md) — all AI and AI-adjacent tools in one place.

Related: [developer-workflow.md](../developer-workflow.md) · [SOP-010](../sops/SOP-010-ai-tool-usage.md) · [ai-guardrails-security.md](ai-guardrails-security.md)

---

## Options compared

### Cursor (IDE + agents + MCP)

| Pros | Cons |
|------|------|
| Deep codebase context, multi-file agents | Requires enterprise agreement for compliance |
| MCP integrates internal ADR/spec/runbook context | Team must govern `.cursor/rules` or agents drift |
| Best fit for "vibe coding" with steering | Another IDE to standardize if org is VS Code-only |

**Fit:** Teams optimizing for AI-native velocity with spec/ADR context via MCP.

---

### Amazon Q Developer

| Pros | Cons |
|------|------|
| Native AWS/IaC guidance; enterprise boundary on AWS | Weaker general application refactoring vs Cursor |
| Fits AWS-heavy shops already on Q | Limited custom internal context without extra wiring |
| Good compliance story inside AWS accounts | Not a full replacement for IDE agent workflows |

**Fit:** AWS-centric teams; IaC and service API work; complement to an IDE agent.

---

### GitHub Copilot

| Pros | Cons |
|------|------|
| Broad adoption; familiar inline completion | Less agentic multi-step workflow than Cursor |
| Strong GitHub PR integration | MCP / deep monorepo context less mature than Cursor |
| Enterprise tier with policy controls | Competing agent story vs Copilot Workspace ( evolving ) |

**Fit:** GitHub-standard orgs wanting inline assist first; add agents later.

---

### Bedrock agents (custom / planning-only)

| Pros | Cons |
|------|------|
| Full control over prompts, RAG, and audit | Build and operate your own agent platform |
| VPC endpoints; no data leaves AWS | Higher platform engineering cost |
| Ideal for planning, ADR drafting, batch tasks | Poor DX if used as daily coding replacement |

**Fit:** Platform team builds internal planning agents; not primary IDE.

---

### Local models (Ollama, etc.)

| Pros | Cons |
|------|------|
| Offline; no cloud data transfer | Quality gap vs frontier models for complex code |
| Zero per-token cost | No enterprise support; security of local weights |
| Snippets and learning | **Do not use for proprietary codebase at scale** |

**Fit:** Personal experimentation only — not enterprise default.

---

## Recommended starting point

**Most enterprise AWS teams:** Cursor (enterprise) for daily development + Amazon Q for AWS-specific work + Bedrock gateway for **planning** agents (ADR/spec draft). Document the combo in your ADR.

Avoid: letting every developer pick their own consumer AI tool without data policy.

---

## Pitfalls

| Pitfall | Why it hurts | Mitigation |
|---------|--------------|------------|
| **No data classification policy** | PII or secrets in prompts → breach | SOP-style policy; block prod data; SEC review |
| **AI without spec/ADR context** | Hallucinated APIs, architecture drift | MCP or rules pointing at Approved specs + Accepted ADRs |
| **Treating AI output as trusted** | Bugs and security issues merge unchecked | Mandatory human PR review + automated scans |
| **Rules file neglect** | Agents ignore team conventions | Version `.cursor/rules` in Git; review in PRs |
| **Tool sprawl** | Inconsistent quality and audit | Pick primary + optional; exception process |
| **"Vibe coding" without contracts** | Fast today, untestable tomorrow | Spec-driven bounds ([spec-driven-development.md](spec-driven-development.md)) |
| **Skipping enterprise licenses** | Data used for training (consumer tiers) | Enterprise agreements with privacy guarantees |

---

## Related decisions

- [Knowledge indexing](knowledge-indexing-portals.md) — how agents retrieve ADRs  
- [AI guardrails](ai-guardrails-security.md) — what runs on every PR  
- [Human-in-the-loop](human-in-the-loop-governance.md) — who approves what AI cannot

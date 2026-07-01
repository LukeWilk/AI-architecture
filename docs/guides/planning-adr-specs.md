# Guide: Planning, ADR & Specs

**Decision:** How should AI participate in planning, and where do ADRs and specs live?

Related: [planning-and-adr.md](../planning-and-adr.md) · [SOP-002](../sops/SOP-002-adr-lifecycle.md) · [SOP-003](../sops/SOP-003-spec-approval.md)

---

## Decisions in this space

1. ADR format and location  
2. When AI drafts ADRs vs humans only  
3. Spec-first vs code-first with retroactive specs  
4. How non-production artifacts are shared  

---

## ADR format & location

| Option | Pros | Cons |
|--------|------|------|
| **Git `docs/adr/` (MADR)** | Versioned, PR review, close to code | Non-devs may not browse Git |
| **Confluence / wiki** | Familiar to PMs | Stale copies; hard for agents to index reliably |
| **Backstage TechDocs only** | Great discovery | Still needs Git source for truth |
| **Issue tracker only** | Fast | Not durable architecture memory |

**Recommended:** Git canonical + Backstage/portal for discovery + optional Confluence mirror.

---

## AI in ADR drafting

| Approach | Pros | Cons |
|----------|------|------|
| **AI drafts, architect accepts** | Speed; consistent structure | Architect may rubber-stamp without reading |
| **Human-only ADRs** | Maximum accountability | Slow; inconsistent quality |
| **AI drafts options only, human writes decision** | Balanced | Two-step friction |

**Recommended:** AI drafts with status `proposed`; architect **must** set `accepted`. Never index Proposed ADRs for coding agents.

---

## Spec-first vs code-first

| Approach | Pros | Cons |
|----------|------|------|
| **Spec-first (OpenAPI approved before impl)** | AI codegen bounded; contract tests meaningful | Upfront latency for small fixes |
| **Code-first, spec after** | Fast spikes | AI invents APIs; contract tests lag |
| **Hybrid (spec for public APIs only)** | Pragmatic | Two tracks confuse teams |

**Recommended:** Spec-first for any API surface or cross-team boundary; spikes allowed with time-box and ADR if pattern sticks.

---

## Pitfalls

| Pitfall | Why it hurts | Mitigation |
|---------|--------------|------------|
| **ADR theater** | Long ADRs nobody reads | One decision per ADR; link from specs |
| **Rubber-stamp AI ADRs** | Wrong architecture at scale | Architect must edit or reject; ARB for cross-team |
| **Proposed ADRs in agent index** | Agents treat draft as law | Index only `accepted` |
| **Spec and code diverge** | CI green but wrong behavior | Contract tests from OpenAPI; block merge if spec stale |
| **Wiki as source of truth** | Agents retrieve outdated text | Git canonical; wiki is mirror |
| **No link spec ↔ ADR** | Traceability lost | `x-adr` on OpenAPI operations |
| **Planning AI without existing ADR context** | Repeated contradictory decisions | RAG over Accepted ADRs before draft |
| **Skipping threat model on AI-generated design** | Security gaps in generated APIs | SEC review gate for external / T1 |

---

## Suggested starting point

1. MADR in Git with statuses: `proposed` → `accepted` | `rejected` | `superseded`  
2. OpenAPI 3.1 with `x-status: approved` before implementation  
3. Planning agent retrieves Accepted ADRs before drafting  
4. Publish pipeline described in [knowledge-indexing-portals.md](knowledge-indexing-portals.md)

---

## Related

- [Spec-driven development](spec-driven-development.md)  
- [Knowledge indexing & portals](knowledge-indexing-portals.md)

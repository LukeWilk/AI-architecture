# Guide: Knowledge Indexing & Portals

**Decision:** How do humans browse ADRs/specs, and how do AI agents retrieve them?

**Full catalog:** [AI toolkit](../ai-toolkit.md) — MCP, portals, ADR, specs, and retrieval tools.

Related: [planning-and-adr.md](../planning-and-adr.md) · [SOP-009](../sops/SOP-009-artifact-publish.md)

---

## The problem

ADRs and specs are **non-production artifacts**. They must be discoverable by people, retrievable by AI agents, and changeable only through review (typically Git PRs).

---

## Options compared

### Git only (no portal)

| Pros | Cons |
|------|------|
| Zero extra infra | Poor browse UX for non-Git users |
| Agents can read repo directly | Large monorepos → noisy retrieval |

**Fit:** Small teams; early adoption.

---

### Static site (S3 + CloudFront from CI)

| Pros | Cons |
|------|------|
| Cheap; fast; read-only | Search is basic unless you add an index |
| Good for auditors | Another URL to maintain |

**Fit:** ADR library + rendered specs; pair with search below.

---

### Backstage (TechDocs + catalog)

| Pros | Cons |
|------|------|
| Links services ↔ ADRs ↔ specs | Platform team must operate Backstage |
| Industry standard for eng portals | Initial setup cost |

**Fit:** Organizations with many services and developers.

---

### Confluence (or SharePoint)

| Pros | Cons |
|------|------|
| PM and legal teams already use it | Easily becomes stale source of truth |
| Familiar approval workflows | Weak agent indexing without sync |

**Fit:** **Mirror only**, not canonical store.

---

### OpenSearch

| Pros | Cons |
|------|------|
| Full-text + semantic search; RAG-friendly | Operational cost (cluster or Serverless) |
| Filter index to Accepted/Approved artifacts | Reindex pipeline required on merge |

**Fit:** Medium–large orgs; primary RAG backend.

---

### Amazon Kendra

| Pros | Cons |
|------|------|
| Managed enterprise search | Higher cost at scale |
| AWS-native connectors | Less customizable than OpenSearch for bespoke RAG |

**Fit:** Teams wanting managed search without operating OpenSearch.

---

### MCP server over Git or index

| Pros | Cons |
|------|------|
| IDE agents call `search_adr`, `get_spec` | You build and operate MCP in **your** platform (not this repo) |
| Precise retrieval | Extra availability dependency |

**Fit:** Cursor-heavy teams; complements search index.

---

## Combination patterns

| Pattern | Components | When |
|---------|------------|------|
| **Minimal** | Git + MCP reading Git | &lt; 20 engineers |
| **Standard** | Git + Backstage + OpenSearch + MCP | Most enterprise teams |
| **Compliance-heavy** | Above + static site + Confluence mirror | Regulated industries |

---

## Pitfalls

| Pitfall | Why it hurts | Mitigation |
|---------|--------------|------------|
| **Confluence as canonical** | AI and devs read stale docs | Git merge triggers publish |
| **Indexing draft ADRs** | Agents implement rejected ideas | Filter ingest by `accepted` / `approved` |
| **Whole-repo embedding** | Irrelevant RAG chunks | Index only `docs/adr`, `specs/` |
| **No PR review on ADR changes** | Silent architecture shifts | ADRs change only via PR |
| **Portal without ownership** | Broken TechDocs | Platform SLO on publish pipeline |
| **Duplicate ADR in wiki and Git** | Two versions diverge | Sync Git → wiki one direction |
| **MCP pointing at wiki** | Wrong version in agent context | MCP reads index or pinned Git SHA |

---

## Recommended starting point

Git as canonical → on merge, publish to Backstage + OpenSearch (Accepted/Approved only) → MCP for IDE agents. Add Confluence mirror only if non-dev stakeholders require it.

---

## Related

- [Planning, ADR & specs](planning-adr-specs.md) · [AI coding tools](ai-coding-tools.md)

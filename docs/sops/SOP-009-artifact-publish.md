# SOP-009: Artifact Publish & Index

**Version:** 1.0 · **Owner:** Platform / SRE · **Gate:** G1 (publish)

## Purpose & scope

Publish Accepted ADRs and Approved specs from Git to human discovery surfaces and AI agent indexes.

## Roles

| Role | RACI |
|------|------|
| Platform / SRE | **R/A** — pipeline health |
| ARCH | C — content validation |
| AIPO | C — index/RAG config |

## Prerequisites

- Merge to `main` of files under `docs/adr/` or `specs/`
- CI publish workflow enabled

## Procedure

1. **Validate on merge** — CI checks: ADR front matter valid, status allowed, links resolve, spec `x-status: approved` for indexing.
2. **Build static site** — MkDocs/Docusaurus → S3 bucket `artifacts.{org}.com`.
3. **Invalidate CDN** — CloudFront invalidation for `/adr/*` and `/specs/*`.
4. **Sync Backstage** — TechDocs plugin pulls from Git or S3; catalog entity links updated.
5. **Re-index** — OpenSearch Ingestion (or Kendra) ingests **Accepted ADRs + Approved specs only**.
6. **MCP refresh** — ADR/spec MCP server cache invalidated or webhook triggered.
7. **Verify** — Smoke test: MCP `search_adr` returns new doc within 15 min.

## Definition of Done

- [ ] Static site updated
- [ ] Backstage shows new revision
- [ ] Search index contains document (if status qualifies)
- [ ] MCP returns document in smoke test

## SLA

- End-to-end publish: **≤ 15 minutes** from merge

## Failure handling

| Failure | Action |
|---------|--------|
| Index lag | Page platform on-call; devs use Git path as fallback |
| Broken links in ADR | CI should block merge; if prod index stale, hotfix PR |

## Related SOPs

- [SOP-002](SOP-002-adr-lifecycle.md) · [SOP-003](SOP-003-spec-approval.md) · [planning-and-adr.md](../planning-and-adr.md)

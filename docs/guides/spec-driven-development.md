# Guide: Spec-Driven Development

**Decision:** How tightly should specifications bind AI-generated implementation?

Related: [developer-workflow.md](../developer-workflow.md) · [SOP-004](../sops/SOP-004-implementation.md)

---

## Contract formats

| Format | Pros | Cons |
|--------|------|------|
| **OpenAPI 3.1** | HTTP APIs; tooling-rich; Schemathesis/Pact | Not ideal for gRPC-primary shops |
| **AsyncAPI** | Events, queues, WebSockets | Second spec to maintain |
| **Protobuf + buf** | Strong typing; gRPC | Steeper curve for REST teams |
| **Gherkin / BDD only** | PO-friendly acceptance | Ambiguous for AI codegen without API schema |
| **JSON Schema files** | Flexible | No single operation map |

**Recommended:** OpenAPI for REST/HTTP; AsyncAPI when events are first-class; BDD scenarios **linked** to OpenAPI operations.

---

## AI codegen binding levels

| Level | Description | Pros | Cons |
|-------|-------------|------|------|
| **Strict** | No code until spec `approved` | Highest quality bar | Slower for tiny fixes |
| **Moderate** | Spec approved for new endpoints; patches can lag 1 sprint | Balanced | Requires discipline |
| **Loose** | Spec optional; AI free-form | Maximum vibe velocity | Architecture and test debt |

**Recommended for enterprise:** Strict for T1/T2 external APIs; moderate for internal tools.

---

## Test binding

| Approach | Pros | Cons |
|----------|------|------|
| **Contract tests from OpenAPI** | Catches spec/code drift | Doesn't cover all business logic |
| **AI-generated tests from spec** | Fast coverage | May assert implementation bugs |
| **Human-written tests only** | Trusted | Doesn't scale with AI output volume |

**Recommended:** AI generates from spec; human reviews test PR; contract tests are merge gate.

---

## Pitfalls

| Pitfall | Why it hurts | Mitigation |
|---------|--------------|------------|
| **Spec after code** | Contract tests pass wrong behavior | Block impl PR without approved spec |
| **AI tests from implementation** | Tests encode the bug | Generate from OpenAPI, not from code |
| **Underspecified error models** | AI invents inconsistent errors | Standard error schema in OpenAPI |
| **Breaking change without version** | Consumers break silently | URL or header versioning policy in ADR |
| **Spec too large for agent context** | Partial implementation | Per-service specs; MCP `get_spec` by file |
| **"Just fix it in code" culture** | Spec becomes fiction | CI diff checks spec vs route registration |
| **No link to ADRs** | Same debate every quarter | `x-adr` on operations |

---

## Recommended starting point

Approved OpenAPI per service → AI scaffolds handler + contract tests → developer steers within operation IDs → PR requires spec link.

---

## Related

- [Planning, ADR & specs](planning-adr-specs.md) · [Automated testing](automated-testing-qa.md)

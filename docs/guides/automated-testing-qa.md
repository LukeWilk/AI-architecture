# Guide: Automated Testing & QA

**Decision:** What to automate, what stays human, and how AI fits the test pyramid.

Related: [qa-guardrails.md](../qa-guardrails.md) · [SOP-005](../sops/SOP-005-pr-review.md)

---

## Clarifying "no manual QA"

This model means **no manual test execution** in a QA phase. Humans still:

- Review test **design** in PRs  
- Accept staging behavior (PO demo + green synthetics)  
- Triage production alerts  

---

## Pyramid layers — options

| Layer | Common tools | Automate? | Human role |
|-------|--------------|-----------|------------|
| Unit | pytest, jest, go test | Yes | Review edge cases in PR |
| Contract | Schemathesis, Pact, Dredd | Yes | Approve spec changes |
| Integration | Testcontainers, LocalStack | Yes | Maintain fixture policy |
| E2E | Playwright, Cypress headless | Yes | Review flaky test fixes |
| Mutation | Stryker, mutmut | Yes (nightly/release) | Set tier thresholds |
| Property-based | Hypothesis, fast-check | Selective | Choose critical domains |
| Load | k6, Artillery | Pre-release / continuous | Define SLO targets |

---

## AI-generated tests

| Approach | Pros | Cons |
|----------|------|------|
| **AI from OpenAPI** | Fast; aligned to contract | Misses domain invariants |
| **AI from code** | Matches current behavior | **Pitfall:** locks in bugs |
| **AI maintenance on spec diff** | Keeps suite current | Needs human review of diffs |
| **AI from incident postmortem** | Closes prod gaps | One-off unless wired to SOP |

**Recommended:** Generate from spec + ADR context; human approves in PR.

---

## Staging validation alternatives

| Approach | Pros | Cons |
|----------|------|------|
| **PO demo + green metrics** | Fast; product-focused | Subjective without synthetics |
| **Synthetic canaries only** | Objective | May miss UX gaps |
| **Manual exploratory (timed)** | Finds odd paths | Doesn't scale; contradicts pure automation |

**Recommended:** Synthetics + PO acceptance on staging for user-facing T1/T2 — not a manual regression script.

---

## Pitfalls

| Pitfall | Why it hurts | Mitigation |
|---------|--------------|------------|
| **E2E-only strategy** | Slow CI; flaky | Pyramid balance |
| **Flaky tests ignored** | Alert fatigue; real bugs missed | Quarantine + fix SLA |
| **100% line coverage obsession** | False confidence | Mutation score on T1 |
| **AI tests never reviewed** | Nonsense assertions merge | Reviewer checklist |
| **No contract tests** | Spec drift undetected | Schemathesis in CI |
| **Skipping integration tests** | "Works on my machine" | Ephemeral env or Testcontainers |
| **Manual regression before release** | Bottleneck; unreproducible | Automate path or drop it |
| **Tier 1 without mutation gate** | Weak tests pass | Tier-based CI policy |

---

## Recommended starting point

Unit + contract on every PR → integration for DB/queue paths → E2E for critical journeys → mutation nightly for T1 → AI generates from OpenAPI with human PR review.

---

## Related

- [Spec-driven development](spec-driven-development.md) · [Linters & static analysis](static-analysis-linting.md) · [CI/CD](ci-cd-release.md) · [Observability](observability-monitoring-qa.md)

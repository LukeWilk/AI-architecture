# Guide: AI Guardrails & Security

**Decision:** What automatically blocks unsafe code and unsafe AI usage?

**Classic validators (linters, SAST, SCA, secrets):** see dedicated [Guide: Linters & static analysis](static-analysis-linting.md). **Secret storage, IAM, RBAC, rotation:** [Guide: Identity, access & secrets](identity-access-secrets.md). This guide covers security **policy** and **AI-specific** guardrails.

Related: [qa-guardrails.md](../qa-guardrails.md) · [static-analysis-linting.md](static-analysis-linting.md) · [identity-access-secrets.md](identity-access-secrets.md) · [SOP-010](../sops/SOP-010-ai-tool-usage.md) · [SOP-012](../sops/SOP-012-exception-handling.md)

---

## Pre-merge guardrails

For linters, formatters, type checkers, SAST, SCA, IaC scanners, and pre-commit setup — see **[Linters & static analysis](static-analysis-linting.md)**.

| Control | Options | See also |
|---------|---------|----------|
| **Secret scan** | gitleaks, GitGuardian, TruffleHog | [static-analysis-linting.md](static-analysis-linting.md) |
| **SAST** | Semgrep, CodeQL, Checkmarx | Same |
| **SCA** | Snyk, Dependabot, AWS Inspector | Same |
| **Container scan** | Trivy, ECR native | Same |
| **Policy as code** | OPA, Cedar, Conftest | Same + ADR-linked deny messages |
| **AI PR review** | Bugbot, CodeGuru Reviewer | Below — advisory vs blocking |

---

## AI review: advisory vs blocking

| Mode | Pros | Cons |
|------|------|------|
| **Advisory** | Low friction | Teams ignore comments |
| **Blocking on severity** | Forces fix | Tuning required |
| **Blocking on custom rules** | Policy-aligned | Maintenance |

**Recommended:** Blocking for secrets/SAST Critical; AI review advisory until tuned, then blocking for agreed rules.

---

## AI data handling

| Policy element | Strict | Loose |
|----------------|--------|-------|
| Prod PII in prompts | Never | **Pitfall:** inevitable breach |
| Enterprise AI license | Required | Consumer tools |
| Prompt logging | Audited sample | No visibility |
| Local models on corp code | Discouraged | Uncontrolled leakage risk |

---

## Pitfalls

| Pitfall | Why it hurts | Mitigation |
|---------|--------------|------------|
| **AI review replaces human review** | Subtle bugs and design issues ship | Human reviewer always for T1/T2 |
| **Scan fatigue** | Teams request exceptions constantly | Fix root cause; tune rules |
| **Permanent exceptions** | Policy becomes meaningless | Time-bound exceptions (SOP-012) |
| **Secrets in AI-generated code** | Merge despite scan if review skipped | pre-commit + CI |
| **OPA policies disconnected from ADRs** | Devs don't understand denials | Link deny message to ADR ID |
| **No audit of AI prompts** | Insider data exfiltration undetected | Enterprise gateway logging |
| **Blocking AI review day one** | Developers disable or bypass | Start advisory; tighten gradually |

---

## Recommended starting point

pre-commit secrets → CI SAST/SCA/container → OPA on IaC → human PR review → AI review advisory → SEC owns data-in-AI policy.

---

## Related

- [AI coding tools](ai-coding-tools.md) · [Human-in-the-loop](human-in-the-loop-governance.md)

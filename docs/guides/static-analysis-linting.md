# Guide: Linters & Static Analysis

**Decision:** Which classic code-quality and security validators to run, where to run them, and how they complement AI-generated code.

Related: [qa-guardrails.md](../qa-guardrails.md) · [ai-guardrails-security.md](ai-guardrails-security.md) · [developer-workflow.md](../developer-workflow.md) · [SOP-005](../sops/SOP-005-pr-review.md)

---

## Why this matters with AI-assisted development

AI tools generate code quickly but do not guarantee:

- Consistent style or idioms  
- Type correctness  
- Security patterns (SQL injection, hardcoded secrets)  
- Dependency CVEs  
- Valid OpenAPI/spec syntax  

**Classic linters and static analyzers** are the non-negotiable baseline. They are deterministic, auditable, and should run **before** AI PR review and human merge — locally, at commit, and in CI.

---

## Where tools run (recommended stack)

```text
Editor (on save)  →  pre-commit (commit)  →  CI (PR + main)  →  CD (release image scan)
```

| Stage | Purpose | Fail fast? |
|-------|---------|------------|
| **Editor / IDE** | Lint, format, typecheck on save | Developer feedback |
| **pre-commit** | Same checks + secrets before push | Block commit |
| **CI** | Full suite on clean runner | Block merge |
| **CD** | Container/IaC scan on artifact | Block deploy |

**Pitfall:** CI-only checks → developers push broken code repeatedly and waste pipeline time. Mirror critical checks in pre-commit.

---

## Tool categories

### 1. Linters (style, bugs, complexity)

Catch stylistic drift and common bug patterns. Essential when AI output varies in style.

| Language | Common tools | Pros | Cons |
|----------|--------------|------|------|
| **JavaScript / TypeScript** | ESLint, Biome | ESLint: huge ecosystem; Biome: fast all-in-one | Two formatters if ESLint + Prettier overlap |
| **Python** | Ruff, Pylint, Flake8 | Ruff: fast; replaces many Flake8 plugins | Pylint slower; strict defaults annoy teams |
| **Go** | golangci-lint (meta-linter) | Single entry; many linters | Config complexity |
| **Java / Kotlin** | Checkstyle, SpotBugs, detekt | Mature in enterprise Java | Gradle/Maven setup overhead |
| **Rust** | Clippy | Idiomatic Rust enforcement | — |
| **Shell / YAML / Markdown** | ShellCheck, yamllint, markdownlint | CI/config hygiene | Noise on generated YAML |

**Suggested starting point:** One linter per language; share config in repo root; extend gradually.

---

### 2. Formatters (auto-fix layout)

| Tool | Languages | Pros | Cons |
|------|-----------|------|------|
| **Prettier** | JS/TS/CSS/JSON/MD | De facto standard | Less control over style debates |
| **Biome** | JS/TS | Lint + format in one | Newer ecosystem |
| **Black** | Python | Zero config | Conflicts with older Pylint rules |
| **Ruff format** | Python | Black-compatible; fast | Teams on Black already may duplicate |
| **gofmt / goimports** | Go | Built-in culture | — |
| **rustfmt** | Rust | Standard | — |

**Pitfall:** Formatter wars in PRs. Pick one; run in CI; AI agents should use same config via `.editorconfig` + checked-in config files.

---

### 3. Type checkers (static typing)

| Tool | Languages | Pros | Cons |
|------|-----------|------|------|
| **TypeScript (`tsc`)** | TS | Catches API shape errors early | `any` bypasses checks |
| **mypy / pyright** | Python | Catches AI wrong-type assignments | Gradual typing migration pain |
| **Java compiler** | Java | Strong typing built-in | — |

**With AI:** Require typed public APIs; AI often omits types or uses overly broad types. Typecheck in CI catches this before runtime.

---

### 4. SAST (security static analysis)

Find vulnerability patterns in source code.

| Tool | Pros | Cons |
|------|------|------|
| **Semgrep** | Custom rules; fast; good for CI | Rule tuning needed |
| **CodeQL (GitHub)** | Deep analysis; query language | Heavier; GitHub-centric |
| **SonarQube** | Dashboard; quality gate history | Server to operate |
| **Checkmarx / Veracode** | Enterprise compliance | Cost; slower feedback |
| **Bandit** | Python-focused | Python only |

**Suggested starting point:** Semgrep OSS rules + language-specific (Bandit for Python) in CI; block Critical/High.

**Pitfall:** AI generates plausible but insecure code (string SQL, path traversal). SAST catches patterns humans miss in fast review.

---

### 5. SCA (software composition analysis)

Scan dependencies for known CVEs and license issues.

| Tool | Pros | Cons |
|------|------|------|
| **Dependabot** | GitHub-native; PRs for bumps | GitHub-only |
| **Renovate** | Multi-platform; flexible | Config learning curve |
| **Snyk** | Dev-friendly; container too | Cost at scale |
| **AWS Inspector** | AWS-native for ECR/Lambda deps | AWS-centric |
| **OWASP Dependency-Check** | Open source | False positives |

**Pitfall:** AI adds dependencies casually (`import obscure-lib`). SCA must run on every PR that touches lockfiles.

---

### 6. Secret scanners

| Tool | Pros | Cons |
|------|------|------|
| **gitleaks** | Fast; pre-commit hook | False positives in tests |
| **GitGuardian** | Enterprise policy | Cost |
| **TruffleHog** | Deep history scan | Slower |
| **detect-secrets** | Baseline allowlist | Maintenance of baseline |

**With AI:** Models occasionally emit fake or real-looking keys. Block merge on any new secret pattern; never rely on human eyeballing diffs.

---

### 7. License compliance

| Tool | Pros | Cons |
|------|------|------|
| **FOSSA** | Policy dashboards | Cost |
| **Snyk License** | Bundled with SCA | — |
| **license-checker (npm)** | Simple npm | npm only |
| **pip-licenses / go-licenses** | CLI per ecosystem | Manual aggregation |

**Pitfall:** AI imports GPL library into proprietary service. Automate license scan on dependency changes.

---

### 8. IaC & config validators

| Tool | Targets | Pros | Cons |
|------|---------|------|------|
| **Checkov** | Terraform, CloudFormation, K8s | Broad | Verbose defaults |
| **tfsec / Trivy (IaC)** | Terraform | Fast | Overlap with Checkov |
| **cfn-lint** | CloudFormation | AWS-native | CFN only |
| **CDK Nag** | AWS CDK | Aspect-based rules | CDK only |
| **kubeconform / kube-linter** | Kubernetes manifests | K8s hygiene | — |
| **OPA / Conftest** | Custom policy | Links to ADRs | Write policies |

**Suggested starting point:** Checkov or CDK Nag for AWS teams; Conftest for org-specific rules referencing ADRs.

---

### 9. Container & image scanners

| Tool | Pros | Cons |
|------|------|------|
| **Trivy** | OS + app CVEs; IaC | — |
| **ECR enhanced scanning** | AWS-native | AWS-only |
| **Grype / Syft** | SBOM + scan | Extra tooling |
| **Snyk Container** | Unified with SCA | Cost |

Run at **image build** and block Critical CVEs on deploy (tier-dependent exceptions via [SOP-012](../sops/SOP-012-exception-handling.md)).

---

### 10. API & spec validators

| Tool | Purpose | Pros | Cons |
|------|---------|------|------|
| **Spectral** | OpenAPI/AsyncAPI lint | Custom rules (e.g. require `x-adr`) | Rule authoring |
| **openapi-diff** | Breaking change detection | Protects consumers | Needs baseline spec |
| **buf** | Protobuf breaking changes | Strong for gRPC | Not for OpenAPI-only shops |
| **Schemathesis** | Property-based API testing | Finds spec violations | Not a linter — pairs with spec |

**With AI:** AI drafts OpenAPI with subtle errors. Spectral in spec PR CI; Schemathesis in service CI.

---

### 11. Orchestration: pre-commit

| Approach | Pros | Cons |
|----------|------|------|
| **pre-commit framework** | Language-agnostic hooks; shared config | Developers must install hooks |
| **Husky + lint-staged** | JS ecosystem standard | JS-centric |
| **CI only** | No local setup | Slow feedback loop |

**Suggested hooks (minimum):** secrets (gitleaks) → formatter → linter → typecheck (if applicable).

Example hook categories for **your** project (implement in your repo, not here):

```text
gitleaks protect
ruff check / eslint
ruff format --check / prettier --check
mypy / tsc --noEmit
spectral lint specs/openapi/*.yaml   # on spec changes only
```

---

## CI gate matrix (reference)

Adapt severity by service tier ([GOVERNANCE.md](../GOVERNANCE.md)).

| Check | Local / pre-commit | CI merge gate | Typical block threshold |
|-------|-------------------|---------------|-------------------------|
| Formatter | Yes | Yes | Any diff |
| Linter | Yes | Yes | Errors (warnings advisory) |
| Typecheck | Yes | Yes | Any error |
| Unit tests | Optional local | Yes | Any failure |
| Secret scan | Yes | Yes | Any finding |
| SAST | Optional | Yes | Critical/High |
| SCA | — | Yes | Critical CVE (configurable) |
| IaC scan | — | Yes (IaC changes) | High+ |
| Container scan | — | Yes (deploy stage) | Critical |
| OpenAPI lint | — | Yes (spec changes) | Errors |
| AI PR review | — | Advisory → blocking | Team policy |

---

## AI + classic tools: division of labor

| Concern | Classic tool | AI review |
|---------|--------------|-----------|
| Formatting / style | Formatter + linter | Unreliable for consistency |
| Known CVE patterns | SCA, container scan | May miss new CVEs |
| OWASP top 10 patterns | SAST | May miss context |
| Secret leakage | gitleaks | **Pitfall:** AI invents keys |
| Business logic bugs | Tests + human review | AI review helps |
| Architecture fit | ADR + OPA + human | AI may suggest wrong pattern |

**Rule:** Never drop classic validators because AI review is enabled. AI review **stacks on top**, not replaces.

---

## Pitfalls

| Pitfall | Why it hurts | Mitigation |
|---------|--------------|------------|
| **Lint only in CI** | Slow iteration; noisy PRs | pre-commit + editor |
| **Different configs per developer** | AI + human code clash | Single checked-in config |
| **Warning fatigue** | Real issues ignored | Fix or disable rule explicitly |
| **Grandfathering entire repo** | New code clean; old rot remains | Ratchet or phased fix |
| **AI bypasses type system** | Runtime errors in prod | Strict typecheck CI |
| **No lockfile scan** | CVE in transitive dep | SCA on every lockfile change |
| **Secrets in test fixtures** | gitleaks false positives or real leaks | Synthetic fixtures; allowlist baseline |
| **Duplicate tools** | ESLint + Biome + Prettier overlap | Consolidate |
| **Spec lint missing** | AI OpenAPI invalid | Spectral on spec PRs |
| **Container scan only at deploy** | Late surprise | Scan in CI after build |

---

## Suggested starting point (minimal enterprise set)

| Layer | Tools |
|-------|-------|
| **JS/TS service** | ESLint + Prettier + `tsc` + Jest/Vitest |
| **Python service** | Ruff (lint+format) + mypy + pytest |
| **Go service** | golangci-lint + go test |
| **All repos** | gitleaks (pre-commit) + Dependabot/Renovate |
| **CI** | Semgrep + Snyk or Inspector + Checkov/CDK Nag |
| **Specs** | Spectral + Schemathesis in service CI |
| **Deploy** | Trivy or ECR scan on image |

Add SonarQube or CodeQL when compliance or scale demands central quality dashboards.

---

## Related

- [AI guardrails & security](ai-guardrails-security.md) — security policy and AI data handling  
- [Automated testing & QA](automated-testing-qa.md) — tests vs linters  
- [CI/CD & release](ci-cd-release.md) — where scans sit in pipeline  
- [SOP-005 PR review](../sops/SOP-005-pr-review.md) — merge checklist

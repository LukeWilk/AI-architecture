# Guide: CI/CD & Release

**Decision:** How changes flow from merge to AWS production safely.

Related: [cicd-observability.md](../cicd-observability.md) · [static-analysis-linting.md](static-analysis-linting.md) · [identity-access-secrets.md](identity-access-secrets.md) · [SOP-006](../sops/SOP-006-release-deploy.md)

---

## Static analysis in the pipeline

Linters, SAST, SCA, and secret scans should run in **CI before** deploy stages. Tool choices and gate thresholds: [Linters & static analysis](static-analysis-linting.md).

---

## CI orchestrator

| Option | Pros | Cons |
|--------|------|------|
| **AWS CodePipeline + CodeBuild** | Native IAM; unified with AWS deploy | YAML UX; cross-repo patterns harder |
| **GitHub Actions** | Excellent PR UX; huge action ecosystem | Hybrid IAM to AWS needs OIDC setup |
| **GitLab CI** | Single platform if already on GitLab | Less common in AWS-only shops |
| **Jenkins** | Flexible | Operate Jenkins; drift |

**Recommended for AWS-primary:** CodePipeline or Actions + OIDC — pick one org standard. IAM and deploy-role design: [Identity, access & secrets](identity-access-secrets.md).

---

## Deploy strategies

| Strategy | Pros | Cons |
|----------|------|------|
| **Rolling** | Simple | Slow rollback; blast radius |
| **Blue/green** | Fast rollback | Double capacity cost during switch |
| **Canary (% traffic)** | Early signal | Requires metric gates + automation |
| **Feature flags (AppConfig/LaunchDarkly)** | Decouple deploy from release | Flag debt if not cleaned |

**Recommended:** Canary + feature flags for T1; blue/green acceptable; avoid naked rolling for T1.

---

## Ephemeral PR environments

| Option | Pros | Cons |
|--------|------|------|
| **Full stack per PR (CDK)** | Realistic E2E | Cost; slow provisioning |
| **Shared staging + branch namespace** | Cheaper | Cross-PR interference |
| **LocalStack / mocks only** | Fast | Misses integration gaps |

**Pitfall:** Ephemeral envs with prod-like data → compliance violation. Use synthetic fixtures only.

---

## Pitfalls

| Pitfall | Why it hurts | Mitigation |
|---------|--------------|------------|
| **Deploy without metric gate** | Bad release reaches 100% traffic | Auto-rollback on error/latency |
| **Staging ≠ prod parity** | "Worked in staging" incidents | Same container, scaled-down infra |
| **Manual prod deploy only** | Human error; slow recovery | Automate with approval gate for T1 |
| **Skipping container scan** | CVEs in prod | ECR/Trivy block Critical |
| **Long-running PR envs** | AWS bill shock | Auto-destroy on PR close / TTL |
| **CI and CD in one job** | Can't retry deploy without retest | Separate stages with artifacts |
| **No deploy correlation in metrics** | Can't blame release | Tag metrics/traces with version |
| **Feature flag as permanent if** | Unreachable code paths | Flag cleanup in Definition of Done |

---

## Recommended starting point

Actions or CodePipeline → build + test stages → deploy staging → synthetics → canary prod with metric rollback → AppConfig for release toggles.

---

## Related

- [Runtime on AWS](runtime-aws.md) · [Automated testing](automated-testing-qa.md) · [Observability](observability-monitoring-qa.md)

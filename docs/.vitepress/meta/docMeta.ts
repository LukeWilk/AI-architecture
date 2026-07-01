export interface DocMetaEntry {
  docType?: 'guide' | 'topic' | 'sop' | 'perspective' | 'hub'
  phase?: string
  phases?: string[]
  pillar?: string
  roles?: string[]
  relatedGuides?: string[]
  relatedTopics?: string[]
  relatedSops?: string[]
  series?: number
  seriesTotal?: number
}

/** Key: path without base, no .html — e.g. `/guides/ai-coding-tools` */
export const docMeta: Record<string, DocMetaEntry> = {
  '/guides/ai-coding-tools': {
    docType: 'guide',
    phase: 'build',
    pillar: 'delivery',
    roles: ['developer', 'team-lead'],
    relatedGuides: ['/guides/spec-driven-development', '/guides/knowledge-indexing-portals'],
    relatedSops: ['/sops/SOP-004-implementation', '/sops/SOP-010-ai-tool-usage'],
    series: 1,
    seriesTotal: 16,
  },
  '/guides/planning-adr-specs': {
    docType: 'guide',
    phase: 'plan',
    pillar: 'delivery',
    roles: ['architect', 'product-manager', 'program-manager'],
    relatedGuides: ['/guides/knowledge-indexing-portals', '/guides/human-in-the-loop-governance'],
    relatedTopics: ['/planning-and-adr'],
    relatedSops: ['/sops/SOP-001-feature-intake', '/sops/SOP-002-adr-lifecycle', '/sops/SOP-003-spec-approval'],
    series: 2,
    seriesTotal: 16,
  },
  '/guides/knowledge-indexing-portals': {
    docType: 'guide',
    phase: 'plan',
    phases: ['plan', 'build'],
    pillar: 'delivery',
    roles: ['architect', 'developer'],
    relatedGuides: ['/guides/planning-adr-specs', '/guides/ai-coding-tools'],
    relatedSops: ['/sops/SOP-009-artifact-publish'],
    series: 3,
    seriesTotal: 16,
  },
  '/guides/spec-driven-development': {
    docType: 'guide',
    phase: 'build',
    pillar: 'delivery',
    roles: ['developer', 'architect', 'qa'],
    relatedGuides: ['/guides/ai-coding-tools', '/guides/automated-testing-qa'],
    relatedTopics: ['/developer-workflow'],
    relatedSops: ['/sops/SOP-003-spec-approval', '/sops/SOP-004-implementation'],
    series: 4,
    seriesTotal: 16,
  },
  '/guides/automated-testing-qa': {
    docType: 'guide',
    phase: 'verify',
    pillar: 'quality',
    roles: ['qa', 'developer'],
    relatedGuides: ['/guides/static-analysis-linting', '/guides/observability-monitoring-qa'],
    relatedTopics: ['/qa-guardrails'],
    relatedSops: ['/sops/SOP-005-pr-review'],
    series: 5,
    seriesTotal: 16,
  },
  '/guides/static-analysis-linting': {
    docType: 'guide',
    phase: 'verify',
    phases: ['build', 'verify'],
    pillar: 'quality',
    roles: ['developer', 'qa', 'security'],
    relatedGuides: ['/guides/ai-guardrails-security', '/guides/identity-access-secrets'],
    relatedSops: ['/sops/SOP-005-pr-review'],
    series: 6,
    seriesTotal: 16,
  },
  '/guides/ai-guardrails-security': {
    docType: 'guide',
    phase: 'verify',
    pillar: 'data-security',
    roles: ['security', 'qa', 'developer'],
    relatedGuides: ['/guides/static-analysis-linting', '/guides/data-governance', '/guides/identity-access-secrets'],
    relatedSops: ['/sops/SOP-005-pr-review', '/sops/SOP-010-ai-tool-usage', '/sops/SOP-012-exception-handling'],
    series: 7,
    seriesTotal: 16,
  },
  '/guides/identity-access-secrets': {
    docType: 'guide',
    phase: 'build',
    phases: ['build', 'verify', 'release'],
    pillar: 'data-security',
    roles: ['security', 'devops-sre', 'developer'],
    relatedGuides: ['/guides/data-governance', '/guides/ci-cd-release'],
    relatedTopics: ['/identity-access-secrets'],
    relatedSops: ['/sops/SOP-010-ai-tool-usage', '/sops/SOP-011-onboarding'],
    series: 16,
    seriesTotal: 16,
  },
  '/guides/ci-cd-release': {
    docType: 'guide',
    phase: 'release',
    pillar: 'platform',
    roles: ['devops-sre', 'developer'],
    relatedGuides: ['/guides/runtime-aws', '/guides/identity-access-secrets'],
    relatedTopics: ['/cicd-observability'],
    relatedSops: ['/sops/SOP-006-release-deploy'],
    series: 8,
    seriesTotal: 16,
  },
  '/guides/runtime-aws': {
    docType: 'guide',
    phase: 'release',
    pillar: 'platform',
    roles: ['devops-sre', 'architect'],
    relatedGuides: ['/guides/ci-cd-release', '/guides/monitoring-tracing-logging'],
    relatedSops: ['/sops/SOP-006-release-deploy'],
    series: 9,
    seriesTotal: 16,
  },
  '/guides/monitoring-tracing-logging': {
    docType: 'guide',
    phase: 'operate',
    pillar: 'operations',
    roles: ['devops-sre'],
    relatedGuides: ['/guides/dashboards-reporting', '/guides/incident-management'],
    relatedTopics: ['/operations-observability'],
    relatedSops: ['/sops/SOP-007-incident-response'],
    series: 10,
    seriesTotal: 16,
  },
  '/guides/dashboards-reporting': {
    docType: 'guide',
    phase: 'operate',
    pillar: 'operations',
    roles: ['devops-sre', 'program-manager'],
    relatedGuides: ['/guides/monitoring-tracing-logging', '/guides/incident-management'],
    series: 11,
    seriesTotal: 16,
  },
  '/guides/incident-management': {
    docType: 'guide',
    phase: 'operate',
    pillar: 'operations',
    roles: ['devops-sre', 'security'],
    relatedGuides: ['/guides/monitoring-tracing-logging', '/guides/observability-monitoring-qa'],
    relatedSops: ['/sops/SOP-007-incident-response', '/sops/SOP-008-post-incident'],
    series: 12,
    seriesTotal: 16,
  },
  '/guides/observability-monitoring-qa': {
    docType: 'guide',
    phase: 'learn',
    phases: ['operate', 'learn'],
    pillar: 'quality',
    roles: ['qa', 'devops-sre'],
    relatedGuides: ['/guides/automated-testing-qa', '/guides/incident-management'],
    relatedSops: ['/sops/SOP-008-post-incident'],
    series: 13,
    seriesTotal: 16,
  },
  '/guides/data-governance': {
    docType: 'guide',
    phase: 'plan',
    phases: ['plan', 'operate'],
    pillar: 'data-security',
    roles: ['security', 'data-steward'],
    relatedGuides: ['/guides/identity-access-secrets', '/guides/ai-guardrails-security'],
    relatedTopics: ['/data-governance'],
    relatedSops: ['/sops/SOP-010-ai-tool-usage'],
    series: 14,
    seriesTotal: 16,
  },
  '/guides/human-in-the-loop-governance': {
    docType: 'guide',
    phase: 'learn',
    phases: ['plan', 'learn'],
    pillar: 'delivery',
    roles: ['team-lead', 'program-manager', 'architect'],
    relatedGuides: ['/guides/planning-adr-specs'],
    relatedTopics: ['/GOVERNANCE'],
    series: 15,
    seriesTotal: 16,
  },
  '/ai-toolkit': { docType: 'hub', phase: 'build', phases: ['plan', 'build', 'verify'], pillar: 'delivery', relatedGuides: ['/guides/ai-coding-tools', '/guides/knowledge-indexing-portals', '/guides/planning-adr-specs', '/guides/spec-driven-development', '/guides/ai-guardrails-security'], relatedSops: ['/sops/SOP-010-ai-tool-usage'], relatedTopics: ['/developer-workflow'] },
  '/planning-and-adr': { docType: 'topic', phase: 'plan', pillar: 'delivery' },
  '/developer-workflow': { docType: 'topic', phase: 'build', pillar: 'delivery' },
  '/qa-guardrails': { docType: 'topic', phase: 'verify', pillar: 'quality' },
  '/cicd-observability': { docType: 'topic', phase: 'release', pillar: 'platform' },
  '/data-governance': { docType: 'topic', phase: 'plan', pillar: 'data-security' },
  '/identity-access-secrets': { docType: 'topic', phase: 'build', pillar: 'data-security' },
  '/operations-observability': { docType: 'topic', phase: 'operate', pillar: 'operations' },
}

export function resolveDocPath(relativePath: string): string {
  const cleaned = relativePath.replace(/\.(md|html)$/, '').replace(/\/index$/, '/')
  return cleaned.startsWith('/') ? cleaned : `/${cleaned}`
}

export function getDocMeta(relativePath: string, frontmatter: Record<string, unknown>): DocMetaEntry {
  const path = resolveDocPath(relativePath)
  const base = docMeta[path] ?? {}
  return {
    ...base,
    ...(frontmatter.docType ? { docType: frontmatter.docType as DocMetaEntry['docType'] } : {}),
    ...(frontmatter.phase ? { phase: String(frontmatter.phase) } : {}),
    ...(frontmatter.pillar ? { pillar: String(frontmatter.pillar) } : {}),
  }
}

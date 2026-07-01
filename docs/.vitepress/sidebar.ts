import type { DefaultTheme } from 'vitepress'

const lifecycleItems: DefaultTheme.SidebarItem[] = [
  { text: 'Lifecycle overview', link: '/lifecycle/' },
  { text: 'Plan', link: '/lifecycle/plan' },
  { text: 'Build', link: '/lifecycle/build' },
  { text: 'Verify', link: '/lifecycle/verify' },
  { text: 'Release', link: '/lifecycle/release' },
  { text: 'Operate', link: '/lifecycle/operate' },
  { text: 'Learn', link: '/lifecycle/learn' },
]

const pillarItems: DefaultTheme.SidebarItem[] = [
  { text: 'Pillars overview', link: '/pillars/' },
  { text: 'Delivery', link: '/pillars/delivery' },
  { text: 'Quality', link: '/pillars/quality' },
  { text: 'Platform', link: '/pillars/platform' },
  { text: 'Data & security', link: '/pillars/data-security' },
  { text: 'Operations', link: '/pillars/operations' },
]

const roleItems: DefaultTheme.SidebarItem[] = [
  { text: 'Overview & matrix', link: '/perspectives/' },
  { text: 'Developer', link: '/perspectives/developer' },
  { text: 'DevOps / SRE', link: '/perspectives/devops-sre' },
  { text: 'QA / Quality lead', link: '/perspectives/qa' },
  { text: 'Product manager / PO', link: '/perspectives/product-manager' },
  { text: 'Scrum Master', link: '/perspectives/scrum-master' },
  { text: 'Program manager', link: '/perspectives/program-manager' },
  { text: 'Team lead / EM', link: '/perspectives/team-lead' },
  { text: 'Architect', link: '/perspectives/architect' },
  { text: 'Security', link: '/perspectives/security' },
]

const guideItems: DefaultTheme.SidebarItem[] = [
  { text: 'Overview', link: '/guides/' },
  { text: 'AI coding tools', link: '/guides/ai-coding-tools' },
  { text: 'Planning, ADR & specs', link: '/guides/planning-adr-specs' },
  { text: 'Knowledge indexing & portals', link: '/guides/knowledge-indexing-portals' },
  { text: 'Spec-driven development', link: '/guides/spec-driven-development' },
  { text: 'Automated testing & QA', link: '/guides/automated-testing-qa' },
  { text: 'Linters & static analysis', link: '/guides/static-analysis-linting' },
  { text: 'AI guardrails & security', link: '/guides/ai-guardrails-security' },
  { text: 'Identity, access & secrets', link: '/guides/identity-access-secrets' },
  { text: 'CI/CD & release', link: '/guides/ci-cd-release' },
  { text: 'Runtime on AWS', link: '/guides/runtime-aws' },
  { text: 'Monitoring, tracing & logging', link: '/guides/monitoring-tracing-logging' },
  { text: 'Dashboards & reporting', link: '/guides/dashboards-reporting' },
  { text: 'Incident management', link: '/guides/incident-management' },
  { text: 'Observability & monitoring QA', link: '/guides/observability-monitoring-qa' },
  { text: 'Data governance layers', link: '/guides/data-governance' },
  { text: 'Human-in-the-loop & governance', link: '/guides/human-in-the-loop-governance' },
]

const sopItems: DefaultTheme.SidebarItem[] = [
  { text: 'SOP index', link: '/sops/' },
  { text: 'SOP-001 Feature intake', link: '/sops/SOP-001-feature-intake' },
  { text: 'SOP-002 ADR lifecycle', link: '/sops/SOP-002-adr-lifecycle' },
  { text: 'SOP-003 Spec approval', link: '/sops/SOP-003-spec-approval' },
  { text: 'SOP-004 Implementation', link: '/sops/SOP-004-implementation' },
  { text: 'SOP-005 PR review', link: '/sops/SOP-005-pr-review' },
  { text: 'SOP-006 Release & deploy', link: '/sops/SOP-006-release-deploy' },
  { text: 'SOP-007 Incident response', link: '/sops/SOP-007-incident-response' },
  { text: 'SOP-008 Post-incident', link: '/sops/SOP-008-post-incident' },
  { text: 'SOP-009 Artifact publish', link: '/sops/SOP-009-artifact-publish' },
  { text: 'SOP-010 AI tool usage', link: '/sops/SOP-010-ai-tool-usage' },
  { text: 'SOP-011 Onboarding', link: '/sops/SOP-011-onboarding' },
  { text: 'SOP-012 Exception handling', link: '/sops/SOP-012-exception-handling' },
]

export const sidebar: DefaultTheme.SidebarMulti = {
  '/lifecycle/': [{ text: 'Delivery lifecycle', collapsed: false, items: lifecycleItems }],
  '/pillars/': [{ text: 'Content pillars', collapsed: false, items: pillarItems }],
  '/perspectives/': [{ text: 'Role perspectives', collapsed: false, items: roleItems }],
  '/guides/': [{ text: 'Decision guides', collapsed: false, items: guideItems }],
  '/sops/': [{ text: 'Standard operating procedures', collapsed: false, items: sopItems }],
  '/': [
    {
      text: 'Getting started',
      collapsed: false,
      items: [
        { text: 'Home', link: '/' },
        { text: 'How to use', link: '/HOW-TO-USE' },
        { text: 'Adoption roadmap', link: '/adoption-roadmap' },
        { text: 'Documentation map', link: '/README' },
        { text: 'Glossary', link: '/glossary' },
      ],
    },
    { text: 'Delivery lifecycle', collapsed: false, items: lifecycleItems },
    { text: 'Content pillars', collapsed: true, items: pillarItems },
    { text: 'By role', collapsed: true, items: roleItems },
    {
      text: 'Architecture',
      collapsed: false,
      items: [
        { text: 'Architecture overview', link: '/ARCHITECTURE' },
        { text: 'Governance model', link: '/GOVERNANCE' },
      ],
    },
    {
      text: 'Decision guides',
      collapsed: true,
      items: [{ text: 'All guides (16)', link: '/guides/' }, ...guideItems.slice(1)],
    },
    {
      text: 'Topic deep dives',
      collapsed: true,
      items: [
        { text: 'Planning & ADR', link: '/planning-and-adr' },
        { text: 'Developer workflow', link: '/developer-workflow' },
        { text: 'QA & guardrails', link: '/qa-guardrails' },
        { text: 'CI/CD & observability', link: '/cicd-observability' },
        { text: 'Data governance', link: '/data-governance' },
              { text: 'Identity & access', link: '/identity-access-secrets' },
              { text: 'AI toolkit catalog', link: '/ai-toolkit' },
              { text: 'Operations overview', link: '/operations-observability' },
      ],
    },
    {
      text: 'Operating model',
      collapsed: true,
      items: [
        { text: 'Process overview', link: '/processes/overview' },
        { text: 'SOP index', link: '/sops/' },
      ],
    },
  ],
}

export const nav: DefaultTheme.NavItem[] = [
  { text: 'Start', link: '/HOW-TO-USE' },
  { text: 'Lifecycle', link: '/lifecycle/' },
  { text: 'By role', link: '/perspectives/' },
  {
    text: 'Explore',
    items: [
      { text: 'Content pillars', link: '/pillars/' },
      { text: 'AI toolkit catalog', link: '/ai-toolkit' },
      { text: 'Decision guides', link: '/guides/' },
      { text: 'Architecture', link: '/ARCHITECTURE' },
        { text: 'Adoption roadmap', link: '/adoption-roadmap' },
        { text: 'AI toolkit catalog', link: '/ai-toolkit' },
        { text: 'Glossary', link: '/glossary' },
    ],
  },
  { text: 'Governance', link: '/GOVERNANCE' },
  { text: 'SOPs', link: '/sops/' },
]

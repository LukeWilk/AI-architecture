export interface LifecyclePhase {
  id: string
  label: string
  link: string
  summary: string
}

export const lifecyclePhases: LifecyclePhase[] = [
  {
    id: 'plan',
    label: 'Plan',
    link: '/lifecycle/plan',
    summary: 'Intake, prioritization, classification, ADR drafting',
  },
  {
    id: 'build',
    label: 'Build',
    link: '/lifecycle/build',
    summary: 'Spec-driven implementation, AI tools, IaC, pre-commit',
  },
  {
    id: 'verify',
    label: 'Verify',
    link: '/lifecycle/verify',
    summary: 'Automated tests, scans, PR review, policy gates',
  },
  {
    id: 'release',
    label: 'Release',
    link: '/lifecycle/release',
    summary: 'CI/CD, progressive deploy, staging sign-off',
  },
  {
    id: 'operate',
    label: 'Operate',
    link: '/lifecycle/operate',
    summary: 'Monitoring, incidents, SLOs, on-call',
  },
  {
    id: 'learn',
    label: 'Learn',
    link: '/lifecycle/learn',
    summary: 'Postmortems, regression, governance updates',
  },
]

export function phaseLink(id: string): string {
  return `/lifecycle/${id}`
}

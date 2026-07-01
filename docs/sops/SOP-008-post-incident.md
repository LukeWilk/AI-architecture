# SOP-008: Post-Incident & Regression Loop

**Version:** 1.0 · **Owner:** SRE + Developer · **Gate:** G5

## Purpose & scope

Close the quality feedback loop: postmortem, mandatory regression artifacts, and updates to spec/ADR when needed.

## Roles

| Role | RACI |
|------|------|
| SRE | **A** — postmortem process |
| DEV | R — regression test PR |
| ARCH | C — ADR updates |
| PO | C — spec amendments |

## Prerequisites

- Sev-1 or Sev-2 incident resolved (SOP-007)
- Incident ticket with timeline

## Procedure

1. **Schedule blamesless postmortem** — Within 48h for Sev-1; 5 business days for Sev-2.
2. **AI draft postmortem** — From ticket + logs + deploy history; human edits all sections.
3. **Identify gaps** — Classify: test gap, spec gap, ADR gap, monitoring gap, process gap.
4. **Create action items** — Each with owner and due date in ticket.

### Mandatory artifacts (by gap type)

| Gap | Required action | Due |
|-----|-----------------|-----|
| Test gap | Regression test PR merged | 48h (Sev-1), 5 days (Sev-2) |
| Monitoring gap | New alert or baseline update | 5 days |
| Spec gap | SOP-003 amendment PR | 5 days |
| ADR gap | SOP-002 new/supersede ADR | 10 days |
| Process gap | SOP update PR | 10 days |

5. **Regression test** — AI drafts from incident; DEV reviews; must fail on reproduced condition pre-fix.
6. **Publish postmortem** — Internal wiki + link from Backstage service page.
7. **Verify closure** — SRE confirms all action items done before incident closed.

## Definition of Done

- [ ] Postmortem published
- [ ] Regression test merged (Sev-1/2)
- [ ] Monitoring/spec/ADR actions tracked to completion
- [ ] Incident ticket closed

## Related SOPs

- [SOP-007](SOP-007-incident-response.md) · [SOP-002](SOP-002-adr-lifecycle.md) · [SOP-003](SOP-003-spec-approval.md)

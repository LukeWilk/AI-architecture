# Enterprise AI Delivery — Reference Template (AWS)

**Documentation only.** A browsable reference for AI-native enterprise software on AWS.

## Browse the documentation

| Where | Link |
|-------|------|
| **GitHub Pages (recommended)** | **https://\<your-org\>.github.io/AI-architecture/** |
| Local dev | `npm install && npm run docs:dev` → http://localhost:5173 |

The GitHub Pages site includes **search**, **sidebar navigation**, **Mermaid diagrams**, and **deep-dive outlines** on every page.

### First-time GitHub Pages setup

After pushing this repo to GitHub:

1. **Settings** → **Pages** → **Build and deployment**
2. Set **Source** to **GitHub Actions**
3. Push to `main` (or run the **Deploy documentation to GitHub Pages** workflow manually)
4. Open `https://<your-github-username-or-org>.github.io/AI-architecture/`

The workflow [`.github/workflows/deploy-docs.yml`](.github/workflows/deploy-docs.yml) builds and publishes on every push to `main`.

---

## Local development

```bash
npm install
npm run docs:dev
```

| Command | Purpose |
|---------|---------|
| `npm run docs:dev` | Local dev server with hot reload |
| `npm run docs:build` | Static site → `docs/.vitepress/dist` |
| `npm run docs:preview` | Preview production build |

Simulate the GitHub Pages URL locally:

```bash
BASE_PATH=/AI-architecture/ npm run docs:build && npm run docs:preview
```

→ **[How to use this template](docs/HOW-TO-USE.md)** · **[Documentation map](docs/README.md)**

---

## What's inside

| Section | Contents |
|---------|----------|
| **Decision guides (15)** | Alternatives, pros/cons, pitfalls |
| **Role perspectives (9)** | Same cycle viewed by dev, DevOps, QA, PM, Scrum, program, EM, architect, security |
| **Architecture** | Layer model, diagrams, AWS topology |
| **Topic docs** | Planning, developer workflow, QA, operations |
| **Governance & SOPs** | RACI, tiers, 12 reference procedures |

---

## Adopting in your project

1. Read [HOW-TO-USE.md](docs/HOW-TO-USE.md)
2. Pick **one** decision guide for your next milestone
3. Record **your** choice in **your** project's ADRs
4. Customize reference SOPs in your org handbook

This repo stays documentation-only — implement tooling in your own repositories.

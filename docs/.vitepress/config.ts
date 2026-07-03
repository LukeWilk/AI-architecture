import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { nav, sidebar } from './sidebar'

/** GitHub project Pages: https://<owner>.github.io/<repo>/
 *
 * Default to the repository subpath used by GitHub Pages. The deployment
 * workflow can override this by setting the BASE_PATH environment variable.
 *
 * Prefer a dynamic default derived from GITHUB_REPOSITORY so forks and other
 * repos automatically get the correct subpath. Fallback to the known repo
 * name when the env var is not present (e.g., local dev).
 *
 * Example: for https://lukewilk.github.io/AI-architecture/ the computed base is
 * '/AI-architecture/'.
 */
const repo = process.env.GITHUB_REPOSITORY?.split('/')?.[1] || 'AI-architecture'
const base = process.env.BASE_PATH || `/${repo}/`

export default withMermaid(
  defineConfig({
    title: 'Enterprise AI Delivery',
    description: 'Reference template for AI-native enterprise software on AWS',
    lang: 'en-US',
    base,
    cleanUrls: true,
    lastUpdated: true,
    appearance: true,

    head: [
      ['meta', { name: 'theme-color', content: '#2563eb' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:site_name', content: 'Enterprise AI Delivery' }],
      ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
      ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
      ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ],

    mermaid: {
      theme: 'neutral',
      themeVariables: {
        primaryColor: '#dbeafe',
        primaryTextColor: '#1e3a8a',
        primaryBorderColor: '#3b82f6',
        lineColor: '#64748b',
        secondaryColor: '#f1f5f9',
        tertiaryColor: '#ecfdf5',
      },
    },

    themeConfig: {
      logo: { src: '/logo.svg', alt: 'Enterprise AI Delivery' },
      siteTitle: 'Enterprise AI Delivery',

      editLink: {
        pattern: 'https://github.com/:owner/:repo/edit/main/docs/:path',
        text: 'Edit this page on GitHub',
      },

      nav,
      sidebar,

      search: {
        provider: 'local',
      },

      socialLinks: [],

      footer: {
        message: 'Reference template only — no production code. Adapt in your own project.',
        copyright: 'Documentation for enterprise AI delivery on AWS',
      },

      docFooter: {
        prev: 'Previous',
        next: 'Next',
      },

      outline: {
        level: [2, 3],
        label: 'On this page',
      },
    },

    markdown: {
      lineNumbers: false,
    },

    transformPageData(pageData) {
      const desc =
        pageData.description ||
        (typeof pageData.frontmatter?.description === 'string'
          ? pageData.frontmatter.description
          : 'Reference template for AI-native enterprise delivery on AWS')
      pageData.description = desc
    },
  }),
)

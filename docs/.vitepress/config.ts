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
/**
 * During local development (npm run docs:dev), we want the site at the root '/'.
 * For production builds (GitHub Pages), we need the repository subpath.
 */
const base = process.env.BASE_PATH || (process.env.NODE_ENV === 'production' ? `/${repo}/` : '/')

export default withMermaid(
  defineConfig({
    title: 'Enterprise AI Delivery',
    description: 'Reference template for AI-native enterprise software on AWS',
    lang: 'en-US',
    base,
    // Disable cleanUrls for GitHub Pages compatibility unless a 404.html redirect is used.
    // This prevents 404s when refreshing subpages or visiting links directly in a private window.
    cleanUrls: false,
    lastUpdated: true,
    appearance: true,

    head: [
      ['meta', { name: 'theme-color', content: '#2563eb' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:site_name', content: 'Enterprise AI Delivery' }],
      // Use the configured `base` so asset links work when the site is hosted
      // under a repository subpath (GitHub Pages). `base` includes a trailing
      // slash (e.g. '/AI-architecture/'), so concatenate asset paths with it.
      ['link', { rel: 'icon', href: `${base}favicon.svg`, type: 'image/svg+xml' }],
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
      // Use a relative logo path (no leading slash). VitePress will prefix
      // the configured `base` when rendering links, preventing double-prefixing.
      logo: { src: 'logo.svg', alt: 'Enterprise AI Delivery' },
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

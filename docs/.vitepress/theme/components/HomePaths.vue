<script setup lang="ts">
import { withBase } from 'vitepress'

const paths = [
  {
    title: 'New team',
    description: 'Week-by-week adoption — start with one phase, expand gradually.',
    link: '/adoption-roadmap',
    icon: '🚀',
    theme: 'path-brand',
  },
  {
    title: 'By role',
    description: 'Developer, DevOps, QA, PM, security — same cycle, your lens.',
    link: '/perspectives/',
    icon: '👥',
    theme: 'path-purple',
  },
  {
    title: 'By lifecycle',
    description: 'Plan → Build → Verify → Release → Operate → Learn.',
    link: '/lifecycle/',
    icon: '⟳',
    theme: 'path-green',
  },
  {
    title: 'By decision',
    description: '16 guides with pros, cons, pitfalls, and starting points.',
    link: '/guides/',
    icon: '⚖',
    theme: 'path-amber',
  },
]
</script>

<template>
  <section class="home-paths">
    <h2 class="home-paths-title">Choose your path</h2>
    <p class="home-paths-sub">
      One reference system — enter from onboarding, role, lifecycle phase, or a specific decision.
    </p>
    <div class="home-paths-grid">
      <a
        v-for="p in paths"
        :key="p.link"
        :href="withBase(p.link)"
        class="home-path-card"
        :class="p.theme"
      >
        <span class="home-path-icon" aria-hidden="true">{{ p.icon }}</span>
        <span class="home-path-card-title">{{ p.title }}</span>
        <span class="home-path-card-desc">{{ p.description }}</span>
      </a>
    </div>
  </section>
</template>

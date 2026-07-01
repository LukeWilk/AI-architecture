<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { getDocMeta } from '../../meta/docMeta'

const { page, frontmatter } = useData()

const meta = computed(() => getDocMeta(page.value.relativePath, frontmatter.value))

const show = computed(() => {
  if (frontmatter.value.layout === 'home') return false
  return meta.value.docType || meta.value.phase || meta.value.pillar
})

const badges = computed(() => {
  const items: { label: string; class: string }[] = []
  if (meta.value.docType) {
    items.push({ label: meta.value.docType, class: 'badge-type' })
  }
  if (meta.value.phase) {
    items.push({ label: `Phase: ${capitalize(meta.value.phase)}`, class: 'badge-phase' })
  }
  if (meta.value.pillar) {
    items.push({ label: formatPillar(meta.value.pillar), class: 'badge-pillar' })
  }
  if (meta.value.series && meta.value.seriesTotal) {
    items.push({
      label: `Guide ${meta.value.series} of ${meta.value.seriesTotal}`,
      class: 'badge-series',
    })
  }
  return items
})

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function formatPillar(p: string): string {
  return p
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}
</script>

<template>
  <div v-if="show" class="doc-meta">
    <div class="doc-meta-badges">
      <span v-for="b in badges" :key="b.label" class="doc-meta-badge" :class="b.class">
        {{ b.label }}
      </span>
    </div>
    <p v-if="meta.roles?.length" class="doc-meta-roles">
      <span class="doc-meta-label">Roles:</span>
      {{ meta.roles.map((r) => r.replace(/-/g, ' ')).join(' · ') }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { getDocMeta } from '../../meta/docMeta'

const { page, frontmatter } = useData()

const meta = computed(() => getDocMeta(page.value.relativePath, frontmatter.value))

const show = computed(() => {
  if (frontmatter.value.layout === 'home') return false
  const m = meta.value
  return (
    (m.relatedGuides?.length ?? 0) > 0 ||
    (m.relatedTopics?.length ?? 0) > 0 ||
    (m.relatedSops?.length ?? 0) > 0
  )
})

function linkLabel(href: string): string {
  const slug = href.split('/').filter(Boolean).pop() ?? href
  return slug
    .replace(/^SOP-\d+-/, 'SOP: ')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}
</script>

<template>
  <div v-if="show" class="related-footer">
    <div v-if="meta.relatedGuides?.length" class="related-group">
      <h4>Related guides</h4>
      <ul>
        <li v-for="link in meta.relatedGuides" :key="link">
          <a :href="withBase(link)">{{ linkLabel(link) }}</a>
        </li>
      </ul>
    </div>
    <div v-if="meta.relatedTopics?.length" class="related-group">
      <h4>Topic deep dives</h4>
      <ul>
        <li v-for="link in meta.relatedTopics" :key="link">
          <a :href="withBase(link)">{{ linkLabel(link) }}</a>
        </li>
      </ul>
    </div>
    <div v-if="meta.relatedSops?.length" class="related-group">
      <h4>Reference SOPs</h4>
      <ul>
        <li v-for="link in meta.relatedSops" :key="link">
          <a :href="withBase(link)">{{ linkLabel(link) }}</a>
        </li>
      </ul>
    </div>
    <p class="related-adapt">
      Adapt in <strong>your</strong> project — record choices in your ADRs.
      <a :href="withBase('/HOW-TO-USE')">How to use this repo →</a>
    </p>
  </div>
</template>

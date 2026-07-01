<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { lifecyclePhases } from '../../meta/lifecycle'
import { getDocMeta } from '../../meta/docMeta'

const { page, frontmatter } = useData()

const meta = computed(() => getDocMeta(page.value.relativePath, frontmatter.value))

const activePhase = computed(() => {
  if (frontmatter.value.layout === 'home') return null
  const fromPath = page.value.relativePath.match(/lifecycle\/(\w+)/)?.[1]
  return fromPath ?? meta.value.phase ?? null
})

const show = computed(() => frontmatter.value.layout !== 'home')
</script>

<template>
  <nav v-if="show" class="phase-nav" aria-label="Delivery lifecycle">
    <span class="phase-nav-label">Lifecycle</span>
    <div class="phase-nav-track">
      <a
        v-for="phase in lifecyclePhases"
        :key="phase.id"
        :href="withBase(phase.link)"
        class="phase-nav-item"
        :class="{ active: activePhase === phase.id }"
        :title="phase.summary"
      >
        {{ phase.label }}
      </a>
    </div>
  </nav>
</template>

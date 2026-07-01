<script setup lang="ts">
import { withBase } from 'vitepress'
import { lifecyclePhases } from '../../meta/lifecycle'
</script>

<template>
  <section class="home-lifecycle">
    <h2 class="home-lifecycle-title">Delivery lifecycle</h2>
    <p class="home-lifecycle-sub">Click a phase to see guides, SOPs, roles, and gates for that stage.</p>
    <div class="home-lifecycle-track">
      <a
        v-for="(phase, i) in lifecyclePhases"
        :key="phase.id"
        :href="withBase(phase.link)"
        class="home-lifecycle-phase"
      >
        <span class="home-lifecycle-num">{{ i + 1 }}</span>
        <span class="home-lifecycle-label">{{ phase.label }}</span>
        <span class="home-lifecycle-summary">{{ phase.summary }}</span>
      </a>
    </div>
    <a :href="withBase('/lifecycle/')" class="home-lifecycle-all">Full lifecycle overview →</a>
  </section>
</template>

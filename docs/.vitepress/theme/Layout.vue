<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import DocMeta from './components/DocMeta.vue'
import PhaseNav from './components/PhaseNav.vue'
import RelatedFooter from './components/RelatedFooter.vue'

const { Layout: DefaultLayout } = DefaultTheme
</script>

<template>
  <DefaultLayout>
    <template #doc-before>
      <DocMeta />
      <PhaseNav />
    </template>
    <template #doc-after>
      <RelatedFooter />
    </template>
  </DefaultLayout>
</template>

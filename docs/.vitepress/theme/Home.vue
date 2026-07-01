<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import HomePaths from './components/HomePaths.vue'
import HomeLifecycle from './components/HomeLifecycle.vue'

const { Home: DefaultHome } = DefaultTheme
</script>

<template>
  <DefaultHome>
    <template #hero-after>
      <HomePaths />
    </template>
    <template #features-after>
      <HomeLifecycle />
    </template>
  </DefaultHome>
</template>

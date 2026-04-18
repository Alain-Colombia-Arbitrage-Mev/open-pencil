<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ inheritAttrs: false })

const { class: classProp, gradient = ['#3B82F6', '#8B5CF6', '#EC4899', '#3B82F6'], duration = 3000 } = defineProps<{
  class?: string
  gradient?: string[]
  duration?: number
}>()

const gradientStyle = computed(() => ({
  backgroundImage: `linear-gradient(90deg, ${gradient.join(', ')})`,
  animationDuration: `${duration}ms`
}))
</script>

<template>
  <span
    class="inline-block animate-gradient bg-clip-text text-transparent"
    :class="classProp"
    :style="gradientStyle"
  >
    <slot />
  </span>
</template>

<style scoped>
@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-shift v-bind("duration + 'ms'") linear infinite;
}
</style>
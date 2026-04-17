<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    class?: string
    duration?: number
    gradient?: string[]
  }>(),
  {
    class: '',
    duration: 2000,
    gradient: () => ['transparent', 'rgba(255,255,255,0.5)', 'transparent']
  }
)

const style = computed(() => ({
  '--shimmer-duration': `${props.duration}ms`,
  '--shimmer-gradient': `linear-gradient(90deg, ${props.gradient.join(', ')})`
}))
</script>

<template>
  <span class="shimmer relative inline-block" :class="props.class" :style="style">
    <slot />
  </span>
</template>

<style scoped>
.shimmer::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--shimmer-gradient, linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent));
  background-size: 200% 100%;
  animation: shimmer var(--shimmer-duration, 2000ms) ease-in-out infinite;
  border-radius: inherit;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
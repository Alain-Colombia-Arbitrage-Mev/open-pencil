<script setup lang="ts">
defineOptions({ inheritAttrs: false })

const { class: classProp, duration = 2000 } = defineProps<{
  class?: string
  duration?: number
}>()
</script>

<template>
  <span
    class="shimmer relative inline-block"
    :class="classProp"
    :style="{ '--shimmer-duration': `${duration}ms` }"
  >
    <slot />
  </span>
</template>

<style scoped>
.shimmer::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.5),
    transparent
  );
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
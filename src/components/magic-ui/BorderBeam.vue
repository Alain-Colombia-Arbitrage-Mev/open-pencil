<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ inheritAttrs: false })

const { class: classProp, size = 300, duration = 2000, cornerRadius = 8 } = defineProps<{
  class?: string
  size?: number
  duration?: number
  color?: string[]
  cornerRadius?: number
}>()

const style = computed(() => ({
  '--beam-size': `${size}px`,
  '--beam-duration': `${duration}ms`,
  '--beam-corner': `${cornerRadius}px`
}))
</script>

<template>
  <span class="border-beam-container relative inline-block" :class="classProp" :style="style">
    <slot />
    <span class="border-beam absolute inset-0 pointer-events-none" />
  </span>
</template>

<style scoped>
.border-beam-container {
  position: relative;
}

.border-beam {
  position: absolute;
  inset: 0;
  border-radius: var(--beam-corner, 8px);
  padding: 2px;
  background: linear-gradient(
    0deg,
    #3B82F6,
    #8B5CF6,
    #EC4899,
    #F59E0B,
    #3B82F6
  );
  background-size: 300% 300%;
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: beam-rotate var(--beam-duration, 2000ms) linear infinite;
}

.border-beam::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: var(--beam-corner, 8px);
  background: inherit;
  filter: blur(20px);
  opacity: 0.5;
}

@keyframes beam-rotate {
  0% {
    background-position: 0% 50%;
  }
  33% {
    background-position: 33% 50%;
  }
  66% {
    background-position: 66% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>
<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    class?: string
    size?: number
    duration?: number
    color?: string[]
    cornerRadius?: number
  }>(),
  {
    class: '',
    size: 300,
    duration: 2000,
    color: () => ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B'],
    cornerRadius: 8
  }
)

const style = computed(() => ({
  '--beam-size': `${props.size}px`,
  '--beam-duration': `${props.duration}ms`,
  '--beam-corner': `${props.cornerRadius}px`
}))
</script>

<template>
  <span class="border-beam-container relative inline-block" :class="props.class" :style="style">
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
    var(--beam-angle, 0deg),
    var(--beam-color-1, #3B82F6),
    var(--beam-color-2, #8B5CF6),
    var(--beam-color-3, #EC4899),
    var(--beam-color-4, #F59E0B),
    var(--beam-color-1, #3B82F6)
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
    --beam-angle: 0deg;
  }
  33% {
    --beam-color-1: #8B5CF6;
    --beam-color-2: #EC4899;
    --beam-color-3: #F59E0B;
    --beam-color-4: #3B82F6;
  }
  66% {
    --beam-color-1: #EC4899;
    --beam-color-2: #F59E0B;
    --beam-color-3: #3B82F6;
    --beam-color-4: #8B5CF6;
  }
  100% {
    background-position: 100% 50%;
    --beam-angle: 360deg;
  }
}
</style>
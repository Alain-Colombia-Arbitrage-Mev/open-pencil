<script setup lang="ts">
defineOptions({ inheritAttrs: false })

const {
  class: classProp,
  columns,
  gap
} = defineProps<{
  class?: string
  columns?: number
  gap?: number
}>()
</script>

<template>
  <div
    class="bento-grid"
    :class="classProp"
    :style="{
      '--bento-columns': columns ?? 3,
      '--bento-gap': (gap ?? 16) + 'px'
    }"
  >
    <slot />
  </div>
</template>

<style scoped>
.bento-grid {
  display: grid;
  grid-template-columns: repeat(var(--bento-columns, 3), 1fr);
  gap: var(--bento-gap, 16px);
}

@media (max-width: 768px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }
}
</style>

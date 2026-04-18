<script setup lang="ts">
import { ref } from 'vue'

defineOptions({ inheritAttrs: false })

const { class: classProp } = defineProps<{
  class?: string
}>()

const ripples = ref<{ id: number; x: number; y: number }[]>([])

function createRipple(event: MouseEvent) {
  const button = event.currentTarget as HTMLElement
  const rect = button.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  const id = Date.now()
  
  ripples.value.push({ id, x, y })
  
  setTimeout(() => {
    ripples.value = ripples.value.filter((r) => r.id !== id)
  }, 600)
}
</script>

<template>
  <button
    class="ripple-button relative overflow-hidden"
    :class="classProp"
    @click="createRipple"
  >
    <slot />
    <span
      v-for="ripple in ripples"
      :key="ripple.id"
      class="ripple absolute rounded-full pointer-events-none"
      :style="{
        left: ripple.x + 'px',
        top: ripple.y + 'px',
        transform: 'translate(-50%, -50%)'
      }"
    />
  </button>
</template>

<style scoped>
.ripple-button {
  position: relative;
  overflow: hidden;
}

.ripple {
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.4);
  animation: ripple-animation 600ms linear;
}

@keyframes ripple-animation {
  0% {
    width: 0;
    height: 0;
    opacity: 0.5;
  }
  100% {
    width: 200px;
    height: 200px;
    opacity: 0;
  }
}
</style>
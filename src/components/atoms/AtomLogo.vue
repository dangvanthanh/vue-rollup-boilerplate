<script setup>
import logo from '@/assets/images/logo.png'
import { useMouse } from '@/composables/useDrag'

const { x, y, dragging } = useDrag()
</script>

<template>
  <img :src="logo" :style="{
    left: `${x}px`,
    top: `${y}px`,
    cursor: dragging ? 'grabbing' : 'grab',
  }" draggable="false" @mousedown="dragging = true" />
</template>

<style scoped>
img {
  cursor: grab;
  position: relative;
}
</style>

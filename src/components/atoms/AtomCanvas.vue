<script setup>
import { ref, onMounted } from 'vue'

const canvas = ref(null)
let ctx = ref(null)
const previousX = ref(Infinity)
const previousY = ref(Infinity)
const colorHue = ref(0)

onMounted(() => {
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
  ctx = canvas.value.getContext('2d')
  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'
  ctx.lineWidth = 20
})

function paint({ clientX, clientY }) {
  ctx.strokeStyle = `hsl(${colorHue.value}, 100%, 60%)`
  ctx.beginPath()

  if (Math.abs(previousX.value - clientX) < 100 && Math.abs(previousY.value - clientY) < 100) {
    ctx.moveTo(previousX.value, previousY.value)
  }

  ctx.lineTo(clientX, clientY)
  ctx.stroke()
  previousX.value = clientX
  previousY.value = clientY
  colorHue.value++
}

function onMouseMove(event) {
  paint(event)
}
</script>

<template>
  <canvas ref="canvas" @mousemove="onMouseMove" />
</template>

<style scoped>
canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  cursor: pointer;
  z-index: -1;
}
</style>

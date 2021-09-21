<template>
  <div>
    <div class="hello">
      <AtomLogo />
      <AtomHeading :text="$t('hello')" />
      <AtomText text="The Progressive JavaScript Framework" />
      <MoleculeLinks :links="languages" />
    </div>
    <canvas ref="canvas" @mousemove="onMouseMove"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from '@vue/composition-api'
import AtomLogo from '@/components/atoms/AtomLogo.vue'
import AtomHeading from '@/components/atoms/AtomHeading.vue'
import AtomText from '@/components/atoms/AtomText.vue'
import MoleculeLinks from '@/components/molecules/MoleculeLinks.vue'

const languages = ref([
  { href: '#', value: 'en', text: 'English' },
  { href: '#', value: 'vi', text: 'Tiếng Việt' },
])

const canvas = ref(null)
let ctx = ref()
const previousX = ref(Infinity)
const previousY = ref(Infinity)
let colorHue = ref(0)

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

<style scoped>
.hello {
  user-select: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

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

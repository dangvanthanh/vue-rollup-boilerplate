<script setup>
import { ref } from 'vue'
import AtomCanvas from '@/components/atoms/AtomCanvas.vue'
import AtomLogo from '@/components/atoms/AtomLogo.vue'
import AtomHeading from '@/components/atoms/AtomHeading.vue'
import AtomText from '@/components/atoms/AtomText.vue'
import MoleculeLinks from '@/components/molecules/MoleculeLinks.vue'

const languages = ref([
  { href: '#', value: 'en', text: 'English' },
  { href: '#', value: 'vi', text: 'Tiếng Việt' },
])
</script>

<template>
  <div>
    <div class="hello">
      <AtomLogo />
      <AtomHeading :text="$t('hello')" />
      <AtomText text="The Progressive JavaScript Framework" />
      <MoleculeLinks :links="languages" />
    </div>
    <AtomCanvas />
  </div>
</template>

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

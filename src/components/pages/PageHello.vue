<template>
  <div class="hello">
    <AtomLogo />
    <AtomHeading :text="$t('hello')" />
    <AtomText text="The Progressive JavaScript Framework" />
    <MoleculeLinks :links="languages" />
  </div>
</template>

<script setup>
import { ref } from '@vue/composition-api'
import AtomLogo from '@/components/atoms/AtomLogo.vue'
import AtomHeading from '@/components/atoms/AtomHeading.vue'
import AtomText from '@/components/atoms/AtomText.vue'
import MoleculeLinks from '@/components/molecules/MoleculeLinks.vue'

const languages = ref([
  { href: '#', value: 'en', text: 'English' },
  { href: '#', value: 'vi', text: 'Tiếng Việt' },
])
</script>

<style scoped>
</style>

<template>
  <div class="app">
    <PageHello />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import PageHello from '@/components/pages/PageHello.vue'

export default defineComponent({
  name: 'App',
  components: { PageHello },
})
</script>

<style scoped>
</style>

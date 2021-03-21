<template>
  <p>{{ text }}</p>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'AtomText',
  props: {
    text: {
      type: String,
    },
  },
})
</script>

<style scoped>
p {
  font-size: 1.25rem;
}
</style>


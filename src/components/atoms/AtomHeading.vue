<template>
  <h1>{{ text }}</h1>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'AtomHeading',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped>
h1 {
  padding: 0 0.25em;
  font-size: 1.875rem;
}
</style>

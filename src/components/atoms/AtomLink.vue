<template>
  <a :href="link.href" @click.prevent="onClick">
    {{ link.text }}
  </a>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'AtomLink',
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onClick() {
      this.$emit('onClick')
    },
  },
})
</script>

<style scoped>
a {
  display: inline-block;
  vertical-align: middle;
  padding: 0.75rem 2rem;
  margin: 0 0.5rem;
  color: #42b883;
  font-weight: 500;
  cursor: pointer;
  border: 2px solid #42b883;
  font-size: 1rem;
  text-align: center;
  border-radius: 2rem;
  text-decoration: none;
  min-width: 5rem;
}

a.is-active {
  background-color: #42b883;
  color: #fff;
  cursor: default;
  pointer-events: none;
}
</style>

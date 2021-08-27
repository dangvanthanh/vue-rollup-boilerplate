<template>
  <div>
    <template v-for="link in links">
      <AtomLink
        :link="link"
        :key="link.value"
        :class="{ 'is-active': currentLocale === link.value }"
        @onClick="changeLocale(link.value)"
      />
    </template>
  </div>
</template>

<script setup>
import AtomLink from '@/components/atoms/AtomLink.vue'

defineProps({
  links: {
    type: Array,
    required: true,
  },
})
</script>


<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'MoleculeLinks',
  computed: {
    currentLocale() {
      return this.$i18n.locale
    },
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale
    },
  },
})
</script>

<style scoped>
div {
  text-align: center;
  margin-top: 1.5rem;
}
</style>

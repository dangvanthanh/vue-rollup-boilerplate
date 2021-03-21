<template>
  <div class="hello">
    <AtomLogo />
    <AtomHeading :text="$t('hello')" />
    <AtomText text="The Progressive JavaScript Framework" />
    <AtomLinks :links="languages" />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import AtomLogo from '@/components/atoms/AtomLogo.vue'
import AtomHeading from '@/components/atoms/AtomHeading.vue'
import AtomText from '@/components/atoms/AtomText.vue'
import AtomLinks from '@/components/molecules/AtomLinks.vue'

export default defineComponent({
  name: 'Hello',
  components: {
    AtomLogo,
    AtomHeading,
    AtomText,
    AtomLinks,
  },
  data() {
    return {
      languages: [
        { href: '#', value: 'en', text: 'English' },
        { href: '#', value: 'vi', text: 'Tiếng Việt' },
      ],
    }
  },
})
</script>

<style scoped>
</style>

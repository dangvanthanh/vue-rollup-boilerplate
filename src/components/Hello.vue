<template>
  <div>
    <img src="@/assets/images/logo.png" />
    <h1>{{ $t('hello') }}</h1>
    <ul>
      <li
        v-for="language in languages"
        :key="language.value"
        :class="{ active: currentLocale === language.value }"
        @click="changeLocale(language.value)"
      >
        {{ language.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data() {
    return {
      languages: [
        { value: 'en', text: 'EN' },
        { value: 'vi', text: 'VI' },
      ],
    }
  },
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
}
</script>

<style scoped>
h1 {
  padding: 0 0.25em;
  font-size: 1.875rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.25rem;
  color: #c6c6c6;
  font-weight: 500;
  cursor: pointer;
}

li.active {
  color: #222;
  cursor: default;
  pointer-events: none;
}
</style>

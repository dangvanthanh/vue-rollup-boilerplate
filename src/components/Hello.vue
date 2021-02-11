<template>
  <div class="hello">
    <img src="@/assets/images/logo.png" />
    <h1>{{ $t('hello') }}</h1>
    <p>The Progressive JavaScript Framework</p>
    <div class="action">
      <a
        href="#"
        v-for="language in languages"
        class="action-item"
        :key="language.value"
        :class="{ active: currentLocale === language.value }"
        @click.prevent="changeLocale(language.value)"
      >
        {{ language.text }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data() {
    return {
      languages: [
        { value: 'en', text: 'English' },
        { value: 'vi', text: 'Tiếng Việt' },
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
.hello {
  --color-white: #fff;
  --color-brand: #42b883;
}

h1 {
  padding: 0 0.25em;
  font-size: 1.875rem;
}

p {
  font-size: 1.25rem;
}

.action {
  text-align: center;
  margin-top: 1.5rem;
}

.action-item {
  display: inline-block;
  vertical-align: middle;
  padding: .75rem 2rem;
  margin: 0 0.5rem;
  color: var(--color-brand);
  font-weight: 500;
  cursor: pointer;
  border: 2px solid var(--color-brand);
  font-size: 1rem;
  text-align: center;
  border-radius: 2rem;
  text-decoration: none;
  min-width: 5rem;
}

.action-item.active {
  background-color: var(--color-brand);
  color: var(--color-white);
  cursor: default;
  pointer-events: none;
}
</style>

<template>
  <article class="gap-top-500">
    <h1>{{ print.title }}</h1>
    <p>Price: {{ print.price }}</p>
    <nuxt-content :document="print" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const print = await $content('prints', params.slug).fetch()

    return { print }
  },
}
</script>

<style lang="scss" scoped></style>

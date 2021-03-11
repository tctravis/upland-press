<template>
  <div>
    <h1>Prints</h1>
    <ul>
      <li v-for="print of prints" :key="print.slug">
        {{ print.slug }}
        <NuxtLink :to="print.path">
          <div>
            <h2>{{ print.title }}</h2>
            <p>{{ print.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const prints = await $content('prints')
      .only(['title', 'description', 'path'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      prints,
    }
  },
}
</script>

<style lang="scss" scoped></style>

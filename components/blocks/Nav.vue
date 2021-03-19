<template>
  <nav class="[ site-nav ][ flex-row ]">
    <nuxt-link to="/pages/about">About</nuxt-link>
    <nuxt-link to="/prints">Prints</nuxt-link>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.site-nav {
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>

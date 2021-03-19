<template>
  <div class="[ site-nav ][ flex-row ]">
    <nuxt-link to="/about">About</nuxt-link>
    <nuxt-link to="/prints">Prints</nuxt-link>
  </div>
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

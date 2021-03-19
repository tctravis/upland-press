<template>
  <header class="[ site-header ] [ bg-dark color-light ]">
    <div class="[ wrapper ]">
      <div class="[ navbar ] [ flex-row ]">
        <div class="logo">
          <nuxt-link to="/">Elbow</nuxt-link>
        </div>
        <Nav class="[ ml-auto ]" />
      </div>
    </div>
  </header>
</template>

<script>
import Nav from '~/components/blocks/Nav.vue'
export default {
  components: {
    Nav,
  },
}
</script>

<style lang="scss" scoped>
.site-header {
  padding: 0.8rem 0;
}
</style>

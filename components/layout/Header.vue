<template>
  <header class="[ site-header ] [ bg-dark color-light ]">
    <div class="[ wrapper ]">
      <div class="[ navbar ] [ flex-row ]">
        <Logo>Elbow</Logo>
        <Nav class="[ ml-auto ]" />
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/layout/Logo.vue'
import Nav from '@/components/layout/Nav.vue'
export default {
  components: {
    Logo,
    Nav,
  },
}
</script>

<style lang="scss" scoped>
.site-header {
  padding: 0.8rem 0;
}
</style>

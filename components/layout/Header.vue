<template>
  <header class="l-header">
    <div class="u-container">
      <div class="c-navbar">
        <Logo class="c-navbar__logo">Elbow</Logo>
        <Nav class="c-navbar__nav" />
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
.l-header {
  background-color: map-get($header-theme, 'background-color');
  color: map-get($header-theme, 'color');
}
.c-navbar {
  display: flex;
}
.c-navbar__nav {
  margin-left: auto;
}
</style>

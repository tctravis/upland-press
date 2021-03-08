<template>
  <header class="l-header">
    <div class="l-container">
      <Logo class="l-header__logo">Elbow</Logo>
      <Nav class="l-header__nav" />
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
  display: flex;
}
.l-header__nav {
  margin-left: auto;
}
</style>

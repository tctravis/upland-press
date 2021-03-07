<template>
  <header class="header">
    <Logo>Some text</Logo>
    <Nav class="header__nav" />
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
.header {
  background-color: $dark-grey;
  color: $white;
  display: flex;
}
.header__nav {
  margin-left: auto;
}
</style>

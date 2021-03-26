<template>
  <nav class="[ Nav ][ cluster ]">
    <div>
      <NuxtLinkOrAnchorLink class="[ Nav__link ]" to="/prints"
        >Prints</NuxtLinkOrAnchorLink
      >
      <NuxtLinkOrAnchorLink class="[ Nav__link ]" to="/pages/about"
        >About</NuxtLinkOrAnchorLink
      >
    </div>
  </nav>
</template>

<script>
import NuxtLinkOrAnchorLink from '@/components/ui/NuxtLinkOrAnchorLink.vue'
export default {
  components: {
    NuxtLinkOrAnchorLink,
  },
}
</script>

<style lang="scss" scoped>
.Nav__link {
  text-transform: lowercase;
  text-decoration-line: none;
  @include apply-utility('weight', 'bold');
  &:hover {
    text-decoration: underline;
  }
}
</style>

<template>
  <nav class="[ Nav ][ cluster ]">
    <div>
      <NuxtLinkOrAnchorLink to="/prints">Prints</NuxtLinkOrAnchorLink>
      <NuxtLinkOrAnchorLink to="/pages/about">About</NuxtLinkOrAnchorLink>
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

<style lang="scss" scoped></style>

<template>
  <NuxtLinkOrAnchorLink class="[ Nav__link ]" :to="link"
    ><slot>Nav link text</slot></NuxtLinkOrAnchorLink
  >
</template>

<script>
import NuxtLinkOrAnchorLink from '@/components/ui/NuxtLinkOrAnchorLink.vue'
export default {
  components: {
    NuxtLinkOrAnchorLink,
  },
  props: {
    link: {
      type: String,
      required: true,
      default: '/',
    },
  },
}
</script>

<style lang="scss">
.Nav__link {
  a {
    text-transform: uppercase;
    text-decoration: none;
    @include apply-utility('weight', 'bold');
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>

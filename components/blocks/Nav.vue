<template>
  <nav class="[ Nav ][ cluster ]">
    <div>
      <NavLink class="[ Nav__link ]" link="/prints">Gallery</NavLink>
      <NavLink class="[ Nav__link ]" link="/pages/about">About</NavLink>
    </div>
  </nav>
</template>

<script>
import NavLink from '@/components/ui/NavLink.vue'
export default {
  components: {
    NavLink,
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="[ flex-row ]">
    <nuxt-link v-if="nuxt" :to="to" :class="linkClass"><slot></slot></nuxt-link>
    <a v-else :href="to" :class="linkClass"><slot></slot></a>
  </div>
</template>

<script>
export default {
  props: {
    nuxt: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: true,
      default: '',
    },
    linkClass: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>

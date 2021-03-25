<template>
  <nuxt-link class="[ linkWithIcon ][ flex-row ]" :to="link"
    ><span
      class="linkWithIcon__linktext"
      :class="linkTextVisible ? '' : 'visually-hidden'"
      ><slot name="link-text">Link with Icon text</slot></span
    ><span
      class="[ linkWithIcon__icon ][ flex-row ]"
      :class="'linkWithIcon__icon--' + iconPosition"
      ><slot name="icon"></slot></span
  ></nuxt-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
      default: 'http://upland-press.co.uk',
    },
    linkTextVisible: {
      type: Boolean,
      required: false,
      default: true,
    },
    iconPosition: {
      type: String,
      required: false,
      default: 'left',
    },
  },
}
</script>

<style lang="scss" scoped>
.linkWithIcon__icon--left {
  order: -1;
  @include apply-utility('gap-right', '300');
}
.linkWithIcon__icon--right {
  @include apply-utility('gap-left', '300');
}
</style>

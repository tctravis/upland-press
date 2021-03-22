<template>
  <img
    :src="require(`~/assets/images${src}`)"
    :alt="alt"
    :width="width"
    :height="height"
  />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
      default: '',
    },
    alt: {
      type: String,
      required: true,
      default: '',
    },
    width: {
      type: Number,
      required: false,
      default: null,
    },
    height: {
      type: Number,
      required: false,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped></style>

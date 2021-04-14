<template>
  <img
    :src="src"
    :alt="alt"
    :srcSet="srcSet"
    :sizes="sizes"
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
    srcSet: {
      type: String,
      required: false,
      default: null,
    },
    sizes: {
      type: String,
      required: false,
      default: null,
    },
    alt: {
      type: String,
      required: false,
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

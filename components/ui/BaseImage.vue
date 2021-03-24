<template>
  <img
    :src="cloudinaryBaseUrl + src"
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
  data() {
    return {
      cloudinaryName: process.env.CLOUDNAME,
    }
  },
  computed: {
    cloudinaryBaseUrl() {
      return (
        'https://res.cloudinary.com/' + this.cloudinaryName + '/image/upload/'
      )
    },
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <BaseImage :src="cloudinarySrc" :alt="alt" :src-set="cloudinarySrcSet" />
</template>

<script>
import BaseImage from '@/components/ui/BaseImage.vue'
export default {
  components: {
    BaseImage,
  },
  props: {
    src: {
      type: String,
      required: true,
      default: '',
    },
    alt: {
      type: String,
      required: false,
      default: '',
    },
    maxWidth: {
      type: Number,
      required: false,
      default: 1000,
    },
  },
  computed: {
    cloudinarySrc() {
      return (
        this.cloudinaryBaseUrl + this.cloudinaryBaseTransformation + this.src
      )
    },
    cloudinarySrcSet() {
      return (
        this.cloudinaryBaseUrl +
        this.cloudinary2xTransformation +
        this.src +
        ' 2x'
      )
    },
    cloudinaryBaseTransformation() {
      return 'c_scale,dpr_1.0,w_' + this.maxWidth + '/q_auto/'
    },
    cloudinary2xTransformation() {
      return 'c_scale,dpr_2.0,w_' + this.maxWidth + '/q_auto/'
    },
    cloudinaryBaseUrl() {
      return (
        'https://res.cloudinary.com/' +
        process.env.cloudinaryName +
        '/image/upload/'
      )
    },
  },
}
</script>

<style lang="scss" scoped></style>

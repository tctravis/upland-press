/* eslint-disable camelcase */
<template>
  <BaseImage
    :src="cloudinarySrc"
    :alt="alt"
    :src-set="cloudinarySrcSet"
    :sizes="srcSetSizes"
  />
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
    srcSetWidths: {
      type: Array,
      required: false,
      default() {
        return [300, 600, 1200]
      },
    },
    srcSetSizes: {
      type: String,
      required: false,
      default: '70vmin',
    },
  },
  computed: {
    cloudinarySrc() {
      return this.getCloudinaryImageUrl({
        width: this.srcSetWidths[0],
      })
    },
    cloudinarySrcSet() {
      const cloudinarySrcSet = []
      this.srcSetWidths.forEach((srcSetWidth) => {
        const cloudinaryImage = this.getCloudinaryImageUrl({
          width: srcSetWidth,
        })
        cloudinarySrcSet.push(cloudinaryImage + ' ' + srcSetWidth + 'w')
      })
      return cloudinarySrcSet.toString()
    },
    cloudinaryBaseUrl() {
      return (
        'https://res.cloudinary.com/' +
        process.env.cloudinaryName +
        '/image/upload/'
      )
    },
  },
  methods: {
    // build cloudinary url
    getCloudinaryImageUrl(transformations, publicId) {
      const transformationStr = this.getTransformationStr(transformations)
      return this.cloudinaryBaseUrl + transformationStr + this.src
    },
    getTransformationStr(transformations) {
      const dpr = transformations.dpr ? transformations.dpr : '1.0'
      const transformationStr =
        'c_scale,dpr_' + dpr + ',w_' + transformations.width + '/q_auto'

      return transformationStr
    },
  },
}
</script>

<style lang="scss" scoped></style>

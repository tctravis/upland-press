<template>
  <figure class="ImageCaption [ flow ]">
    <BaseImage :src="src" :alt="alt" />
    <figcaption v-if="caption" class="ImageCaption__caption">
      {{ caption }}
    </figcaption>
  </figure>
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
    caption: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <NuxtLink :to="link">
    <figure class="ImageCaption">
      <CloudinaryImage
        :src="imgSrc"
        :alt="imgAlt"
        :src-set-widths="[400, 800]"
        src-set-sizes="(min-width:62em) 20vw, (min-width: 48em) 33vw, 70vw"
      />
      <figcaption v-if="imgCaption" class="ImageCaption__caption">
        {{ imgCaption }}
      </figcaption>
    </figure>
  </NuxtLink>
</template>

<script>
import CloudinaryImage from '@/components/blocks/CloudinaryImage.vue'
export default {
  components: {
    CloudinaryImage,
  },
  props: {
    imgSrc: {
      type: String,
      required: true,
      default: '',
    },
    imgAlt: {
      type: String,
      required: false,
      default: '',
    },
    imgCaption: {
      type: String,
      required: false,
      default: '',
    },
    link: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>

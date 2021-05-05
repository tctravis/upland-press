<template>
  <div class="Card">
    <div v-if="imgSrc" class="[ Card__image ]">
      <NuxtLink :to="link">
        <CloudinaryImage
          :src="imgSrc"
          :alt="imgAlt"
          :src-set-widths="[400, 800]"
          src-set-sizes="(min-width: 48em) 33vw, 70vw"
        />
      </NuxtLink>
    </div>
    <div class="[ Card__content ] [ flow ]">
      <!-- our content in here will auto-flow now -->
      <h2 class="[ Card__title ][ font-header text-500 ]">
        <NuxtLink :to="link">{{ title }}</NuxtLink>
      </h2>
      <div v-if="text !== ''">{{ text }}</div>
    </div>
  </div>
</template>

<script>
// import BaseImage from '@/components/ui/BaseImage.vue'
import CloudinaryImage from '@/components/blocks/CloudinaryImage.vue'
export default {
  components: {
    // BaseImage,
    CloudinaryImage,
  },
  props: {
    title: {
      type: String,
      required: false,
      default: 'Card title',
    },
    text: {
      type: String,
      required: false,
      default: '',
    },
    imgSrc: {
      type: String,
      required: false,
      default: null,
    },
    imgAlt: {
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

<style lang="scss" scoped>
.Card__content {
  padding-top: 0.5em;
}
.Card__image {
  &:hover {
    & + .Card__content .Card__title a {
      text-decoration: underline;
    }
  }
}
.Card__title {
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>

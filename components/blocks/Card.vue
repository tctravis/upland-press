<template>
  <article class="Card">
    <BaseImage v-if="imgSrc" :src="imgSrc" :alt="imgAlt" />
    <div class="[ card__content ] [ flow ]">
      <!-- our content in here will auto-flow now -->
      <h2 class="text-500">
        <NuxtLink :to="link">{{ title }}</NuxtLink>
      </h2>
      <div v-if="text !== ''">{{ text }}</div>
    </div>
  </article>
</template>

<script>
import BaseImage from '@/components/ui/BaseImage.vue'
export default {
  components: {
    BaseImage,
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
.Card {
}
.Card__content {
}
</style>

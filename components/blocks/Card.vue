<template>
  <article class="Card">
    <!-- <BaseImage v-if="imgSrc" :src="imgSrc" :alt="imgAlt" /> -->
    <cld-image
      :public-id="'upland-press/gurnal_dubs.jpg'"
      responsive
      fetch-format="auto"
      quality="auto"
      alt="An image example with Cloudinary"
    />
    <div class="[ card__content ] [ flow ]">
      <!-- our content in here will auto-flow now -->
      <h2>
        <NuxtLink :to="link">{{ title }}</NuxtLink>
      </h2>
      <div>{{ text }}</div>
    </div>
  </article>
</template>

<script>
// import BaseImage from '@/components/ui/BaseImage.vue'
export default {
  components: {
    // BaseImage,
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
      default:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, tempore maxime sunt dicta illo facere, quasi ipsa maiores asperiores dolorem a, voluptatem esse assumenda temporibus quas atque eius neque officia.',
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

<template>
  <MainContent>
    <PageTitle>{{ print.title }}</PageTitle>
    <p>Price: {{ print.price }}</p>
    <BaseImage
      v-if="print.main_image"
      :src="require(`~/assets/images${print.main_image.image}`)"
      :alt="print.main_image.alt_text"
    />
    <nuxt-content :document="print" />
  </MainContent>
</template>

<script>
import MainContent from '@/components/layout/MainContent.vue'
import PageTitle from '~/components/blocks/PageTitle.vue'
import BaseImage from '~/components/ui/BaseImage.vue'
export default {
  components: {
    MainContent,
    PageTitle,
    BaseImage,
  },
  async asyncData({ $content, params }) {
    const print = await $content('prints', params.slug).fetch()
    return { print }
  },
}
</script>

<style lang="scss" scoped></style>

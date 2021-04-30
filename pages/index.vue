<template>
  <MainContent>
    <div class="[ Home__image ][ gap-bottom-500 ]">
      <CloudinaryImage
        v-if="page.main_image"
        :src="page.main_image.image"
        :alt="page.main_image.alt_text"
        :src-set-widths="imageSrcSets"
        :src-set-sizes="imageSizes"
      />
    </div>
    <div class="[ Home__title ]">
      <PageTitle>Linocut prints of the northern uplands</PageTitle>
    </div>
    <div class="[ Home__text ]">
      <nuxt-content :document="page" />
    </div>
  </MainContent>
</template>

<script>
import MainContent from '@/components/layout/MainContent.vue'
import PageTitle from '~/components/blocks/PageTitle.vue'
import CloudinaryImage from '~/components/blocks/CloudinaryImage.vue'
export default {
  components: {
    MainContent,
    PageTitle,
    CloudinaryImage,
  },
  async asyncData({ $content, params }) {
    const page = await $content('home').fetch()
    return { page }
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description,
        },
      ],
    }
  },
  computed: {
    imageSrcSets() {
      return [300, 500, 1000]
    },
    imageSizes() {
      return '(min-width:62em) 50vw, 70vw'
    },
  },
}
</script>

<style lang="scss"></style>

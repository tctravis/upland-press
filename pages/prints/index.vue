<template>
  <MainContent>
    <PageTitle>Prints</PageTitle>
    <div class="[ masonry ]">
      <div v-for="print of prints" :key="print.slug">
        <Card
          :img-src="print.main_image.image"
          :img-alt="print.main_image.alt_text"
          :title="print.title"
          :link="print.path"
        />
      </div>
    </div>
  </MainContent>
</template>

<script>
import MainContent from '@/components/layout/MainContent.vue'
import Card from '@/components/blocks/Card.vue'
import PageTitle from '~/components/blocks/PageTitle.vue'
export default {
  components: {
    Card,
    MainContent,
    PageTitle,
    // ImageCaption,
  },
  async asyncData({ $content, params }) {
    const prints = await $content('prints')
      .only(['title', 'description', 'path', 'main_image'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      prints,
    }
  },
}
</script>

<style lang="scss" scoped></style>

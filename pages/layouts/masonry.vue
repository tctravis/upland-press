<template>
  <MainContent>
    <PageTitle>Masonry layout</PageTitle>
    <div class="[ masonry ]">
      <Card
        v-for="print of prints"
        :key="print.slug"
        :img-src="print.main_image.image"
        :img-alt="print.main_image.alt_text"
        :title="print.title"
        :link="print.path"
      />
    </div>
  </MainContent>
</template>

<script>
import MainContent from '@/components/layout/MainContent.vue'
import PageTitle from '@/components/blocks/PageTitle.vue'
import Card from '@/components/blocks/Card.vue'
export default {
  components: {
    MainContent,
    PageTitle,
    Card,
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

<style lang="scss" scoped>
.masonry {
  --min: 15rem;
  --space: 1rem;
}
</style>

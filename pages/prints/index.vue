<template>
  <MainContent>
    <PageTitle>Prints</PageTitle>
    <Grid data-min="15rem">
      <div v-for="print of prints" :key="print.slug">
        <Card
          :img-src="print.main_image.image"
          :img-alt="print.main_image.alt_text"
          :title="print.title"
          :link="print.path"
        />
      </div>
    </Grid>
  </MainContent>
</template>

<script>
import Grid from '@/components/compositions/Grid.vue'
import MainContent from '@/components/layout/MainContent.vue'
import Card from '@/components/blocks/Card.vue'
// import ImageCaption from '@/components/blocks/ImageCaption.vue'
import PageTitle from '~/components/blocks/PageTitle.vue'
export default {
  components: {
    Grid,
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

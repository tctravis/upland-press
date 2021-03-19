<template>
  <MainContent>
    <PageTitle>Prints</PageTitle>
    <ul>
      <li v-for="print of prints" :key="print.slug">
        <NuxtLink :to="print.path">
          <ImageCaption
            :src="require(`~/assets/images${print.main_image.image}`)"
            :alt="print.main_image.alt_text"
            :caption="print.title"
          />
        </NuxtLink>
      </li>
    </ul>
  </MainContent>
</template>

<script>
import MainContent from '@/components/layout/MainContent.vue'
import ImageCaption from '@/components/blocks/ImageCaption.vue'
import PageTitle from '~/components/blocks/PageTitle.vue'
export default {
  components: {
    MainContent,
    PageTitle,
    ImageCaption,
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

<template>
  <MainContent>
    <PageTitle>{{ page.title }}</PageTitle>
    <nuxt-content :document="page" />
  </MainContent>
</template>

<script>
import MainContent from '@/components/layout/MainContent.vue'
import PageTitle from '~/components/blocks/PageTitle.vue'
export default {
  components: {
    MainContent,
    PageTitle,
  },
  async asyncData({ $content, params }) {
    const page = await $content('pages', params.slug).fetch()
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
}
</script>

<style lang="scss" scoped></style>

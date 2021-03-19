<template>
  <MainContent>
    <PageTitle>Elbow</PageTitle>
    <nuxt-content :document="page" />
    <div class="[ flow ]">
      <h2>Base Button</h2>
      <BaseButton>Button</BaseButton>
      <h2>Card</h2>
      <Card />
    </div>
  </MainContent>
</template>

<script>
import MainContent from '@/components/layout/MainContent.vue'
import Card from '@/components/blocks/Card.vue'
import PageTitle from '~/components/blocks/PageTitle.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
export default {
  components: {
    MainContent,
    PageTitle,
    BaseButton,
    Card,
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
}
</script>

<style lang="scss"></style>

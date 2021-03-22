<template>
  <MainContent>
    <PageTitle>Elbow</PageTitle>
    <nuxt-content :document="page" />
    <div class="[ flow ]">
      <h2>Base Button</h2>
      <BaseButton>Button</BaseButton>
      <h2>Layouts</h2>
      <nuxt-link to="/layouts/masonry">Masonry</nuxt-link>
      <h2>Card</h2>
      <Grid data-min="15rem">
        <Card />
        <Card />
        <Card />
      </Grid>
    </div>
    <cld-image
      :public-id="'gurnal_dubs.jpg'"
      responsive
      fetch-format="auto"
      quality="auto"
      alt="An image example with Cloudinary"
    />
  </MainContent>
</template>

<script>
import MainContent from '@/components/layout/MainContent.vue'
import Card from '@/components/blocks/Card.vue'
import Grid from '~/components/compositions/Grid.vue'
import PageTitle from '~/components/blocks/PageTitle.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
export default {
  components: {
    MainContent,
    Grid,
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

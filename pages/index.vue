<template>
  <MainContent>
    <PageTitle>Elbow</PageTitle>
    <nuxt-content :document="page" />
    <div class="[ flow ]">
      <p>Starter theme using Nuxt, Nuxt Content, Forestry</p>
      <p>Loosely based on content intended for a printmaker's website.</p>
      <p>
        A place to build, test and store components for re-use on a variety of
        Vue/Nuxt-based sites.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
        obcaecati quaerat fugiat delectus veniam, quas recusandae sed ipsam
        beatae repudiandae doloribus id. Recusandae dolorum eligendi esse
        dolorem. Quasi, ex quia.
      </p>
    </div>
    <BaseButton>Button</BaseButton>
    <Card />
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

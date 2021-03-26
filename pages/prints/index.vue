<template>
  <MainContent>
    <PageTitle>Prints</PageTitle>
    <div class="[ MasonryGallery ][ ml-auto ]">
      <div class="[ MasonryGallery__summary ][ flow gap-bottom-500 ]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          optio ipsam debitis iusto maxime nam fuga sunt saepe, vitae
          consectetur officia repellendus est rem hic. Rem cupiditate odio
          facilis aperiam.
        </p>
      </div>
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
import Card from '@/components/blocks/Card.vue'
import PageTitle from '~/components/blocks/PageTitle.vue'
export default {
  components: {
    Card,
    MainContent,
    PageTitle,
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
.MasonryGallery__wrapper {
  @include media-query('sm') {
    width: percentage(6/7);
  }
  @include media-query('md') {
    width: percentage(9/11);
  }
}
.MasonryGallery {
  column-gap: 1.2rem;
  --space: 1rem;
  & > * {
    break-inside: avoid;
    padding-bottom: var(--space);
  }
  @include media-query('sm') {
    columns: 2;
    width: percentage(6/7);
  }
  @include media-query('lg') {
    columns: 3;
    width: percentage(9/11);
  }
}

.MasonryGallery__summary {
  @include media-query('sm') {
    margin-left: -34%;
  }
  @include media-query('lg') {
    margin-left: -70%;
  }
}
</style>

<template>
  <MainContent>
    <div class="[ PageHeader ]">
      <PageTitle>Gallery</PageTitle>
      <div class="[ lead ][ flow gap-bottom-700 ]">
        {{ printGallery.introduction_text }}
      </div>
    </div>
    <div class="[ MasonryGallery ][ ml-auto ]">
      <div v-for="print of prints" :key="print.slug">
        <NuxtLink :to="print.path">
          <CloudinaryImage
            :src="print.gallery_image.image"
            :alt="print.gallery_image.alt_text"
            :src-set-widths="[400, 800, 1600]"
            src-set-sizes="90vw"
          />
        </NuxtLink>
      </div>
    </div>
  </MainContent>
</template>

<script>
import MainContent from '@/components/layout/MainContent.vue'
import CloudinaryImage from '@/components/blocks/CloudinaryImage.vue'
import PageTitle from '~/components/blocks/PageTitle.vue'
// import Card from '~/components/blocks/Card.vue'
export default {
  components: {
    MainContent,
    PageTitle,
    // Card,
    CloudinaryImage,
  },
  async asyncData({ $content, params }) {
    const prints = await $content('prints')
      .only(['title', 'description', 'path', 'main_image', 'gallery_image'])
      .where({ publish: true })
      .sortBy('createdAt', 'asc')
      .fetch()
    const printGallery = await $content('print-gallery').fetch()
    return {
      prints,
      printGallery,
    }
  },
}
</script>

<style lang="scss" scoped>
.MasonryGallery {
  column-gap: #{get-size('500')};
  --space: #{get-size('500')};
  columns: 160px 3;
  & > * {
    break-inside: avoid;
    padding-bottom: var(--space);
  }
  // // width: percentage(4/5);
  // @include media-query('sm') {
  //   // columns: 2;
  //   width: percentage(11/11);
  // }
  // @include media-query('md') {
  //   // columns: 3;
  //   width: percentage(10/11);
  // }
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

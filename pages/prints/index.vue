<template>
  <MainContent>
    <div class="[ PageHeader ]">
      <PageTitle>Prints</PageTitle>
      <div class="[ flow gap-bottom-700 ]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          optio ipsam debitis iusto maxime nam fuga sunt saepe, vitae
          consectetur officia repellendus est rem hic. Rem cupiditate odio
          facilis aperiam.
        </p>
      </div>
    </div>
    <div class="[ MasonryGallery ][ ml-auto ]">
      <!-- <Card
        v-for="print of prints"
        :key="print.slug"
        :img-src="print.gallery_image.image"
        :img-alt="print.gallery_image.alt_text"
        :title="print.title"
        :link="print.path"
      /> -->
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
    return {
      prints,
    }
  },
}
</script>

<style lang="scss" scoped>
.PageHeader {
}
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
  --space: 1.2rem;
  columns: 180px 3;
  & > * {
    break-inside: avoid;
    padding-bottom: var(--space);
  }
  @include media-query('sm') {
    // columns: 2;
    width: percentage(6/7);
  }
  @include media-query('lg') {
    // columns: 3;
    width: percentage(11/11);
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

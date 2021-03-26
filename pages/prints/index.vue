<template>
  <MainContent>
    <div class="[ content__wrapper ][ ml-auto ]">
      <PageTitle>Prints</PageTitle>
      <div class="[ MasonryGallery ][ ml-auto ]">
        <div class="[ MasonryGallery__summary ][ flow gap-bottom-500 ]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae optio ipsam debitis iusto maxime nam fuga sunt saepe,
            vitae consectetur officia repellendus est rem hic. Rem cupiditate
            odio facilis aperiam.
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

<style lang="scss" scoped>
// .masonry {
//   --min: 12rem;
//   --space: 2rem;
// }
.content__wrapper {
  width: percentage(3/4);
  @include media-query('sm') {
    width: percentage(7/8);
  }
  @include media-query('md') {
    width: percentage(11/12);
  }
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
  --space: 1rem;
  & > * {
    break-inside: avoid;
    margin-bottom: var(--space);
  }
  @include media-query('sm') {
    columns: 2;
    width: percentage(6/7);
  }
  // @include media-query('md') {
  //   columns: 2;
  //   width: percentage(6/7);
  // }
  @include media-query('lg') {
    columns: 3;
    width: percentage(9/11);
  }
}

.MasonryGallery__summary {
  @include media-query('sm') {
    // margin-left: calc(((-100% - 4rem) / 3) + 1rem);
    margin-left: -34%;
  }
  @include media-query('lg') {
    // margin-left: calc(((-100% - 4rem) / 3) + 1rem);
    margin-left: -70%;
  }
  // @include media-query('md') {
  //   margin-left: calc(((100% - 4rem) / 3) + 1rem);
  //   // margin-left: -45%;
  // }
  // @include media-query('lg') {
  //   margin-left: calc(((100% - 4rem) / 3) + 1rem);
  //   // margin-left: -70%;
  // }
}
// .masonry-with-summary {
//   display: grid;
//   @include media-query('sm') {
//     grid-template-columns: 1fr 3fr, 3fr;
//     grid-template-rows: auto;
//     gap: 1.2rem;
//     // grid-auto-flow: column;
//     grid-template-areas:
//       'summary summary prints'
//       '. prints prints';
//   }
//   @include media-query('md') {
//   }
// }
// .masonry-with-summary__text {
//   grid-area: summary;
// }
// .masonry-with-summary__items {
//   grid-area: prints;
// }
</style>

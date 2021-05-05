<template>
  <MainContent>
    <div class="[ PageHeader md:width-three-quarters lg:width-two-thirds ]">
      <PageTitle>Prints</PageTitle>
      <!-- <div class="[ flow gap-bottom-700 ]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          optio ipsam debitis iusto maxime nam fuga sunt saepe, vitae
          consectetur officia repellendus est rem hic. Rem cupiditate odio
          facilis aperiam.
        </p>
      </div> -->
    </div>
    <div class="[ GridGallery ]">
      <div class="[ summary ]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          optio ipsam debitis iusto maxime nam fuga sunt saepe, vitae
          consectetur officia repellendus est rem hic. Rem cupiditate odio
          facilis aperiam.
        </p>
      </div>
      <div
        v-for="print of prints"
        :key="print.slug"
        :class="printClass(print.title)"
      >
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
  methods: {
    printClass(printTitle) {
      const printClass =
        '[ ' + printTitle.split(' ').join('-').toLowerCase() + ' ]'
      return printClass
    },
  },
}
</script>

<style lang="scss" scoped>
.PageHeader {
}
// .MasonryGallery__wrapper {
//   @include media-query('sm') {
//     width: percentage(6/7);
//   }
//   @include media-query('md') {
//     width: percentage(9/11);
//   }
// }
.GridGallery {
  --space: 1.2rem;
  display: grid;
  gap: var(--space);

  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-template-areas:
    'summary'
    'last-cut-of-the-summer'
    'litton-mill'
    'the-heights'
    'the-woodsman'
    'gurnal-dubs';
  > * {
    grid-column: 1 / -1;
    grid-row: auto;
  }
  @include media-query('sm') {
    grid-template-columns: minmax(10px, 1fr) minmax(10px, 3fr) minmax(10px, 1fr);
    grid-template-areas:
      'summary summary .'
      '. last-cut-of-the-summer last-cut-of-the-summer'
      'gurnal-dubs gurnal-dubs gurnal-dubs'
      'litton-mill litton-mill .'
      '. the-heights .'
      '. the-woodsman the-woodsman';
  }
  @include media-query('md') {
    grid-template-columns:
      minmax(10px, 1fr) minmax(10px, 4fr) minmax(10px, 1fr) minmax(10px, 4fr)
      minmax(10px, 1fr);
    grid-template-areas:
      'summary summary summary summary .'
      'gurnal-dubs gurnal-dubs gurnal-dubs gurnal-dubs gurnal-dubs'
      'the-woodsman the-woodsman the-woodsman last-cut-of-the-summer last-cut-of-the-summer'
      'the-heights the-heights litton-mill litton-mill litton-mill';
    .the-woodsman {
      // align-self: end;
    }
  }
  @include media-query('lg') {
    grid-template-columns:
      minmax(10px, 2fr) minmax(10px, 1fr) minmax(10px, 3fr) minmax(10px, 1fr) minmax(
        10px,
        3fr
      )
      minmax(10px, 1fr);
    grid-template-areas:
      'summary summary summary summary . .'
      '. gurnal-dubs gurnal-dubs gurnal-dubs gurnal-dubs gurnal-dubs'
      '. the-woodsman the-woodsman the-woodsman last-cut-of-the-summer last-cut-of-the-summer'
      '. the-heights the-heights . last-cut-of-the-summer last-cut-of-the-summer'
      '. the-heights the-heights litton-mill litton-mill litton-mill';
    .the-woodsman {
      // align-self: start;
    }
  }
}

.summary {
  grid-area: summary;
}
.last-cut-of-the-summer {
  grid-area: last-cut-of-the-summer;
}
.litton-mill {
  grid-area: litton-mill;
}
.the-heights {
  grid-area: the-heights;
}
.the-woodsman {
  grid-area: the-woodsman;
}
.gurnal-dubs {
  grid-area: gurnal-dubs;
}
</style>

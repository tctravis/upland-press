<template>
  <MainContent>
    <div class="[ Home ]">
      <div class="[ Home__image ]">
        <CloudinaryImage
          v-if="page.main_image"
          :src="page.main_image.image"
          :alt="page.main_image.alt_text"
          :src-set-widths="imageSrcSets"
          :src-set-sizes="imageSizes"
        />
      </div>
      <div class="[ Home__title ][ flow ]">
        <PageTitle>Linocut prints of the northern uplands</PageTitle>
        <p>by Toby Travis</p>
      </div>
      <div class="[ Home__text ]">
        <nuxt-content :document="page" />
      </div>
    </div>
  </MainContent>
</template>

<script>
import MainContent from '@/components/layout/MainContent.vue'
import PageTitle from '~/components/blocks/PageTitle.vue'
import CloudinaryImage from '~/components/blocks/CloudinaryImage.vue'
export default {
  components: {
    MainContent,
    PageTitle,
    CloudinaryImage,
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
  computed: {
    imageSrcSets() {
      return [300, 500, 1000]
    },
    imageSizes() {
      return '(max-width:36em) 80vw, (min-width:62em) 50vw, 70vw'
    },
  },
}
</script>

<style lang="scss">
.Home {
  --space: 1.2rem;
  display: grid;
  gap: var(--space);

  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-template-areas:
    'image'
    'title'
    'text';
  > * {
    grid-column: 1 / -1;
    grid-row: auto;
    text-align: right;
  }
  @include media-query('sm') {
    grid-template-columns: minmax(10px, 1fr) minmax(10px, 1fr) minmax(10px, 4fr);
    grid-template-areas:
      '. image image'
      '. title title'
      '. . text';
  }
  @include media-query('md') {
    grid-template-columns: minmax(10px, 4fr) minmax(10px, 1fr) minmax(10px, 6fr);
    grid-template-areas:
      'title image image'
      '. . text';
  }
  @include media-query('lg') {
    grid-template-columns: minmax(10px, 5fr) minmax(10px, 1fr) minmax(10px, 5fr);
    grid-template-areas:
      'title image image'
      '. . text';
  }
  @include media-query('widescreen') {
    grid-template-columns: minmax(10px, 1fr) minmax(10px, 4fr) minmax(10px, 6fr);
    grid-template-areas:
      'title title image'
      '. text image';
    .Home__image {
      margin-bottom: 0;
    }
    .Home__text {
      align-self: end;
    }
  }
}
.Home__image {
  grid-area: image;
}
.Home__title {
  grid-area: title;
}
.Home__text {
  grid-area: text;
}
</style>

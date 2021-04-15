<template>
  <MainContent>
    <div class="[ Print ]" :class="printClass">
      <div class="[ Print__image ]">
        <CloudinaryImage
          v-if="print.main_image"
          :src="print.main_image.image"
          :alt="print.main_image.alt_text"
          :src-set-widths="printImageSrcSets"
          :src-set-sizes="printImageSizes"
        />
      </div>
      <div class="[ Print__details ][ flow ]">
        <h1 class="[ text-500 ]">{{ print.title }}</h1>
        <p v-show="print.price">£{{ print.price }}</p>
        <p v-show="print.edition">{{ print.edition }}</p>
        <p v-show="print.size">{{ print.size }}</p>
      </div>
      <div class="[ Print__description ]">
        <nuxt-content :document="print" />
      </div>
    </div>
  </MainContent>
</template>

<script>
import MainContent from '@/components/layout/MainContent.vue'
import CloudinaryImage from '~/components/blocks/CloudinaryImage.vue'
export default {
  components: {
    MainContent,
    CloudinaryImage,
  },
  async asyncData({ $content, params }) {
    const print = await $content('prints', params.slug).fetch()
    return { print }
  },
  computed: {
    printClass() {
      return 'Print--' + this.print.main_image.orientation.trim().toLowerCase()
    },
    printImageSizes() {
      let printImageSizes = null
      switch (this.print.main_image.orientation) {
        case 'Portrait':
          printImageSizes = '70vw'
          break
        case 'Landscape':
          printImageSizes = '90vw'
          break
        default:
          printImageSizes = '(min-width:62em) 50vw, 70vw'
      }
      return printImageSizes
    },
    printImageSrcSets() {
      let printImageSrcSets = null
      switch (this.print.main_image.orientation) {
        case 'Portrait':
          printImageSrcSets = [300, 500, 1000]
          break
        case 'Landscape':
          printImageSrcSets = [400, 820, 1640]
          break
        default:
          printImageSrcSets = [300, 500, 1000]
      }
      return printImageSrcSets
    },
  },
}
</script>

<style lang="scss" scoped>
.Print {
  --space: 1.2rem;
  display: grid;
  gap: var(--space);

  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-template-areas:
    'image'
    'details'
    'description';
  > * {
    grid-column: 1 / -1;
    grid-row: auto;
    text-align: right;
  }
}
.Print--standard {
  @include media-query('sm') {
    grid-template-columns: minmax(10px, 1fr) minmax(10px, 2fr) minmax(10px, 4fr);
    grid-template-areas:
      '. image image'
      '. . details'
      '. . description';
  }
  @include media-query('md') {
    grid-template-columns: minmax(10px, 1fr) minmax(10px, 3fr) minmax(10px, 7fr);
    grid-template-areas:
      '. details image'
      '. . description';
    > * {
      grid-column: auto;
    }
    .Print__details {
      align-self: end;
    }
  }
  @include media-query('lg') {
    grid-template-columns: minmax(10px, 1fr) minmax(10px, 4fr) minmax(10px, 7fr);
  }
}
.Print--portrait {
  @include media-query('sm') {
    grid-template-columns: minmax(10px, 1fr) minmax(10px, 2fr) minmax(10px, 5fr);
    grid-template-areas:
      '. image image'
      '. . details'
      '. . description';
    > * {
      grid-column: auto;
    }
  }
  @include media-query('md') {
    grid-template-columns: minmax(10px, 1fr) minmax(10px, 3fr) minmax(10px, 7fr);
    grid-template-areas:
      '. details image'
      '. . description';
    .Print__details {
      align-self: end;
    }
  }
  @include media-query('widescreen') {
    grid-template-columns: minmax(10px, 1fr) minmax(10px, 5fr) minmax(10px, 5fr);
    grid-template-areas:
      '. details image'
      '. . description';
    // .Print__details {
    //   align-self: start;
    // }
  }
}
.Print--landscape {
  @include media-query('sm') {
    grid-template-columns: minmax(10px, 2fr) minmax(10px, 5fr);
    grid-template-areas:
      'image image'
      'details details'
      '. description';
  }
  @include media-query('md') {
    grid-template-columns: minmax(10px, 4fr) minmax(10px, 7fr);
  }
  @include media-query('lg') {
    grid-template-columns: minmax(10px, 5fr) minmax(10px, 6fr);
    grid-template-areas:
      'image image'
      'details description';
    .Print__details {
      text-align: left;
    }
    > * {
      grid-column: auto;
    }
  }
}
.Print__image {
  grid-area: image;
}
.Print__details {
  grid-area: details;
}
.Print__description {
  grid-area: description;
}
</style>

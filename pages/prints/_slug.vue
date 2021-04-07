<template>
  <MainContent>
    <div class="[ Print ]" :class="printClass">
      <div class="[ Print__image ]">
        <BaseImage
          v-if="print.main_image"
          :src="print.main_image.image"
          :alt="print.main_image.alt_text"
        />
      </div>
      <div class="[ Print__details ][ flow ]">
        <h1>{{ print.title }}</h1>
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
import BaseImage from '~/components/ui/BaseImage.vue'
export default {
  components: {
    MainContent,
    BaseImage,
  },
  async asyncData({ $content, params }) {
    const print = await $content('prints', params.slug).fetch()
    return { print }
  },
  computed: {
    printClass() {
      return 'Print--' + this.print.main_image.orientation.trim().toLowerCase()
    },
  },
}
</script>

<style lang="scss" scoped>
.Print {
  --space: 1.2rem;
  display: grid;
  gap: var(--space);
  > * {
    text-align: right;
  }
  @include media-query('max-sm') {
    grid-template-columns: 100% !important;
    grid-template-rows: auto !important;
    > * {
      grid-column: 1 / -1 !important;
      grid-row: auto !important;
    }
  }
}
.Print--standard {
}
.Print--portrait {
  grid-template-columns: minmax(10px, 3fr) minmax(10px, 4fr);
  grid-template-rows: auto;
  grid-template-areas:
    'details image'
    '. description';
  .Print__details {
    align-self: end;
  }
  @include media-query('lg') {
    grid-template-columns: minmax(10px, 3fr) minmax(10px, 5fr) minmax(10px, 3fr);
    grid-template-areas: 'description image details';
    .Print__description {
      align-self: end;
    }
    .Print__details {
      align-self: start;
      text-align: left;
    }
  }
}
.Print--landscape {
  grid-template-columns: minmax(10px, 3fr) minmax(10px, 4fr);
  grid-template-rows: auto;
  grid-template-areas:
    'image image'
    'details .'
    '. description';
  .Print__description {
    text-align: right;
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

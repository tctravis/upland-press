<template>
  <MainContent>
    <PageTitle>{{ page.title }}</PageTitle>
    <div
      class="[ pad-bottom-900 font-header text-500 flow ]"
      v-html="page.intro_text"
    ></div>
    <div class="[ ContentSections ][ ml-auto ]">
      <div
        v-for="content in page.content"
        :key="content.title"
        class="[ ContentSection ][ pad-bottom-900 ]"
      >
        <div class="[ ContentSection__text ][ flow ]">
          <h2>{{ content.title }}</h2>
          <div
            class="[ ContentSection__text-wrapper ][ flow pad-bottom-500 ]"
            v-html="content.text"
          ></div>
        </div>
        <div class="[ ContentSection__image ]">
          <CloudinaryImage
            :src="content.image"
            :alt="content.alt_text"
            :width="content.width"
            :height="content.height"
            :src-set-widths="[400, 800, 1600]"
            src-set-sizes="90vw"
          />
        </div>
      </div>
    </div>
  </MainContent>
</template>

<script>
import MainContent from '@/components/layout/MainContent.vue'
import CloudinaryImage from '@/components/blocks/CloudinaryImage.vue'
import PageTitle from '~/components/blocks/PageTitle.vue'
export default {
  components: {
    MainContent,
    PageTitle,
    CloudinaryImage,
  },
  async asyncData({ $content, params }) {
    const page = await $content('pages', params.slug)
      .where({ publish: true })
      .fetch()
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

<style lang="scss" scoped>
.ContentSection {
  --indent: 2rem;
  gap: #{get-size('900')};
  @include media-query('sm') {
    .ContentSection__text {
      > *:not(:first-child) {
        margin-left: var(--indent);
      }
    }
    .ContentSection__image {
      margin-left: var(--indent);
    }
  }
  @include media-query('md') {
    display: flex;
    .ContentSection__text {
      width: percentage(7/11);
    }
    .ContentSection__image {
      margin-left: 0;
      width: percentage(4/11);
    }
  }
}
</style>

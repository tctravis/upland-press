<template>
  <MainContent>
    <PageTitle>{{ page.title }}</PageTitle>
    <div class="[ pad-bottom-900 ]">
      <nuxt-content :document="page" />
    </div>
    <div class="[ ContentSections ]">
      <div
        v-for="content in page.content"
        :key="content.title"
        class="[ ContentSection ][ pad-bottom-900 ]"
      >
        <div class="[ ContentSection__text ][ flow ]">
          <h2>{{ content.title }}</h2>
          <div v-html="content.text"></div>
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
    const page = await $content('pages', params.slug).fetch()
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
  display: flex;
  gap: #{get-size('400')};
  &:nth-child(even) {
    .ContentSection__image {
      order: 1;
    }
    .ContentSection__text {
      order: 2;
    }
  }
}
.ContentSection__text {
  width: 60%;
}
.ContentSection__image {
  width: 40%;
}
</style>

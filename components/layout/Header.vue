<template>
  <header class="[ site-header ] [ bg-dark color-light ]">
    <div class="[ wrapper ]">
      <div class="[ navbar ] [ flex-row ]">
        <div class="[ logo ]">
          <LinkWithIcon link="/" :link-text-visible="false">
            <template #linkText>{{ siteTitle }}</template>
            <template #icon><HomeIcon /></template
          ></LinkWithIcon>
        </div>
        <Nav class="[ ml-auto ]" />
      </div>
    </div>
  </header>
</template>

<script>
import { HomeIcon } from 'vue-feather-icons'
import { mapState } from 'vuex'
import LinkWithIcon from '@/components/ui/LinkWithIcon.vue'
import Nav from '~/components/blocks/Nav.vue'
export default {
  components: {
    HomeIcon,
    Nav,
    LinkWithIcon,
  },
  computed: {
    ...mapState({
      siteTitle: (state) => state.site.title,
    }),
  },
}
</script>

<style lang="scss" scoped>
.site-header {
  padding: 0.8rem 0;
}
</style>

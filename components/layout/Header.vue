<template>
  <header class="[ Header ] [ bg-dark-grey color-white ]">
    <div class="[ wrapper ]">
      <div class="[ navbar ] [ flex-row ]">
        <div class="[ Header__logo ]">
          <NuxtLinkOrAnchorLink
            to="/"
            link-class="[ with-icon with-icon--text-hidden pad-300 ]"
            ><HomeIcon /><span class="visually-hidden"
              >Home</span
            ></NuxtLinkOrAnchorLink
          >
        </div>
        <Nav class="[ ml-auto ]" />
        <div class="[ Header__social ][ gap-left-400 flex-row ]">
          <NuxtLinkOrAnchorLink
            :to="instagramUser"
            link-class="[ with-icon with-icon--text-hidden pad-300 ]"
            ><InstagramIcon /><span class="visually-hidden"
              >Instagram</span
            ></NuxtLinkOrAnchorLink
          >
          <NuxtLinkOrAnchorLink
            :to="'mailto:'"
            link-class="[ with-icon with-icon--text-hidden pad-300 ]"
            ><MailIcon /><span class="visually-hidden"
              >Email</span
            ></NuxtLinkOrAnchorLink
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { HomeIcon, InstagramIcon, MailIcon } from 'vue-feather-icons'

import { mapState } from 'vuex'
import NuxtLinkOrAnchorLink from '@/components/ui/NuxtLinkOrAnchorLink.vue'
import Nav from '~/components/blocks/Nav.vue'
export default {
  components: {
    HomeIcon,
    InstagramIcon,
    MailIcon,
    Nav,
    NuxtLinkOrAnchorLink,
  },
  computed: {
    ...mapState({
      siteTitle: (state) => state.site.title,
      contactEmail: (state) => state.site.contact.email,
      instagramUser: (state) => state.site.social.instagram,
    }),
  },
}
</script>

<style lang="scss" scoped>
.Header {
  padding: 0.2rem 0;
}
.Header__logo {
  margin-left: -#{get-size('300')};
}
.Header__social {
  margin-right: -#{get-size('300')};
}
</style>

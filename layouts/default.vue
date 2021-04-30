<template>
  <div class="[ vh-full font-base relative ]">
    <Header />
    <main>
      <div class="[ wrapper relative gap-top-900 ]">
        <p
          class="[ upland-press ][ font-header text-600 sm:text-700 weight-bold color-mid-grey ]"
        >
          Upland Press
        </p>
        <Nuxt />
      </div>
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'
export default {
  components: {
    Header,
    Footer,
  },
  head() {
    return {
      bodyAttrs: {
        class: 'font-base',
      },
    }
  },
  mounted() {
    this.runA11yTest()
  },
  methods: {
    runA11yTest() {
      if (process.env.NODE_ENV === 'development') {
        // const axe = this.$axe
        setTimeout(() => {
          this.$axe.run()
        }, 5000)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.upland-press {
  position: absolute;
  transform: rotate(270deg) translate(-180px, 0);
  transform-origin: top left;
  top: 0;
  left: 0;
  line-height: 1.8;
  @include media-query('sm') {
    transform: rotate(270deg) translate(-226px, 0);
  }
}
</style>

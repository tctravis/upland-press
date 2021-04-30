<template>
  <div class="[ vh-full relative ]">
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
        class: 'up-bg font-base',
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
<style lang="scss">
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
.up-bg {
  $bg-width: 270px;
  $bg-height: 527px;
  background-image: url('~assets/images/up.svg');
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: ($bg-width/9 * 7) ($bg-height/9 * 7);
  @include media-query('md') {
    background-size: $bg-width $bg-height;
  }
}
</style>

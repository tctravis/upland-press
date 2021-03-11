<template>
  <div class="[ frame ][ vh-full font-base ]">
    <Header />
    <main>
      <div class="[ wrapper ]">
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
}
</script>
<style lang="scss" scoped></style>

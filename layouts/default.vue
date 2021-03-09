<template>
  <div class="l-frame">
    <Header class="l-frame__header" />
    <main class="l-frame__main">
      <div class="u-container">
        <Nuxt />
      </div>
    </main>
    <Footer class="l-frame__footer" />
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
}
</script>
<style lang="scss" scoped>
// .l-grid {
//   max-width: 940px;
//   margin: 0 auto;
//   display: grid;
//   grid-template-columns: 1fr 3fr;
//   grid-gap: 10px;
// }
// .l-header,
// .l-footer {
//   grid-column: 1 / -1;
// }

.l-frame {
  height: 100vh;

  /* grid container settings */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
}
.l-frame__header {
  grid-area: header;
}
.l-frame__main {
  grid-area: main;
}
.l-frame__footer {
  grid-area: footer;
}
</style>

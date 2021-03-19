<template>
  <footer class="[ site-footer ][ bg-dark color-light ]">
    <div class="[ wrapper flex-row ]">
      <p class="[ ml-auto text-300 ]">{{ copyright }}</p>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      copyright: (state) => state.site.copyright,
    }),
  },
}
</script>

<style lang="scss" scoped>
.site-footer {
  padding: 1rem 0;
}
</style>

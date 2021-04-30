<template>
  <footer class="[ Footer relative stack-500 pad-left-700 pad-right-700 ]">
    <div class="[ flex-row ]">
      <p class="[ ml-auto text-400 pad-top-600 pad-bottom-600 ]">
        {{ copyright }}
      </p>
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
.Footer {
}
</style>

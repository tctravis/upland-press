<template>
  <div class="Grid"><slot></slot></div>
</template>

<script>
export default {
  mounted() {
    /* The Grid
    https://github.com/aprietof/every-layout/blob/master/layouts.css
      ----------------------------------------------------------------------- */
    ;(function observeGrid() {
      const gridNode = document.querySelector('.Grid')
      // Feature detect ResizeObserver
      if ('ResizeObserver' in window) {
        // Get the min value from data-min="[min]"
        const min = gridNode.dataset.min

        // Create a proxy element to measure and convert
        // the `min` value (which might be em, rem, etc) to `px`
        const test = document.createElement('div')
        test.style.width = min
        gridNode.appendChild(test)
        const minToPixels = test.offsetWidth
        gridNode.removeChild(test)

        const ro = new ResizeObserver((entries) => {
          for (const entry of entries) {
            // Get the element's current dimensions
            const cr = entry.contentRect
            // `true` if the container is wider than the minimum
            const isWide = cr.width > minToPixels
            // toggle the class conditionally
            gridNode.classList.toggle('aboveMin', isWide)
          }
        })

        ro.observe(gridNode)
      }
    })()
  },
}
</script>

<style lang="scss" scoped>
.Grid {
  --min: 15rem;
  --space: 1rem;
  align-content: start;
  display: grid;
  gap: var(--space);
  grid-template-columns: 100%;
}

/* needs javascript for when the container size is wider than the grid width */
.Grid.aboveMin {
  grid-template-columns: repeat(auto-fit, minmax(var(--min), 1fr));
}
</style>

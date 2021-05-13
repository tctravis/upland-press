<template>
  <figure class="[ ImageWithCaption ]">
    <slot name="image"></slot>
    <figcaption
      class="[ ImageWithCaption__caption ][ text-300 ][ gap-top-200 italic ]"
    >
      <slot name="caption"></slot>
    </figcaption>
  </figure>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.ImageWithCaption {
}
.ImageWithCaption__caption {
}
</style>

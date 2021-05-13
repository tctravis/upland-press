<template>
  <div class="[ gap-bottom-500 ]">
    <h1 :class="headerClass">
      <slot></slot>
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    headerClass: {
      type: String,
      required: false,
      default: '[ font-header text-700 sm:text-700 lg:text-800 ]',
    },
  },
}
</script>

<style lang="scss" scoped></style>

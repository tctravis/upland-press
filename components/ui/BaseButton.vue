<template>
  <button class="BaseButton" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
// https://github.com/piccalil-li/cube-css-dashboard/blob/master/scss/blocks/_button.scss
.BaseButton {
  // @extend .radius;

  font: inherit;
  display: inline-block;
  line-height: 1;
  text-decoration: none;
  border: 1px solid get-color('dark-grey');
  background: get-color('dark-grey');
  color: get-color('light-grey');
  padding: 0.6rem 1.5rem;
  position: relative;

  @include apply-utility('weight', 'bold');

  &[data-variant='ghost'] {
    border-color: currentColor;
    background: transparent;
  }

  &:focus {
    outline-offset: -0.4rem;
    outline: 1px solid;
  }

  &:hover {
    background: get-color('mid-grey');
    border-color: get-color('mid-grey');
    color: get-color('light-grey');
    cursor: pointer;
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>

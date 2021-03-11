<template>
  <main>
    <h1>Upland Press</h1>
    <nuxt-link to="/prints/the-heights">The Heights</nuxt-link>
    <Button>Button</Button>
    <Card />
  </main>
</template>

<script>
import Card from '@/components/common/Card.vue'
import Button from '@/components/ui/Button.vue'
export default {
  components: {
    Button,
    Card,
  },
}
</script>

<style lang="scss"></style>

<template>
  <shopcart_scroll class="content">
    <cart v-for="(item, index) in getcartlist" :key="index" :product="item" :index="index"></cart>
  </shopcart_scroll>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "shopcartlist",
    components: {
      shopcart_scroll: () => import('components/reuse/scroll/scroll'),
      cart: () => import('./cart')
    },
    computed: {
      ...mapGetters([
        'getcartlist'
      ])
    }
  }
</script>

<style scoped>
  .content {
    height: calc(100vh - 44px - 89px);
  }
</style>
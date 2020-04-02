<template>
  <shopcart_scroll class="content_shopcart">
    <cart v-for="(item, index) in getcartlist" :key="index" :product="item" :index="index"></cart>
  </shopcart_scroll>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "ShopCartList",
    components: {
      shopcart_scroll: () => import('components/reuse/scroll/Scroll'),
      cart: () => import('./Cart')
    },
    computed: {
      ...mapGetters([
        'getcartlist'
      ])
    }
  }
</script>

<style scoped>
  .content_shopcart {
    height: calc(100vh - 43px - 89px);
    margin-top: 43px;
  }
</style>
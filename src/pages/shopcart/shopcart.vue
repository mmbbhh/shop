<template>
  <div>
    <shopcart_navbar class="navbar">
      <div slot="mid">购物车({{cartlength}})</div>
    </shopcart_navbar>
    <cartlist class="cartlist"/>
    <cartbuttonbar></cartbuttonbar>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "shopcart",
    components: {
      shopcart_navbar: () => import('components/reuse/navbar/navbar'),
      cartlist: () => import('./etc/cartlist'),
      cartbuttonbar: () => import('./etc/cartbuttonbar')
    },
    computed: {
      //获取vuex中的getter
      ...mapGetters([
        'cartlength'
      ])
    }
  }
</script>

<style scoped>
  .navbar {
    background: #FE4F00;
    color: #FFFFFF;
    font-weight: 800;
  }

  .cartlist {
    margin-top: 44px;
  }
</style>
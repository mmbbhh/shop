<template>
  <div id="shopcart">
    <shopcart_navbar class="shopcart_navbar">
      <div slot="mid">购物车({{cartlength}})</div>
    </shopcart_navbar>
    <cartlist class="cartlist"/>
    <cartbuttonbar @buy="mbuy()"></cartbuttonbar>

    <buy_check v-if="ifbuy" @yes="accept()" @no="concel()"></buy_check>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { buy_check_mixin } from "mixins/index"
  import { buy } from "service/buygoods";

  export default {
    name: "ShopCart",
    mixins: [buy_check_mixin],
    components: {
      shopcart_navbar: () => import('components/reuse/navbar/NavBar'),
      cartlist: () => import('./components/CartList'),
      cartbuttonbar: () => import('./components/CartButtonbar')
    },
    computed: {
      //获取vuex中的getter
      ...mapGetters([
        'cartlength',
        'checkedgoods'
      ])
    },
    methods: {
      mbuy() {
        this.ifbuy = true
      },
      accept() {
        let a = []
        for (let item of this.checkedgoods) {
          a.push(buy(this.$store.state.user, item.id, item.num))
        }
        Promise.all(a).then(() => {
          this.ifbuy = false
          this.$toast.show('购买成功')
          this.$store.commit('deleteselect')
        })
      }
    }
  }
</script>

<style scoped>
  .shopcart_navbar {
    background-image: var(--background-home-navbar);;
    color: #FFFFFF;
    font-weight: 600;
    font-size: var(--title-size);
  }
</style>
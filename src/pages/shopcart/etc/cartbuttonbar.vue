<template>
  <div id="buttonbar">
    <div class="button">
      <checkbutton @click.native="select()" class="checkbox" :ifchecked="ifallchecked" color="#FFFFFF"></checkbutton><div class="text">全选</div>
    </div>
    <div class="price">
      <span>合计:￥{{totalprice}}</span>
    </div>
    <div class="pay" @click="payfor()">
      <span>去结算:{{checkednum}}</span>
    </div>
  </div>
</template>

<script>
  import { mapGetters,mapMutations } from 'vuex'

  export default {
    name: "cartbuttonbar",
    components: {
      checkbutton: () => import('components/content/checkbutton/checkbutton')
    },
    computed: {
      ...mapGetters([
        'totalprice',
        'checkednum',
        'ifallchecked'
      ])
    },
    methods: {
      ...mapMutations([
        'selectall',
        'disselectall'
      ]),
      select() {
        if (this.ifallchecked) {
          this.disselectall()
        } else {
          this.selectall()
        }
      },
      payfor() {
        if (this.totalprice == 0) {
          this.$toast.show('请至少选择一件商品')
        }
      }
    }
  }
</script>

<style scoped>
  #buttonbar {
    background: #FFFFFF;
    position: fixed;
    height: 40px;
    width: 100%;
    bottom: 49px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
  }

  .button {
    height: 100%;
    width: 200px;
    padding-left: 6px;
    display: flex;
  }

  .checkbox {
    align-self: center
  }

  .text{
    margin-left: 5px;
    font-size: 14px;
    align-self: center
  }

  .price {
    font-size: 14px;
    width: 100%;
    align-self: center;
  }

  .pay {
    width: 200px;
    height: 100%;
    background: #FE4F00;
    display: flex;
    justify-content: center;
    color: #FFFFFF;
  }

  .pay span{
    align-self: center;
  }
</style>
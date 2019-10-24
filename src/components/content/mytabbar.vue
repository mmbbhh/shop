<template>
  <tabbar>
    <tabbar_item url="/home">
      <span class="am-icon-home" slot="icon"></span>
      <span slot="name">首页</span>
    </tabbar_item>
    <tabbar_item url="/category">
      <span class="am-icon-th-large" slot="icon"></span>
      <span slot="name">分类</span>
    </tabbar_item>
    <tabbar_item url="/shopcart">
      <span class="am-icon-shopping-cart" slot="icon"></span>
      <span slot="name">购物车</span>
    </tabbar_item>
    <tabbar_item url="/profile">
      <span class="am-icon-user" slot="icon"></span>
      <span slot="name">用户</span>
    </tabbar_item>
  </tabbar>
</template>

<script>
  import tabbar from "../reuse/tabbar/tabbar";
  import tabbar_item from "../reuse/tabbar/tabbar_item";
  export default {
    name: "mytabbar",
    components: {
      tabbar,
      tabbar_item
    }
  }
</script>

<style scoped>

</style>
<template>
  <tabbar>
    <tabbar_item url="/home" color="#FF5600">
      <i class="fa fa-home" slot="icon"></i>
      <span slot="name">首页</span>
    </tabbar_item>
    <tabbar_item url="/category" color="#FF5600">
      <i class="fa fa-th-large" slot="icon"></i>
      <span slot="name">分类</span>
    </tabbar_item>
    <tabbar_item url="/shopcart" color="#FF5600">
      <i class="fa fa-shopping-cart" slot="icon"></i>
      <span slot="name">购物车</span>
    </tabbar_item>
    <tabbar_item url="/profile" color="#FF5600">
      <i class="fa fa-user" slot="icon"></i>
      <span slot="name">用户</span>
    </tabbar_item>
  </tabbar>
</template>

<script>
  import tabbar from "../../reuse/tabbar/TabBar";
  import tabbar_item from "../../reuse/tabbar/TabbarItem";
  export default {
    name: "MyTabBar",
    components: {
      tabbar,
      tabbar_item
    }
  }
</script>

<style scoped>

</style>
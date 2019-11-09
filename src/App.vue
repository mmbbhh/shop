<template>
  <div id="app">
    <keep-alive exclude="detail user_collection">
      <router-view></router-view>
    </keep-alive>
    <tabbar v-show="isshow"></tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    tabbar: () => import('components/content/tabbar/mytabbar')
  },
  computed: {
    isshow() {
      return this.$route.path.indexOf('home') != -1 || this.$route.path.indexOf('category') != -1 || this.$route.path.indexOf('shopcart') != -1 || this.$route.path.indexOf('profile') != -1
    }
  }
}
</script>

<style>
@import "assets/css/main.css";
</style>

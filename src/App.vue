<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    tabbar: () => import('components/content/tabbar/mytabbar')
  }
}
</script>

<style>
@import "assets/css/main.css";
</style>

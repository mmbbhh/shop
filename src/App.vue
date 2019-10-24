<template>
  <div id="app">
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    tabbar: () => import('components/content/mytabbar')
  }
}
</script>

<style>
@import "assets/css/main.css";
</style>

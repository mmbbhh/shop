<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
.tabbar{
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  background: #F6F6F6;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);
}
</style>
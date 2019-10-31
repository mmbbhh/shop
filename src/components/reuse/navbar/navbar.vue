<template>
  <div id="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="mid">
      <slot name="mid"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "navbar"
  }
</script>

<style scoped>
  #navbar {
    display: flex;
    line-height: 44px;
    text-align: center;
    box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }

  .left, .right {
    width: 60px;
  }

  .mid {
    flex: 1;
    line-height: 44px;
  }
</style>
<template>
  <div class="label">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="middle">
      <slot name="mid"></slot>
    </div>
    <div class="right">
      <i class="fa fa-angle-right"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "row"
  }
</script>

<style scoped>
  .label {
    height: 50px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    margin-bottom: 3px;
  }

  .left {
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
  }

  .middle {
    flex: 1;
    font-size: 18px;
  }

  .right {
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
  }
</style>
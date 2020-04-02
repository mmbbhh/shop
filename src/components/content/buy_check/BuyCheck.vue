<template>
  <div class="main">
    <div class="dialog">
      <div class="message">
        <span>确认购买？</span>
      </div>
      <div class="buttons">
        <div @click="yes" class="button" style="border-right: 1px solid rgba(100, 100, 100, 0.3);">确认</div>
        <div @click="no" class="button">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Buy_Check",
    methods: {
      yes() {
        this.$emit('yes')
      },
      no() {
        this.$emit('no')
      }
    }
  }
</script>

<style scoped>
  .main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
  }

  .dialog {
    position: fixed;
    width: 200px;
    height: 150px;
    background: #FAFAFA;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
  }

  .message {
    width: 100%;
    height: 70%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(100, 100, 100, 0.3);
  }

  .buttons {
    width: 100%;
    height: 30%;
    display: flex;
  }

  .button {
    width: 50%;
    height: 100%;
    text-align: center;
    background: #F7F7F7;
    line-height: 40px;
  }
</style>
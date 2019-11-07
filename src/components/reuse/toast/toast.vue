<template>
  <div class="toast" v-show="ifshow">
    {{message}}
  </div>
</template>

<script>
  export default {
    name: "toast",
    data() {
      return {
        message: '',
        ifshow: false
      }
    },
    methods: {
      show(message) {
        this.ifshow = true
        this.message = message

        setTimeout(() => {
          this.ifshow = false
          this.message = ''
        }, 1000)
      }
    }
  }
</script>

<style scoped>
  @keyframes change
  {
    0% {opacity: 1;}
    30% {opacity: 1;}
    100% {opacity: 0;}
  }

  .toast {
    animation: change 1s;
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 16px 20px;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.7);
    color: #FFFFFF;
    border-radius: 10px;
    text-align: center;
    line-height: 150%;
    z-index: 999999;
  }
</style>
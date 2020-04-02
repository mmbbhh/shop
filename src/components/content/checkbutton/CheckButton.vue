<template>
  <i class="fa fa-check normal" :class="{check: ifchecked}" :style="{color: color}"></i>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      ifchecked: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: '#FFF8F5'
      }
    }
  }
</script>

<style scoped>

  .normal {
    border-radius: 50%;
    border: 1px solid #E2E2E2;
  }

  .check {
    border-radius: 50%;
    background: var(--background-home-navbar);
    border: 1px solid rgba(0, 0, 0, 0);
  }
</style>
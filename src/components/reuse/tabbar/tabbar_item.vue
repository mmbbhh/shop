<template>
  <div id="app" @click="goto()" :style="{color: isactived? color : ''}">
    <div id="icon">
      <slot name="icon"></slot>
    </div>
    <div id="name">
      <slot name="name"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabbar_item",
    data() {
      return {

      }
    },
    props: {
      url: String,
      color: {
        type: String,
        default: 'red'
      }
    },
    methods: {
      goto() {
        this.$router.push(this.url)
      }
    },
    computed: {
      isactived() {
        return this.$route.path.indexOf(this.url) != -1
      }
    }
  }
</script>

<style scoped>
  #app{
    text-align: center;
    flex: 1;
    margin-top: 3px;
  }

  #icon span:before{
    font-size: 180%;
    vertical-align: -30%;
  }

  #name{
    vertical-align: 0;
    font-size: 12px;
    line-height: 12px;
  }
</style>
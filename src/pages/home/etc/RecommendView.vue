<template>
  <div id="recommend">
    <div v-for="(item,index) in recommends" class="item">
      <img :src="item.imgUrl" alt="" @click="goto(index)">
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: Array
    },
    methods: {
      goto(index) {
        console.log(index)
      }
    }
  }
</script>

<style scoped>
  #recommend {
    display: flex;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .item {
    flex: 1;
    font-size: 12px;
  }
  .item img {
    width: 65px;
    height: 65px;
    margin: 10px 0px 10px 0px;
  }
</style>
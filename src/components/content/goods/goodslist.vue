<template>
  <div class="goods">
    <goodsitem v-for="item in goods" :goodsitem="item"/>
  </div>
</template>

<script>
  import goodsitem from "./goodsitem";

  export default {
    name: "goodslist",
    props: {
      goods: Array
    },
    components: {
      goodsitem
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: #FFFFFF;
  }
</style>
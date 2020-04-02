<template>
  <div class="goods">
    <goodsitem v-for="item in goods" :goodsitem="item"/>
  </div>
</template>

<script>
  import goodsitem from "./GoodsItem";

  export default {
    name: "GoodsList",
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
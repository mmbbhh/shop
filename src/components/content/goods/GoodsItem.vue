<template>
  <div id="mygoods" @click="goods_click()">
    <img v-lazy="goodsitem.list_pic_url" alt="" @load="finishload()">
    <div class="goods-info">
      <p>{{goodsitem.name}}</p>
      <span class="old">￥{{goodsitem.market_price}} </span>
      <span class="new">￥{{goodsitem.retail_price}}     </span>
      <span><i class="fa fa-heart" style="color: red"></i>{{goodsitem.sell_volume}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props: {
      goodsitem: Object
    },
    methods: {
      finishload() {
        this.Bus.$emit('finishload')
      },
      goods_click() {
        this.$router.push('/detail/' + this.goodsitem.id)
      }
    }
  }
</script>

<style scoped>
  #mygoods {
    margin: 8px;
    padding-bottom: 40px;
    position: relative;
    width: 45%;
    background: #eeeeee;
    border-radius: 9px;
  }

  #mygoods img {
    width: 100%;
    background: #f6f6f6;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
    line-height: 15px;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .old {
    font-size: 8px;
    text-decoration: line-through;
  }

  .new {
    color: var(--font-color);
    font-size: 16px;
  }
</style>
<template>
  <div id="info">
    <div class="title">
      <span>{{info.title}} {{info.brief}}</span>
    </div>
    <div class="price">
      <span class="new">
        ￥{{info.newPrice}}
      </span>
      <span class="old">
        ￥{{info.oldPrice}}
      </span>
      <div class="reson">
        <span>{{info.reason}}</span>
      </div>
    </div>
    <div class="sold">
      <span>已售{{info.sold}}{{info.unit}}</span>
      <span>库存{{info.num}}{{info.unit}}</span>
      <span></span>
    </div>
    <div class="etc">
      <span><i class="fa fa-check-circle-o">退货补运费</i></span>
      <span><i class="fa fa-check-circle-o">全国包邮</i></span>
      <span><i class="fa fa-check-circle-o">7天无理由退货</i></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailISSnfo",
    props: {
      info: Object
    }
  }
</script>

<style scoped>
  .title {
    font-size: 18px;
    margin: 15px;
  }

  .price {
    margin: 0 10px 0 10px;
    display: flex;
    flex-wrap: wrap;
  }

  .new {
    font-size: 22px;
    color: var(--font-color)
  }

  .old {
    font-size: 8px;
    text-decoration: line-through;
    align-self: flex-end;
    margin: 0 5px 0 5px;
  }

  .reson {
    background: #FE4F00;
    width: 50px;
    height: 20px;
    border-radius: 20px;
    text-align: center;
    font-size: 12px;
    color: #FFFFFF;
    line-height: 150%;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sold {
    display: flex;
    margin: 20px 15px 0 15px;
    font-size: 10px;
    color: #999999
  }

  .sold span {
    flex: 1;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  }

  .etc {
    display: flex;
    padding: 20px 15px 10px 15px;
    font-size: 12px;
    box-shadow: 0 5px 5px rgba(100, 100, 100, 0.1);
  }

  .etc span {
    flex: 1;
  }
</style>
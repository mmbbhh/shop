<template>
  <div id="cart">
    <div class="select">
      <checkbutton class="button" :ifchecked="product.check" @click.native="checked()"/>
    </div>
    <div class="img">
      <img :src="product.img" alt="">
    </div>
    <div class="info">
      <div class="name">{{product.name}}</div>
      <div class="describe">{{product.describe}}</div>
      <div class="price">
        <span>￥{{product.price}}</span>
        <div class="detail">
          <i class="fa fa-minus" @click="sub()"></i> {{product.num}} <i class="fa fa-plus" @click="add()"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "cart",
    props: {
      product: Object,
      index: Number
    },
    methods: {
      checked() {
        this.product.check = !this.product.check
      },
      add() {
        this.product.num ++
      },
      sub() {
        this.product.num --
        if (this.product.num <= 0) {
          this.$store.commit('remove', this.index)
        }
      }
    },
    components: {
      checkbutton: () => import('components/content/checkbutton/checkbutton')
    }
  }
</script>

<style scoped>
  #cart {
    width: 100%;
    height: 110px;
    display: flex;
    background: #FFF8F5;
    border-bottom: 1px solid rgba(100,100,100,0.3);
  }

  .select {
    width: 8%;
    line-height: 110px;
  }

  .button {
    margin-left: 7px;
  }

  .img {
    height: 100%;
    flex: 1;
    margin: 0 5px;
    line-height: 100px;
  }

  .img img {
    height: 100%;
    vertical-align: middle;
  }

  .info {
    width: 60%;
  }

  .name {
    width: 95%;
    height: 20px;
    margin: 10px 7px 7px 7px;
    font-size: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .describe {
    width: 95%;
    margin: 13px 7px 7px 7px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .price {
    display: flex;
    margin: 5px;
    position: relative;
    top: 16px;
    width: 92%;
    justify-content: space-between;
  }
</style>
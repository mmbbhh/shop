<template>
  <div id="main">
    <navbar class="navbar">
      <div slot="left" @click="previous()">
        <i class="fa fa-angle-left return"></i>
      </div>
      <div slot="mid">我的订单</div>
    </navbar>
    <scroll class="content">
      <div class="tip" v-if="info.length == 0">
        你没有任何订单哦
      </div>
      <div class="order" v-for="item in info">
        <div class="date"><span>{{item.date}}</span></div>
        <div class="normal">
          <img class="pic" :src="item.list_pic_url" alt="">
          <div class="info">
            <div class="name"><span>{{item.name}}</span></div>
            <div class="detail">
              <div class="price">￥{{item.retail_price.toFixed(2)}}</div>
              <div class="num">x{{item.goods_num}}</div>
            </div>
          </div>
        </div>
        <div class="sum"><span>合计:￥{{(item.goods_num * item.retail_price).toFixed(2)}}</span></div>
      </div>
      <br>
    </scroll>
  </div>
</template>

<script>
  import { order } from "service/detail";

  export default {
    name: "UserOrder",
    data() {
      return {
        info: []
      }
    },
    mounted() {
      order(this.$store.state.user).then(res => {
        if (res.data.state == 1) {
          this.info = res.data.data
        } else {
          this.$toast.show('登录失效')
          this.$store.commit('login', '')
          this.$router.push('/profile')
        }
      })
    },
    components: {
      navbar: () => import('components/reuse/navbar/NavBar'),
      scroll: () => import('components/reuse/scroll/Scroll')
    },
    methods: {
      previous() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  #main {
    background: #F2F4F6;
  }

  .navbar {
    background: #FFFFFF;
  }

  .return{
    font-size: 28px;
    padding-top: 8px;
  }

  .content {
    height: calc(100vh - 46px);
    margin-top: 50px;
  }

  .tip {
    text-align: center;
    font-size: 18px;
    padding-top: 20px;
    color: #AAAAAA;
  }

  .order {
    width: calc(100% - 40px);
    background: #FFFFFF;
    margin: 15px;
    padding: 0 5px 5px 5px;
    transform: translate(0, 10px);
    border-radius: 10px;
  }

  .date {
    height: 30px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.3);
  }

  .date span{
    line-height: 28px;
  }

  .normal {
    width: 100%;
    height: 120px;
    display: flex;
  }

  .pic {
    width: 120px;
    height: 120px;
  }

  .info {
    height: 120px;
    flex: 1;
    display: flex;
  }

  .name {
    width: 70%;
    height: 50%;
    padding-left: 5px;
  }

  .name span {
    width: 90%;
    line-height: 30px;
  }

  .detail {
    width: 30%;
    height: 50%;
    font-size: 15px;
  }

  .price {
    text-align: right;
    line-height: 30px;
  }

  .num {
    text-align: right;
    color: #AAAAAA
  }

  .sum {
    width: 100%;
    height: 20px;
    text-align: right;
    font-size: 15px;
    line-height: 25px;
    border-top: 1px solid rgba(100, 100, 100, 0.3);
  }




</style>
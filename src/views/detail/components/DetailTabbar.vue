<template>
  <div id="detail_tabbar">
    <div class="left">
      <div class="a">
        <i class="fa fa-shopping-bag" @click="none()"></i>
        <div class="text">
          店铺
        </div>
      </div>
      <div class="a">
        <i class="fa fa-comments-o" @click="none()"></i>
        <div class="text">
          客服
        </div>
      </div>
      <div class="a">
        <i class="fa fa-star" style="color: #FDC11C" v-if="collected" @click="dislike()"></i>
        <i class="fa fa-star-o" v-if="!collected" @click="like()"></i>
        <div class="text">
          收藏
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right_s" @click="addcart()">
        <span>加入购物车</span>
      </div>
      <div class="right_b" @click="buy()">
        <span>立刻购买</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {collect,like,dislike} from "service/detail";

  export default {
    name: "DetailTabbar",
    data() {
      return {
        collected: false
      }
    },
    methods: {
      addcart() {
        this.$emit('addcart')
      },
      //收藏
      like() {
        if (this.$store.getters.iflogin) {
          like(this.$store.state.user, this.$route.params.id).then(res => {
            if (res.data.state == 1) {
              this.collected = true
              this.$toast.show('收藏成功')
            } else if (res.data.state == 0){
              this.$toast.show(res.data.message)
            } else {
              this.$toast.show('登录失效')
              this.$store.commit('login', '')
              this.$router.push('/profile')
            }
          })
        } else {
          this.$toast.show('请先登录')
        }
      },
      //取消收藏
      dislike() {
        if (this.$store.getters.iflogin) {
          dislike(this.$store.state.user, this.$route.params.id).then(res => {
            if (res.data.state == 1) {
              this.collected = false
              this.$toast.show('取消收藏成功')
            } else if (res.data.store == 0){
              this.$toast.show(res.data.message)
            } else {
              this.$toast.show('登录失效')
              this.$store.commit('login', '')
              this.$router.push('/profile')
            }
          })
        } else {
          this.$toast.show('请先登录')
        }
      },
      //购买
      buy() {
        if (this.$store.getters.iflogin) {
          this.$emit('buy')
        } else {
          this.$toast.show('请先登录')
        }
      },
      none() {
        this.$toast.show('尚未实现')
      }
    },
    mounted() {
      if (this.$store.state.user != '') {
        collect(this.$store.state.user, this.$route.params.id).then(res => {
          if (res.data.state == 1) {
            this.collected = true
          } else if (res.data.state == 0) {
            this.collected = false
          }
        })
      }
    }
  }
</script>

<style scoped>
  #detail_tabbar {
    display: flex;
    height: 49px;
    background: #FFFFFF;
    position: fixed;
    bottom: 0px;
    left: 0;
    right: 0;
  }

  .left {
    width: 40%;
    display: flex;
    text-align: center;
    font-size: 12px;
    margin-top: 6px;
    line-height: 150%;
    color: #444444
  }

  .left >>> i {
    font-size: 20px;
  }

  .a {
    flex: 1;
  }

  .right {
    width: 60%;
    display: flex;
    flex: 1.5;
    text-align: center;
    line-height: 320%;
    font-size: 15px;
    color: #FFFFFF;
  }

  .right_s {
    width: 50%;
    background: var(--background-button1);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  .right_b {
    width: 50%;
    background: var(--background-button2);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
</style>
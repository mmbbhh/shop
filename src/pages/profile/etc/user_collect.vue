<template>
  <div>
    <navbar class="navbar">
      <div slot="left" @click="previous()">
        <i class="fa fa-angle-left return"></i>
      </div>
      <div slot="mid">我的收藏</div>
    </navbar>
    <scroll class="content">
      <div class="tip" v-if="info.length == 0">
        你没有收藏的商品哦
      </div>
      <goodslist :goods="info"/>
    </scroll>
  </div>
</template>

<script>
  import { collection } from "network/detail";

  export default {
    name: "user_collect",
    data() {
      return {
        info: []
      }
    },
    mounted() {
      collection(this.$store.state.user).then(res => {
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
      navbar: () => import('components/reuse/navbar/navbar'),
      scroll: () => import('components/reuse/scroll/scroll'),
      goodslist: () => import('components/content/goods/goodslist')
    },
    methods: {
      previous() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .navbar {
    background: #FFFFFF;
  }

  .return{
    font-size: 28px;
    padding-top: 8px;
  }

  .content {
    height: calc(100vh - 44px);
    margin-top: 50px;
  }

  .tip {
    text-align: center;
    font-size: 18px;
    margin-top: 70px;
    color: #AAAAAA;
  }
</style>
<template>
  <div class="profile">
    <mlogin v-show="!iflogin && state" @change="statechange()"/>
    <mresign v-show="!iflogin && !state" @change="statechange()"/>
    <nowuser v-show="iflogin"/>
    <row v-show="iflogin" @click.native="goto_collection()">
      <i class="fa fa-star" slot="left"></i>
      <div slot="mid">我的收藏</div>
    </row>
    <row v-show="iflogin" @click.native="goto_order()">
      <i class="fa fa-plane" slot="left"></i>
      <div slot="mid">我的订单</div>
    </row>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "Profile",
    data() {
      return {
        user: '用户名',
        password: '密码',
        //判断登录还是注册
        state: true
      }
    },
    computed: {
      ...mapGetters([
        'iflogin'
      ])
    },
    components: {
      mlogin: () => import('./components/Login'),
      mresign: () => import('./components/Resign'),
      nowuser: () => import('./components/NowUser'),
      row: () => import('./components/Row')
    },
    methods: {
      login(user, password) {
        test.test(user, password).then(res => {
          console.log(res)
        })
      },
      statechange() {
        this.state = !this.state
      },
      goto_collection() {
        this.$router.push('/collect')
      },
      goto_order() {
        this.$router.push('/order')
      }
    }
  }
</script>

<style scoped>
  .profile {
    background: #F2F4F6;
    height: 100vh;
  }
</style>
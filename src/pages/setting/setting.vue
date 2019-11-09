<template>
  <div class="setting">
    <navbar>
      <div slot="left" @click="previous()">
        <i class="fa fa-angle-left return"></i>
      </div>
      <div slot="mid">设置</div>
    </navbar>
    <div class="list">
      <div class="button" @click="out()">
        <span>退出登录</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: "setting",
    components: {
      navbar: () => import('components/reuse/navbar/navbar')
    },
    methods: {
      ...mapMutations([
        'loginout'
      ]),
      previous() {
        this.$router.back()
      },
      out() {
        this.loginout()
        this.$toast.show('退出成功')
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .return{
    font-size: 28px;
    padding-top: 8px;
  }

  .list {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button {
    margin-top: 10px;
    height: 50px;
    width: 95%;
    display: flex;
    background: #FE4F00;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
  }
</style>
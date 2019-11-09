<template>
  <div class="user">
    <navbar style="box-shadow: 0 0 0">
      <div slot="left" class="fa fa-envelope-o mail" @click="mail()"></div>
      <div slot="right" class="fa fa-cogs setting" @click="config()"></div>
    </navbar>
    <!--<img src="@/assets/img/background.png" alt="">-->
    <img class="head" src="@/assets/img/head.jpg" alt="">
    <div class="name">{{this.$store.state.user}}</div>
  </div>
</template>

<script>
  export default {
    name: "nowuser",
    components: {
      navbar: () => import('components/reuse/navbar/navbar')
    },
    methods: {
      config() {
        this.$router.push('/setting')
      },
      mail() {
        this.$toast.show('尚未实现')
      }
    }
  }
</script>

<style scoped>
  .mail {
    color: white;
    margin-left: -20px;
    font-size: 16px;
  }

  .setting {
    color: white;
    margin-right: -20px;
    font-size: 16px;
  }

  .user {
    height: 350px;
    background: url("../../../assets/img/background.png") no-repeat;
    background-size: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .head {
    height: 80px;
    width: 80px;
    border-radius: 40px;
    transform: translate(0, -40px);
  }

  .name {
    transform: translate(0, -25px);
  }

</style>
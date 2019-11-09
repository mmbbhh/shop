<template>
  <div id="login">
    <div class="page">
      <div class="title">
        <span>无名小店</span>
      </div>
      <div class="input">
        <div class="content">
          <i class="fa fa-envelope-o fa-fw" style="padding: 0 12px;"></i><input placeholder="请输入用户名" type="text" v-model="user">
        </div>
        <div class="content">
          <i class="fa fa-key fa-fw" style="padding: 0 12px;"></i><input placeholder="请输入密码" type="password" v-model="password">
        </div>
      </div>
      <div class="resign">
        <span @click="change()">点击注册</span>
      </div>
      <div class="button" @click="tologin()">
        <span>登录</span>
      </div>
    </div>
  </div>
</template>

<script>
  import * as login_resign from 'network/login_resign'

  export default {
    name: "login",
    data() {
      return {
        user: '',
        password: ''
      }
    },
    methods: {
      tologin() {
        if (this.user.length == 0 || this.password.length == 0) {
          this.$toast.show('请输入用户名或密码')
        } else {
          login_resign.login(this.user, this.password).then(res => {
            if (res.data.state == 1) {
              this.$toast.show(res.data.message)
              this.$store.commit('login', res.data.user)
            } else {
              this.$toast.show(res.data.message)
              this.user = ''
              this.password = ''
            }
          })
        }
      },
      change() {
        this.$emit('change')
      }
    }
  }
</script>

<style scoped>
  #login {
    background: url('http://127.0.0.1:3000/images/login/background.jpeg') no-repeat center top;
    background-size: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page {
    width: 300px;
    height: 210px;
    overflow: hidden;
    z-index: 1;
    box-shadow: -2px 2px 10px rgba(100,100,100,1);
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .page:before {
    width: 300px;
    height: 210px;
    content: '';
    position: absolute;
    background-image: url('http://127.0.0.1:3000/images/login/background.jpeg');
    background-position: center top;
    background-size: cover;
    background-attachment: fixed;
    filter: blur(9px);
    z-index: -1;
  }

  .title {
    height: 50px;
    width: 100%;
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    text-align: center;
    line-height: 40px;
  }

  .input {
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
  }

  .content {
    width: 250px;
    height: 40px;
    background: #FFFFFF;
    border-radius: 20px;
    display: flex;
    align-items: center;
  }

  .resign {
    height: 20px;
    width: 250px;
    font-size: 14px;
    text-align: right;
  }

  .button {
    height: 30px;
    margin-bottom: 10px;
    width: 90px;
    background: #F86244;
    color: #FFFFFF;
    text-align: center;
    line-height: 25px;
  }


  input{
    background:none;
    outline:none;
    border:none;
  }
</style>
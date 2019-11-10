<template>
  <div id="resign">
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
        <div class="content">
          <i class="fa fa-circle-o fa-fw" style="padding: 0 12px;" v-show="!confirmd"></i><i class="fa fa-check fa-fw" style="padding: 0 12px;" v-show="confirmd"></i><input placeholder="请确认您的密码" type="password" v-model="confirm">
        </div>
        <div class="content">
          <i class="fa fa-phone fa-fw" style="padding: 0 12px;"></i><input placeholder="请输入您的手机号" type="test" :οninput="this.tele=this.tele.replace(/[^\d]/g,'')" v-model="tele">
        </div>
        <div class="sexselect">
          <div class="sex" @click="s_male()" :class="{'chosed': male}">
            <i class="fa fa-mars fa-fw" style="padding: 0 12px;"></i>
          </div>
          <div class="sex" @click="s_female()" :class="{'chosed': female}">
            <i class="fa fa-venus fa-fw" style="padding: 0 12px;"></i>
          </div>
        </div>
      </div>
      <div class="button" @click="tologin()">
        <span>注册</span>
      </div>
    </div>
  </div>
</template>

<script>
  import * as login_resign from 'network/login_resign'

  export default {
    name: "resign",
    data() {
      return {
        user: '',
        password: '',
        confirm: '',
        tele: '',
        male: false,
        female: false
      }
    },
    computed: {
      confirmd() {
        return this.password === this.confirm && this.password.length != 0
      }
    },
    methods: {
      tologin() {
        if (this.user.length == 0 || this.password.length == 0 || this.tele.length == 0 || this.confirm.length == 0) {
          this.$toast.show('请填写完整的信息')
        } else if (!this.confirmd) {
          this.$toast.show('请确认两次输入的密码一致')
        } else if (this.password.length <= 6 || this.password.length > 12) {
          this.$toast.show('密码长度为7~12')
        } else if (this.tele.length != 11) {
          this.$toast.show('请输入11位手机号')
        } else if (this.male == false && this.female == false) {
          this.$toast.show('请选择您的性别')
        } else {
          if (this.male == false) {
            login_resign.resign(this.user, this.password, '女', this.tele).then(res => {
              if (res.data.state == 1) {
                this.$toast.show(res.data.message)
                this.$emit('change')
              } else {
                this.$toast.show(res.data.message)
                this.password = ''
                this.confirm = ''
              }
            })
          } else {
            login_resign.resign(this.user, this.password, '男', this.tele).then(res => {
              if (res.data.state == 1) {
                this.$toast.show(res.data.message)
                this.$emit('change')
              } else {
                this.$toast.show(res.data.message)
                this.password = ''
                this.confirm = ''
              }
            })
          }
        }
      },
      s_male() {
        this.male = true
        this.female = !this.male
      },
      s_female() {
        this.female = true
        this.male = !this.female
      }
    }
  }
</script>

<style scoped>

  #resign {
    background: url('../../../assets/img/background.jpeg') no-repeat center top;
    background-size: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page {
    width: 300px;
    height: 360px;
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
    background-image: url('../../../assets/img/background.jpeg');
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
    height: 250px;
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

  .sexselect {
    width: 250px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .sex {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
  }

  .button {
    height: 40px;
    margin: 10px 0;
    width: 90px;
    background: #F86244;
    color: #FFFFFF;
    text-align: center;
    line-height: 37px;
    border-radius: 8px;
  }

  input{
    background:none;
    outline:none;
    border:none;
  }

  .chosed {
    color: red;
  }
</style>
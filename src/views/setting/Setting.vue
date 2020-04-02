<template>
  <div class="setting">
    <navbar>
      <div slot="left" @click="previous()">
        <i class="fa fa-angle-left return"></i>
      </div>
      <div slot="mid">设置</div>
    </navbar>

    <div class="list">
      <div class="etc">
        <div class="change_head">
          <div class="title">头像修改</div>
          <a class="a-upload">
            <input name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="update($event)">点击这里上传头像
          </a>
        </div>
      </div>
      <div class="button" @click="out()">
        <span>退出登录</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import { head } from "service/profile_img"

  export default {
    name: "Setting",
    components: {
      navbar: () => import('components/reuse/navbar/NavBar')
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
        this.$store.commit('profile_img', 'http://123.57.217.239:3000/newshop/static/head.jpg')
        this.$toast.show('退出成功')
        this.$router.back()
      },
      update(e) {
        let file = e.target.files[0];
        let param = new FormData(); //创建form对象
        param.append('uploadFile',file,file.name);//通过append向form对象添加数据
        param.append('user',this.$store.state.user);//添加form表单中其他数据
        //console.log(param.get('tweetPic')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
        head(param).then(res => {
          if (res.data.state == 1) {
            console.log(res.data.url);
            this.$store.commit('profile_img', res.data.url)
            this.$toast.show('修改成功')
            this.$router.push('/profile')
          } else {
            this.$toast.show('登录失效')
            this.$store.commit('login', '')
            this.$router.push('/profile')
          }
        })
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
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: calc(100vh - 55px);
  }

  .etc {
    flex: 1;
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .change_head {
    width: 90%;
    height: 50px;
    margin-top: 15px;
    display: flex;
    align-items: center;
  }

  .title {
    width: 80px;
    padding: 5px;
    font-family: '微软雅黑';
    font-size: 16px;
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

  .a-upload {
    flex: 1;
    text-align: center;
    padding: 4px 10px;
    height: 20px;
    line-height: 20px;
    position: relative;
    cursor: pointer;
    color: #888;
    background: #fafafa;
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
    display: inline-block;
    *display: inline;
    *zoom: 1
  }

  .a-upload  input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: pointer
  }

  .a-upload:hover {
    color: #444;
    background: #eee;
    border-color: #ccc;
    text-decoration: none
  }
</style>
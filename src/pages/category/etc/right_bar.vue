<template>
  <scroll class="content_r">
    <div class="main">
      <div class="item" v-for="item in now_info" @click="goto(item.id)">
        <img :src="item.primary_pic_url" alt="">
        <div class="title">
          {{item.name}}
        </div>
      </div>
    </div>
  </scroll>
</template>

<script>
  import {info} from "../../../network/detail";

  export default {
    name: "right_bar",
    props: {
      now_info: Array
    },
    components: {
      scroll: () => import('components/reuse/scroll/scroll')
    },
    methods: {
      goto(id) {
        this.$router.push('/detail/' + id)
      }
    }
  }
</script>

<style scoped>
  .content_r {
    width: 70%;
    margin-top: 43px;
    height: calc(100vh - 44px - 49px);
  }

  .main {
    margin: 0 10px;
    width: calc(100% - 20px);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: flex-start;
  }

  .item {
    width: 110px;
    height: 150px;
    background: #F2F4F6;
    border-radius: 10px;
    margin: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }

  .item img{
    width: 100px;
    height: 100px;
  }

  .title {
    width: 90%;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
  }
</style>
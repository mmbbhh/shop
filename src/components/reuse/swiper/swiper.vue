<template>
  <!--使用vue-awesome-swiper-->
  <div class="wrapper">
    <swiper :options="swiperOption" class="swiper-container" >
      <swiper-slide class="swiper-item" v-for='(item,index) of list' :key='item.id'>
        <img class='swiper-img' :src='item.imgUrl' alt="去哪儿门票" @click="goto(index)" @load="finishload()"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name:'HomeSwiper',
    props: {
      list: Array
    },
    data(){
      return{
        swiperOption:{
          // 参数选项,显示小点
          pagination:'.swiper-pagination',
          //循环
          loop:true,
          //每张播放时长3秒，自动播放
          autoplay:2000,
          //滑动速度
          speed:1000,
          // delay:1000
        },
      }
    },
    methods: {
      goto(index) {
        /*window.location.href=this.list[index].link;*/
        console.log(index)
      },

      finishload() {
        this.$emit('loadimgfinished')
      }
    }
  }
</script>

<style scoped>
.wrapper img {
  width: 100%;
  height: 160px;
}
</style>
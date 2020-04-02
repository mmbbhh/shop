<template>
  <scroll class="content_l">
    <div v-for="(item,index) in types" :class="{item_chosed: index == now, item}" @click="chosed(index)">
      <span>{{item}}</span>
    </div>
  </scroll>
</template>

<script>
  export default {
    name: "LeftBar",
    props: {
      types: Array
    },
    data() {
      return {
        now: 0
      }
    },
    components: {
      scroll: () => import('components/reuse/scroll/Scroll')
    },
    methods: {
      chosed(index) {
        this.now = index
        //发出自定义事件
        this.$emit('changed', index)
        //发出事件到时间总线
        this.Bus.$emit('changed')
      }
    }
  }
</script>

<style scoped>
  .content_l {
    width: 28%;
    background: #F9F9F9;
    margin-top: 43px;
    height: calc(100vh - 44px - 49px);
  }

  .item {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item_chosed {
    width: calc(100% - 3px);
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    border-left: 3px solid #FD8F00;
  }
</style>
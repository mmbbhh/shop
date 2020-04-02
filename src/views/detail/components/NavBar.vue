<template>
  <div>
    <detail_navbar class="detail_navbar">
      <div slot="left" @click="previous()">
        <i class="fa fa-angle-left return"></i>
      </div>
      <div slot="mid" class="title">
        <div v-for="(item,index) in title"
             class="title_item"
             @click="check(index)" :class="{chose_title: index == choose}">{{item}}</div>
      </div>
    </detail_navbar>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    data() {
      return {
        title: ['商品','参数','推荐'],
        choose: 0
      }
    },
    methods: {
      check(index) {
        this.choose = index
        this.$emit('navbar_click', index)
      },
      previous() {
        this.$router.go(-1)
      }
    },
    components: {
      detail_navbar: () => import('components/reuse/navbar/NavBar')
    }
  }
</script>

<style scoped>
  .detail_navbar{
    background: #FFFFFF;
  }

  .return{
    font-size: 28px;
    padding-top: 8px;
  }

  .title {
    display: flex;
    font-size: 13px;
  }

  .title_item {
    flex: 1;
  }

  .chose_title {
    color: var(--font-color)
  }
</style>
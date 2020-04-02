<template>
  <div class="category">
    <navbar class="navbar">
      <div slot="mid">商品分类</div>
    </navbar>
    <left_bar :types="types" class="content_l" @changed="tap"></left_bar>
    <right_bar :now_info="now_info"></right_bar>
  </div>
</template>

<script>
  import { category } from "service/category";
  import { unique } from "utils/index"

  export default {
    name: "category",
    data() {
      return {
        info: [],
        types: [],
        now: 0,
        now_info: [],
        name: ''
      }
    },
    components: {
      scroll: () => import('components/reuse/scroll/Scroll'),
      navbar: () => import('components/reuse/navbar/NavBar'),
      left_bar: () => import('./components/LeftBar'),
      right_bar: () => import('./components/RightBar')
    },
    mounted() {
      category().then(res => {
        this.info = res.data
        let a = []
        for (let item of res.data) {
          a.push(item.category_name)
        }
        this.types = unique(a)
        this.name = a[0]
        this.change()
      })
    },
    methods: {
      change() {
        let _this = this
        this.now_info = this.info.filter(function (obj) {
          return obj.category_name == _this.name
        })
      },
      tap(index) {
        this.name = this.types[index]
        this.change()
      }
    }
  }
</script>

<style scoped>
  .navbar {
    background-image: var(--background-home-navbar);
    color: #FFFFFF;
    font-weight: 600;
    font-size: var(--title-size);
  }

  .category {
    display: flex;
    justify-content: space-between;
  }
</style>
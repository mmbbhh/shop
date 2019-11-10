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
  import { category } from "network/category";
  import { unique } from "tools/utils"

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
      scroll: () => import('components/reuse/scroll/scroll'),
      navbar: () => import('components/reuse/navbar/navbar'),
      left_bar: () => import('./etc/left_bar'),
      right_bar: () => import('./etc/right_bar')
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
  }

  .category {
    display: flex;
    justify-content: space-between;
  }
</style>
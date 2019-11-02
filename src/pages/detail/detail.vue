<template>
  <div id="detail">
    <navbar @navbar_click="run_to" ref="detail_navbar"></navbar>
    <scroll class="content"
            ref="detail_scroll"
            @pullup="get_recommend()"
            :probeType="3"
            @location="show_loc">
      <div class="main_pic">
        <img :src="goods.primary_pic_url" alt="">
      </div>
      <goodsinfo :info="detail_info"></goodsinfo>
      <div ref="info">
        <br><div class="related">商品参数</div>
      </div>
      <goods_desc :html="goods.goods_desc"></goods_desc>
      <div ref="recommend">
        <br><div class="related">相关推荐</div>
      </div>
      <detail_list :goods="random_goods.data"></detail_list>
    </scroll>
  </div>
</template>

<script>
  import {goods_detail, info} from "network/detail"
  import {random} from "../../network/detail";

  export default {
    name: "detail",
    components: {
      navbar: () => import('./etc/navbar'),
      scroll: () => import('components/reuse/scroll/scroll'),
      goodsinfo: () => import('./etc/detail_info'),
      goods_desc: () => import('./etc/goods_desc'),
      detail_list: () => import('components/content/goods/goodslist')
    },
    data() {
      return {
        id: null,
        //所有信息
        goods: {},
        //筛选后的显示信息
        detail_info: {},
        //推荐商品列表
        random_goods: {
          page: 0,
          data: []
        },
        //navbar跳转的具体位置
        location: [0, 0, 0, Number.MAX_VALUE],
        //当前位置
        now_loc: 0,
        //选中的navbar选项
        index: 0
      }
    },
    //防止详情页内部跳转时不刷新
    watch: {
      $route(to,from) {
        this.$router.go(0)
      }
    },
    mounted() {
      //获取当前商品信息
      this.id = this.$route.params.id
      goods_detail(this.id).then(res => {
        this.goods = res.data
        this.detail_info = new info(res.data)
      })

      //获取推荐商品
      this.get_recommend()
    },
    methods: {
      get_recommend() {
        this.random_goods.page ++
        random(this.random_goods.page).then(res => {
          this.random_goods.data.push(...res.data)
        })
        this.$refs.detail_scroll && this.$refs.detail_scroll.refresh()
        this.$refs.detail_scroll && this.$refs.detail_scroll.finishpullup()
      },
      //监听navbar点击
      run_to(index) {
        this.$nextTick(() => {
          this.location[1] = this.$refs.info.offsetTop
          this.location[2] = this.$refs.recommend.offsetTop
          this.$refs.detail_scroll.scrollTo(0, -this.location[index], 200)
        })
      },
      refresh() {
        this.$refs.detail_scroll.refresh()
        this.$refs.detail_scroll.finishpullup()
      },
      //监听位置
      show_loc(position) {
        this.location[1] = this.$refs.info.offsetTop
        this.location[2] = this.$refs.recommend.offsetTop
        const now = -position.y
        let length = this.location.length
        for (let i = 0; i < length; i++) {
          /*if (i != this.index
            && ((i < length-1 && now >= this.location[i] && now < this.location[i+1])
              || (i == length - 1 && now >= this.location[i]))) {
            this.$refs.detail_navbar.choose = i
          }*/
          if (i != this.index && this.location[i] <= now && now < this.location[i+1]) {
            this.index = i
            this.$refs.detail_navbar.choose = i
          }
        }
      }
    }
  }
</script>

<style scoped>
  #detail {
    height: 100vh;
  }

  .main_pic {
    display: flex;
    justify-content: center;
  }

  .main_pic img{
    width: 90%;
    height: 90%;
  }

  .content {
    margin-top: 48px;
    height: calc(100% - 48px);
  }

  .related {
    margin: 0 10px 0 10px;
    padding-bottom: 8px;
    font-size: 15px;
    width: 80%;
    border-bottom: 1px solid rgba(100,100,100, 0.3);
  }
</style>
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

    <backtop @click.native="totop()" v-show="ifshow"></backtop>

    <detail_tabbar @addcart="addtocart()" @buy="buy()"></detail_tabbar>

    <buy_check v-if="ifbuy" @yes="accept()" @no="concel()"></buy_check>
  </div>
</template>

<script>
  import {goods_detail, info} from "service/detail"
  import {random} from "service/detail";
  import {backtop_mixin, buy_check_mixin} from "mixins/index";
  import {buy} from 'service/buygoods'
  import * as tools from '../../utils'

  export default {
    name: "Detail",
    components: {
      navbar: () => import('./components/NavBar'),
      scroll: () => import('components/reuse/scroll/Scroll'),
      goodsinfo: () => import('./components/DetailInfo'),
      goods_desc: () => import('./components/GoodsDesc'),
      detail_list: () => import('components/content/goods/GoodsList'),
      detail_tabbar: () => import('./components/DetailTabbar'),
      buy_check: () => import('components/content/buy_check/BuyCheck')
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
        //选中的navbar选项
        index: 0,
        //请求取消状态
        cancelRequest: null
      }
    },
    mixins: [backtop_mixin, buy_check_mixin],
    //防止详情页内部跳转时不刷新
    watch: {
      $route(to,from) {
        this.$router.go(to.path)
        this.$refs.detail_scroll.scrollTo(0, 0, 0)
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

      //图片加载完毕刷新高度
      const refrush = tools.debounce(() => {
        //防止scroll没加载完就执行内部方法
        this.$refs.detail_scroll && this.$refs.detail_scroll.refresh()
      }, 200)
      this.Bus.$on('finishload', () => {
        refrush()
      })
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

        if(now > 666) {
          this.ifshow = true
        }else{
          this.ifshow = false
        }

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
      },

      //添加商品到store
      addtocart() {
        const product = {
          id: this.goods.id,
          name: this.goods.name,
          describe: this.goods.goods_brief,
          price: this.goods.retail_price,
          img: this.goods.primary_pic_url,
          num: 1,
          check: true
        }
        //弹出toast
        this.$store.dispatch('addtocart', product).then(res => {
          this.$toast.show(res)
        })
      },

      //购买按钮
      buy() {
        this.ifbuy = true
      },

      //弹窗确认
      accept() {
        if (typeof this.cancelRequest === 'function') {
          this.cancelRequest()
        }
        buy(this.$store.state.user, this.$route.params.id, 1, this).then(res => {
          if (res.data.state == 1) {
            this.$toast.show('购买成功！')
            this.ifbuy = false
          } else {
            this.$toast.show(res.data.message)
          }
        })
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
    height: calc(100% - 48px - 49px);
  }

  .related {
    margin: 0 10px 0 10px;
    padding-bottom: 8px;
    font-size: 15px;
    width: 80%;
    border-bottom: 1px solid rgba(100,100,100, 0.3);
  }
</style>
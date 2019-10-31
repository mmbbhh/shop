<template>
  <div id="home">
    <navbar class="home_navbar" >
      <div slot="mid">无名小店</div>
    </navbar>

    <!--由于better-scroll内部不支持fixed-->
    <tabcontrol :title="['流行','新款','精选']" @tabclick="goods_change" class="toptabcontrol" v-show="tabcontroltop" ref="tabcontrol2"></tabcontrol>


    <scroll class="content" ref="scroll" :property="3" @location="show" @pullup="get_goods(now_show)">
      <swiper :list="banner.list" @loadimgfinished="gettabcontrol()"></swiper>
      <RecommendView :recommends="recommends"></RecommendView>
      <news :view="view"></news>
      <tabcontrol :title="['流行','新款','精选']" @tabclick="goods_change" ref="tabcontrol1"></tabcontrol>
      <goodslist :goods="selected">
        <goodsitem></goodsitem>
      </goodslist>
    </scroll>

    <backtop @click.native="totop()" v-show="ifshow"></backtop>
  </div>
</template>

<script>
  import * as home from 'network/home';
  import * as tools from 'tools/utils';

  export default {
    name: "home",
    data() {
      return {
        //轮播图
        banner: [],
        //推荐
        recommends: [],
        //广告
        view: {},
        //获取的商品类别及内容
        goods: {
          pop: {page: 0, list:[]},
          new: {page: 0, list:[]},
          sell: {page: 0, list:[]}
        },
        //当前选择的类别
        now_show: 'pop',
        //返回顶部按钮是否显示
        ifshow: false,
        //保存tabcontrol的位置
        tabcontrollocation: 0,
        //tabcontrol是否吸顶
        tabcontroltop: false,
        //保留离开时的滚动位置
        nowlocation: 0
      }
    },

    components: {
      navbar: () => import('components/reuse/navbar/navbar'),
      swiper: () => import('components/reuse/swiper/swiper'),
      RecommendView: () => import('pages/home/etc/RecommendView'),
      news: () => import('pages/home/etc/news'),
      tabcontrol: () => import('components/content/tabcontrol/tabcontrol'),
      goodslist: () => import('components/content/goods/goodslist'),
      goodsitem: () => import('components/content/goods/goodsitem'),
      scroll: () => import('components/reuse/scroll/scroll'),
      backtop: () => import('components/content/backtop/backtop')
    },

    //建立页面时进行的网络请求
    mounted: function () {
      home.swiper().then(res => {
        this.banner = res.data
      })
      home.Recommend().then(res => {
        this.recommends = res.data
      })
      home.news().then(res => {
        this.view = res.data
      })
      this.get_goods('pop')
      this.get_goods('new')
      this.get_goods('sell')

      //图片加载完执行scroll高度更新
      const refrush = tools.debounce(() => {
        //防止scroll没加载完就执行内部方法
        this.$refs.scroll && this.$refs.scroll.refresh()
      }, 200)
      this.Bus.$on('finishload', () => {
        refrush()
      })
    },

    methods: {
      //网络请求
      get_goods(type) {
        const page = this.goods[type].page + 1
        home.home_goods(type,page).then(res => {
          this.goods[type].list.push(...res.data)
          this.goods[type].page ++
          this.$refs.scroll && this.$refs.scroll.finishpullup()
        })
      },

      //监听事件
      goods_change(index) {
        const box = []
        for (let item in this.goods) {
          box.push(item)
        }
        this.now_show = box[index]
        this.$refs.tabcontrol1.target = index
        this.$refs.tabcontrol2.target = index
        this.$refs.scroll.scrollTo(0,-this.tabcontrollocation, 200)
      },

      //返回顶部按钮返回的位置
      totop() {
        this.$refs.scroll.scrollTo(0,-this.tabcontrollocation)
      },

      //监听scroll的位置
      show(position) {
        //判断是否显示返回顶部按钮
        this.ifshow = position.y < -640

        //判断tabcontrol是否吸顶
        if (position.y < -this.tabcontrollocation) {
          this.tabcontroltop = true
        }else{
          this.tabcontroltop = false
        }
      },

      //获取tabcontrol实际位置
      gettabcontrol() {
        this.tabcontrollocation = this.$refs.tabcontrol1.$el.offsetTop
      }
    },

    computed: {
      selected() {
        return this.goods[this.now_show].list
      }
    },

    //回来转到保存的位置
    activated() {
      this.$refs.scroll && this.$refs.scroll.scrollTo(0, this.nowlocation, 0)
      this.$refs.scroll && this.$refs.scroll.refresh()
    },

    //离开保存位置
    deactivated() {
      this.nowlocation = this.$refs.scroll.getY()
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
  }

  .home_navbar {
    background-image: var(--background-home-navbar);
    color: #FFFFFF;
    font-size: var(--title-size);
  }

  .toptabcontrol{
    width: 100%;
    position: fixed;
    top: 44px;
    z-index: 999;
  }

  .content {
    margin-top: 44px;
    height: calc(100% - 93px);
  }
</style>
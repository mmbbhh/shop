import backtop from "components/content/backtop/BackTop";
import buy_check from "components/content/buy_check/BuyCheck";

//backtop按钮封装混入
export const backtop_mixin = {
  components: {
    backtop
  },
  data() {
    return {
      //返回顶部按钮是否显示
      ifshow: false
    }
  },
  methods: {
    totop() {
      this.$refs.detail_scroll.scrollTo(0, 0, 400)
    }
  }
}

//购买确认弹窗
export const buy_check_mixin = {
  components: {
    buy_check
  },
  data() {
    return {
      //购买确认弹窗是否显示
      ifbuy: false
    }
  },
  methods: {
    //弹窗取消
    concel() {
      this.ifbuy = false
    }
  }
}
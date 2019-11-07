import backtop from "components/content/backtop/backtop";

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
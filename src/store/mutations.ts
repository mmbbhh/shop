import { State } from "./state";
import { CartItem } from "./state";

export const mutations = {
  //购物车添加商品
  addgoods(state:State, payload:CartItem) {
    state.cartlist.push(payload)
  },
  //购物车添加商品数量
  addgoodsnum(state:State, payload:CartItem) {
    payload.num ++
  },
  //选中购物车所有商品
  selectall(state:State) {
    for (let i of state.cartlist) {
      i.check = true
    }
  },
  //取消选中购物车所有商品
  disselectall(state:State) {
    for (let i of state.cartlist) {
      i.check = false
    }
  },
  //删除购物车中商品
  remove(state:State, payload:number) {
    state.cartlist.splice(payload, 1)
  },
  //登录操作
  login(state:State, payload:string) {
    state.user = payload
  },
  loginout(state:State) {
    state.user = ''
  },
  //删除所有选中商品
  deleteselect(state:State) {
    for (let i = 0; i < state.cartlist.length; i++) {
      if (state.cartlist[i].check) {
        state.cartlist.splice(i, 1)
        i--
      }
    }
  },
  profile_img(state:State, payload:string) {
    state.profile_img_url = payload;
  },
  //添加canceltoken函数
  addCancel(state:State, payload:any) {
    state.cancelRequest.push(payload)
  },
  //清空cancel函数
  clearCancel(state:State) {
    state.cancelRequest = []
  }
}
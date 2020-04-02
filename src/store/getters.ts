import { State } from "./state";

export const getters = {
  //购物车种类数
  cartlength(state:State) {
    return state.cartlist.length
  },
  //获取购物车
  getcartlist(state:State) {
    return state.cartlist
  },
  //购物车计算总价
  totalprice(state:State) {
    let total = 0
    for (let i of state.cartlist) {
      if (i.check) {
        total += i.price * i.num
      }
    }
    return total.toFixed(2)
  },
  //购物车计算选中种数
  checkednum(state:State) {
    let total = 0
    for (let i of state.cartlist) {
      if (i.check) {
        total ++
      }
    }
    return total
  },
  //判断是否全选
  ifallchecked(state:State) {
    let total = 0
    for (let i of state.cartlist) {
      if (i.check) {
        total ++
      }
    }
    if (total == 0) {
      return false
    }else return state.cartlist.length == total
  },
  //判断是否登录
  iflogin(state:State) {
    return state.user.length != 0
  },
  //返回所有选中的商品id和数目
  checkedgoods(state:State) {
    let checked = []
    for (let item of state.cartlist) {
      if (item.check) {
        checked.push({id: item.id,num: item.num})
      }
    }
    return checked
  }
}
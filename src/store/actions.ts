import { CartItem } from "./state";

export const actions = {
  addtocart(context:any, payload:CartItem) {
    return new Promise((res, rej) => {
      let exist = false
      for (let i of context.state.cartlist) {
        if (i.id == payload.id) {
          exist = true
          context.commit('addgoodsnum',i)
          res('当前商品数量+1')
        }
      } if (!exist) {
        context.commit('addgoods', payload)
        res('添加商品成功')
      }
    })
  },
}
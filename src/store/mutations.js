const mutations = {
  //购物车添加商品
  addgoods(state, payload) {
    state.cartlist.push(payload)
  },
  //购物车添加商品数量
  addgoodsnum(state, payload) {
    payload.num ++
  },
  //选中购物车所有商品
  selectall(state) {
    for (let i of state.cartlist) {
      i.check = true
    }
  },
  //取消选中购物车所有商品
  disselectall(state) {
    for (let i of state.cartlist) {
      i.check = false
    }
  },
  //删除购物车中商品
  remove(state, payload) {
    state.cartlist.splice(payload, 1)
  },
  //登录操作
  login(state, payload) {
    state.user = payload
  },
  loginout(state, payload) {
    state.user = ''
  },
  //删除所有选中商品
  deleteselect(state) {
    for (let i = 0; i < state.cartlist.length; i++) {
      if (state.cartlist[i].check) {
        state.cartlist.splice(i, 1)
        i--
      }
    }
  }
}

export default mutations
const getters = {
  cartlength(state) {
    return state.cartlist.length
  },
  getcartlist(state) {
    return state.cartlist
  },
  totalprice(state) {
    let total = 0
    for (let i of state.cartlist) {
      if (i.check) {
        total += i.price * i.num
      }
    }
    return total.toFixed(2)
  },
  checkednum(state) {
    let total = 0
    for (let i of state.cartlist) {
      if (i.check) {
        total ++
      }
    }
    return total
  },
  ifallchecked(state) {
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
  iflogin(state) {
    return state.user.length != 0
  }
}

export default getters
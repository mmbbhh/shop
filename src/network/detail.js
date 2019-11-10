import {request} from "./request";

export function goods_detail(id) {
  return request({
    url: '/goods/detail',
    params: {
      id
    },
  })
}

export class info {
  constructor(data) {
    this.title = data.name
    this.brief = data.goods_brief
    this.num = data.is_new
    this.unit = data.goods_unit
    this.old_price = data.market_price
    this.new_price = data.retail_price
    this.reason = data.promotion_desc
    this.sold = data.sell_volume
  }
}

//获取推荐商品
export function random(page) {
  return request({
    url: '/goods/random',
    params: {
      page
    }
  })
}

//判断是否为收藏
export function collect(user, id) {
  return request({
    url: '/goods/collect',
    params: {
      user,
      id
    }
  })
}

//确认收藏
export function like(user, id) {
  return request({
    url: '/goods/like',
    params: {
      user,
      id
    }
  })
}

//取消收藏
export function dislike(user, id) {
  return request({
    url: '/goods/dislike',
    params: {
      user,
      id
    }
  })
}

//获取所有收藏的商品
export function collection(user) {
  return request({
    url: '/goods/collection',
    params: {
      user
    }
  })
}

//获取所有订单
export function order(user) {
  return request({
    url: '/goods/order',
    params: {
      user
    }
  })
}
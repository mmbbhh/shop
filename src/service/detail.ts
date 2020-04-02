import { httpRequest } from './index'

export function goods_detail(id: number) {
  return httpRequest.request({
    url: '/goods/detail',
    params: {
      id
    },
  })
}

export class info {
  title: string
  brief: string
  num: boolean
  unit: string
  oldPrice: number
  newPrice: number
  reason: string
  sold: number
  constructor(public data:any) {
    this.title = data.name
    this.brief = data.goods_brief
    this.num = data.is_new
    this.unit = data.goods_unit
    this.oldPrice = data.market_price
    this.newPrice = data.retail_price
    this.reason = data.promotion_desc
    this.sold = data.sell_volume
  }
}

//获取推荐商品
export function random(page: number) {
  return httpRequest.request({
    url: '/goods/random',
    params: {
      page
    }
  })
}

//判断是否为收藏
export function collect(user: string, id: number) {
  return httpRequest.request({
    url: '/collect',
    params: {
      user,
      id
    }
  })
}

//确认收藏
export function like(user: string, id: number) {
  return httpRequest.request({
    url: '/collect/like',
    params: {
      user,
      id
    }
  })
}

//取消收藏
export function dislike(user: string, id: number) {
  return httpRequest.request({
    url: '/collect/dislike',
    params: {
      user,
      id
    }
  })
}

//获取所有收藏的商品
export function collection(user: string) {
  return httpRequest.request({
    url: '/collect/all',
    params: {
      user
    }
  })
}

//获取所有订单
export function order(user: string) {
  return httpRequest.request({
    url: '/order',
    params: {
      user
    }
  })
}
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

export function random(page) {
  return request({
    url: '/goods/random',
    params: {
      page
    }
  })
}
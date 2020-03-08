import {request} from './request'

export function buy(user, id, num) {
  return request({
    url: '/order/add',
    params: {
      user,
      id,
      num
    }
  })
}
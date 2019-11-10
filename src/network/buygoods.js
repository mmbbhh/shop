import {request} from './request'

export function buy(user, id, num) {
  return request({
    url: '/goods/buy',
    params: {
      user,
      id,
      num
    }
  })
}
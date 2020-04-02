import { httpRequest } from './index'

export function buy(user: string, id: number, num: number, _this:any) {
  console.log(typeof _this)
  return httpRequest.request({
    url: '/order/add',
    params: {
      user,
      id,
      num
    },
  })
}
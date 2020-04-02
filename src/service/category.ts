import { httpRequest } from './index'

export function category() {
  return httpRequest.request({
    url: '/category'
  })
}
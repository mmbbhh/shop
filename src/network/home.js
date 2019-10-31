import {request} from "./request";

export function swiper() {
  return request({
    url: '/home/Banner'
  })
}

export function Recommend() {
  return request({
    url: '/home/Recommend'
  })
}

export function news() {
  return request({
    url: '/home/news'
  })
}

export function home_goods(type, pages) {
  return request({
    url: '/goods',
    params: {
      type,
      pages
    }
  })
}
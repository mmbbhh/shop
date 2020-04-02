import { httpRequest } from "@/service/index";

export function swiper() {
  return httpRequest.request({
    url: '/home/Banner'
  })
}

export function Recommend() {
  return httpRequest.request({
    url: '/home/Recommend'
  })
}

export function news() {
  return httpRequest.request({
    url: '/home/News'
  })
}

export function home_goods(type: string, pages: number) {
  return httpRequest.request({
    url: '/goods',
    params: {
      type,
      pages
    }
  })
}
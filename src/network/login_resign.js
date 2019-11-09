import {request} from "./request";

export function login(username, password) {
  return request({
    url: '/login',
    params: {
      username,
      password
    }
  })
}

export function resign(username, password, sex, tel) {
  return request({
    url: '/resign',
    params: {
      username,
      password,
      sex,
      tel
    }
  })
}
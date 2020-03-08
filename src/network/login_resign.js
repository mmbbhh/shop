import {request} from "./request";

export function login(username, password) {
  let data = new FormData();
  data.append('username',username);
  data.append('password',password);
 /* data.append('grant_type','password')
  data.append('client_id','password')
  data.append('scope','all')
  data.append('client_secret',123)*/
  return request({
    method: 'post',
    url: '/login',
    data: data
  })
}

export function resign(username, password, sex, tel) {
  let data = new FormData();
  data.append('username',username);
  data.append('password',password);
  data.append('sex',sex);
  data.append('tel',tel);
  return request({
    method: 'post',
    url: '/resign',
    data: data
  })
}
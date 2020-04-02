import { httpRequest } from "./index";

export class User {
  constructor(public username: string, public password: string,
              public sex?: string, public tel?: string) {
    this.username = username
    this.password = password
    this.sex = sex
    this.tel = tel
  }
}

export function login(user: User) {
  let data = new FormData();
  data.append('username',user.username);
  data.append('password',user.password);
 /* data.append('grant_type','password')
  data.append('client_id','password')
  data.append('scope','all')
  data.append('client_secret',123)*/
  return httpRequest.request({
    method: 'post',
    url: '/login',
    data: data
  })
}

export function resign(user: User) {
  let data = new FormData();
  data.append('username',user.username);
  data.append('password',user.password);
  data.append('sex',(user.sex as string));
  data.append('tel',(user.tel as string));
  return httpRequest.request({
    method: 'post',
    url: '/resign',
    data: data
  })
}
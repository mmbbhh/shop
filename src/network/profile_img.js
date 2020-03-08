import {request} from "./request";

export function head(param) {
  return request({
    method: 'post',
    url: '/profile_upload',
    headers:{'Content-Type':'multipart/form-data'},
    data: param,
  })
}

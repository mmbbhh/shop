import { httpRequest } from "./index";

export function head(param: FormData) {
  return httpRequest.request({
    method: 'post',
    url: '/profile_upload',
    headers:{'Content-Type':'multipart/form-data'},
    data: param,
  })
}

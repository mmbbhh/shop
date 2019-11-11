import axios from 'axios'

export function request(config) {
  const app = axios.create({
    baseURL: 'http://123.57.217.239:800',
    timeout: 5000,
  })
  app.interceptors.request.use(config => {
    return config
  }, error => {
    console.log(error)
  })
  app.interceptors.response.use(res => {
    return res
  },error => {
    console.log(error)
  })

  return app(config)
}
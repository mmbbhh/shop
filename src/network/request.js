import axios from 'axios'
axios.defaults.withCredentials = true

export function request(config) {
  const app = axios.create({
    baseURL: 'http://123.57.217.239:3000/newshop/',
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

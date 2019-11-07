import axios from 'axios'

export function request(config) {
  const app = axios.create({
    baseURL: 'http://127.0.0.1:3000',
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
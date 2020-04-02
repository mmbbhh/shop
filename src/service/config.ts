import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise, AxiosResponse } from "axios";
import store from "@/store";
axios.defaults.withCredentials = true

export class HttpRequest {
  constructor(public baseUrl:string, public timeout:number) {
    this.baseUrl = baseUrl
    this.timeout = timeout
  }

  CancelToken = axios.CancelToken

  //配置合并
  private mergeConfig(config: AxiosRequestConfig): AxiosRequestConfig {
    const CancelToken = axios.CancelToken
    config = Object.assign( {
      baseURL: this.baseUrl,
      timeout: this.timeout,
      //将cancel函数添加到store
      cancelToken: new CancelToken(function executor (c) {
        store.commit('addCancel', c)
      })
    }, config)
    return config
  }

  //拦截器
  private interceptors(instance: AxiosInstance, url?: string) {

    //请求拦截
    instance.interceptors.request.use((config: AxiosRequestConfig) => {
        if (localStorage.getItem('这是token')) {
          config.headers.common["token"] = localStorage.getItem('这是token')
        }
        return config
      },
      error => {
      if (error.response.status == 'token失效状态码') {
        location.href = '/login'
      } else {
        return Promise.reject(error)
      }
      })

    //响应拦截
    instance.interceptors.response.use((res: AxiosResponse) => {
        const { data } = res
        const { code, msg } = data
        if (code == 0/*token失效状态码*/) {
          clearRequest()
        }
        return res
      },
      error => {
        return Promise.reject(error)
      })
  }

  public request(config: AxiosRequestConfig): AxiosPromise {
    const app: AxiosInstance = axios.create()
    config = this.mergeConfig(config)
    this.interceptors(app, config.url)
    return app(config)
  }
}

export const clearRequest = () => {
  if (typeof store.state.cancelRequest[0] == "function") {
    store.state.cancelRequest.forEach((item) => {
      item()
    })
    store.commit('clearCancel')
  }
}
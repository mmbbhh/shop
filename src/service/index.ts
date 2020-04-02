import { HttpRequest } from "./config";

const api = {
  devApiBaseUrl: 'http://127.0.0.1:3000/',
  proApiBaseUrl: 'http://123.57.217.239:3000/',
}

//判断环境确定api
const apiBaseUrl = process.env.NODE_ENV === 'production' ? api.proApiBaseUrl : api.devApiBaseUrl;

export const httpRequest = new HttpRequest(apiBaseUrl, 5000)

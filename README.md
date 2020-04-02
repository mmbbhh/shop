# 无名小店web商城

一个基于Vuecli3的移动端商城web项目，主要功能有注册、登录、收藏、购物车、购买

## 前端

webpack+vuecli3实现项目搭建，现已部署 地址：http://123.57.217.239

#### 功能演示

![image](https://raw.githubusercontent.com/mmbbhh/shop/master/public/1.gif)
![image](https://raw.githubusercontent.com/mmbbhh/shop/master/public/2.gif)
![image](https://raw.githubusercontent.com/mmbbhh/shop/master/public/3.gif)

#### 主要技术

活用组件化开发思想，将项目常用部分进行封装插槽，提升代码的复用性。

主要包括借助vue-awesome-swiper封装的轮播图组件、tabbar、navbar、借助better-scroll封装的满足移动端各种场景需求的滚动条组件、toast弹窗组件、以及用mixin实现的回到顶部按钮和购买确认弹窗组件

使用axios二次封装不同页面的网络请求

通过vuex实现购物车功能和登录状态管理

vuex-persistedstate实现vuex状态持久化

通过vue-router(keep-alive)实现前端路由

大部分图标由font-awesome字符库实现

vue-lazyload实现图片懒加载

postcss-px-to-viewport实现px转化vw来保证不同分辨率的自适应

#### Ps:

数据库文件来源于开源项目，存在部分商品无介绍问题、商品总数少且分类不明确等问题，尽请谅解。详见[后端项目](https://github.com/mmbbhh/shop_server)

## 2020.3.8更新

同步新后端接口，优化登录安全性，新增头像上传的功能

(vue-router以history模式打包后存在白屏问题，尚未解决因此改用hash模式)

[新后端](https://github.com/mmbbhh/shop_server-remake-)

## 2020.4.2

用typescript重构


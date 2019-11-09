import Toast from "./toast";
const obj = {}

obj.install = function (Vue) {

  //创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  //创建组件对象
  const toast = new toastContrustor()
  //将组件挂载
  toast.$mount(document.createElement('div'))
  //显示组件
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj

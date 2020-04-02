export class CartItem {
  constructor(
    public check:boolean,
    public describe:string,
    public id:number,
    public img:string,
    public name:string,
    public num:number,
    public price:number) {
    this.check = check
    this.describe = describe
    this.id = id
    this.img = img
    this.name = name
    this.num = num
    this.price = price
  }
}

export interface State {
  cartlist: CartItem[],
  user: string,
  profile_img_url: string,
  cancelRequest: Array<any>
}

export const state:State = {
  cartlist: [],
  user: '',
  profile_img_url: 'http://123.57.217.239:3000/newshop/static/head.jpg',
  cancelRequest: []
}
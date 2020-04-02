//防抖
export function debounce(fnc: () => {}, delay: number) {
  let time: any = null
  return function (args:any) {
    if (time) clearTimeout(time)
    time = setTimeout(() => {
      fnc.apply(args)
    }, delay)
  }
}

//去重
export function unique(ary:any []) {
  let newAry = [];
  for (let i = 0; i<ary.length; i++) {
    if (newAry.indexOf(ary[i]) === -1) {
      newAry.push(ary[i]);
    }
  }
  return newAry;
}
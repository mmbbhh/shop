//防抖
export function debounce(fnc, delay) {
  let time = null
  return function (args) {
    if (time) clearTimeout(time)
    time = setTimeout(() => {
      fnc.apply(args)
    }, delay)
  }
}
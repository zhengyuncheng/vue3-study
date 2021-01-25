/* 
### Vue3响应式数据本质
- 在Vue2.x中是通过defineProperty来实现响应式数据
  详见：手写Vue全家桶视频
- 在Vue3.x中是通过Proxy来实现响应式数据的
*/
let obj = {name: 'lng', age: 18}
let state = new Proxy(obj, {
  get(obj, key){
    console.log(obj, key);
    return obj[key]
  },
  set(obj, key, newValue){
    console.log(obj, key, newValue);
    obj[key] = newValue
    console.log('更新UI界面')
  } 
})
// console.log(state.name)
state.name = 'laow'
console.log(obj);

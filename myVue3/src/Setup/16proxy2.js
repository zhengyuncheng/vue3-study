/* 
### Vue3响应式数据本质
- 在Vue2.x中是通过defineProperty来实现响应式数据
  详见：手写Vue全家桶视频
- 在Vue3.x中是通过Proxy来实现响应式数据的
*/
let arr = [1,2,3]
let state = new Proxy(arr, {
  get(obj, key){
    console.log(obj, key); //[ 1, 2, 3 ] '1'
    return obj[key]
  },
  set(obj, key, newValue){
    console.log(obj, key, newValue);
    obj[key] = newValue
    console.log('更新UI界面')
    return true  // 当前操作成功，可以进行下一步操作
  } 
})
// console.log(state[1]);
state.push(7)


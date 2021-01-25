<template>
    <div>
      <p>{{state}}</p>
      <button @click="fn">按钮</button>
    </div>
</template>

<script>

/*
  1.customRef
    返回一个ref对象，可以显示地控制依赖追踪和触发响应
 */
import { ref, customRef } from "vue";

export default {
    setup() {
      
      // let state = ref(18)
      let state = myRef('../public/data.json')
      console.log(state);
      
      function fn() {
        console.log(state);
      }
      return {state, fn}
    }
};
function myRef(value) {

  return customRef((track, trigger) => {
    // track 追踪    trigger 触发
    setTimeout(() => {
      fetch(value)
        .then(res => {
          return res.json()
        })
        .then(res => {
          console.log(res);
          value = res
          trigger()
        })
        .catch(err => {
          console.log(err)
        })
    }, 10000);
    return {
      get() {
        track() // 告诉vue 这个数据是需要追踪变化的
        console.log('get', value);
        /* 
          注意点：死循环
            不能在get方法中发送网络请求
            渲染界面 -> 调用get -> 发送网络请求
            保存数据 -> 更新界面 -> 调用get
        */
        return value
      },
      set(newValue) {
        console.log('set', newValue);
        value = newValue
        trigger() // 告诉vue 这个数据需要触发界面更新
      }
    }
  })
}
</script>
<style>
/* @import url(); 引入css类 */
</style>
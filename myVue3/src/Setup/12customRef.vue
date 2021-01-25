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
function myRef(value) {

  return customRef((track, trigger) => {
    // track 追踪    trigger 触发
    return {
      get() {
        track() // 告诉vue 这个数据是需要追踪变化的
        console.log('get', value);
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
export default {
    setup() {
      // let state = ref(18)
      let state = myRef(18)
      function fn() {
        state.value++
      }
      return {state, fn}
    }
};
</script>
<style>
/* @import url(); 引入css类 */
</style>
<template>
    <div>
      <p>{{state}}</p>
      <button @click="fn">按钮</button>
    </div>
</template>

<script>

/*
  toRefs:
    通常用来对 reactive 生命的响应式数据结构 方便使用
 */
import { ref, toRef, toRefs } from "vue";
export default {
    setup() {
      let obj = {name: '000', age: 18}
      // toRef 只能传入两个参数
      // 如果想对对象上的多个数据添加响应式可以toRefs
      let state = toRefs(obj)
      function fn() {
        state.value = 'zhangsan'
      
        console.log(obj)
        console.log(state)
      }
      return {state, fn}
    }
};
</script>
<style>
/* @import url(); 引入css类 */
</style>
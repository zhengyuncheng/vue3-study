<template>
    <div>
      <p>{{state.name}}</p>
      <button @click="fn">按钮</button>
    </div>
</template>

<script>

/*
  markRaw 永远不追踪
 */
import { reactive, markRaw } from "vue";
export default {
    setup() {
      let obj = {name: '000'}
      obj = markRaw(obj)   // 永远不要被追踪
      let state = reactive(obj)
      
      function fn() {
        state.name = 'zhangsan'
        console.log(state)
      }
      return {state, fn}
    }
};
</script>
<style>
/* @import url(); 引入css类 */
</style>
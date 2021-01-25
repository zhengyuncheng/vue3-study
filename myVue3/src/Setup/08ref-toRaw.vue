<template>
    <div>
      <p>{{state.name}}</p>
      <button @click="fn">按钮</button>
    </div>
</template>

<script>

/*
  1.toRaw 获取reactive 的原始数据
 */
import { ref, toRaw } from "vue";
export default {
    setup() {
      // 注意点： 如果想通过toRaw拿到ref类型的原始数据（创建时传入的按个数据）
          // 那么就必须明确的告诉toRaw方法，要获取的是.value 的数据
          // 因为经过vue 处理之后，.value中保存的才是当初创建时传入的那个原始数据
      let obj = {name: 'zhang'}
      let state = ref(obj)
      console.log(obj);
      console.log(state);
      console.log(toRaw(state));
      console.log(toRaw(state.value));
      
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
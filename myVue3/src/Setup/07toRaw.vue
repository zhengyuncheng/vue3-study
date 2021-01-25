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
import { reactive, toRaw } from "vue";
export default {
    setup() {
      let obj = {name: 'on', age: 18}
      let state = reactive(obj)
      let obj2 = toRaw(state)
      /* 
        ref/reactive 数据类型的特点：
          每次修改都会被追踪，都会更新UI界面，但是这样其实是非常消耗性能的
          所以如果我们有一些操作不需要追踪，不需要更新UI界面，那么这个时候，
          我们就可以通过toRaw方法拿到它的原始数据，对原始数据进行修改，
          这样就不会被追踪，这样就不会更新UI界面，性能就好了
        */
      // obj === obj2 true
      // obj === state false
      // state和obj 的关系：
      // 引用关系，state的本质是一个Proxy对象，在这个Proxy对象中引用了obj
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
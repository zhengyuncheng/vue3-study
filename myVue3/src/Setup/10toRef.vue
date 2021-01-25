<template>
    <div>
      <p>{{state}}</p>
      <button @click="fn">按钮</button>
    </div>
</template>

<script>

/*
  toRef
 */
import { ref, toRef } from "vue";
export default {
    setup() {
      let obj = {name: '000'}
      // 将obj中的name变成响应式数据
      /* 
      ref(obj.name) => ref('000') => reactive({value: '000'})
      */
      // let state = ref(obj.name)
      // ref 的本质是 复制
      // toRef 的本质 引用
      /* 
      区别：ref修改响应式数据不会影响以前的数据，数据改变，界面自动更新
            toRef修改响应式数据会影响以前的数据，数据改变，界面也不会自动更新
      toRef的应用场景：如果想让响应式数据和以前的数据关联起来，并且更新响应式数据之后还不想更新界面
       */
      let state = toRef(obj, 'name')
      function fn() {
        state.value = 'zhangsan'
        /* 
          结论：如果利用ref将某一个对象中的属性变成响应式的数据
              我们修改响应式的数据是不会影响到原始数据的
        */
       /* 
          结论：如果利用toRef将某一个对象中的属性变成响应式的数据
              我们修改响应式的数据是会影响到原始数据的
              但是如果响应式的数据是通过toRef创建的，那么修改了数据并不会触发UI界面的更新
       */
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
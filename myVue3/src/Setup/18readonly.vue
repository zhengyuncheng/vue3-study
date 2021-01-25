<template>
    <div>
      <p>{{state.name}}</p>
      <p>{{state.attr.age}}</p>
      <p>{{state.attr.height}}</p>
      <button @click="fn">按钮</button>
    </div>
</template>

<script>

/*
  1. readonly
 */
import { readonly, isReadonly, shallowReadonly, reactive } from "vue";

export default {
    setup() {
      // readonly: 用于创建一个只读的数据，并且是递归只读
      // shallowReadonly 用于创建一个只读的数据，但不是递归只读，只有第一层数据只读
      // isReadonly 判断是不是readonly和shallowReadonly 创建的
      let state = readonly({name: 'lnj', attr: {age: 18, height: 1.88}})
      // let state = shallowReadonly({name: 'lnj', attr: {age: 18, height: 1.88}})
      
      /* 
        const 和readonly 的区别：
          const: 赋值保护，不能重新赋值
          readonly: 属性保护，不能给属性重新赋值
       */
      function fn() {
        state.name = 'adfadfadf'
        state.attr.age = '999'
        state = reactive({name: 'wwwwww', attr: {age: 18, height: 1.88}})
        console.log(state);
        console.log(isReadonly(state));
        
      }
      return { state, fn }
    }
};
</script>
<style>
/* @import url(); 引入css类 */
</style>
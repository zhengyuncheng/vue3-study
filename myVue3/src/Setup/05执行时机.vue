<template>
    <div>
      <p>{{name}}</p>
      <button @click="myFn1">按钮</button>
      <p>{{age}}</p>
      <button @click="myFn2">按钮</button>
    </div>
</template>

<script>
/* 
  1.Composition API 和 Option API 混合使用
  2.Composition API本质 （组合API/注入API）
    实际上是把setup中的数据 注入到data或methods中
  3.setup 执行时机
    beforeCreate： 表示组件刚刚被创建出来，组件的data和methods还没初始化好
    setup：       
    created：       表示组件刚刚被创建出来，并且组件的data和methods已经初始化好了

  4.setup注意点
    - 由于在执行setup函数的时候，还没有执行created生命周期方法，所以在setup函数中，是无法使用data和methods
    - 由于我们不能在setup使用data和methods，所以vue 为了避免我们错误的使用，它直接将setup函数中的this修改成了undefined
    - setup 函数只能是同步的，不能是异步的
*/
import { ref } from 'vue'
export default {
    name: 'App',
    data() {
      return {
        name: 'lnj'
      }
    },
    methods: {
      myFn1() {
        alert(124)
      }
    },
    setup() {
      console.log(this); //undefined
      let age = ref(18)
      function myFn2() {
        alert('fn2')
      }
      return {age, myFn2}
    }
};
</script>
<style>
/* @import url(); 引入css类 */
</style>
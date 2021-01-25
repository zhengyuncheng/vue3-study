<template>
    <div>
      <p>{{age}}</p>
      <button @click="fn">按钮</button>
    </div>
    <!-- 
      ref和reactive区别：
      如果在template里面使用的是ref类型的数据，那么vue会自动帮我们添加.value
      如果在template里面使用的是reactive类型的数据，那么vue不会自动帮我们添加.value

      vue 是如何决定是否需要自动添加.value的
      vue 在解析数据之前，会自动判断这个数据是否是ref类型的，
      如果是就自动添加.value,如果不是就不自动添加.value

      vue是如何判断当前的数据是否是ref类型的
      通过当前数据的__v_ref来判断的
      如果有这个私有的属性，并且取值为true，那么就代表是一个ref类型的数据
     -->
</template>

<script>
/* 
  1.什么是ref？
    - ref和reactive一样，也是用来实现响应式数据的方法
    - 由于reactive必须传递一个对象，所以导致在企业开发中，如果我们只想让某个变量实现响应式的时候会非常麻烦，所以Vue3就给我们提供了ref方法，实现对简单值的监听
  2.ref本质：
    - ref底层的本质其实还是reactive
    系统会自动根据我们给ref传入的值将它转换成ref(xx) -> reactive({value: xx})
  3.ref注意点
    - 在Vue中使用ref的值不用通过value获取 //模template中不需要value
    - 在JS中使用ref的值必须通过value过去
*/
import { ref, reactive, isRef, isReactive } from "vue";
export default {
    setup() {
     /* 
       ref本质：其实还是reactive，当我们给ref函数传递一个值之后，ref函数底层会自动将ref转换成reactive
       ref(18) => reactive({value: 18})
     */ 
      let age = ref(10)
      function fn() {
        console.log(age);
        console.log(isRef(age));
        console.log(isReactive(age));
        age.value = 88
      }
      return {age, fn}
    }
};
</script>
<style>
/* @import url(); 引入css类 */
</style>
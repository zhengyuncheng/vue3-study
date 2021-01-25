<template>
  <div>
    <p>{{count}}</p>
    <button @click="fn">按钮</button>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'App',
  // setup 函数是组合API的入口函数
  setup() {
    // let count = 0;
    // 定义了一个名称叫做count变量，这个变量的初始值是0
    // 这个变量发生改变之后，vue会自动更行UI
    let count = ref(0)
    // 在组合API中，如果想定义方法，不用定义到methods， 直接定义即可
    function fn() {
      // alert(123)
      count.value++
    }

    // 注意点：在组合 API 中定义的变量/方法，要想在外界使用，必须通过return {xxx,xxx}暴露出去
    return {count, fn}
  }
}
</script>

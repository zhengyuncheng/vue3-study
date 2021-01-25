<template>
    <div>
      <p ref='p'>我是p</p>
    </div>
</template>

<script>

/*
  1.获取元素
  在vue2.x 中我们可以通过给元素添加ref = ‘xxx'
  然后在代码中通过refs.xxx 的方式来获取元素
  在vue3.x中我们也可以通过ref来获取元素
 */
import { ref, onMounted } from "vue";

export default {
    setup() {
      // console.log(this.refs.p)
      let p = ref(null)  // reactive({value: null})

      onMounted(() => {
        console.log('onmounted', p.value);
        
      })
      console.log(p.value);
      
      return {p}
    }
};
</script>
<style>
/* @import url(); 引入css类 */
</style>
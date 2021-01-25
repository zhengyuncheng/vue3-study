<template>
    <div>
      <p>{{state}}</p>
      <button @click="fn">按钮</button>
    </div>
</template>

<script>
/* 
  1.递归监听
    默认情况下，无论是通过ref还是reactive都是递归监听

  2.递归监听存在的问题
  如果数据量比较大，非常消耗性能

  3.非递归监听
    import { shallowReactive, shallowRef } from "vue"; //用来创建非递归监听
    如果是通过 shallowRef 创建数据，那么Vue监听的是.value的变化，并不是第一层的变化
    triggerRef(state) 相应数据  主动触发
    注意点：Vue3 只提供了triggerRef方法，没有提供triggerReactive方法
    所以如果是reactive 类型的数据，那么是无法主动触发界面更新

  4.shallowRef 本质 
    // ref(10) => reactive({value: 10})
      // shallowRef(10) => shallowReactive({value: 10})
      // shallowRef 底层和ref 一样
      // 所以如果是通过shallowRef创建的数据，它监听的是.value的变化
      // 因为底层本质上value才是第一层，而用非递归监听，只proxy第一层
*/
import { shallowReactive, shallowRef, triggerRef } from "vue";
import { reactive } from "vue";
export default {
    setup() {
      let state = reactive({
        a: 'a',
        gf: {
          b: 'b',
          f: {
            c: 'c',
            s: {
              d: 'd'
            }
          }
        }
      })
      function fn() {
        state.gf.b = 'bb'
      }
      return { state, fn }
    }
};
</script>
<style>
/* @import url(); 引入css类 */
</style>
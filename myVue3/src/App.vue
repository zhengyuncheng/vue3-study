<template>
    <div @click="onClick">
        <div @click="$emit('click')">
            <h3>自定义事件</h3>
        </div>
    </div>
</template>

<script>
// vue3 中可以没有根元素
/* 
\   Emits Component option   还没搞懂
    vue3 中组件发送的自定义事件需要定义在emits选项中：
     原生事件会触发两次，比如click 加上之后只对自定义事件，原生事件不处理
     更好的指示组件工作方式
     对象形式事件校验
 */
export default {
    // emits: ['click']
    methods: {
        onClick() {
            console.log("emit");
        }
    },
};
</script>
<style>
/* @import url(); 引入css类 */
</style>
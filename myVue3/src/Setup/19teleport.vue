<template>
    <div>
        <button @click="modalOpen = true">弹出一个模态窗口</button>
        <!-- 传送门 -->
        <teleport to='body'>
            <div v-if="modalOpen" class="modal">
                <div>
                    这个一个弹窗 我的父元素是body
                    <button @click="modalOpen = false">关闭</button>
                </div>
            </div>
        </teleport>

    </div>
</template>

<script>
import { ref } from "vue";
export default {
    setup() {
        let modalOpen = ref(false);
        return { modalOpen };
    }
};
</script>
<style>
/* @import url(); 引入css类 */
.modal {
    width: 300px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
}
.modal div {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
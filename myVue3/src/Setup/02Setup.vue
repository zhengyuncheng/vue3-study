<template>
    <div>
        <form action="">
            <input type="text" v-model="state2.stu.id">
            <input type="text" v-model="state2.stu.name">
            <button @click="addStu">添加</button>
        </form>
        <ul>
            <li v-for="(stu, id) in state.stus" :key="id" @click="del(id)">
                {{stu.name}}</li>
        </ul>
    </div>
</template>

<script>
// import {ref} from 'vue'
import { reactive } from "vue";
import useAddStudent from './addStudent'
export default {
    name: "App",
    // setup 函数是组合API的入口函数
    setup() {
        let { state, del } = useRemoveStudent();
        let { state2, addStu } = useAddStudent(state);
        return { state, del, state2, addStu };
    }
};

function useRemoveStudent() {
    // ref 函数只能监听简单类型的变化，不能监听复杂类型（对象，数组）
    let state = reactive({
        stus: [
            { id: 1, name: "zhangsan" },
            { id: 2, name: "lisi" },
            { id: 3, name: "afistiy" }
        ]
    });
    function del(index) {
        // state.stus = state.stus.filter((stu, idx) => idx != index)
        state.stus.splice(index, 1);
    }
    return { state, del };
}
</script>

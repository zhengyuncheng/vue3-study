import { reactive } from "vue";
function useAddStudent(state) {
  let state2 = reactive({
      stu: { id: "", name: "" }
  });
  function addStu(e) {
      e.preventDefault();
      console.log(state2);
      const stu = Object.assign({}, state2.stu); //必须拷贝
      state.stus.push(stu);
      state2.stu.id = "";
      state2.stu.name = "";
  }
  return { state2, addStu };
}
export default useAddStudent
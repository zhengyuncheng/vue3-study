/* 
1.shallowReactive, shallowRef
2.shallowReadonly
3.reactive, ref
4.readonly

*/
function shallowReactive(obj) {
  return new Proxy(obj, {
    get(obj, key) {
      return obj[key]
    },
    set(obj, key, newVal) {
      obj[key] = newVal
      console.log('更新UI界面');
      return true
    }
  })
}
function shallowRef(val) {
  return shallowReactive({value: val})
}

function reactive(obj) {
  if (typeof obj === 'object') {
     if (obj instanceof Array) {
       // 如果是一个数组，那么取出数组中的每一个元素，
       // 判断每一个元素是否又是一个对象，那么也需要包装成Proxy
       obj.forEach((item, index) => {
         if (typeof item === 'object') {
           obj[index] = reactive(item)
         }
       })
     } else {
       // 如果是一个对象，那么取出对象属性的取值，
       // 判断对象属性的取值是否又是一个对象，如果又是一个对象，那么也需要包装成Proxy、
       for(let key in obj) {
         let item = obj[key]
         if (typeof item === 'object') {
           obj[key] = reactive(item)
         }
       }
     }
     return new Proxy(obj, {
      get(obj, key) {
        return obj[key]
      },
      set(obj, key, newVal) {
        obj[key] = newVal
        console.log('更新UI界面');
        return true
      }
    })
  } else {
    console.log('is not object');
  }
}
function ref(val) {
  return reactive({value: val})
}

function shallowReadonly(obj) {
  return new Proxy(obj, {
    get(obj, key) {
      return obj[key]
    },
    set(obj, key, newVal) {
      // obj[key] = newVal
      // console.log('更新UI界面');
      // return true
      console.log('只读的，不能改');
      
    }
  })
}
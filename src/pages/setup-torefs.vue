<template>
  <div>
    <h1>toRefs的使用</h1>
    <p>{{ name }} - {{ age }}</p>
    <button @click="changeUser">change</button>
  </div>
  <div>
    兄弟节点
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'// 放对象，如果放字符串或者数字则不会响应式，会报warn
export default {
  setup () { // 取不到实例，里面的属性和方法都是临时的
    console.log('hello word') // 可以打印出来，相当于生命周期beforeCreated / created
    const state = reactive({
      name: 'santa',
      age: 27
    })
    const changeUser = () => {
      state.name = '小明'
      state.age = 39
    }
    return {
      ...toRefs(state), // 将state的值变成单个ref对象，再扩展出去，如果只使用...state则不是响应式
      changeUser
    }
  }
}
</script>

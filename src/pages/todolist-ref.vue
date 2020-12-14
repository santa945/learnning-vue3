<template>
  <div>
    <h1>todolist ref版本</h1>
    <input
      type="text"
      ref='mytext'
    ><button @click="handleAdd">add</button>
    <ul>
      <li
        v-for="(item,index) in state.datalist"
        :key="item"
      >{{item}} <button @click="handleDel(index)"> del</button></li>
    </ul>
  </div>
</template>
<script>
import { reactive, ref } from 'vue'
export default {
  setup: () => {
    const state = reactive({
      datalist: ['sss', 'ddd']
    })
    const mytext = ref('')// 创建一个ref
    const handleAdd = () => {
      console.log('mytext-ref', mytext.value) // ref.value 就是dom节点
      state.datalist.push(mytext.value.value)
      mytext.value.value = ''
    }
    const handleDel = (index) => {
      state.datalist.splice(index, 1)
    }
    return {
      state,
      mytext,
      handleAdd,
      handleDel
    }
  }
}
</script>

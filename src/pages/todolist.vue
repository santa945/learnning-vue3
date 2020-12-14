<template>
  <div>
    <h1>todolist</h1>
    <input
      type="text"
      v-model="state.mytext"
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
import { reactive } from 'vue'
export default {
  setup: () => {
    const state = reactive({
      mytext: '',
      datalist: ['sss', 'ddd']
    })
    const handleAdd = () => {
      state.datalist.push(state.mytext)
      state.mytext = ''
    }
    const handleDel = (index) => {
      state.datalist.splice(index, 1)
    }
    return {
      state,
      handleAdd,
      handleDel
    }
  }
}
</script>

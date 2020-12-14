<template>
  <div>
    <h1>ref</h1>
    <p>{{myname}}-{{myage}}</p>
    <button @click="handleChange">change</button>
  </div>
</template>
<script>
import { ref, reactive } from 'vue'
export default {
  setup: () => {
    const myname = ref('santa')
    const myage = ref(100)
    // state 本身是个响应式对象，改变里面任何属性都会被拦截
    // ref不是响应式对象，里面的value才是响应式
    const state = reactive({
      mylove: 'eat'
    })
    const handleChange = () => {
      //   myname = 'xxx'//报错，myname是一个敞亮constant
      myname.value = 'joy' // 可以正常改变，这意味着，myname不是响应式，它的值才是响应式
      myage.value = 12
    }
    return {
      myname,
      myage,
      state,
      handleChange
    }
  }
}
</script>

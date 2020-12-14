<template>
  <div style="border:1px solid #ccc;padding:20px;">
    <p>我是子组件</p>
    <p>父组件对我说：{{textname}}</p>
    <button @click="handleChange">change</button>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  props: ['name'], // 相当于class中的super(),一定要加,如果父传给子2个参数，这里这引入一个，那setup的形参也只有一个
  setup: (props, { emit }) => {
    console.log('props', props)
    const textname = ref(props.name)
    const handleChange = () => {
      emit('change', 'i am child')
    }
    return {
      textname,
      handleChange
    }
  }
}
</script>

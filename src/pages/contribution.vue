<template>
  <div>
    <h1>父子通讯</h1>
    <div>
      <p>我是父组件</p>
      <p>子组件传给我的值是：{{state.title}}</p>
      <Child
        name="you are my son"
        age=“12”
        @change="changeTitle"
      />
    </div>
  </div>
</template>
<script>
import { reactive } from 'vue'
import Child from './../components/Child.vue'
export default {
  components: { Child },
  setup: () => {
    const state = reactive({
      title: 'xxx'
    })
    const changeTitle = (title) => {
      state.title = title
    }
    return {
      state,
      changeTitle
    }
  }
}
</script>

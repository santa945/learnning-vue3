<template>
  <div>
    <h1>计算属性computed</h1>
    <p>{{title}} - {{UpTitle}}</p>
    <button @click="handleChange">change</button>
    <input
      type="text"
      v-model="title"
    >
    <ul>
      <li
        v-for="i in computedList"
        :key="i"
      >{{i}}</li>
    </ul>
  </div>
</template>
<script>
import { computed, onMounted, ref } from 'vue'
export default {
  setup: () => {
    const title = ref('santa')
    const list = ref([])
    const UpTitle = computed(() => title.value.substring(0, 1).toUpperCase() + title.value.substring(1))
    const computedList = computed(() => {
      const newList = list.value.filter(i => i.includes(title.value))
      return newList
    })
    const handleChange = () => {
      title.value = 'kelly'
    }
    onMounted(() => {
      fetch('/test.json').then(res => res.json()).then(res => { list.value = res.list })
    })
    return {
      title,
      UpTitle,
      handleChange,
      computedList
    }
  }
}
</script>

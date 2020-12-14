<template>
  <div>
    <h1>hooks</h1>
    <p>将属性，方法抽离到一个js文件中，用import方式引入，用函数调用的方式得到需要的属性和方法，再return给本地用</p>
    <p>hooks中的js相当于函数工厂，同一个页面的父子组件都调用不会相互影响</p>
    <button @click="handleMinus">-</button>
    {{count}}
    <button @click="handlePlus">+</button>
  </div>
</template>
<script>
import { useCount } from './hooks/useCount'
export default {
  setup: () => {
    const { count, handleMinus, handlePlus } = useCount()
    return {
      count,
      handleMinus,
      handlePlus
    }
  }
}
</script>

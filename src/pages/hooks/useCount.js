import { ref } from 'vue'
const useCount = () => {
  const count = ref(0)
  const handleMinus = () => {
    count.value--
  }
  const handlePlus = () => {
    console.log('这里是hooks')
    count.value++
  }
  return {
    count,
    handleMinus,
    handlePlus
  }
}
export { useCount }

// 组合式API
import { ref } from 'vue'
export function countAddAndJian () {
  const count = ref(0)
  const onAdd = () => {
    count.value++
  }
  const onJian = () => {
    count.value--
  }
  // return 一个对象，相当于创造工厂函数，组件之间不会影响的，每一次使用会生成新的对象，相当于生产的产品都一样，但是每一个产品是独一无二的！！！！！
  return {
    count,
    onAdd,
    onJian
  }
}

<template>
  <h2></h2>
</template>
<script lang="ts">
import {
  defineComponent,
  isProxy,
  isReactive,
  isReadonly,
  isRef,
  reactive,
  readonly,
  ref
} from 'vue'
// isRef检查一个值是否为ref对象
// isReactive检查一个对象是否有reactive创建的响应代理
// isReadonly检查一个对象是否有readonly创建的只读代理
// isProxy 检查一个对象是否有reactive或者readonly方法创建的代理
export default defineComponent({
  setup () {
    console.log(isRef(ref({})))
    console.log(isReactive(reactive({})))
    console.log(isReadonly(readonly({})))
    console.log(isProxy(readonly({})))
    console.log(isProxy(reactive({})))
    return {}
  }
})
</script>

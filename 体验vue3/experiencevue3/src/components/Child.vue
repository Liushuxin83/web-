<template>
  <div>
    <button @click="onAdd">+++</button>
    {{ count }}
    <button @click="onJian">---</button>
  </div>
</template>
<script>
import { countAddAndJian } from '../01-base/hooks/count'
export default {
  name: 'Child',
  setup () {
    const { count, onAdd, onJian } = countAddAndJian()
    return {
      count,
      onAdd,
      onJian
    }
  }
}
</script>
<style lang="less" scoped></style>

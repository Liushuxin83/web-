<template>
  {{ User.firstName }}
  <button @click="changeFirstName">更改数据</button>
  <div>
    姓名操作
  </div>
  <span>姓氏：</span>
  <input type="text" placeholder="请输入姓氏" v-model="firstName" />
  <span>名字：</span>
  <input type="text" placeholder="请输入名字" v-model="lastName" />
  <hr />
  <div>
    计算属性和监视的演示
  </div>
  <hr />
  <div>
    <span>姓名1：</span>
    <input type="text" placeholder="显示姓名" v-model="fullName1Computed" />
  </div>
  <div>
    <span>姓名2：</span>
    <input type="text" placeholder="显示姓名" v-model="fullName2Computed" />
  </div>
  <div>
    <span>姓名3：</span>
    <input type="text" placeholder="显示姓名" v-model="fullName3Watch" />
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  computed,
  ref,
  watch,
  watchEffect
} from 'vue'

export default defineComponent({
  setup () {
    // 定义一个响应式对象
    const User = reactive({
      // 姓氏
      firstName: '东方',
      // 名字
      lastName: '不败'
    })
    // 通过计算属性的方式显示第一个姓名显示  如果计算属性参数为一个回调则是get  返回的是一个ref类型的对象
    const fullName1Computed = computed(() => {
      return User.firstName + '---' + User.lastName
    })
    // console.log(fullName1Computed)
    const fullName2Computed = computed({
      get () {
        return User.firstName + '---' + User.lastName
      },
      set (val) {
        // console.log(val)
        const names = val.split('---')
        // console.log(names)
        User.firstName = names[0]
        User.lastName = names[1]
      }
    })
    const fullName3Watch = ref('')
    watch(
      User,
      val => {
        console.log(val)
        fullName3Watch.value = val.firstName + '---' + val.lastName
      },
      { immediate: true }
    )

    // watchEffect监视，不需要配置immediate（默认执行一次）
    // watchEffect(() => {
    //   fullName3Watch.value = User.firstName + '---' + User.lastName
    // })

    watchEffect(() => {
      const names = fullName3Watch.value.split('---')
      User.firstName = names[0]
      User.lastName = names[1]
    })

    const changeFirstName = () => {
      User.firstName = '刘舒新'
    }

    // watch可以监视多个数据 当用watch监视非响应式数据  需要写成箭头函数格式
    watch([() => User.firstName], () => {
      console.log('-----------')
    })
    return {
      User,
      ...toRefs(User),
      fullName1Computed,
      fullName2Computed,
      fullName3Watch,
      changeFirstName
    }
  }
})
</script>

<template>
  <div>film</div>
  <div>
    <ul>
      <li
        v-for="item in state.dataList"
        :key="item.filmId"
        @click="onFilmClick(item.filmId)"
      >
        {{ item.name }}
        <!-- <img :src="item.poster" alt="" /> -->
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'Film',
  setup () {
    // 这个结构出来的ctx就是 vue实例
    // const { ctx } = getCurrentInstance()
    const router = useRouter()
    const state = reactive({
      dataList: []
    })
    const onFilmClick = id => {
      console.log(id)
      // console.log(ctx)
      router.push(`/detail/${id}`)
    }
    onMounted(() => {
      axios({
        url:
          'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7130163',
        headers: {
          'X-Client-Info':
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"16163322961195242153836545","bc":"110100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res.data.data.films)
        state.dataList = res.data.data.films
      })
    })
    return {
      state,
      onFilmClick
    }
  }
}
</script>
<style lang="less" scoped></style>

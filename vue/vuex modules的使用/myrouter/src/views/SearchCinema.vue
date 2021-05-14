<template>
	<div>
		<van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
		@cancel="onCancel"
  />
	<van-list>
		<van-cell v-for="v in computedCinemaList" :key="v.cinemaId">
				<h3>{{v.name}}</h3>
				<p class="address">{{v.address}}</p>
		</van-cell>
 </van-list>
	</div>
</template>
<script>
    import {
        mapState,
        mapActions
    } from 'vuex'
    import Vue from 'vue';
    import {
        List,
        Cell,
        Search
    } from 'vant';

    Vue.use(Search).use(Cell).use(List);
    export default {
        data() {
            return {
                value: '',
            }
        },
        methods: {
            onCancel() {
                //这里不要使用back，万一第一拿到的是这个searchCinema页面呢，这样会出bug
                // this.$router.back();
                // push适合列表到详情,back适合退回来，replace是替换掉原来的那个记录换成别的路径
                this.$router.replace('/cinema');
            },
            ...mapActions("CinemaModule", ['getCinemaList'])
        },
        computed: {
            computedCinemaList() {
                if (this.value === '') {
                    return []
                }
                return this.cinemaListStore.filter(item => item.name.toUpperCase().includes(this.value.toUpperCase()) || item.address.toUpperCase().includes(this.value.toUpperCase()))
            },
            ...mapState("CinemaModule", ["cinemaListStore"]),
            ...mapState("CityModule", ["cityId"])
        },
        mounted() {
            //console.log(this.$store.state.cinemaListStore);
            if (this.cinemaListStore.length === 0) {
                //走vue的异步流程
                this.getCinemaList(this.cityId)
            } else {
                console.log('缓存');
            }
        },
    }
</script>
<style scoped>
    li {
        padding: 5px;
        margin-top: 15px;
    }
</style>
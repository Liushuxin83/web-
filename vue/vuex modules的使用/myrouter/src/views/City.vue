<template>
	<div>
		<van-sticky>
			<!-- <van-icon name="cross" style="float: left;top: 8px;" size="30" color="#323233"/> -->
			<div style="background-color: white;height: 44px;text-align: center;line-height: 44px;">当前城市 - </div>
			<van-search :show-action="true" background="#f4f4f4" v-model="mytext" placeholder="请输入搜索关键词" @input="inp"
				@cancel="cancel" />
		</van-sticky>
		<van-index-bar v-if="isShow" :sticky-offset-top="100" :sticky="false" :index-list="indexList" highlight-color="red"
			@select="handelSelect">
			<div style="height: 200px;background-color: white; z-index: 999999;">
				1111111111111
			</div>
			<div v-for="v in datas" :key="v.id">
				<!-- 注意！！！这里的传属性必须加冒号   要传变量-->
				<van-index-anchor :index="v.id" style="background-color: #f4f4f4;" />
				<van-cell v-for="(val,index) in v.sub" :title="val.name" :key="index"
					@click="changePage(val.cityId,val.name)" />
			</div>
		</van-index-bar>
		<div v-else>
			<ul>
				<!-- <li v-for="val in this.mySearch()">{{val}}</li> -->
				<van-cell v-for="(val,index) in this.mySearch()" :title="val" :key="index" />
			</ul>
		</div>
	</div>
</template>
<script>
	import {
		mapMutations
	} from 'vuex'
	import http from '@/util/http'
	import Vue from 'vue';
	import {
		IndexBar,
		IndexAnchor,
		Cell,
		Toast,
		Sticky,
		Search
	} from 'vant';

	Vue.use(IndexBar).use(Cell).use(Toast).use(Sticky).use(Search);
	Vue.use(IndexAnchor);
	import PinyinMatch from 'pinyin-match'
	Vue.use(PinyinMatch)
	export default {
		props: ['showAction'],
		data() {
			return {
				datas: [],
				mytext: '',
				isShow: true,
			}
		},
		computed: {
			indexList() {
				// 映射出id
				return this.datas.map(item => item.id)
			}
		},
		mounted() {
			//pinyin-match测试
			// let test = '123曾经沧海难为水除却巫山不是云'
			// PinyinMatch.match(test, '23曾'); // [1, 3]
			// console.log('11111111111', PinyinMatch.match(test, 'shuichuqueyun')); // [5, 6]

			http({
				url: '/gateway?k=6645510',
				headers: {
					'X-Host': 'mall.film-ticket.city.list'
				}
			}).then(res => {
				//console.log(res.data.data.cities);
				this.datas = this.handelData(res.data.data.cities);
				console.log(res.data.data.cities);
				//this.mySearch()
			});
		},
		methods: {
			cancel() {
				this.isShow = true;
			},
			inp() {
				this.isShow = false;
			},
			mySearch() {
				const letterSearch = [];
				const arr = this.datas.map(item => {
					return item.sub.map(val => {
						return val.name;
					});
				}).join().split(',');
				const arrtwo = this.datas.map(item => {
					return item.sub.map(val => {
						return val.pinyin;
					});
				}).join().split(',');
				//console.log(arrtwo);
				//console.log(arr.join(''));
				//const searchArr = [...arr, ...arrtwo];
				// console.log(PinyinMatch.match(arr.join(''), this.mytext));
				arr.forEach(item => {
					//console.log(item);
					//console.log(PinyinMatch.match(item, this.mytext), item);
					if (PinyinMatch.match(item, this.mytext) == false) {
						// console.log('没有找到');
						return false
					} else {
						letterSearch.push(item);
					}
				})
				console.log(letterSearch);
				if (this.mytext !== '') {
					return arr.filter(v => v.includes(this.mytext)) && letterSearch
				}
			},
			handelData(cities) {
				// 处理原始数据，返回得到想要的目标数据
				// 不过有个小bug，不能遗漏，就是右边的索引列表和左边的大列表对不上
				const letterArr = [];
				const citiesList = [];
				cities.map((val) => {
					if (letterArr.indexOf(val.pinyin.charAt(0).toUpperCase()) === -1) {
						letterArr.push(val.pinyin.charAt(0).toUpperCase());
					}
				});
				letterArr.sort();
				letterArr.forEach(letter => {
					const list = cities.filter(item => item.pinyin.substring(0, 1).toUpperCase() === letter)
					// console.log(list);
					citiesList.push({
						id: letter,
						sub: list
					})
				});
				// console.log(citiesList);
				return citiesList
			},
			handelSelect(index) {
				Toast({
					message: index,
					duration: 1500,
				});
			},
			...mapMutations("CityModule", ["changeCityName", "changeCityId"]),
			changePage(cityid, cityname) {
				//console.log(cityid, cityname);
				// 不可以在这里随意修改状态，这会使状态不可控
				this.changeCityName(cityname); //第一个参数在store中为方法名
				this.changeCityId(cityid);
				this.$router.back()
			}
		},
	}
</script>
<style scoped lang="scss">
	.van-field {
		background-color: #fff;
	}
</style>
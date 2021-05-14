<template>
	<div>
<!-- nowpalyingggggggggggg -->

<van-list
	v-model="loading"
	:immediate-check="false"
	offset=30
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
	<van-cell v-for="item in lists" :key="item.filmId" @click="handelClick(item.filmId)">
	<img :src="item.poster" alt="">
		<h3>{{item.name}}</h3>
		<p>主演：{{item.actors | actorFilter}}</p>
		<button>购票</button>
		<p>{{item.nation}} | {{item.runtime}}分钟</p>
		
		</van-cell>
</van-list>
<!-- <ul>
	<li v-for="item in lists" :key="item.filmId" @click="handelClick(item.filmId)">
		<img :src="item.poster" alt="">
		<h3>{{item.name}}</h3>
		<p>主演：{{item.actors | actorFilter}}</p>
		<p>{{item.nation}} | {{item.runtime}}分钟</p>
		<button>购票</button>
	</li>
</ul> -->
	</div>
</template>

<script>
    import axios from 'axios'
    import Vue from 'vue'
    import http from '@/util/http'
    import {
        List,
        Cell,
        Dialog
    } from 'vant';
    import {
        mapState
    } from 'vuex'
    Vue.use(List).use(Cell);
    Vue.filter("actorFilter", (actors) => {
        // console.log(actors);
        if (actors === undefined) {
            //这是后端没有传 actors这个数组时
            return '暂无主演'
        } else {
            return actors.map((v) => v.name).join(' ');
        }
    })
    export default {
        props: [''],
        data() {
            return {
                lists: [],
                actors: [],
                loading: false, //知否正在加载中
                finished: false, //是否已经结束
                page: 1, //记录第几页数据
            }
        },
        computed: {
            ...mapState("CityModule", ["cityId"])
        },
        mounted() {
            axios({
                url: `https://m.maizuo.com/gateway?cityId=${this.cityId}&pageNum=1&pageSize=10&type=1&k=6154643`,
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"161190457273607149518849","bc":"110100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                //console.log(res.data.data.films);
                this.lists = res.data.data.films;
            })
        },
        methods: {
            onLoad() {
                console.log('到底了');
                //1.ajax请求数据
                //2.合并新数据到老数据
                //3.this.loding = false
                this.page += 1;
                console.log(this.page);
                http({
                    url: '/gateway?cityId=' + this.cityId + '&pageNum=' + this.page + '&pageSize=10&type=1&k=862748',
                    headers: {
                        'X-Host': 'mall.film-ticket.film.list'
                    }
                }).then(res => {
                    //console.log(res.data.data.films);
                    this.lists = [...this.lists, ...res.data.data.films];
                    this.loading = false;
                    if (res.data.data.films.length == 0) {
                        this.finished = true;
                    }
                })

            },
            handelClick(id) {
                if (id == 4835) {
                    Dialog.confirm({
                            title: '提示',
                            message: '该影片目前没有排期，都首页看看其他电影吧',
                        })
                        .then(() => {
                            // on confirm
                            this.$router.push(`/film/nowplaying`)
                        })
                        .catch(() => {
                            // on cancel
                            this.$router.push(`/film/nowplaying`)
                        });
                }
                // console.log(id);
                //编程式导航  $router就是在路由js文件中定义的routes对象！！！！！！！
                // this.$router.push('/detail')


                //1.路径跳转
                //this.$router.push(`/detail/${id}`)

                //2.命名路由
                // this.$router.push({
                //     name: 'lsx',
                //     params: {
                //         myid: id,
                //     }
                // })

                //3.query方式
                this.$router.push(`/detail?id=${id}`)
            }
        },
    }
</script>

<style scoped>
    .van-cell {
        position: relative;
        overflow: hidden;
        padding: 15px 70px 15px 0;
        border-bottom: 1px solid #ccc;
    }
    
    .van-cell img {
        float: left;
        width: 100px;
        height: 130px;
    }
    
    p {
        font-size: 14px;
        color: #797d82;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .van-list .van-cell button {
        position: absolute!important;
        right: 0px;
        width: 50px;
        height: 30px;
        color: #ff5f16;
    }
</style>
import Vue from 'vue'
import Vuex from 'vuex'
import CityModule from './store/module/CityModule'
import TabbarModule from './store/module/TabbarModule'
import CinemaModule from './store/module/CinemaModule'
import createPersistedState from "vuex-persistedstate"; //数据持久化  第一步
Vue.use(Vuex)

//vue srore对象  ‘全局的对象’的对象
export default new Vuex.Store({
    plugins: [createPersistedState()], //数据持久化  第二步
    //状态
    state: {


    },
    //集中式修改状态---被监控（vue detools）  这是唯一修改状态的位置
    // store只是存在内存中，需要配置持久化
    mutations: {





    },
    //专门做异步  请求数据  但是第一个形参是store
    actions: {

    },
    modules: {
        CityModule,
        TabbarModule,
        CinemaModule
    }
})
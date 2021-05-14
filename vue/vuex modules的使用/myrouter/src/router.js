import Vue from 'vue'
import Router from 'vue-router'
import Film from './views/Film.vue'
import Center from './views/Center.vue'
import Cinema from './views/Cinema.vue'
import Comingsoon from './views/flim/Comingsoon.vue'
import Nowplaying from './views/flim/Nowplaying.vue'
import Detail from './views/Detail.vue'
// import Login from './views/Login.vue'
import City from './views/City.vue'
import SearchCinema from './views/SearchCinema.vue'

Vue.use(Router) //注册路由模块,已经创建了一个组件，随时随地都可以使用

//这段代码  vue项目中，当点击本页面链接的导航时，报错 ： NavigationDuplicated: Avoided redundant navigation to current location: 即提示这是到当前位置的冗余导航，如何避免这个报错呢？  这四行代码就是避免方法
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [{
        path: '/film',
        component: Film,
        meta: {
            title: '电影'
        },
        //嵌套路由
        children: [{
                path: '/film/comingsoon',
                component: Comingsoon
            }, {
                path: '/film/nowplaying',
                component: Nowplaying
            },
            {
                //重定向
                path: '',
                redirect: '/film/nowplaying', //这里不可以简写
            }
        ]
    },
    {
        path: '/cinema',
        component: Cinema,
        meta: {
            title: '影院'
        },
    },
    {
        path: '/center',
        component: Center,
        meta: {
            title: 'proFile'
        },
    },
    {
        //优先级最低
        // 路由重定向
        // path: '/',
        path: '*', //网址中如果乱写入一些字母也会跳到film
        redirect: '/film'
    },
    // {
    //     path: '/detail/:myid', //动态路由
    //     component: Detail,
    //     name: 'lsx', //命名路由
    // },

    {
        path: '/detail', //可用query 方式的路由
        component: Detail,
        meta: {
            title: '详情'
        },
    },
    {
        path: '/login',
				meta:{
					title:'登录'
				},
        component: () =>
            import ("./views/Login.vue"), //这就是路由懒加载
    },
    {
        path: '/city',
        component: City,
				meta:{
					title:'城市'
				},
    },
    {
        path: '/cinema/searchcinema',
        component: SearchCinema
    }
];

const router = new Router({
    //路由原理：
    // hash路由===>location.hash切换,window.onhashchange监听路径的切换
    // history路由===>history.pushState切换,window,onpopstate监听路径切换


    // mode: 'history',//路由模式  hash#  histoury/
    // base: process.env.BASE_URL,
    // routes: []
    routes,
})
export default router
router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    //next();
    // console.log(to);
    let auth = ["/center", "/order", "/money"]; //若多个地方需要授权的话，设置全局路由守卫
    // if (to.fullPath === '/center') {
    if (auth.includes(to.fullPath)) {
        // console.log('验证token');
        if (!localStorage.getItem("token")) {
            next('/login');
        } else {
            document.title = to.matched[0].meta.title;
            next();
        }
    } else {
        console.log(to);
        document.title = to.matched[0].meta.title;
        next();
    }
})
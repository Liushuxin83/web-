<template>
  <div id="app">
    <tabbar v-show="isTabbarShow"></tabbar>
    <!-- 路由容器 -->
    <section>
      <transition name="lsx" mode="out-in">
        <keep-alive exclude="detail">
          <router-view></router-view>
        </keep-alive>
      </transition>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex"; //vuex肯定是 export{mapState}这样导出
import tabbar from "./components/Tabbar.vue";
import axios from "axios";
import film from "./views/Film.vue";
import cinema from "./views/Cinema.vue";
import center from "./views/Center.vue";
export default {
  data() {
    return {
      // isWhick: tabbar
    };
  },
  components: {
    tabbar,
    film,
    cinema,
    center,
  },
  computed: {
    //相当于   ...{isTabbarShow:()=>{}}
    ...mapState("TabbarModule", ["isTabbarShow"]), //从TabbarModule中切割出isTabbatShow这个状态
  },
  mounted() {
    console.log(mapState("TabbarModule", ["isTabbarShow"])); //从TabbarModule中切割出isTabbatShow这个状态
    // 1.后端配置好cors
    // axios.get('http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5').then(res => {
    //     console.log(res.data);
    // })

    //2.猫眼官网    反向代理配置vue.config.js
    // axios.get('/ajax/mostExpected?ci=10&limit=10&offset=0&token=&optimus_uuid=26B1093063BC11EB84430FFA9A499FE5A6F077F5243E40DDACE3390C4849A103&optimus_risk_level=71&optimus_code=10').then(res => {
    //     console.log(res);
    // })

    //3.卖座   这里有验证头
    //     axios({
    //         url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6154643',
    //         headers: {
    //             'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"161190457273607149518849","bc":"110100"}',
    //             'X-Host': 'mall.film-ticket.film.list'
    //         }
    //     }).then(res => {
    //         console.log(res.data);
    //     })
    // },
  },
};
</script>

<style lang="scss">
/* #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    
    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
		} */

section {
  margin-bottom: 50px;
}

.lsx-enter-active {
  animation: a 0.5s;
}

.lsx-leave-active {
  animation: a 0.5s reverse;
}

@keyframes a {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 100%;
    transform: translateY(0px);
  }
}
</style>
<template>
  <!-- better-scroll原理：对很长的列表做一个overflow：hidden；然后通过translateY来改变高度，只要滑动，这个Y值就会变成负值，往上走 -->
  <div>
    <!-- 导航条组件 -->
    <van-nav-bar
      title="影院"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="search" size="24" color="black" /> </template
    ></van-nav-bar>
  </div>
</template>
<template #left>
  <span style="font-size: 15px">{{ cityName }}</span
  ><van-icon name="arrow-down" />
</template>
</van-nav-bar>
<div class="lsx" :style="{height:height}">
    <van-list>
        <van-cell v-for="v in cinemasList" :key="v.cinemaId">
            <h3>{{v.name}}</h3>
            <p class="address">{{v.address}}</p>
        </van-cell>
    </van-list>
</div>
</div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import BetterScroll from "better-scroll";
import http from "@/util/http";
import Vue from "vue";
import { Icon, NavBar, List, Cell } from "vant";
Vue.use(NavBar).use(Icon);
export default {
  data() {
    return {
      cinemasList: [],
      height: 0,
    };
  },
  methods: {
    onClickLeft() {
      //清除vuex中的缓存(必须)
      this.clearCinemaList();

      this.$router.push("/city");
    },
    onClickRight() {
      this.$router.push("/cinema/searchCinema");
    },
    ...mapActions("CinemaModule", ["getCinemaList"]),
    ...mapMutations("CinemaModule", ["clearCinemaList"]),
  },
  computed: {
    ...mapState("CinemaModule", ["cinemaListStore"]),
    ...mapState("CityModule", ["cityId", "cityName"]),
  },
  mounted() {
    this.height = document.documentElement.clientHeight - 50 - 46 + "px";

    if (this.cinemaListStore.length === 0) {
      //走vue的异步流程
      this.getCinemaList(this.cityId).then((res) => {
        this.cinemasList = this.cinemaListStore;
        this.$nextTick(() => {
          // $nextTick比生命周期里面的updated还晚
          //new BetterScroll 的时候记得给要操作的列表加上overflow：hidden
          let a = new BetterScroll(".lsx", {
            // 滚动条  需要给所操作列表加上 position: relative;（对文档流不影响）,这样滚动条就完美了，不会滚到外面去
            //mouseWheel: true, //开启鼠标滚轮
            //disableMouse: false, //启用鼠标拖动
            disableTouch: false, //启用手指触摸
            scrollbar: {
              fade: true,
            },
          });
        });
      });
    } else {
      //走缓存
      console.log("缓存");
      // console.log(this.$store.state.cinemaListStore);
      this.cinemasList = this.cinemaListStore;
      this.$nextTick(() => {
        // $nextTick比生命周期里面的updated还晚
        //new BetterScroll 的时候记得给要操作的列表加上overflow：hidden
        let a = new BetterScroll(".lsx", {
          // 滚动条  需要给所操作列表加上 position: relative;（对文档流不影响）,这样滚动条就完美了，不会滚到外面去
          //mouseWheel: true, //开启鼠标滚轮
          //disableMouse: false, //启用鼠标拖动
          disableTouch: false, //启用手指触摸
          scrollbar: {
            fade: true,
          },
        });
      });
    }

    //  //console.log(res.data.data.cinemas);
    //  this.cinemasList = res.data.data.cinemas;
    //     this.$nextTick(() => {

    //         // $nextTick比生命周期里面的updated还晚
    //         //new BetterScroll 的时候记得给要操作的列表加上overflow：hidden
    //         let a = new BetterScroll(".lsx", {
    //             // 滚动条  需要给所操作列表加上 position: relative;（对文档流不影响）,这样滚动条就完美了，不会滚到外面去
    //             //mouseWheel: true, //开启鼠标滚轮
    //             //disableMouse: false, //启用鼠标拖动
    //             disableTouch: false, //启用手指触摸
    //             scrollbar: {
    //                 fade: true,
    //             }
    //         });
    //     })

    // http({
    //     url: `/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=8453710`,
    //     headers: {
    //         'X-Host': 'mall.film-ticket.cinema.list'
    //     }
    // }).then(res => {
    //     //console.log(res.data.data.cinemas);
    //     this.cinemasList = res.data.data.cinemas;
    //     this.$nextTick(() => {

    //         // $nextTick比生命周期里面的updated还晚
    //         //new BetterScroll 的时候记得给要操作的列表加上overflow：hidden
    //         let a = new BetterScroll(".lsx", {
    //             // 滚动条  需要给所操作列表加上 position: relative;（对文档流不影响）,这样滚动条就完美了，不会滚到外面去
    //             //mouseWheel: true, //开启鼠标滚轮
    //             //disableMouse: false, //启用鼠标拖动
    //             disableTouch: false, //启用手指触摸
    //             scrollbar: {
    //                 fade: true,
    //             }
    //         });
    //     })
    // });
  },
};
</script>
<style scoped>
li {
  padding: 5px;
  margin-top: 15px;
}

.address {
  font-size: 14px;
  color: #797d82;
}

.lsx {
  overflow: hidden;
  position: relative;
}
</style>
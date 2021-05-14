<template>
  <div v-if="filmInfo">
    <detail-header v-top :headerName="filmInfo.name"></detail-header>
    <div
      :style="{ background: 'url(' + filmInfo.poster + ')' }"
      style="width: 100%; height: 230px"
    ></div>
    <h3>{{ filmInfo.name }} --- {{ filmInfo.filmType.name }}</h3>
    <div>{{ filmInfo.category }}</div>
    <div>{{ filmInfo.premiereAt | timeFilter }} 上映</div>
    <p :class="isShow ? 'addheight' : 'synopsis'">{{ filmInfo.synopsis }}</p>
    <div class="icon">
      <i
        :class="isShow ? 'icon-shang-xi' : 'icon-xia-xi'"
        class="iconfont"
        @click="isShow = !isShow"
      ></i>
    </div>

    <!-- 当有两个swiper组件时，会有bug  显示图片不一以及拉动弹回去   这是重复new Swiper的问题,导致swiper初始化多次    解决方法是传入不同的swipername-->
    <h3>演职人员</h3>
    <detail-swiper :perslide="3" swipername="swper-actors">
      <div class="swiper-slide" v-for="(v, i) in filmInfo.actors" :key="i">
        <img :src="v.avatarAddress" alt="" />
        <div class="role">
          <div>{{ v.name }}</div>
          <div>{{ v.role }}</div>
        </div>
      </div>
    </detail-swiper>
    <h3>剧照</h3>
    <detail-swiper :perslide="2.5" swipername="swper-photos">
      <div
        class="swiper-slide"
        v-for="(v, i) in filmInfo.photos"
        :key="i"
        @click="showImage(i)"
      >
        <img :src="v" alt="" style="height: 100px" />
      </div>
    </detail-swiper>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import detailHeader from "./detail/DetailHeader.vue";
import detailSwiper from "./detail/DetailSwiper.vue";
import http from "@/util/http"; //别名@ 是指向src的绝对路径
import Vue from "vue";
import moment from "moment";
import { ImagePreview, Toast } from "vant";
Vue.use(Toast);
Vue.filter("timeFilter", (data) => {
  return moment(data * 1000).format("YYYY-MM-DD");
});
//定义指令  (吸顶)
Vue.directive("top", {
  inserted(el) {
    el.style.display = "none";
    window.onscroll = () => {
      // console.log('当离开本页面时，这个组件确实被销毁，但是这个自定义指令没有销毁!!!!!!!!');
      if (document.body.scrollTop || document.documentElement.scrollTop > 50) {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    };
  },
  unbind() {
    window.onscroll = null;
  },
});
export default {
  name: "detail",
  components: {
    detailSwiper,
    detailHeader,
  },
  methods: {
    showImage(i) {
      ImagePreview({
        images: this.filmInfo.photos,
        startPosition: i,
        loop: false,
        closeable: true,
        maxZoom: 3,
      });
    },

    ...mapMutations("TabbarModule", ["changeTabbarHide", "changeTabbarShow"]),
  },
  data() {
    return {
      // 在 . 的级数很多是，要设为null  null 为假
      //"" 0 NaN  null   undefined   为假其余为真
      //vue会先渲染页面  数据请求是异步的
      filmInfo: null,
      isShow: false,
      isSynopsis: true,
    };
  },
  mounted() {
    // 在每次进入页面的时候，让底部选项卡隐藏，而不是在点击详情的时候隐藏！！！！
    //并且在每次离开该页面的时候  让选项卡显示出来
    this.changeTabbarHide();

    //在请求数据之前显示一个loading
    // Toast.loading({
    //     message: '加载中...',
    //     forbidClick: true,
    // });
    //页面加载完之后，获取id，ajax请求后端接口
    //console.log('获取id', location.hash);
    //console.log(this.$route); //拿到当前路由匹配的对象
    //console.log(this.$route.params.myid); //动态路由跳转

    //console.log(this.$route.query.id); //query方式获取id
    http({
      url: `/gateway?filmId=${this.$route.query.id}&k=3558836`,
      headers: {
        "X-Host": "mall.film-ticket.film.info",
      },
    }).then((res) => {
      //console.log(res.data.data.film);
      this.filmInfo = res.data.data.film;

      //等请求完数据后 关闭Toast
      Toast.clear();
    });
  },
  destroyed() {
    //并且在每次离开该页面的时候  让选项卡显示出来
    this.changeTabbarShow();
  },
};
</script>
<style lang="scss" scoped>
.synopsis {
  height: 40px;
  overflow: hidden;
  transition: all 1s;
}

.addheight {
  height: 200px;
  transition: all 1s;
}

.icon {
  text-align: center;
}

.iconfont {
  font-size: 33px;
}

p {
  padding: 0px 20px 0px 20px;
}

.role {
  text-align: center;
}

.role div:nth-child(2) {
  font-size: 14px;
  color: #797d82;
}
</style>
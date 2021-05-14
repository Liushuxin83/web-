<template>
  <div>
    <film-swiper :key="dataImage.length" :options="{ loop: true }">
      <div class="swiper-slide" v-for="(v, i) in dataImage" :key="i">
        <img :src="v" />
      </div>
      <template #pagination>
        <div class="swiper-pagination"></div>
      </template>
    </film-swiper>
    <!-- 只有在vue中 组件上可以写class，style  会自动传到组件的根结点上 -->
    <film-header
      style="position: sticky; top: 0px; background: white; z-index: 2"
    ></film-header>

    <!-- 嵌套路由,在组件中使用路由 -->
    <router-view></router-view>
  </div>
</template>
<script>
import filmSwiper from "./flim/FilmSwiper.vue";
import filmHeader from "./flim/FilmHeader.vue";
export default {
  components: {
    filmHeader,
    filmSwiper,
  },
  data() {
    return {
      dataImage: [
        "https://pic.maizuo.com/usr/movie/1d4384f9b23cabf433b5d582c445da0a.jpg?x-oss-process=image/quality,Q_70",
        "https://pic.maizuo.com/usr/movie/87f9ae5176ee801641cb5e666500d3ff.jpg?x-oss-process=image/quality,Q_70",
        "https://pic.maizuo.com/usr/movie/365e7ed1cece12034c533ac01d30842c.jpg?x-oss-process=image/quality,Q_70",
      ],
      pathlsx: "",
      scrollTop: 0,
    };
  },
  created() {
    console.log("组件创建");
  },
  destroyed() {
    console.log("组件销毁");
  },
  activated() {
    this.$router.push(this.pathlsx);
    document.documentElement.scrollTop = this.scrollTop;
  },

  beforeRouteLeave(to, from, next) {
    // console.log(this.$route.path);
    // console.log(window.pageYOffset);
    console.log(document.documentElement.scrollTop);
    this.scrollTop = document.documentElement.scrollTop;
    this.pathlsx = this.$route.path;
    next();
  },
};
</script>
<style scoped>
li {
  list-style: none;
  float: left;
  margin: 0 200px 0 0;
}
</style>
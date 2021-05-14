<template>
	<div class="swiper-container lsx" :class="swipername">
		<div class="swiper-wrapper">
				<slot></slot>
		</div>
</div>
</template>
<script>
    import Swiper from 'swiper/bundle'
    import 'swiper/swiper-bundle.min.css'
    export default {
        props: {
            options: {
                type: Object
            },
            perslide: {
                type: Number,
                default: 1
            },
            swipername: {
                type: String,
                default: 'swiper-container'
            }
        },
        mounted() {
            console.log(this.swipername);
            const baseOptions = {
                // direction: 'vertical', // 垂直切换选项
                loop: false, // 循环模式选项
                slidesPerView: this.perslide,
                spaceBetween: 10, //调图片之间的空隙
                freeMode: true,
            }
            var mySwiper = new Swiper('.' + this.swipername, Object.assign(baseOptions, this.options));
        },
    }
</script>
<style scoped>
    .lsx img {
        width: 100%;
    }
</style>
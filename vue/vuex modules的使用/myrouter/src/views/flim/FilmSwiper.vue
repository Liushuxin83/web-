<template>
	<div class="swiper-container lsx">
		<div class="swiper-wrapper">
				<slot></slot>
		</div>
		<!-- 如果需要分页器 -->
		<slot name="pagination"></slot>

		<!-- 如果需要导航按钮 -->
		<slot name="arrow"></slot>

		<!-- 如果需要滚动条 -->
		<!-- <div class="swiper-scrollbar"></div> -->
</div>
</template>
<script>
    import Swiper from 'swiper/bundle'
    import 'swiper/swiper-bundle.min.css'
    export default {
        props: ['options'],
        mounted() {
            const baseOptions = {
                // direction: 'vertical', // 垂直切换选项
                loop: false, // 循环模式选项

                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },

                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                // 如果需要滚动条
                scrollbar: {
                    el: '.swiper-scrollbar',
                },


                //自动轮播
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
            }
            var mySwiper = new Swiper('.swiper-container', Object.assign(baseOptions, this.options));
            //鼠标覆盖停止自动切换
            mySwiper.el.onmouseover = function() {
                mySwiper.autoplay.stop();
            }

            //鼠标离开开始自动切换
            mySwiper.el.onmouseout = function() {
                mySwiper.autoplay.start();
            }
        },
    }
</script>
<style scoped>
    .lsx {
        width: 100%;
        height: 230px;
    }
    
    .lsx img {
        width: 100%;
        height: 230px;
    }
</style>
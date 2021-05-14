<template>
	<div>
		center
	</div>
</template>
<script>
    export default {
        //局部路由拦截
        beforeRouteEnter(to, from, next) {
            if (!localStorage.getItem("token")) {
                next('/login');
            } else {
                next();
            }
        }
        // mounted() {
        //     //检查是否有token，如果没有就重定向到login
        //     // if (!localStorage.getItem("token")) {
        //     //     this.$router.push('/login');
        //     // }


        //     //路由拦截,导航守卫

        // },
    }
</script>
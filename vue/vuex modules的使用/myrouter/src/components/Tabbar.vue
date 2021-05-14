<template>
	<div>
		<nav>
		<ul>
			<!-- <li>电影</li>
			<li>影院</li>
			<li>我的</li> -->

			<!-- 声明式导航 -->
		<router-link to="/film" tag="li" active-class="active">
			<i class="iconfont icon-dianying"></i>
			<span>电影</span>
		</router-link>
		<router-link to="/cinema" tag="li" active-class="active">	
			<i class="iconfont icon-dianying1"></i>
			<span>影院</span></router-link>
		<router-link to="/center" tag="li" active-class="active">	
			<i class="iconfont icon-wode"></i>
			<span>我的</span></router-link>
		</ul>
	</nav>
	</div>
</template>
<script>
    export default {}
</script>
<style lang="scss" scoped>
    nav {
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 50px;
        line-height: 25px;
        text-align: center;
        background: white;
        z-index: 99;
    }
    
    ul {
        display: flex;
    }
    
    ul li {
        flex: 1;
        list-style: none;
        display: flex;
        flex-direction: column;
    }
    
    i {
        font-size: 18px;
    }
    
    .icon-dianying1 {
        font-size: 23px;
    }
    
    .active {
        color: red;
    }
</style>
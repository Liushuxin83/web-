<template>
	<div>
		<ul>
			<!-- <li>正在热映</li>
			<li>即将上映</li> -->
			<router-link to="/film/nowplaying" tag="li" active-class="active">正在热映</router-link>
			<router-link to="/film/comingsoon" tag="li" active-class="active">即将上映</router-link>
		</ul>
	</div>
</template>
<style scoped>
    ul {
        display: flex;
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
    
    ul li {
        flex: 1;
    }
    
    .active {
        color: red;
        border-bottom: 3px solid red;
    }
</style>
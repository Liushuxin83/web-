<template>
	<div>
		{{headerName}}
	</div>
</template>
<script>
    export default {
        props: ['headerName'],
    }
</script>
<style scoped>
    div {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: white;
    }
</style>
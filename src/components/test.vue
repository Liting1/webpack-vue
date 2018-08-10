<template>
<div class="box">
	<h1>这是文章标题</h1>
	<p>这是文章内容的主体。。。{{txt}}</p>
</div>
</template>

<script>
export default {
	data () {
		return {
			txt: 'vue.js'
		}
	}
}
</script>

<style>
	p {
		color: red;
	}
</style>
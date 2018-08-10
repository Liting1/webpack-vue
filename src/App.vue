<template>
<div id="app">
	<h3>welcome to vue-webpack-cli</h3>
	<div class="img-box">
		<img src="./assets/img/logo.png">
	</div>
	<v-test></v-test>
	<div>
		<el-button type="success" @click="fun">确定</el-button>
		<el-button type="drange">取消</el-button>
	</div>
</div>
</template>

<script>
import test from './components/test.vue'

export default {
	data () {
		return {}
	},
	methods: {
		fun () {
			console.log('ok')
		}
	},
	components: {
		'v-test': test
	}
}
</script>

<style lang="stylus" scoped>
#app
	.img-box
		width: 200px
		img
			width: 100%
</style>

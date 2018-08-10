import App from './App.vue';
import Vue from 'vue';
import './assets/css/reset.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

const path = require('path');

Vue.use(ElementUI);

new Vue({
	el: '#app',
	components: { App },
	template: '<App/>'
})

console.table(path)
console.log(path.resolve(__dirname, '/api/modules.html'))

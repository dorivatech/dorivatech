import Vue from 'vue'

Vue.mixin({
	methods: {
		// 获取当前时间
		getNowTime() {
			return new Date().getTime()
		}
	}
});
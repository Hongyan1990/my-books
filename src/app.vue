<template>
	<div class="my-box">
		<el-container :style="{height: localHeight + 'px'}">
		  <el-header style="padding: 0px;height:55px;">
		  	<order-header></order-header>
		  </el-header>
		  <el-container>
		    <el-aside width="200px" style="background-color: #545c64;overflow-y: auto;overflow-x: hidden;" :style="{maxHeight: localHeight-55 + 'px'}">
		    	<new-menu></new-menu>
		    </el-aside>
		    <el-main  style="overflow-y: auto;overflow-x: hidden;" :style="{maxHeight: localHeight-55 + 'px'}">
		    	<router-view></router-view>
		    </el-main>
		  </el-container>
		</el-container>	
	</div>
</template>

<script>
	import cookie from './util/cookie.js'
	import OrderHeader from './views/OrderHeader.vue'
	import NewMenu from './views/NewMenu.vue'
	export default {
		name: 'app',
		components: {
			OrderHeader,
			NewMenu
		},
		data () {
			return {
			}
		},
		computed: {
			showHeader () {
				return cookie.getCookie('username')
			},
			localHeight () {
				return window.innerHeight;
			}
		}
	}
</script>

<style >
	.content {
		background: #f2f6fc;
	}
	.main {
		width: 90%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    margin-top: 20px;
    overflow: auto;
    background-color: #fff;
	}
</style>
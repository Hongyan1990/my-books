<template>
	<div>
		<el-row>
		  <el-col :span="24">
		  	<h5 style="padding-bottom: 15px;">系统还原</h5>
		  </el-col>
		</el-row>
		<el-form label-position="left"  label-width="150px">
		  <el-form-item label="备份数据文件路径">		  	
		    <el-input  type="textarea"></el-input> 
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary">打开</el-button>
		    <el-button>确定</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>
<script>
	import imgUrl from '../static/no-data2.png'
	export default {
		name: 'books-info',
		data () {
			return {
				imgUrl,
				bookInfoData: []
			}
		}
	}
</script>
<style scoped>
	.demo-form-inline {
		text-align: center;
	}
</style>
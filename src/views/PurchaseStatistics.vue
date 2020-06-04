<template>
	<div>
		<el-row>
		  <el-col :span="24">
		  	<h5 style="padding-bottom: 15px;">采购统计</h5>
		  </el-col>
		</el-row>
		<el-form :inline="true" class="demo-form-inline" style="text-align: center;">
		  <el-form-item label="查询条件">
		    <el-select  placeholder="请选择活动区域">
		      <el-option label="区域一" value="shanghai"></el-option>
		      <el-option label="区域二" value="beijing"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="查询内容">
		    <el-input placeholder="输入查询内容"></el-input>
		  </el-form-item>
		</el-form>
		<el-row>
		  <el-col :span="24" style="text-align: center;">
		  	<el-button>重置</el-button>
 	 			<el-button type="primary">查询</el-button>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24" style="text-align: center; padding-top: 10px;">
		  	<ve-line :data="chartData" ref="chart"></ve-line>
		  </el-col>
		</el-row>
	</div>
</template>
<script>
	import imgUrl from '../static/no-data2.png'
	export default {
		name: 'books-info',
		data () {
			return {
				imgUrl,
				chartData: {
          columns: ['图书名称', '销售额'],
          rows: [
            { '图书名称': '数学之美', '销售额': 1393},
            { '图书名称': 'JavaScript高级编程', '销售额': 3530},
            { '图书名称': '算法', '销售额': 2923},
            { '图书名称': '深入react', '销售额': 1723},
            { '图书名称': '深入vue', '销售额': 3792 },
            { '图书名称': 'es6', '销售额': 4593}
          ]
        }
			}
		}
	}
</script>
<style scoped>
	.demo-form-inline {
		text-align: center;
	}
</style>
<template>
	<div>
		<el-row>
		  <el-col :span="24">
		  	<h5 style="padding-bottom: 15px;">图书入库</h5>
		  </el-col>
		</el-row>
		<el-form :inline="true" label-width="90px" class="demo-form-inline" style="text-align: left;">
		  <el-form-item label="图书编号">
		    <el-input placeholder="图书编号"></el-input>
		  </el-form-item>
		  <el-form-item label="图书名称">
		    <el-input placeholder="图书名称"></el-input>
		  </el-form-item>
		  <el-form-item label="入库数量">
		    <el-input placeholder="入库数量"></el-input>
		  </el-form-item>
		  <el-form-item label="仓库名称">
		    <el-input placeholder="仓库名称"></el-input>
		  </el-form-item>
		  <el-form-item label="仓库数量">
		    <el-input placeholder="仓库数量"></el-input>
		  </el-form-item>
		  <el-form-item label="入库日期">
		    <el-date-picker
		      v-model="value1"
		      type="date"
		      placeholder="选择日期">
		    </el-date-picker>
		  </el-form-item>
		  <el-form-item label="备注">
		    <el-input placeholder="备注"></el-input>
		  </el-form-item>
		</el-form>
		<el-row>
		  <el-col :span="24" style="text-align: center;">
		  	<el-button>重置</el-button>
 	 			<el-button type="primary">保存</el-button>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'purchase-books',
		data() {
			return {
				value1: ''
			}
		}
	}
</script>
<template>
	<div>
		<el-row>
		  <el-col :span="24">
		  	<h5 style="padding-bottom: 15px;">采购图书</h5>
		  </el-col>
		</el-row>
		<el-form :inline="true" label-width="90px" class="demo-form-inline" style="text-align: center;">
		  <el-form-item label="进货编号">
		    <el-input placeholder="进货编号"></el-input>
		  </el-form-item>
		  <el-form-item label="图书名称">
		    <el-input placeholder="图书名称"></el-input>
		  </el-form-item>
		  <el-form-item label="供应商名称">
		    <el-input placeholder="供应商名称"></el-input>
		  </el-form-item>
		  <el-form-item label="进货数量">
		    <el-input placeholder="进货数量"></el-input>
		  </el-form-item>
		  <el-form-item label="进货单价">
		    <el-input placeholder="进货单价"></el-input>
		  </el-form-item>
		  <el-form-item label="销售单价">
		    <el-input placeholder="销售单价"></el-input>
		  </el-form-item>
		  <el-form-item label="进货日期">
		    <el-date-picker
		      v-model="value1"
		      type="date"
		      placeholder="选择日期">
		    </el-date-picker>
		  </el-form-item>
		  <el-form-item label="进货员工">
		    <el-input placeholder="进货员工"></el-input>
		  </el-form-item>
		  <el-form-item label="所属仓库">
		    <el-input placeholder="所属仓库"></el-input>
		  </el-form-item>
		  <el-form-item label="应付金额">
		    <el-input placeholder="应付金额"></el-input>
		  </el-form-item>
		  <el-form-item label="实付金额">
		    <el-input placeholder="实付金额"></el-input>
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

			}
		}
	}
</script>
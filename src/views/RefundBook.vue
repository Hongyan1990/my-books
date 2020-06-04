<template>
	<div>
		<el-row>
		  <el-col :span="24">
		  	<h5 style="padding-bottom: 15px;">书目信息</h5>
		  </el-col>
		</el-row>
		<el-form :inline="true" label-width="90px" class="demo-form-inline" style="text-align: left;">
		  <el-form-item label="退货编号">
		    <el-input placeholder="退货编号"></el-input>
		  </el-form-item>
		  <el-form-item label="销售编号">
		    <el-input placeholder="销售编号"></el-input>
		  </el-form-item>
		  <el-form-item label="图书名称">
		    <el-input placeholder="图书名称"></el-input>
		  </el-form-item>
		  <el-form-item label="销售日期">
		    <el-date-picker
		      v-model="value1"
		      type="date"
		      placeholder="选择日期">
		    </el-date-picker>
		  </el-form-item>
		  <el-form-item label="销售数量">
		    <el-input placeholder="销售数量"></el-input>
		  </el-form-item>
		  <el-form-item label="销售单价">
		    <el-input placeholder="销售单价"></el-input>
		  </el-form-item>
		  <el-form-item label="退货数量">
		    <el-input placeholder="退货数量"></el-input>
		  </el-form-item>
		  
		  <el-form-item label="退货单价">
		    <el-input placeholder="退货单价"></el-input>
		  </el-form-item>
		  <el-form-item label="应付金额">
		    <el-input placeholder="应付金额"></el-input>
		  </el-form-item>
		  
		  <el-form-item label="实付金额">
		    <el-input placeholder="实付金额"></el-input>
		  </el-form-item>
		  <el-form-item label="退货原因">
		    <el-input placeholder="退货原因"></el-input>
		  </el-form-item>
		  <el-form-item label="员工">
		    <el-input placeholder="员工"></el-input>
		  </el-form-item>
		  <el-form-item label="退货时间">
		    <el-date-picker
		      v-model="value1"
		      type="date"
		      placeholder="选择日期">
		    </el-date-picker>
		  </el-form-item>
		</el-form>
		<el-row>
		  <el-col :span="24" style="text-align: center;padding-bottom: 15px;">
		  	<el-button>重置</el-button>
 	 			<el-button type="primary">保存</el-button>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24" style="text-align: center; padding-top: 10px;">
		  	<el-table
			    :data="bookInfoData"
			    max-height="500px"
          stripe
			    style="width: 100%">
			    <template slot="empty">
              <img :src="imgUrl" style="width: 200px; margin-top: 20px;"/>
              <p style="margin: 0; line-height: 30px">暂无数据</p>
          </template>
			    <el-table-column
			      label="退货编号">
			      <template slot-scope="scope">
			        <span style="margin-left: 10px">{{ scope.row.rowKey }}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="销售编号">
			      <template slot-scope="scope">
			        <span>{{scope.row.shopname}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="图书名称">
			      <template slot-scope="scope">
			        <span>{{scope.row.food_name}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="退货单价">
			      <template slot-scope="scope">
			        <span>{{scope.row.address}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="退货数量">
			      <template slot-scope="scope">
			        <span>{{scope.row.open_time}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column label="操作" width="150">
			      <template slot-scope="scope">
					<el-button
			          size="mini"
			          
			          type="primary" plain>修改</el-button>
			          <el-button
			          size="mini"
			          type="danger" plain>删除</el-button>
			      </template>
			    </el-table-column>
			  </el-table>
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
				bookInfoData: [{rowKey: '01'}]
			}
		}
	}
</script>
<style scoped>
	.demo-form-inline {
		text-align: center;
	}
</style>
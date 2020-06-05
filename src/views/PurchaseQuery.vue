<template>
	<div>
		<el-row>
		  <el-col :span="24">
		  	<h5 style="padding-bottom: 15px;">采购查询</h5>
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
		  	<el-table
			    :data="bookInfoData"
			    v-loading="loading"
			    max-height="500px"
          stripe
			    style="width: 100%">
			    <template slot="empty">
              <img :src="imgUrl" style="width: 200px; margin-top: 20px;"/>
              <p style="margin: 0; line-height: 30px">暂无数据</p>
          </template>
			    <el-table-column
			      label="图书编号">
			      <template slot-scope="scope">
			        <span style="margin-left: 10px">{{ scope.row.a }}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="图书名">
			      <template slot-scope="scope">
			        <span>{{scope.row.b}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="供应商">
			      <template slot-scope="scope">
			        <span>{{scope.row.c}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="仓库名称">
			      <template slot-scope="scope">
			        <span>{{scope.row.d}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="数量">
			      <template slot-scope="scope">
			        <span>{{scope.row.e}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="进货单价">
			      <template slot-scope="scope">
			        <span>{{scope.row.f}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="销售单价">
			      <template slot-scope="scope">
			        <span>{{scope.row.g}}</span>
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
				bookInfoData: [
					{a: 'TP-01267956', b: 'JavaScript高级指南', c: '新华书店', d: '南部仓库', e: '89', f: '50.00', g: '80.00'},
					{a: 'TP-01267956', b: '数学之美', c: '新华书店', d: '南部仓库', e: '89', f: '50.00', g: '80.00'},
					{a: 'TP-01267956', b: '算法', c: '新华书店', d: '南部仓库', e: '89', f: '50.00', g: '80.00'},
					{a: 'TP-01267956', b: '深入react', c: '新华书店', d: '南部仓库', e: '89', f: '50.00', g: '80.00'},
				]
			}
		}
	}
</script>
<style scoped>
	.demo-form-inline {
		text-align: center;
	}
</style>
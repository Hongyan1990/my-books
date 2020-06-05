<template>
	<div>
		<el-row>
		  <el-col :span="24">
		  	<h5 style="padding-bottom: 15px;">库存预警设置</h5>
		  </el-col>
		</el-row>
  	<el-row>
  		<el-col :span="4">
  			<el-button 
  				type="primary" 
  				icon="el-icon-plus"
  				size="small"
  				:disabled="multipleSelection.length===0"
  				@click="dialogFormVisible=true">设置预警</el-button>
  		</el-col>
  	</el-row>
  	<el-table
	    :data="tableData"
	    v-loading="loading"
	    max-height="500px"
    	stripe
    	@selection-change="handleSelectionChange"
	    style="width: 100%">
	    <template slot="empty">
              <img :src="imgUrl" style="width: 200px; margin-top: 20px;"/>
              <p style="margin: 0; line-height: 30px">暂无数据</p>
          </template>
      <el-table-column
					      type="selection"
					      width="55">
					    </el-table-column>
	    <el-table-column
	      label="图书编号">
	      <template slot-scope="scope">
	        <span style="margin-left: 10px">{{ scope.row.a }}</span>
	      </template>
	    </el-table-column>
	    <el-table-column
	      label="图书名称">
	      <template slot-scope="scope">
	        <span>{{scope.row.b}}</span>
	      </template>
	    </el-table-column>
	    <el-table-column
	      label="仓库名称">
	      <template slot-scope="scope">
	        <span>{{scope.row.c}}</span>
	      </template>
	    </el-table-column>
	    <el-table-column
	      label="库存数量">
	      <template slot-scope="scope">
	        <span>{{scope.row.d}}</span>
	      </template>
	    </el-table-column>
	    <el-table-column
	      label="警报数量">
	      <template slot-scope="scope">
	        <span>{{scope.row.e}}</span>
	      </template>
	    </el-table-column>
	  </el-table>
		<set-alarm-value
			:isShowDialog="dialogFormVisible"
			@closeCreateMenuDialog="closeCreateMenuDialog">
		</set-alarm-value>
	</div>
</template>
<script>
	import SetAlarmValue from './SetAlarmValue.vue'
	import EditMenu from './EditMenu.vue'
	import cookie from '../util/cookie.js'
	import {getAllMenus, deleteMenu} from '../model/client-model.js'
	import imgUrl from '../static/no-data2.png'
	export default {
		name: 'adminorder',
		components: {
			SetAlarmValue, EditMenu
		},
		beforeRouteEnter (to, from, next) {
		    const username = cookie.getCookie('username')
		    if(username === 'admin' && from.path === '/user') {
		    	next('/login')
		    } else {
		    	next()
		    }
		},
		data () {
			return {
				tableData: [
					{a: 'SP-300520199', b: '数据库', c: '', d: '20', e: '5'}
				],
				loading: false,
			    dialogFormVisible: false,
			    editDialogFormVisible:false,
			    rowData: {},
			    uploadData: {
			    	directory: '\/user'
			    },
			    imgUrl,
			    multipleSelection: []
			}
		},
		methods: {
			handleSelectionChange (val) {
				this.multipleSelection = val
			},
			handleEdit(i, data) {
				this.rowData = Object.assign({}, data);
				this.editDialogFormVisible = true;
			},
			handleAvatarSuccess() {
				this.$message({
		          message: '上传成功',
		          type: 'success'
		        });
			},
			handleDelete(i, data) {
				deleteMenu(data.rowKey)
					.then(res => {
						this.$message({
				          message: '删除成功',
				          type: 'success'
				        });
				        this.getMenus();
					})
					.catch(err => {
						this.$message.error('删除失败');
					})
			},
			getMenus () {
				getAllMenus('shop')
					.then(data => {
						this.tableData = data.data;
						this.loading = false;
					})
					.catch(err => {
						this.loading = false;
					})
			},
			closeCreateMenuDialog (flag) {
				if(flag === 'add') {
					this.getMenus()
				}
				this.dialogFormVisible = false
			},
			closeEditMenuDialog (flag) {
				if(flag === 'modify') {this.getMenus()}
				this.editDialogFormVisible = false
			}
		},
		mounted () {
			this.getMenus();
		}
	}
</script>
<style>
	.upload-demo {
		display: inline-block;
		margin-right: 10px;
	}
</style>
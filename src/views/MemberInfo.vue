<template>
	<div>
		<el-row>
		  <el-col :span="24">
		  	<h5>会员信息</h5>
		  </el-col>
		</el-row>
		<el-form :inline="true" class="demo-form-inline" style="text-align: center;">
		  <el-form-item label="编号">
		    <el-input placeholder="编号"></el-input>
		  </el-form-item>
		  <el-form-item label="会员姓名">
		    <el-input placeholder="会员姓名"></el-input>
		  </el-form-item>
		</el-form>
		<el-row>
		  <el-col :span="24" style="text-align: center;">
		  	<el-button>重置</el-button>
 	 			<el-button type="primary">查询</el-button>
		  </el-col>
		</el-row>
		<el-main>
			<section>
				<el-button type="primary" size="small" @click="dialogFormVisible=true">添加</el-button>
			</section>
		  	<el-table
			    :data="recommendData"
			    v-loading="loading"
			    max-height="500px"
	  			stripe
			    style="width: 100%">
			    <template slot="empty">
	                <img :src="imgUrl" style="width: 200px; margin-top: 20px;"/>
	                <p style="margin: 0; line-height: 30px">暂无数据</p>
	    		</template>
			    <el-table-column
			      label="编号">
			      <template slot-scope="scope">
			        <span style="margin-left: 10px">{{ scope.row.id }}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="姓名">
			      <template slot-scope="scope">
			        <span>{{scope.row.p_name}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="性别">
			      <template slot-scope="scope">
			        <span>{{scope.row.sex}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="联系电话">
			      <template slot-scope="scope">
			        <span>{{scope.row.phone}}</span>
			      </template>
			    </el-table-column>
			    
			    <el-table-column label="操作" width="150">
			      <template slot-scope="scope">
					<el-button
			          size="mini"
			           @click="dialogFormVisible=true"
			          type="primary" plain>修改</el-button>
			          <el-button
			          size="mini"
			          type="danger" plain>删除</el-button>
			      </template>
			    </el-table-column>
			  </el-table>
		  </el-main>
		 <add-member
			:isShowDialog="dialogFormVisible"
			@closeCreateMenuDialog="closeCreateMenuDialog">
		</add-member>
	</div>
</template>
<script>
	import {getAllMenus, addOrder} from '../model/client-model.js'
	import AddMember from './AddMember.vue'
	import EditMenu from './EditMenu.vue'
	import imgUrl from '../static/no-data2.png'
	export default {
		name: 'provider-info',
		components: {
			AddMember, EditMenu
		},
		data () {
			return {
				loading: false,
				activeName: 'first',
				hotTableData: [],
				tableData: [],
        multipleSelection: [],
        recommendData: [{
        	id: '01',
        	p_name: '王强',
        	sex: '男',
        	phone: '13689901355'
        },{
        	id: '02',
        	p_name: '张志光',
        	sex: '男',
        	phone: '13689901355'
        },{
        	id: '03',
        	p_name: '刘美丽',
        	sex: '女',
        	phone: '13689901355'
        },{
        	id: '04',
        	p_name: '赵振',
        	sex: '男',
        	phone: '13689901355'
        },],
        imgUrl,
        dialogFormVisible: false,
        editDialogFormVisible: false
			}
		},
		methods: {
			handleSelectionChange (val) {
				this.multipleSelection = val
				// console.log(this.multipleSelection)

			},
			handleClick(tab, event) {
				if(this.activeName === 'first') {
					this.getMyMenus('recommend');
				} else if(this.activeName === 'second') {
        	this.getMyMenus('food');
        } else {
        	this.getMyMenus('shop');
        }
		  },
		  closeCreateMenuDialog (flag) {
				this.dialogFormVisible = false
			},
			closeEditMenuDialog (flag) {
				this.editDialogFormVisible = false
			},
			async addMyOrder () {
				
				// const len = this.multipleSelection.length;
				// const selects = this.multipleSelection;
				for(let data of this.multipleSelection) {
					const jsonData = Object.assign({}, data, {id: data.rowKey})
					delete jsonData.rowKey
					try {
						await addOrder(jsonData)
					} catch (err) {
						this.$message.error('新增订单失败');
					}
				}
				this.$message({
		          message: '新增订单成功',
		          type: 'success'
		        });
		        this.getMyMenus('shop');
				// addOrder(this.multipleSelection)
				// 	.then(res => {
				// 		this.$message({
				//           message: '新增订单成功',
				//           type: 'success'
				//         });
				//         this.getMenus();
				// 	})
				// 	.catch(err => {
				// 		this.$message.error('新增订单失败');
				// 	})
			},
			getMyMenus (table) {
				getAllMenus(table)
					.then(data => {
						this.loading = false;
						if(table === 'food') {
							this.hotTableData = data.data;
						} else if(table === 'recommend') {
							this.recommendData = data.data;
						} else {
							this.tableData = data.data;
						}
					})
					.catch(err => {
						this.loading = false;
					})
			}
		},
		mounted () {
			this.getMyMenus('food');
		}
	}
</script>
<style>
</style>
<template>
	<div>
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
			      label="供应商名称">
			      <template slot-scope="scope">
			        <span>{{scope.row.p_name}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="负责人姓名">
			      <template slot-scope="scope">
			        <span>{{scope.row.name}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="联系电话">
			      <template slot-scope="scope">
			        <span>{{scope.row.phone}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="地址">
			      <template slot-scope="scope">
			        <span>{{scope.row.address}}</span>
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
		  </el-main>
		 <add-menu 
			:isShowDialog="dialogFormVisible"
			@closeCreateMenuDialog="closeCreateMenuDialog">
		</add-menu>
	</div>
</template>
<script>
	import {getAllMenus, addOrder} from '../model/client-model.js'
	import AddMenu from './AddMenu.vue'
	import EditMenu from './EditMenu.vue'
	import imgUrl from '../static/no-data2.png'
	export default {
		name: 'provider-info',
		components: {
			AddMenu, EditMenu
		},
		data () {
			return {
				loading: false,
				activeName: 'first',
				hotTableData: [],
				tableData: [],
        multipleSelection: [],
        recommendData: [{
        	id: '1234',
        	p_name: '新华书店'
        }],
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
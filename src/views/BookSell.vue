<template>
	<div>
		<el-row>
		  <el-col :span="24">
		  	<h5 style="padding-bottom: 15px;">图书销售</h5>
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
			      label="出版社">
			      <template slot-scope="scope">
			        <span>{{scope.row.c}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="销售数量">
			      <template slot-scope="scope">
			        <span>{{scope.row.d}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="单价">
			      <template slot-scope="scope">
			        <span>{{scope.row.e}}</span>
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
		 <booksell-info 
			:isShowDialog="dialogFormVisible"
			@closeCreateMenuDialog="closeCreateMenuDialog">
		</booksell-info>
	</div>
</template>
<script>
	import {getAllMenus, addOrder} from '../model/client-model.js'
	import BooksellInfo from './BooksellInfo.vue'
	import EditMenu from './EditMenu.vue'
	import imgUrl from '../static/no-data2.png'
	export default {
		name: 'provider-info',
		components: {
			BooksellInfo, EditMenu
		},
		data () {
			return {
				loading: false,
				activeName: 'first',
				hotTableData: [],
				tableData: [],
        multipleSelection: [],
        recommendData: [{a: 'TP-01267956', b: 'JavaScript高级指南', c: '新华书店', d: '南部仓库', e: '89', f: '50.00', g: '80.00'},
					{a: 'TP-01267956', b: '数学之美', c: '新华书店', d: '南部仓库', e: '89', f: '50.00', g: '80.00'},
					{a: 'TP-01267956', b: '算法', c: '新华书店', d: '南部仓库', e: '89', f: '50.00', g: '80.00'},
					{a: 'TP-01267956', b: '深入react', c: '新华书店', d: '南部仓库', e: '89', f: '50.00', g: '80.00'},],
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
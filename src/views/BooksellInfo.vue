<template>
	<div>
		<el-dialog  :close-on-click-modal="false" title="图书销售信息" :visible.sync="dialogVisibale">
	      <el-form  label-width="90px"  :inline="true" :model="rowData"  class="demo-form-inline">
			    <el-form-item label="销售编号">
			      <el-input v-model="rowData.shopname" autocomplete="off"></el-input>
			    </el-form-item>
			    <el-form-item label="图书名称">
			      <el-input v-model="rowData.address" autocomplete="off"></el-input>
			    </el-form-item>
			    <el-form-item label="时间">
			      <el-input v-model="rowData.phone" autocomplete="off"></el-input>
			    </el-form-item>
			    <el-form-item label="销售单价">
			      <el-input v-model="rowData.open_time" autocomplete="off"></el-input>
			    </el-form-item>
			    <el-form-item label="销售数量">
			      <el-input v-model="rowData.delivery_time" autocomplete="off"></el-input>
			    </el-form-item>
			    <el-form-item label="员工">
			      <el-input v-model="rowData.scores" autocomplete="off"></el-input>
			    </el-form-item>
			    <el-form-item label="应付金额">
			      <el-input v-model="rowData.open_time" autocomplete="off"></el-input>
			    </el-form-item>
			    <el-form-item label="实付金额">
			      <el-input v-model="rowData.delivery_time" autocomplete="off"></el-input>
			    </el-form-item>
			    <el-form-item label="备注">
			      <el-input v-model="rowData.scores" autocomplete="off"></el-input>
			    </el-form-item>
			  </el-form>
	      <div slot="footer" class="dialog-footer">
	        <el-button @click="closeAddMenuDialog">取 消</el-button>
	        <el-button type="primary" @click="addMyMenu" :disabled="validateErr">确 定</el-button>
	      </div>
	    </el-dialog>
	</div>
</template>

<script>
	import {addMenu} from '../model/client-model.js'
	export default {
		name: 'addmenu',
		props: {
	      isShowDialog: {
	        type: Boolean,
	        default: false
	      }
	    },
		data () {
			return {
				textarea: '',
				formLabelWidth: '100px',
				validateErr: false,
				validateMsg: '',
				rowData: {}
			}
		},
		computed: {
	      dialogVisibale: {
	        get () {
	          return this.isShowDialog
	        },
	        set () {
	          this.$emit('closeCreateMenuDialog')
	        }
	      },

	    },
	    methods: {
	    	closeAddMenuDialog () {
	    		this.$emit('closeCreateMenuDialog')
	    	},
	    	addMyMenu () {
	    		const jsonData = Object.assign({}, this.rowData, {id: Math.floor(Math.random () * 900) + 100 + ''}) 
	    		addMenu(jsonData)
	    			.then(res => {
	    				this.$message({
				          message: '新增菜单成功',
				          type: 'success'
				        });
				        this.$emit('closeCreateMenuDialog', 'add')
	    			})
	    			.catch(err => {
	    				this.$message.error('新增菜单失败');
	    			})
	    	}
	    }
	}

</script>
<style>
  .err-tip {
    color: red;
    margin-bottom: 10px;
    display: inline-block;
  }
</style>
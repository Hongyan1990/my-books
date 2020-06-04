<template>
	<div>
		<el-dialog  :close-on-click-modal="false" title="会员管理" :visible.sync="dialogVisibale">
	      <el-form  label-width="90px"  :inline="true" :model="rowData"  class="demo-form-inline">
			    <el-form-item label="会员姓名">
			      <el-input v-model="rowData.shopname" autocomplete="off"></el-input>
			    </el-form-item>
			    <el-form-item label="出生日期">
			      <el-input v-model="rowData.address" autocomplete="off"></el-input>
			    </el-form-item>
			    <el-form-item label="性别">
			      <el-input v-model="rowData.phone" autocomplete="off"></el-input>
			    </el-form-item>
			    <el-form-item label="联系电话">
			      <el-input v-model="rowData.open_time" autocomplete="off"></el-input>
			    </el-form-item>
			    <el-form-item label="积分">
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
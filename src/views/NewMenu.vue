<template>
	<div>
		<el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :router="true"
			background-color="#545c64"
      text-color="#fff"
      >
      <el-submenu index="1" v-if="auth==='0'||auth==='3'">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>基础信息管理</span>
        </template>
        <el-menu-item index="1-1" route="/bookinfo" v-if="auth==='0'">书目信息</el-menu-item>
        <el-menu-item index="1-2" route="/providerinfo" v-if="auth==='0'">供应商信息</el-menu-item>
        <el-menu-item index="1-3" route="/memeber" v-if="auth==='0'||auth==='3'">会员信息</el-menu-item>
      </el-submenu>
      <el-submenu index="2" v-if="auth==='0'||auth==='1'||auth==='2'">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>采购管理</span>
        </template>
        <el-menu-item index="2-1" route="/pb" v-if="auth==='0'||auth==='1'">采购图书</el-menu-item>
        <el-menu-item index="2-2"  route="/pq" v-if="auth==='0'||auth==='1'||auth==='2'">采购查询</el-menu-item>
        <el-menu-item index="2-3" route="/ps" v-if="auth==='0'||auth==='1'">采购统计</el-menu-item>
      </el-submenu>
      <el-submenu index="3" v-if="auth==='0'||auth==='3'">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>销售管理</span>
        </template>
        <el-menu-item index="3-1" route="/rb">退书处理</el-menu-item>
        <el-menu-item index="3-2" route="/booksell">图书销售</el-menu-item>
        <el-menu-item index="3-3" route="/booksellquery">销售查询</el-menu-item>
        <el-menu-item index="3-4" route="/bss">销售统计</el-menu-item>
      </el-submenu>
      <el-submenu index="4" v-if="auth==='0'||auth==='1'||auth==='2'||auth==='3'">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>库存管理</span>
        </template>
        <el-menu-item index="4-1" route="/bis"  v-if="auth==='0'||auth==='2'">
        图书入库</el-menu-item>
        <el-menu-item index="4-2" route="/bos" v-if="auth==='0'||auth==='2'">图书出库</el-menu-item>
        <el-menu-item index="4-3" route="/sa" v-if="auth==='0'||auth==='2'">库存预警设置</el-menu-item>
        <el-menu-item index="4-4" route="/sq" v-if="auth==='0'||auth==='1'||auth==='2'||auth==='3'">库存查询</el-menu-item>
      </el-submenu>
      <el-submenu index="5" v-if="auth==='0'">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item index="5-1" route="/sb" >系统备份</el-menu-item>
        <el-menu-item index="5-2" route="/sr" >系统还原</el-menu-item>
        <el-menu-item index="5-3" route="/em">员工信息管理</el-menu-item>
      </el-submenu>
    </el-menu>
	</div>
</template>

<script>
	export default {
		name: 'new-menu',
		data () {
			return {}
		},
		methods: {
			handleOpen() {},
			handleClose() {}
		},
    computed: {
      auth() {
        return this.$store.state.auth
      }
    }
	}
</script>
<style scoped>
  .el-menu-vertical-demo {
    border-right: none;
  }
</style>
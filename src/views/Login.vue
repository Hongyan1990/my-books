<template> 
  <div class="login-bg">
    <h1>外文图书采购系统</h1>
    <form class="login" @submit="login">
      <h2>
        <span>Login</span>
        <span class="error-msg" v-show="errMsg">{{errMsg}}</span>
      </h2>
      <div style="text-align: center;">
        <el-select style="padding-left: 0px;" class="login-input" size="small"  placeholder="请选择活动区域" v-model="auth">
          <el-option label="管理员" value="0"></el-option>
          <el-option label="采购员" value="1"></el-option>
          <el-option label="库管员" value="2"></el-option>
          <el-option label="销售员" value="3"></el-option>
        </el-select>
        <input  type="text" class="login-input" v-model="username" placeholder="User Name">
        <input  type="password" class="login-input" v-model="password" placeholder="Password" autocomplete="new-password">
      </div>
      
      <!--<button type="submit" class="login-btn">登 录</button>-->
      <el-button type="primary" native-type="submit" size="small" style="width: 30%; margin: 20px auto;">登 录</el-button>
    </form>

  </div>
</template>

<script>
import cookie from '../util/cookie.js'
export default {
  name: 'Login',
  metaInfo: {
    title: 'Login vue'
  },
  data () {
    return {
      errMsg: '',
      username: '',
      password: '',
      auth: '0'
    }
  },
  methods: {
    login (e) {
    	e.preventDefault()
    	if(this.validteForm()) {
	       cookie.setCookie('username', this.username, 1)
         cookie.setCookie('auth', this.auth, 1)
        if(this.auth === '0') {
          this.$router.push('/bookinfo')
        } else if(this.auth === '1') {
          this.$router.push('/pb')
        } else if(this.auth === '2') {
          this.$router.push('/pq')
        } else {
          this.$router.push('/sq')
        }
			  
    	}
    },
    validteForm () {
      if (!this.username) {
        this.errMsg = '用户名不能为空'
        return false
      }
      if (!this.password) {
        this.errMsg = '密码不能为空'
        return false
      }
      if (this.username === 'admin' && this.password !== 'admin') {
      	this.errMsg = '密码不正确'
      	return false
      }
      if (this.username !== 'admin' && this.password !== '123456') {
      	this.errMsg = '密码不正确'
      	return false
      }
      this.errMsg = ''
      return true
    }
  }
}
</script>

<style scoped>
.login {
  width: 400px;
  height: 280px;
  background-color: rgba(204, 204, 204, 0.7);
  margin: 30px auto 0;
  display: flex;
  flex-direction: column;

}
  .login h2 {
    font-weight: normal;
    padding: 10px;
    margin: 0px;
  }
  .login h2 {
    color: #fff;
  }
  .login-input {
    margin: 10px auto;
    line-height: 30px;
    padding-left: 5px;
    width: 90%;
    border-radius: 2px;
    border: none;
  }
  .login-btn {
    width: 30%;
    line-height: 30px;
    margin: 20px auto;
    background-color: #5e99d5e8;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  .error-msg {
    font-size: 16px;
    color: red;
  }
  .login-bg {
    background-image: url("../static/login-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
  }
  .login-bg h1 {
    color: #fff;
    font-family: fantasy;
  }
</style>

<template>
    <header>
        <!--<h1 :class="$style.myTitle">积分商城</h1>-->
      <div class="my-header">
        <div class="logo"><span class="logo-icon"></span>外文图书采购系统</div>
        <div class="user-info"><span >{{userName}}</span>员工，您好，今天是<span>{{nowDate}}</span><span class="login-out" @click="loginOut">退出</span></div>
      </div>
    </header>
</template>

<script>
  import cookie from '../util/cookie.js'
  import moment from 'moment'
  export default {
    name: 'order-header',
    data() {
      return {
        
      }
    },
    computed: {
      userName() {
        return this.$store.state.username
      },
      nowDate() {
        return moment().format('YYYY-MM-DD')
      }
    },
    methods: {
      loginOut () {
        cookie.delCookie('username')
        this.$router.replace('/login')
      }
    }
  }
</script>

<style  scoped>
  .logo-icon {
    width: 40px;
    height: 40px;
    display: inline-block;
    margin-right: 5px;
    background: url("../static/books.png") center no-repeat;
    background-size: contain;
  }
  .my-header {
    background-color: #545c64;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding: 5px 10px;
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2), 0px 3px 10px 0px rgba(0, 0, 0, 0.19);
  }
  .logo {
    align-items: center;
    display: flex;
    font-family: fantasy;
    font-weight: 777;
  }
  .login-out {
    display: inline-block;
    font-size: 14px;
    margin:0 10px;
    cursor: pointer;
    font-weight: 777;
  }
  .user-info {
    font-size: 14px;
  }
</style>

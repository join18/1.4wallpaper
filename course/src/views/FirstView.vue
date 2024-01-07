<template>
  <div id="my">
    <div id="header" @click="blockFun">
      <div v-if="type == 0">
      <img src="" alt="">
      <p></p>
      </div>
      <div v-else>
      <div v-for="(item,index) in data" :key="index" id="databox">
        <img :src="item.img" alt="">
      <p>{{ item.name }}</p>
      </div>
      
      </div>
    </div>
    <div id="function">
      <ul>
        <li>
          <img src="../../public/收藏.png" alt="">
          <span>我的收藏</span>
          <span id="si">></span>
        </li>
        <li>
          <img src="../../public/关于.png" alt="">
          <span>关于我们</span>
          <span id="si">></span>
        </li>
        <li>
          <img src="../../public/设置.png" alt="">
          <span>设置</span>
          <span id="si">></span>
        </li>
      </ul>
    </div>
    <div id="buttombox">
      <ul>
        <li>
          <nav>
            <router-link to="/">
              <img src="../../public/主页.png" alt="" />
              <p>精选</p>
            </router-link>
          </nav>
        </li>
        <li>
          <nav>
            <router-link to="/about">
              <img src="../../public/搜索.png" alt="" />
              <p>搜索</p>
            </router-link>
          </nav>
        </li>
        <li>
          <nav>
            <router-link to="/first">
              <img src="../../public/我的.png" alt="" />
              <p>我的</p>
            </router-link>
          </nav>
        </li>
      </ul>
    </div>
    <div id="myModal" class="modal"  :class="status==1?'a':''" >
      <div class="modal-content">
        <h3>登录</h3><br>
        账号：<input type="text" v-model="user"><br><br>
        密码：<input type="text" v-model="pwd">
        <button @click="hiddenFun">确认登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
data(){
  return{
     type:0,
     status:0,
     user:"",
     pwd:"",
     data:[]
  }
},
methods:{
  blockFun(){
    this.status = 1
  },
  hiddenFun(){
    this.status = 0
    this.type = 1
    axios.post("http://localhost:8080/data/api/login",{
      params:{
       user:this.user,
       pwd:this.pwd,
      }
    }).then(
      response => {
        this.data = response.data.data
        console.log(this.data);
      },
      error => {
        console.log("请求失败", error.message);
      }
    )
    console.log(this.user,this.pwd);
  }
}
}
</script>

<style  scoped>
#databox{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.a{
  display: block !important;
}
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: #fff;
  padding: 20px;
  width: 70%;
  margin: 150px auto;
  height: 150px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.close-btn {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
}

.modal-content button {
  margin-top: 15px;
  margin-left: 10px;
  width: 100px;
  height: 30px;
  background-color: #3498db;
  color: #fff;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: black;
}

#box {
  width: 100%;
  height: 100%;
}

#header {
  width: 94%;
  height: 100px;
  padding-left: 20px;
  margin-top: 70px;
  display: flex;
  align-items: center
}

#header img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

#header p {
  font-weight: 600;
  margin-left: 15px;
}

#function {
  width: 94%;
  height: 160px;
  padding-left: 20px;
  margin-top: 20px;
}

#function ul {
  display: flex;
  flex-direction: column;
}

#function li {
  height: 50px;
  line-height: 50px;
}

#function li img {
  width: 25px;
  height: 25px;
  float: left;
  margin: 13px 20px 0 0;
}

#si {
  float: right;
  margin-right: 20px;
}

#buttombox {
  width: 100%;
  height: 40px;
  background-color: white;
  position: fixed;
  bottom: 5px;
}

#buttombox li img {
  width: 20px;
  height: 20px;
}

#buttombox li {
  text-align: center;
  font-size: 12px;
  margin-top: 2px;
}

#buttombox ul {
  display: flex;
  justify-content: space-around;
}

a {
  color: #000;
  text-decoration: none;
}
</style>
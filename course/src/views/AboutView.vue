<template>
  <div>
    <div id="header">
      <div id="logo" @click="clFun">
        <img src="../../public/分享.png" alt="" />
        <p>分享</p>
      </div>
      <div id="inp">
        <img src="../../public/搜素.png" alt="" />
        <input type="text" placeholder="搜索壁纸" />
      </div>
    </div>
    <div id="title">
      <h3>热门标签</h3>
    </div>
    <div id="lilist">
      <ul>
        <li v-for="(item,index) in datalistOne" :key="index">
          <p id="text">{{ item.title }}</p>
          <img :src="item.img" alt="">
        </li>
      </ul>
    </div>
    <div id="title">
      <h3>热门分类</h3>
    </div>
    <div id="lilistTwo">
      <ul>
        <li v-for="(item,index) in datalist" :key="index">
          <p>{{ item.title }}</p>
          <img :src="item.img" alt="">
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
          <img src="../../public/搜索.png" alt="" />
          <p>搜索</p>
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
  </div>
</template>

<script>
import axios from "axios"
export default {
   data(){
     return{
       datalist:[],
       datalistOne:[],
     }
   },
   mounted() {
    axios.get("http://localhost:8080/data/api/listThree").then(
      response => {
        this.datalistOne = response.data.data;
      },
      error => {
        console.log("请求失败", error.message);
      }
    )
    axios.get("http://localhost:8080/data/api/listFour").then(
      response => {
        this.datalist = response.data.data;
      },
      error => {
        console.log("请求失败", error.message);
      }
    )
   },
   methods:{
    clFun(){
      alert("分享成功")
    }
   }
  
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

ul,
li {
  list-style: none;
}

#header {
  width: 100%;
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-end;
}

#logo img {
  width: 25px;
  height: 25px;
}

#logo p {
  font-size: 12px;
}

#inp {
  width: 220px;
  height: 35px;
  background-color: rgb(242, 242, 242);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  border-radius: 10px;
  margin-top: 5px;
}

#inp img {
  width: 20px;
  height: 20px;
}

#inp input {
  height: 25px;
  width: 100px;
  border: none;
  background-color: rgb(242, 242, 242);
  margin-left: 5px;
  margin-top: 3px;
  font-size: 15px;
}

#inp input:focus,
textarea:focus,
select:focus {
  outline: none;
}

#title {
  margin: 20px;
}

#lilist {
  width: 100%;
  height: 80px;
}

#lilist img {
  width: 100%;
  height: 80px;
  border-radius: 5px;
}

#text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 19px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}


#lilist ul {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

#lilist li {
  width: 32%;
  height: 80px;
 
  position: relative;
  text-align: center;
}

#lilistTwo ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

#lilistTwo li {
  width: 47%;
  height: 80px;
  margin-bottom: 10px;
  position: relative;
  text-align: center;
}
#lilistTwo img{
  width: 100%;
  height: 80px;
  border-radius: 5px;
}
#lilistTwo {
  width: 100%;
}
#lilistTwo  p{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
#buttombox {
  width: 100%;
  height: 40px;
  background-color: white;
  position: fixed;
  bottom: 0px;
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
}</style>

<template>
  <div class="hello">
    <div id="title">
      <p>高清壁纸精选</p>
    </div>
    <div id="header" @click="clFun">
      <div id="logo" >
        <img src="../../public/分享.png" alt="" />
        <p>分享</p>
      </div>
      <div id="inp">
        <img src="../../public/搜素.png" alt="" />
        <input type="text" placeholder="搜索壁纸" />
      </div>
    </div>
    <div id="carouselimg">
      <div class="block">
        <el-carousel height="200px">
          <el-carousel-item v-for="(item, index) in img" :key="index">
            <img :src="item.img" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- <CaroUsel></CaroUsel> -->
    </div>
    <div id="logolist">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <img :src="item.img" alt="" />
          <p>{{ item.wz }}</p>
        </li>
      </ul>
    </div>
    <div id="newbox">
      <img src="../../public/1.png" alt="" />
      <div id="carouselimgTwo">
        <el-carousel height="20px" direction="vertical" id="carouselimgThree">
          <el-carousel-item v-for="(item, index) in data" :key="index">
            <span>{{ item.title }}</span>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div id="titleTwo">
      <h4>热门专辑</h4>
      <p>更多></p>
    </div>
    <div id="imgbox">
      <ul>
        <li v-for="(item, index) in listThree" :key="index">
          <img :src="item.img" alt="" />
        </li>
      </ul>
    </div>
    <div id="titleTwo">
      <h4>圈子动态</h4>
      <p id="p1">活动</p>
    </div>
    <div id="imgboxTwo">
      <img src="https://img2.baidu.com/it/u=3453756792,3979214845&fm=253&fmt=auto&app=138&f=JPEG?w=755&h=500" alt="">
    </div>
    <div id="navlist">
      <ul>
        <li @click="lifun(index)" v-for="(item, index) in lilist" :key="index" :class="index==i ?'an':''">{{ item.title }}</li>
      </ul>
    </div>
    <div id="buttombox">
      <ul>
        <li>
          <img src="../../public/主页.png" alt="" />
          <p>精选</p>
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
    <div id="listbox">
      <ul>
        <li @click="lifun()" v-for="(item, index) in listTwo" :key="index">
          <img :src="item.img" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import CaroUsel from "./CaroUsel.vue"
import axios from "axios"
export default {
  name: "HelloWorld",
  data() {
    return {
      i:0,
      img: [],
      lilist: [
        {
          title: "精选",
          id: 1
        },
        {
          title: "最新",
          id: 2
        },
        {
          title: "主题套图",
          id: 3
        },
        {
          title: "天生一对",
          id: 4
        },
        {
          title: "最佳锁屏",
          id: 5
        },
        {
          title: "一天最热",
          id: 6
        },
        {
          title: "一周排行",
          id: 7
        },
        {
          title: "人气排行",
          id: 8
        },
        {
          title: "上传精选",
          id: 9
        },
      ],
      data: [
        {
          title: "新年好运壁纸，2024接好运!",
        },
        {
          title: "这组壁纸，演我的精神状态!",
        },
        {
          title: "绝美星辰头像~!",
        },
        {
          title: "一些自由感的男生头像~",
        },
        {
          title: "这组壁纸当锁屏，超好看!!",
        },
      ],
      list: [
        {
          img: "https://img2.baidu.com/it/u=235618302,2747885620&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          wz: "聊天背景",
        },
        {
          img: "https://img2.baidu.com/it/u=309030250,3249218102&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          wz: "头像",
        },
        {
          img: "https://img1.baidu.com/it/u=3859189890,3030833859&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          wz: "表情",
        },
        {
          img: "https://img2.baidu.com/it/u=797128434,3616502808&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          wz: "壁纸精选",
        },
      ],
      listTwo: [],
      newlist:[],
      listThree:[
        {
          img:"https://img1.baidu.com/it/u=3893389324,4043822814&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
        },
        {
          img:"https://img1.baidu.com/it/u=2559867097,3726275945&fm=253&fmt=auto&app=138&f=JPEG?w=1333&h=500",
        },
      ]
    };
  },
  mounted() {
    axios.get("http://localhost:8080/data/api/list").then(
      response => {
        this.img = response.data.data;
        console.log(this.img);
      },
      error => {
        console.log("请求失败", error.message);
      }
    )
   this.jiekou()

  },
  methods: {
    lifun(index) {
      if(index == 0){
        this.jiekou()
      }
      this.listTwo = this.newlist.filter(item => item.status == this.lilist[index].id);
      this.i = index
        console.log(this.listTwo);
    },
    clFun(){
      alert("分享成功")
    },
    jiekou(){
      axios.get("http://localhost:8080/data/api/listTwo").then(
      response => {
        this.newlist = response.data.data
        this.listTwo = this.newlist
        console.log(this.listTwo);
      },
      error => {
        console.log("请求失败", error.message);
      }
    )
    }
  },
  props: {
    msg: String,
  },
  components: {
    // CaroUsel,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  padding: 0;
  margin: 0;
}

ul,
li {
  list-style: none;
}
.an{
  color: aqua;
}
#title {
  width: 120px;
  height: 20px;
  text-align: center;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
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

#carouselimg {
  width: 100%;
  height: 200px;
  margin-top: 10px;

}

#carouselimg img {
  width: 100%;
  height: 200px;
}

#logolist {
  width: 100%;
  height: 100px;
  margin-top: 20px;

}

#logolist li {
  margin-top: 15px;
}

#logolist ul {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  text-align: center;
}

#logolist img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

#newbox {
  width: 98%;
  height: 30px;
  background-color: rgb(250, 250, 250);
  margin: 20px auto;
  border-radius: 10px;
  display: flex;
}

#newbox img {
  height: 25px;
  margin-top: 3px;
  border-radius: 10px;
}

#newbox span {
  font-size: 12px;
}

#carouselimgTwo {
  width: 200px;
  height: 20px;
  margin-top: 4px;
  margin-left: 10px;
  border-radius: 10px;
  text-align: center;
  line-height: 16px;
}

#titleTwo {
  width: 100%;
  height: 30px;
  line-height: 30px;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
}

#titleTwo h4 {
  margin-left: 5px;
}

#titleTwo p {
  font-size: 12px;
  color: #ccc;
  margin-right: 5px;
}

#imgbox {
  width: 100%;
  height: 120px;
  margin-top: 10px;
}

#imgbox ul {
  display: flex;
  justify-content: space-between;
}

#imgbox li {
  width: 48%;
  height: 120px;
}
#imgbox li img{
  width: 100%;
  height: 120px;
  border-radius: 5px;
}
#p1 {
  margin-top: 5px;
  margin-right: 0px !important;
  width: 50px;
  height: 23px;
  background-color: rgb(35, 158, 254);
  text-align: center;
  line-height: 23px;
  color: white !important;
  font-weight: bold;
  font-size: 15px;
  border-radius: 11px 0px 0px 11px;
}

#imgboxTwo {
  width: 100%;
  height: 240px;
 
}
#imgboxTwo img{
  width: 100%;
  height: 240px;
  border-radius: 5px;
}
#navlist {
  width: 100%;
  height: 50px;
  margin: 20px 0px;
  background-color: white;
  overflow-x: auto;
  white-space: nowrap;
  position: sticky;
  top: 0px;
}

#navlist ul {
  display: flex;
}

#navlist li {
  margin-left: 20px;
  line-height: 50px;
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
  justify-content: space-around
}

#listbox {
  width: 100%;
}

#listbox ul {
  display: flex;
  justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap
}

#listbox li {
  width: 30%;
  height: 180px;
  margin-bottom: 10px;
}

#listbox li img {
  width: 100%;
  height: 180px;
  border-radius: 5px;
}
a{
  color: #000;
  text-decoration: none;
}
/* .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
 

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;

  } */
  #carouselimgThree{
    border-radius: 10px;
  }
</style>

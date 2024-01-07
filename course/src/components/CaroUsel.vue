<template>
    <div>
        <div class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            <!-- 如果需要导航按钮  -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <div class="swiper-scrollbar"></div>
        </div>
    </div>
</template>

<script>

// 引入js
import Swiper from 'swiper'
// 引入css
import '../../node_modules/swiper/css/swiper.css'
export default {
  name: 'HelloWorld',
  mounted() {
    // var mySwiper = new Swiper('.swiper', {
    //   // direction: "vertical", // 垂直切换选项
    //   loop: true, // 循环模式选项

    //   // 如果需要分页器
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },

    //   // 如果需要前进后退按钮
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },

    //   // 如果需要滚动条
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
    // })
  },
}
</script>


<style scoped>
.swiper {
  overflow: hidden;
}
.swiper-slide {
  text-align: center;
  background-color: aqua;
}
</style>

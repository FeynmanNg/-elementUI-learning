<template>
  <div id="app">
    <p style="text-align: center;">饿了么ui 走马灯卡片类型</p>
    <div class="box">
      <el-carousel
        :interval="1000000"
        height="190px"
        type="card">
        <el-carousel-item
          v-for="item in 7"
          :key="item">
          <div class="origin-item">{{ item }}</div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <p style="text-align: center;">饿了么ui 走马灯卡片类型 修改</p>
    <div class="box">
      <carousel
        :interval="1000000"
        height="190px"
        type="card">
        <carousel-item
          v-for="item in 7"
          :key="item"
          :width="'157px'">
          <div class="item">{{ item }}</div>
        </carousel-item>
      </carousel>
    </div>
  </div>
</template>

<script>
import carousel from './components/carousel';
import carouselItem from './components/carousel-item';
export default {
  name: 'App',
  components: {
    carousel,
    carouselItem,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
.box {
  width: 508px;
  height: 220px;
  margin: 0 auto;
  background-color: pink;
  border: 1px solid #000;
}
.item {
  width: 157px;
  height: 100%;
  background-color: cadetblue;
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 测试用 */
  opacity: .5;
}

.origin-item {
  /* width: 157px; */
  height: 100%;
  background-color: cadetblue;
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 测试用 */
  opacity: .5;
}
</style>

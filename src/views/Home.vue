<script setup>
import {Button,Card,Swipe, SwipeItem, Grid, GridItem  } from "vant";
const imageURL = 'https://img.yzcdn.cn/vant/cat.jpeg';
</script>

<template>
  <div>
    <swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <swipe-item>1</swipe-item>
      <swipe-item>2</swipe-item>
      <swipe-item>3</swipe-item>
      <swipe-item>4</swipe-item>
    </swipe>

    <grid :gutter="10">
      <grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
    </grid>
  <Card v-for = "i in 10"
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      :thumb="imageURL"
  />
  </div>

</template>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
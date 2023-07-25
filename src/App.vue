<script setup>
import { Tabbar, TabbarItem } from 'vant';
import {ref} from 'vue'
// const count = ref(0)
// const handle = () => {
//   console.log('click')
// }
</script>

<template>
  <router-view class = "main"></router-view>
  <tabbar route :fixed="false">
    <tabbar-item icon="home-o" to="/">首页</tabbar-item>
    <tabbar-item icon="search" :to="{name:'List'}" >热卖</tabbar-item>
    <tabbar-item icon="shopping-cart-o" :to="{name:'Cart'}">购物车</tabbar-item>
    <tabbar-item icon="friends-o" :to="{name:'User'}">我的</tabbar-item>
  </tabbar>


</template>

<style >
.main{
  flex:1;
  overflow: auto;
}

</style>

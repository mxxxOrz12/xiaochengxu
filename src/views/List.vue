<script setup>
import {onBeforeRouteUpdate} from "vue-router";
import {extName} from "../utils/tool.js";

const categories = [
  {
    id:1,
    name:'数码产品',
  },
  {
    id:2,
    name:'手办',
  },
  {
    id:3,
    name:'美妆',
  },
  {
    id:4,
    name:'女装',
  }
];

console.log("data init");
onBeforeRouteUpdate((to, from, next) => {
  console.log(to.query);

});
</script>

<template>
  <div>
    <h1>列表</h1>
    <router-link
        v-for="item in categories"
        :key="item.id"
        :to="{name:'List',query:{tid:item.id}}">{{extName(item.name)  }}
    </router-link>
  </div>
</template>

<style scoped>

</style>
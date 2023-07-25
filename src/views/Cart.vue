<script setup>
import {ref,computed} from "vue";
const carts = ref([
  {
  id:1,
  amount:2,
  chk:false,
  product:{
    id:111,
    name:"AirPods Pro",
    price:1299,
  },
},
  {
    id:2,
    amount:3,
    chk:true,
    product:{
      id:112,
      name:"AirPods Pro2",
      price:1599,
    },
  },
  {
    id:3,
    amount:4,
    chk:false,
    product:{
      id:113,
      name:"IPhone 12 Pro Max",
      price:3399,
    },
  }
]);

const chkAll = computed({
  get(){
    return carts.value.every(item => item.chk)
  },
  set(val){
    carts.value.forEach(item => item.chk = val)
  },

});
const SumPrice = computed(() =>
  carts.value.filter(item => item.chk).reduce((total,item) => total + item.amount * item.product.price,0)
);

</script>

<template>
<div class="cart">
  <label><input type="checkbox" v-model="chkAll" >全选</label>
  <hr>
  <ul>
    <li v-for = "item in carts">
      <label><input type = "checkbox" v-model="item.chk">{{item.product.name}}</label>
      <p>价格：{{item.product.price}}</p>
      <p>数量：
        <button @click="item.amount > 0 ? item.amount--: null">-</button>
        {{item.amount}}
        <button @click = "item.amount++">+</button></p>
    </li>
  </ul>
  <p>总价：{{SumPrice}}</p>
</div>
</template>

<style scoped>
li{
  list-style: none;
  border: 1px solid gold;
  padding: 10px;
}
</style>
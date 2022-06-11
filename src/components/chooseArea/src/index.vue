<script setup lang='ts'>
import { computed, ref } from 'vue';
// 所有的省市区数据
import AreaData from '../lib/pca-code.json'
// 下拉框省的值
const province = ref<string>('')
// 下拉框市的值
const city = ref<string>('')
// 下拉框区域的值
const area = ref<string>('')
// 拷贝一份原始值
let areaData = ref(AreaData)
// 对应省份下的城市的数据
let selectCity = computed(() => {
  if (!province.value) return []
  else {
    let cities = areaData.value.find(val => val.code === province.value)!.children
    return cities
  }
})
// 对应城市下的区域的值
let selectArea = computed(() => {
  if (!city.value) return []
  else {
    let areas = selectCity.value.find(val => val.code === city.value)!.children
    return areas
  }
})
console.log(AreaData)
</script>
<template>
  <div>
    <el-select placeholder="请选择省份" v-model="province">
      <el-option v-for="item in areaData" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select :disabled="!province" placeholder="请选择城市" v-model="city">
      <el-option v-for="item in selectCity" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select :disabled="!province || !city" placeholder="请选择区域" v-model="area">
      <el-option v-for="item in selectArea" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
  </div>
</template>
<style>
</style>
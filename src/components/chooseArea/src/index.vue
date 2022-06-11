<script setup lang='ts'>
import { ref } from 'vue';
import AreaData from '../lib/pca-code.json'
const province = ref<string>('')
const city = ref<string>('')
const area = ref<string>('')
let areaData = ref(AreaData)
console.log(AreaData)
</script>
<template>
  <div>
    <el-select placeholder="请选择省份" v-model="province">
      <el-option v-for="item in areaData" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select placeholder="请选择城市" v-model="city">
      <el-option value="2"></el-option>
    </el-select>
    <el-select placeholder="请选择区域" v-model="area">
      <el-option value="3"></el-option>
    </el-select>
  </div>
</template>
<style>
</style>
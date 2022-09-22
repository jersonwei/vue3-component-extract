<script setup lang='ts'>
import { ref, watch } from 'vue';
import StreetData from '../lib/pcas-code.json'
// 数据类型定义
export interface StreeItem {
  name: string
  code: string
  children?: StreeItem[]
}
let province = ref<string>('')
let city = ref<string>('')
let area = ref<string>('')
let street = ref<string>('')
const selectCity = ref<StreeItem[]>([])
// 拷贝一份街道数据
const allData = ref(StreetData)
let emits = defineEmits(['change'])
// 监听省的选择值
watch(() => province.value, val => {
  if (val) {
    let cities = StreetData.find(item => item.code === val)!.children!
    selectCity.value = cities
  }
  city.value = ''
  area.value = ''
  street.value = ''
})
const selectArea = ref<StreeItem[]>([])
// 监听市的选择值
watch(() => city.value, val => {
  if (val) {
    let areas = selectCity.value.find(item => item.code === val)!.children!
    selectArea.value = areas
  }
  area.value = ''
  street.value = ''
})
const selectStreet = ref<StreeItem[]>([])
// 监听区域的选择值
watch(() => area.value, val => {
  if (val) {
    let streets = selectArea.value.find(item => item.code === val)!.children!
    selectStreet.value = streets
  }
})
// 监听街道的选择值 选到最后一层向父组件传递数据
watch(() => street.value, val => {
  let emitProvinceData: StreeItem = {
    code: province.value,
    name: province.value && StreetData.find(item => item.code === province.value)!.name
  }
  let emitCityData: StreeItem = {
    code: city.value,
    name: city.value && selectCity.value.find(item => item.code === city.value)!.name
  }
  let emitAreaData: StreeItem = {
    code: area.value,
    name: area.value && selectArea.value.find(item => item.code === area.value)!.name
  }
  let emitStreetData: StreeItem = {
    code: val,
    name: val && selectStreet.value.find(item => item.code === val)!.name
  }
  if (val) {
    emits('change', {
      province: emitProvinceData,
      city: emitCityData,
      area: emitAreaData,
      street: emitStreetData
    })
  }
})
</script>
<template>
  <div>
    <el-select clearable placeholder="请选择省份" v-model="province">
      <el-option v-for="item in allData" :key="item.code" :label="item.name" :value="item.code"></el-option>
    </el-select>
    <el-select clearable :disabled="!province" placeholder="请选择城市" v-model="city">
      <el-option v-for="item in selectCity" :key="item.code" :label="item.name" :value="item.code"></el-option>
    </el-select>
    <el-select clearable :disabled="!province || !city" placeholder="请选择区域" v-model="area">
      <el-option v-for="item in selectArea" :key="item.code" :label="item.name" :value="item.code">
      </el-option>
    </el-select>
    <el-select clearable :disabled="!province || !city || !area" placeholder="请选择街道" v-model="street">
      <el-option v-for="item in selectStreet" :key="item.code" :label="item.name" :value="item.code"></el-option>
    </el-select>
  </div>
</template>
<style>
</style>
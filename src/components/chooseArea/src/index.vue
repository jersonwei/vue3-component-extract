<script setup lang='ts'>
import { ref, watch } from 'vue';
// 所有的省市区数据
import AreaData from '../lib/pca-code.json'
// 数据类型定义
export interface AreaItem {
  name: string
  code: string
  children?: AreaItem[]
}
// 传递给父组件的数据类型
export interface EmitData {
  name: string
  code: string
}
// 下拉框省的值
const province = ref<string>('')
// 下拉框市的值
const city = ref<string>('')
// 下拉框区域的值
const area = ref<string>('')
// 拷贝一份原始值
let allData = ref(AreaData)
// 对应省份下的城市的数据
let selectCity = ref<AreaItem[]>([])
// 给父组件分发时间
let emits = defineEmits(['change'])
// computed(() => {
//   if (!province.value) return []
//   else {
//     let cities = areaData.value.find(val => val.code === province.value)!.children
//     return cities
//   }
// })
// 监听省份的值
watch(() => province.value, val => {
  if (val) {
    let cities = allData.value.find(val => val.code === province.value)!.children!
    selectCity.value = cities
  }
  city.value = ''
  area.value = ''
})
// 对应城市下的区域的值
let selectArea = ref<AreaItem[]>([])
// computed(() => {
//   if (!city.value) return []
//   else {
//     let areas = selectCity.value.find(val => val.code === city.value)!.children
//     return areas
//   }
// })
// 监听城市下的值
watch(() => city.value, val => {
  if (val) {
    let areas = selectCity.value.find(val => val.code === city.value)!.children!
    selectArea.value = areas
  }
  area.value = ''
})
// 监听区域的值
watch(() => area.value, val => {
  let emitProvinceData: EmitData = {
    name: province.value && AreaData.find(item => item.code === province.value)!.name,
    code: province.value
  }
  let emitCityData: EmitData = {
    name: city.value && selectCity.value.find(item => item.code === city.value)!.name,
    code: city.value
  }
  let emitAreaData: EmitData = {
    name: val && selectArea.value.find(item => item.code === val)!.name,
    code: val
  }
  if (val) {
    emits('change', {
      province: emitProvinceData,
      city: emitCityData,
      area: emitAreaData
    })
  }
})
console.log(AreaData)
</script>
<template>
  <div>
    <el-select clearable placeholder="请选择省份" v-model="province">
      <el-option v-for="item in allData" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select clearable :disabled="!province" placeholder="请选择城市" v-model="city">
      <el-option v-for="item in selectCity" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select clearable :disabled="!province || !city" placeholder="请选择区域" v-model="area">
      <el-option v-for="item in selectArea" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
  </div>
</template>
<style>
</style>
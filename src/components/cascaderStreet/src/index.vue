<script setup lang='ts'>
import { reactive, toRaw, watch } from 'vue'
import cascaderStreet from '../lib/pcas-code.json'
export interface StreetData {
  name: string
  code: string
}
export interface StreetSubData {
  name: string
  code: string
  children?: StreetSubData[]
}
const props = {
  expandTrigger: 'hover',
  label: 'name',
  value: 'code'
}
let provinceData = reactive<StreetData>({
  name: '',
  code: ''
})
let cityData = reactive<StreetData>({
  name: '',
  code: ''
})
let areaData = reactive<StreetData>({
  name: '',
  code: ''
})
let streetData = reactive<StreetData>({
  name: '',
  code: ''
})
let citys = [] as StreetSubData[]
let areas = [] as StreetSubData[]
let streets = [] as StreetSubData[]
let emits = defineEmits(['change'])
let change = (arr: any) => {
  provinceData.code = arr[0]
  cityData.code = arr[1]
  areaData.code = arr[2]
  streetData.code = arr[3]
  emits('change', {
    province: toRaw(provinceData),
    city: toRaw(cityData),
    area: toRaw(areaData),
    street: toRaw(streetData)
  })
}
watch(provinceData, (val) => {
  let province = cascaderStreet.find(item => item.code === val.code)!
  citys = province.children
  provinceData.name = province.name
})
watch(cityData, (val) => {
  let city = citys.find((item: any) => item.code === val.code)!
  areas = city.children!
  cityData.name = city.name
})
watch(areaData, (val) => {
  let area = areas.find(item => item.code === val.code)!
  streets = area.children!
  areaData.name = area.name
})
watch(streetData, (val) => {
  let street = streets.find(item => item.code === val.code)!
  streetData.name = street.name
})
</script>
<template>
  <div>
    <span class="example-demonstration">级联选择器</span>
    <el-cascader placeholder="请选择地区" :options="cascaderStreet" :props="props" @change="change"></el-cascader>
  </div>
</template>
<style lang="scss" scoped>
.example-block {
  margin: 1rem;
}

.example-demonstration {
  margin: 1rem;
}
</style>
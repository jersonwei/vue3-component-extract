<script setup lang='ts'>
// import cascaderStreet from '@/components/cascaderStreet/src/index.vue'
export interface StreetData {
  province: StreetSubData
  city: StreetSubData
  area: StreetSubData
  street: StreetSubData
}
export interface StreetSubData {
  name: string
  code: string
}
const changeData = (val: StreetData) => {
  console.log(val)
}
</script>
<template>
  <div>
    <w-cascader-street @change="changeData"></w-cascader-street>
  </div>
</template>
<style>
</style>
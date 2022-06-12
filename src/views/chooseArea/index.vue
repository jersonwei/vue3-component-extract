<script setup lang='ts'>
// import ChooseArea from "@/components/chooseArea/src/index.vue"
export interface AreaData {
  province: AreaSubItem
  city: AreaSubItem
  area: AreaSubItem
}
export interface AreaSubItem {
  name: string
  code: string
}
let changeArea = (val: AreaSubItem) => {
  console.log(val)
}
</script>
<template>
  <w-choose-area @change="changeArea"></w-choose-area>
</template>
<style>
</style>
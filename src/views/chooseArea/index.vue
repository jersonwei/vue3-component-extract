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
  <choose-area @change="changeArea"></choose-area>
</template>
<style>
</style>
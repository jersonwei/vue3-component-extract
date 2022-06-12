<script setup lang='ts'>
// import ChooseStreet from "@/components/chooseStreet/src/index.vue"
export interface StreeData {
  province: StreeSubItem
  city: StreeSubItem
  area: StreeSubItem
  street: StreeSubItem
}
export interface StreeSubItem {
  name: string
  code: string
}
let changeStreet = (val: StreeData) => {
  console.log(val)
}
</script>
<template>
  <w-choose-street @change="changeStreet"></w-choose-street>
</template>
<style>
</style>
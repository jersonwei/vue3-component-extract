<script setup lang='ts'>
import ChooseArea from "@/components/chooseArea/src/index.vue"
let changeArea = (val: any) => {
  console.log(val)
}
</script>
<template>
  <choose-area @change="changeArea"></choose-area>
</template>
<style>
</style>
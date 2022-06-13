<script setup lang='ts'>
export interface CityItem {
  id: number
  // 名字
  name: string
  // 拼音
  spell: string
}
const cityChange = (val: CityItem) => {
  console.log(val)
}
const provinceChange = (val: string) => {
  console.log(val)
}
</script>
<template>
  <div>
    <w-choose-city @cityChange="cityChange" @provinceChange="provinceChange"></w-choose-city>
  </div>
</template>
<style lang='scss' scoped>
</style>
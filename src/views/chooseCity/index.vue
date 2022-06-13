<script setup lang='ts'>
const cityChange = (val: string) => {
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
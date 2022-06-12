<script setup lang='ts'>
export interface TimeType {
  startTime: string
  endTime: string
}
const startChange = (val: string) => {
  console.log(val)
}
const endChange = ({ startTime, endTime }: TimeType) => {
  console.log(startTime, endTime)
}
</script>
<template>
  <div>
    <w-choose-time @startChange="startChange" @endChange="endChange"></w-choose-time>
  </div>
</template>
<style lang='scss' scoped>
</style>
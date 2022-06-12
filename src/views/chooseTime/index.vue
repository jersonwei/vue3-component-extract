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
const startOptions = {
  size: 'small',
  clearable: false
}
</script>
<template>
  <div>
    <w-choose-time @startChange="startChange" @endChange="endChange" :startOptions="startOptions"></w-choose-time>
  </div>
</template>
<style lang='scss' scoped>
</style>
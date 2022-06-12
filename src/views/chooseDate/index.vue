<script setup lang='ts'>
export interface DateValue {
  startDate: Date | null
  endDate: Date | null
}
const startDateChange = (val: Date | null) => {
  console.log(val?.toLocaleString())
}
const endDateChange = ({ startDate, endDate }: DateValue) => {
  console.log(startDate?.toLocaleString(), endDate?.toLocaleString())
}
const startOptions = {
  size: "small",
  clearable: false
}
const endOptions = {
  size: "small",
  clearable: false
}
</script>
<template>
  <div>
    <w-choose-date :startOptions="startOptions" :endOptions="endOptions" @startDateChange="startDateChange"
      @endDateChange="endDateChange"></w-choose-date>
  </div>
</template>
<style lang='scss' scoped>
</style>
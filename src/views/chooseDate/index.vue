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
</script>
<template>
  <div>
    <w-choose-date @startDateChange="startDateChange" @endDateChange="endDateChange"></w-choose-date>
  </div>
</template>
<style lang='scss' scoped>
</style>
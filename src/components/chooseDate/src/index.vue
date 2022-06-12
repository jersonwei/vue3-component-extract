<script setup lang='ts'>
import { ref, watch } from 'vue';
let props = defineProps({
  // 开始日期占位
  startPlaceholder: {
    type: String,
    default: "请选择开始日期"
  },
  // 结束日期占位
  endPlaceholder: {
    type: String,
    default: '请选择结束日期'
  },
  // 是否禁用今天之前的日期
  Datedisabled: {
    type: Boolean,
    default: true
  }
})
// 开始日期
let startDate = ref<Date | null>(null)
// 结束日期
let endDate = ref<Date | null>(null)
// 结束日期状态
let endDateDisabled = ref<boolean>(true)
// 禁用开始日期状态函数
let startDisabledDate = (time: Date) => {
  if (props.Datedisabled) return time.getTime() < Date.now() - 1000 * 60 * 60 * 24
}
// 禁用结束日期函数
let endDisabledDate = (time: Date) => {
  if (startDate.value) return time.getTime() < startDate.value.getTime() + 1000 * 60 * 60 * 24
}
// 分发事件
let emits = defineEmits(['startDateChange', 'endDateChange'])
// 监听开始日期判断结束日期状态
watch(() => startDate.value, val => {
  endDateDisabled.value = !val
  val && emits('startDateChange', startDate.value)
})
// 监听结束日期
watch(() => endDate.value, val => {
  val && emits('endDateChange', { startDate: startDate.value, endDate: val })
})
</script>
<template>
  <div style="display:flex">
    <div style="margin-right:20px">
      <el-date-picker v-model="startDate" type="date" :placeholder="startPlaceholder"
        :disabledDate="startDisabledDate" />
    </div>
    <div style="margin-right:20px">
      <el-date-picker v-model="endDate" type="date" :placeholder="endPlaceholder" :disabled='endDateDisabled'
        :disabledDate="endDisabledDate" />
    </div>
  </div>
</template>
<style lang='scss' scoped>
</style>
<script setup lang='ts'>
import { ref } from 'vue';
let props = defineProps({
  // 开始时间的占位符
  startPlaceholder: {
    type: String,
    default: '请选择开始时间'
  },
  // 开始时间的初始化选择
  startTimeStart: {
    type: String,
    default: '08:00'
  },
  // 开始时间的步进
  startStep: {
    type: String,
    dafault: '00:30'
  },
  // 开始时间的结束选择
  startTimeEnd: {
    type: String,
    default: '24:00'
  },
  // 结束时间的占位符
  endPlaceholder: {
    type: String,
    default: '请选择结束时间'
  },
  // 结束时间的初始化选择
  endTimeStart: {
    type: String,
    default: '08:00'
  },
  // 结束时间的步进
  endStep: {
    type: String,
    dafault: '00:30'
  },
  // 结束时间的结束选择
  endTimeEnd: {
    type: String,
    default: '24:00'
  }
})
// 开始时间
let startTime = ref<string>('')
// 结束时间
let endTime = ref<string>('')
</script>
<template>
  <div style="display:flex">
    <div style="marginRight:20px">
      <el-time-select v-model="startTime" class="mr-4" :placeholder="startPlaceholder" :start="startTimeStart"
        :step="startStep" :end="startTimeEnd" />
    </div>
    <div>

      <el-time-select v-model="endTime" :min-time="startTime" :placeholder="endPlaceholder" :start="endTimeStart"
        :step="endStep" :end="endTimeEnd" />
    </div>
  </div>
</template>
<style lang='scss' scoped>
</style>
<script setup lang='ts'>
import { onUnmounted, watch, watchEffect } from 'vue';

let props = defineProps<{
  // 弹出框的标题
  title: string,
  // 控制弹出框的显示与隐藏
  visible: boolean
}>()
let emits = defineEmits(['update:visible'])

const handleClick = () => {
  emits('update:visible', !props.visible)
}
// watch(() => props.visible, val => {
//   emits('update:visible', val)
// })
const stop = watchEffect(() => {
  let visible = props.visible as boolean
  emits('update:visible', visible)
})
onUnmounted(() => {
  stop()
})
</script>
<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <el-dialog v-model="visible" :title="title">
    {{ title }}</el-dialog>
</template>
<style>
</style>
<script setup lang='ts'>
import { onUnmounted, ref, watch, watchEffect } from 'vue';

let props = defineProps<{
  // 弹出框的标题
  title: string,
  // 控制弹出框的显示与隐藏
  visible: boolean
}>()
let emits = defineEmits(['update:visible'])
// 拷贝一份visible
let dialogVisible = ref<boolean>(props.visible)
const handleClick = () => {
  emits('update:visible', !dialogVisible.value)
}
const stopVisible = watch(() => props.visible, val => {
  dialogVisible.value = val
})
const stopDialogVisible = watch(() => dialogVisible.value, val => {
  emits('update:visible', val)
})
// watchEffect(() => {
//   let visible = dialogVisible.value
//   emits('update:visible', visible)
// })
onUnmounted(() => {
  stopVisible()
  stopDialogVisible()
})
</script>
<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <el-dialog v-model="dialogVisible" :title="title">
    {{ title }}</el-dialog>
</template>
<style>
</style>
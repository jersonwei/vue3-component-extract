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
// watch(() => dialogVisible, val => {
//   emits('update:dialogVisible', val)
// })
const stop = watchEffect(() => {
  let visible = dialogVisible.value = props.visible
  emits('update:visible', visible)
}, { flush: 'sync' })
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
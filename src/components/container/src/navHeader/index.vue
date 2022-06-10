<script setup lang='ts'>
let props = defineProps<{ collapse: boolean }>()
let emits = defineEmits(['update:collapse'])
const toggleMenu = () => {
  // TODO切换修改父组件的数据
  emits('update:collapse', !props.collapse)
}

</script>
<template>
  <span @click="toggleMenu">
    <el-icon-expand v-if="!collapse" style="margin-right:10px;cursor: pointer"></el-icon-expand>
    <el-icon-fold v-else style="cursor: pointer"></el-icon-fold>
  </span>
</template>
<style>
</style>
<script setup lang='ts'>
const props = defineProps<{ isCollapse: boolean }>()
const toggleMenu = () => {
  // TODO切换修改父组件的数据
}
</script>
<template>
  <span @click="toggleMenu">
    <el-icon-expand v-if="!isCollapse" style="margin-right:10px"></el-icon-expand>
    <el-icon-fold v-else></el-icon-fold>
  </span>
</template>
<style>
</style>
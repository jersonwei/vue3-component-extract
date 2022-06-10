<script setup lang='ts'>
const props = defineProps<{ isCollapse: boolean }>()
</script>
<template>
  <el-menu :collapse="isCollapse" default-active="2" class="el-menu-vertical-demo">
    <el-menu-item index="1">
      <el-icon-menu class="el-icon-menu"></el-icon-menu>
      <span>导航1</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon-menu class="el-icon-menu"></el-icon-menu>
      <span>导航2</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon-menu class="el-icon-menu"></el-icon-menu>
      <span>导航3</span>
    </el-menu-item>
  </el-menu>
</template>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
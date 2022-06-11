<script setup lang='ts'>
const props = defineProps<{ collapse: boolean }>()
</script>
<template>
  <el-menu :collapse="collapse" default-active="2" class="el-menu-vertical-demo">
    <router-link to="/home">
      <el-menu-item index="1">
        <el-icon-menu class="el-icon-menu"></el-icon-menu>
        <span>首页</span>
      </el-menu-item>
    </router-link>
    <router-link to="/chooseIcon">
      <el-menu-item index="2">
        <el-icon-menu class="el-icon-menu"></el-icon-menu>
        <span>图标选择器</span>
      </el-menu-item>
    </router-link>
    <router-link to="/chooseArea">
      <el-menu-item index="3">
        <el-icon-menu class="el-icon-menu"></el-icon-menu>
        <span>省市区选择框</span>
      </el-menu-item>
    </router-link>
    <router-link to="/chooseStreet">
      <el-menu-item index="4">
        <el-icon-menu class="el-icon-menu"></el-icon-menu>
        <span>省市区街选择框</span>
      </el-menu-item>
    </router-link>
    <router-link to="/cascaderStreet">
      <el-menu-item index="5">
        <el-icon-menu class="el-icon-menu"></el-icon-menu>
        <span>省市区街级联选择器</span>
      </el-menu-item>
    </router-link>
    <router-link to="/home">
      <el-menu-item index="1">
        <el-icon-menu class="el-icon-menu"></el-icon-menu>
        <span>趋势标记</span>
      </el-menu-item>
    </router-link>
  </el-menu>
</template>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
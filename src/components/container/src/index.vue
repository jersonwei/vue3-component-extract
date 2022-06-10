<script setup lang='ts'>
import { ref } from 'vue';
let isCollapse = ref<boolean>(false)
const toggleMenu = () => {
  isCollapse.value = !isCollapse.value
}
</script>
<template>
  <el-container>
    <el-aside>
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
    </el-aside>
    <el-container>
      <el-header>
        <span @click="toggleMenu">
          <el-icon-expand v-if="!isCollapse" style="margin-right:10px"></el-icon-expand>
          <el-icon-fold v-else></el-icon-fold>
        </span>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style>
</style>
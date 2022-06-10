<script setup lang='ts'>
import { ref } from 'vue';
let isCollapse = ref(true)
</script>
<template>
  <el-container>
    <el-aside>
      <el-menu :collapse="isCollapse" default-active="2" class="el-menu-vertical-demo">
        <el-menu-item index="1">
          <el-icon-menu></el-icon-menu>
          <span>导航1</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon-menu></el-icon-menu>
          <span>导航2</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon-menu></el-icon-menu>
          <span>导航3</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style>
</style>
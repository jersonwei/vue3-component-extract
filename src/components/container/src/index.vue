<script setup lang='ts'>
import { ref } from 'vue';
import NavHeader from './navHeader/index.vue';
import NavSide from './navSide/index.vue';
let isCollapse = ref<boolean>(false)

</script>
<template>
  <el-container>
    <el-aside width="auto">
      <nav-side :isCollapse="isCollapse"></nav-side>
    </el-aside>
    <el-container>
      <el-header>
        <nav-header :isCollapse="isCollapse"></nav-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="scss" scoped>
</style>
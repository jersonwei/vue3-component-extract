<script setup lang="ts">
defineProps<{ collapse: boolean }>();
let data = [
  {
    icon: 'PriceTag',
    name: '首页',
    index: '/',
  },
  {
    icon: 'Check',
    name: '图标选择器',
    index: '/chooseIcon',
  },
  {
    icon: 'DeleteLocation',
    name: '省市区选择框',
    index: '/chooseArea',
  },
  {
    icon: 'Location',
    name: '省市区街选择框',
    index: '/chooseStreet',
  },
  {
    icon: 'LocationInformation',
    name: '省市区街级联选择器',
    index: '/cascaderStreet',
  },
  {
    icon: 'Sort',
    name: '趋势标记',
    index: '/trend',
  },
  {
    icon: 'Bell',
    name: '提示组件',
    index: '/notification',
  },
  {
    icon: 'Connection',
    name: '菜单组件',
    index: '/menus',
  },
  {
    icon: 'Timer',
    name: '时间选择',
    index: '/chooseTime',
  },
  {
    icon: 'SunRise',
    name: '日期选择',
    index: '/chooseDate',
  },
  {
    icon: 'TurnOff',
    name: '城市选择',
    index: '/chooseCity',
  },
  {
    icon: 'DArrowRight',
    name: '进度条',
    index: '/progress',
  },
  {
    icon: 'ScaleToOriginal',
    name: '日历组件',
    index: '/calendar',
  },
  {
    icon: 'Setting',
    name: '表单组件',
    index: '/form',
  },
  {
    icon: 'ShoppingBag',
    name: '弹出框表单',
    index: '/modelForm',
  },
  {
    icon: 'Pointer',
    name: '表格组件',
    index: '/table',
  },
];
</script>
<template>
  <!-- <el-menu :collapse="collapse" default-active="2" class="el-menu-vertical-demo">
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
    <router-link to="/trend">
      <el-menu-item index="6">
        <el-icon-menu class="el-icon-menu"></el-icon-menu>
        <span>趋势标记</span>
      </el-menu-item>
    </router-link>
    <router-link to="/notification">
      <el-menu-item index="7">
        <el-icon-menu class="el-icon-menu"></el-icon-menu>
        <span>提示组件</span>
      </el-menu-item>
    </router-link>
    <router-link to="/menus">
      <el-menu-item index="8">
        <el-icon-menu class="el-icon-menu"></el-icon-menu>
        <span>菜单组件</span>
      </el-menu-item>
    </router-link>
  </el-menu> -->
  <el-scrollbar max-height="800px">
    <w-menus :collapse="collapse" :data="data" router :defaultActive="$route.path"></w-menus>
  </el-scrollbar>
</template>
<style lang="scss" scoped></style>

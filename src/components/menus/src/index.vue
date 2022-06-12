<script setup lang="ts">
import type { MenuItem } from './types'
import { PropType } from 'vue';
import { toLine } from '../../../utils';
let props = defineProps({
  // 导航菜单数据
  data: {
    type: Array as PropType<MenuItem[]>,
    required: true
  },
  // 默认选中菜单项
  defaultActive: {
    type: String,
    default: '1'
  },
  // 是否是路由模式
  rooter: {
    type: Boolean,
    default: false
  }
})
console.log(props.defaultActive)
</script>
<template>
  <el-menu class=".el-menu-vertical-demo" :default-active="defaultActive" :rooter="rooter" v-bind="$attrs">
    <template v-for="(item, idx) in data">
      <el-menu-item v-if="!item.children || !item.children.length" :index="item.index" :key="idx">
        <component :is="`el-icon-${toLine(item.icon)}`"></component>
        <span>{{ item.name }}</span>
      </el-menu-item>
      <el-sub-menu v-if="item.children && item.children.length" :index="item.index">
        <template #title>
          <component :is="`el-icon-${toLine(item.icon)}`"></component>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item v-for="(sub, subidx) in item.children" :key="subidx" :index="sub.index">
          <component :is="`el-icon-${toLine(sub.icon)}`"></component>
          <span>{{ sub.name }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>
<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

svg {
  margin-right: 5px;
}
</style>
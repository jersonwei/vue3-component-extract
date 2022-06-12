<script setup lang="ts">
// import type { MenuItem } from './types'
import { PropType } from 'vue';
import { toLine } from '../../../utils';
let props = defineProps({
  // 导航菜单数据
  data: {
    type: Array as PropType<any[]>,
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
  },
  // 键名
  // 菜单标题的键名
  name: {
    type: String,
    default: 'name'
  },
  // 菜单标识的键名
  index: {
    type: String,
    default: 'index'
  },
  // 菜单图标的键名
  icon: {
    type: String,
    default: 'icon'
  },
  // 菜单子菜单的键名
  children: {
    type: String,
    default: 'children'
  }
})
console.log(props.defaultActive)
</script>
<template>
  <el-menu class=".el-menu-vertical-demo" :default-active="defaultActive" :rooter="rooter" v-bind="$attrs">
    <template v-for="(item, idx) in data">
      <el-menu-item v-if="!item[children] || !item[children].length" :index="item[index]" :key="idx">
        <component :is="`el-icon-${toLine(item[icon])}`"></component>
        <span>{{ item[name] }}</span>
      </el-menu-item>
      <el-sub-menu v-if="item[children] && item[children].length" :index="item[index]">
        <template #title>
          <component :is="`el-icon-${toLine(item[icon])}`"></component>
          <span>{{ item[name] }}</span>
        </template>
        <el-menu-item v-for="(sub, subidx) in item[children]" :key="subidx" :index="sub[index]">
          <component :is="`el-icon-${toLine(sub[icon])}`"></component>
          <span>{{ sub[name] }}</span>
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
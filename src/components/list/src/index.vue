<script setup lang='ts'>
import { PropType } from 'vue'
import type { ListOptions, ActionOptions } from './type'
let props = defineProps({
  // 当前列表的内容
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true
  },
  // 操作内容
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => []
  }
})
console.log(props.list)
</script>
<template>
  <div class="list-tabs__item">
    <el-tabs>
      <el-tab-pane v-for="(item, index) in list" :key="index" :label="item.title"></el-tab-pane>
    </el-tabs>
  </div>
</template>
<style lang='scss' scoped>
</style>
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
</script>
<template>
  <div>
    list
  </div>
</template>
<style lang='scss' scoped>
</style>
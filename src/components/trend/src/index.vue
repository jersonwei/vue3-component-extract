<script setup lang='ts'>
import { useSlots } from 'vue'
let props = defineProps({
  // 标记当前趋势是上升还是下降
  type: {
    type: String,
    default: 'up'
  },
  // 趋势显示的文字 1.父组件传递 2. 插槽
  text: {
    type: String,
    default: '文字'
  },
  // 上升趋势图标颜色
  upIconColor: {
    type: String,
    default: '#f5222d'
  },
  // 下降趋势图标颜色
  downIconColor: {
    type: String,
    default: '#52c41a'
  },
  // 颜色翻转 只在默认颜色下生效
  reverseColor: {
    type: Boolean,
    default: false
  }
})
let slots = useSlots()
console.log(slots)
</script>
<template>
  <div class="trend">
    <slot v-if="slots.default"></slot>
    <div v-else class="text">
      {{ text }}
    </div>
    <div class="icon">
      <el-icon-arrowup :style="{ color: !reverseColor ? upIconColor : '#52c41a' }" v-if="type === 'up'">
      </el-icon-arrowup>
      <el-icon-arrowdown :style="{ color: !reverseColor ? downIconColor : '#f5222d' }" v-else></el-icon-arrowdown>
    </div>
  </div>
</template>
<style lang='scss' scoped>
.trend {
  display: flex;
  align-items: center;

  .text {
    font-size: 14px;
    margin-right: 4px;
  }

  .icon {
    svg {
      width: 0.8em;
      height: 0.8em;
    }
  }
}
</style>
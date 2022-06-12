<script setup lang='ts'>
import { computed, useSlots } from 'vue'
import { toLine } from '../../../utils';
let props = defineProps({
  // 标记当前趋势是上升还是下降
  type: {
    type: String,
    default: 'up'
  },
  // 上升趋势的图标
  upIcon: {
    type: String,
    defalut: 'ArrowUp'
  },
  // 下降趋势的图标
  downIcon: {
    type: String,
    default: 'ArrowDown'
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
  // 上升趋势文字颜色
  upTextColor: {
    type: String,
    default: 'rgb(0,0,0)'
  },
  // 下降趋势文字颜色
  downTextColor: {
    type: String,
    default: 'rgb(0,0,0)'
  },
  // 颜色翻转 只在默认颜色下生效
  reverseColor: {
    type: Boolean,
    default: false
  },
  // 字体大小
  fontSizes: {
    type: String,
    default: '14px'
  }
})
// 获取插槽内容
let slots = useSlots()
console.log(slots)
// 文字颜色
let textColor = computed(() => {
  return props.type === 'up' ? props.upTextColor : props.downTextColor
})
</script>
<template>
  <div class="trend">
    <div class="text" :style="{ color: textColor }">
      <slot v-if="slots.default"></slot>
      <div v-else :style="{ fontSize: fontSizes }">
        {{ text }}
      </div>
    </div>
    <div class="icon">
      <!-- <el-icon-arrowup :style="{ color: !reverseColor ? upIconColor : '#52c41a' }" v-if="type === 'up'">
      </el-icon-arrowup>
      <el-icon-arrowdown :style="{ color: !reverseColor ? downIconColor : '#f5222d' }" v-else></el-icon-arrowdown> -->
      <component v-if="type === 'up'" :is="`el-icon-${toLine(upIcon)}`"
        :style="{ color: !reverseColor ? upIconColor : '#52c41a' }"></component>
      <component v-else :is="`el-icon-${toLine(downIcon)}`"
        :style="{ color: !reverseColor ? downIconColor : '#f5222d' }"></component>
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
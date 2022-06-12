<script setup lang='ts'>
import { onMounted, ref } from 'vue';

let props = defineProps({
  // 进度条进度
  percentage: {
    type: Number,
    default: 0
  },
  // 进度条是否有动画效果
  isAnimation: {
    type: Boolean,
    default: false
  },
  // 动画时长(毫秒)
  time: {
    type: Number,
    default: 2000
  }
})
let emits = defineEmits(['finishLoad'])
let p = ref(0)
onMounted(() => {
  if (props.isAnimation) {
    // 规定时间内加载完成
    let t = ~~(props.time / props.percentage)
    let timer = setInterval(() => {
      p.value += 1
      if (p.value >= props.percentage) {
        p.value = props.percentage
        clearInterval(timer)
        emits('finishLoad', '完成加载')
      }
    }, t)
  } else {
    p.value = props.percentage
  }
})

</script>
<template>
  <div>
    <el-progress v-bind="$attrs" :percentage="p"></el-progress>
  </div>
</template>
<style lang='scss' scoped>
svg {
  width: 126px;
  height: 126px;
}
</style>
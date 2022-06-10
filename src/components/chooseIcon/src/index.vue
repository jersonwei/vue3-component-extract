<script setup lang='ts'>
import { onUnmounted, ref, watch, watchEffect } from 'vue';
import * as ElePlusIcons from '@element-plus/icons-vue'
import { toLine } from 'src/utils'
import { useCopy } from 'src/hooks/useCopy'
let props = defineProps<{
  // 弹出框的标题
  title: string,
  // 控制弹出框的显示与隐藏
  visible: boolean
}>()
let emits = defineEmits(['update:visible'])
// 拷贝一份visible
let dialogVisible = ref<boolean>(props.visible)
const handleClick = () => {
  emits('update:visible', !dialogVisible.value)
}
const stopVisible = watch(() => props.visible, val => {
  dialogVisible.value = val
})
const stopDialogVisible = watch(() => dialogVisible.value, val => {
  emits('update:visible', val)
})
// watchEffect(() => {
//   let visible = dialogVisible.value
//   emits('update:visible', visible)
// })
const clickItem = (item: string) => {
  let text = `<el-icon-${toLine(item)} />`
  useCopy(text)
}
onUnmounted(() => {
  stopVisible()
  stopDialogVisible()
})

</script>
<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <div class=".m--choose-icon-dialog-body-height">
    <el-dialog v-model="dialogVisible" :title="title">
      <div class="container">
        <div class="item" v-for="(item, index) in Object.keys(ElePlusIcons)" :key="index" @click="clickItem(item)">
          <div class="text">
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div class="icon">{{ item }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .item {
    display: flex;
    width: 25%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70px;
    margin-bottom: 20px;
    cursor: pointer;

    .text {
      font-size: 14px;
    }

    .icon {
      font-size: 14px;
    }
  }
}

svg {
  width: 2em;
  height: 2em;
}
</style>
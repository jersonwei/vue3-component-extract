<script setup lang='ts'>
import { PropType, ref, onMounted, watch } from 'vue'
import type { FormOptions } from './types/types'
import cloneDeep from 'lodash/cloneDeep'
let props = defineProps({
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  }
})
// 派发事件
let emits = defineEmits(['on-preview', 'on-remove', 'on-success', 'on-error'
  , 'on-progress', 'on-change', 'on-exceed', 'before-upload', 'before-remove', 'http-request'])
let model = ref<any>(null)
let rules = ref<any>(null)
// 初始化表单
const initForm = () => {
  if (props.options && props.options.length) {
    let m: any = {}
    let r: any = {}
    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value
      r[item.prop!] = item.rules as any
    })
    model.value = cloneDeep(m)
    rules.value = cloneDeep(r)
  }
}
onMounted(() => {
  initForm()
})
// 监听父组件传递options
watch(() => props.options, () => {
  initForm()
}, { deep: true })
// 上传组件的左右方法
const onPreview = (file: any) => {
  emits('on-preview', file)
}
const onRemove = (file: any, fileList: any) => {
  emits('on-remove', { file, fileList })
}
const onSuccess = (response: any, file: any, fileList: any) => {
  emits('on-success', { response, file, fileList })
}
const onError = (error: any, file: any, fileList: any) => {
  emits('on-error', { error, file, fileList })
}
const onProgress = (event: any, file: any, fileList: any) => {
  emits('on-progress', { event, file, fileList })
}
const onChange = (file: any, fileList: any) => {
  emits('on-change', { file, fileList })
}
const onExceed = (file: any, fileList: any) => {
  emits('on-exceed', { file, fileList })
}
const beforeRemove = (file: any, fileList: any) => {
  emits("before-remove", { file, fileList })
}
const beforeUpload = (file: any) => {
  emits("before-upload", file)
}
const httpRequest = () => {
  emits("http-request")
}

</script>
<template>
  <el-form v-if="model" :validate-on-rule-change="false" :model="model" :rules="rules" v-bind="$attrs">
    <template v-for="(item, index) in options" :key="index">
      <el-form-item v-if="!item.children || !item.children.length" :prop="item.prop" :label="item.label">
        <component v-if="item.type !== 'upload'" v-model="model[item.prop!]" v-bind="item.attrs"
          :is="`el-${item.type}`"></component>
        <el-upload v-bind="item.uploadAttrs" v-else :on-preview="onPreview" :on-remove="onRemove"
          action="https://jsonplaceholder.typicode.com/posts/" :on-success="onSuccess" :on-error="onError"
          :on-progress="onProgress" :on-change="onChange" :before-remove="beforeRemove" :before-upload="beforeUpload"
          :http-request="httpRequest" :on-exceed="onExceed">
          <slot name="uploadArea"></slot>
          <slot name="uploadTip"></slot>
        </el-upload>
      </el-form-item>
      <el-form-item v-if="item.children && item.children.length">
        <component v-model="model[item.prop!]" v-bind="item.attrs" :is="`el-${item.type}`">
          <component v-for="(child, i) in item.children" :key="i" :label="child.label" :value="child.value"
            :is="`el-${child.type}`"></component>
        </component>
      </el-form-item>
    </template>
  </el-form>
</template>
<style lang='scss' scoped>
</style>
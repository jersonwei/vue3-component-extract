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
</script>
<template>
  <el-form v-if="model" :validate-on-rule-change="false" :model="model" :rules="rules" v-bind="$attrs">
    <template v-for="(item, index) in options" :key="index">
      <el-form-item v-if="!item.children || !item.children.length" :prop="item.prop" :label="item.label">
        <component v-model="model[item.prop!]" v-bind="item.attrs" :is="`el-${item.type}`"></component>
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
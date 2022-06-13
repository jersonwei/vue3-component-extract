<script setup lang='ts'>
import { PropType, ref, onMounted } from 'vue'
import type { FormOptions } from './types/types'
import cloneDeep from 'lodash/cloneDeep'
let props = defineProps({
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  }
})
let model = ref<any>({})
let rules = ref<any>({})

onMounted(() => {
  let m: any = {}
  let r: any = {}

  props.options.map((item: FormOptions) => {
    m[item.prop!] = item.value
    r[item.prop!] = item.rules as any
  })
  model.value = cloneDeep(m)
  rules.value = cloneDeep(r)
  console.log(rules.value, model.value)
})
</script>
<template>
  <el-form :validate-on-rule-change="false" :model="model" :rules="rules" v-bind="$attrs">
    <el-form-item :prop="item.prop" v-for="(item, index) in options" :label="item.label" :key="index">
      <component v-model="model[item.prop!]" v-bind="item.attrs" :is="`el-${item.type}`"></component>
    </el-form-item>
  </el-form>
</template>
<style lang='scss' scoped>
</style>
<script setup lang='ts'>
import type { FormOptions } from '../../components/form/src/types/types'
let options: FormOptions[] = [{
  type: 'input',
  value: '',
  label: '用户名',
  prop: 'username',
  rules: [{
    required: true,
    message: '用户名不能为空',
    trigger: 'blur'
  }, {
    max: 6,
    min: 2,
    message: '用户名在2-6为之间',
    trigger: 'blur'
  }],
  attrs: {
    clearable: true
  }
}, {
  type: 'input',
  value: '',
  label: '密码',
  prop: 'password',
  rules: [{
    required: true,
    message: '密码不能为空',
    trigger: 'blur'
  }, {
    max: 15,
    min: 5,
    message: '密码在5-15为之间',
    trigger: 'blur'
  }],
  attrs: {
    showPassword: true,
    clearable: true
  }
}]
</script>
<template>
  <div>
    <w-form label-width="100px" :options="options"></w-form>
  </div>
</template>
<style lang='scss' scoped>
</style>
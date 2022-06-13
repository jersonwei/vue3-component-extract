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
}, {
  type: 'select',
  value: '',
  placeholder: '请选择职位',
  label: '职位',
  prop: 'role',
  rules: [
    {
      required: true,
      message: '职位不能为空',
      trigger: 'blur'
    }
  ],
  children: [
    {
      type: 'option',
      label: '经理',
      value: '1'
    }, {
      type: 'option',
      label: '主管',
      value: '2'
    }, {
      type: 'option',
      label: '员工',
      value: '3'
    }
  ]
}]
</script>
<template>
  <div>
    <w-form label-width="100px" :options="options"></w-form>
  </div>
</template>
<style lang='scss' scoped>
</style>
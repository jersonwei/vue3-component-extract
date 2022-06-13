<script setup lang='ts'>
import type { FormOptions } from '../../components/form/src/types/types'
let options: FormOptions[] = [{
  type: 'input',
  value: 'admin',
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
  value: '123456',
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
  value: '1',
  placeholder: '请选择职位',
  label: '职位',
  prop: 'role',
  attrs: {
    style: {
      backgroundColor: 'red'
    },
  },
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
}, {
  type: 'checkbox-group',
  value: [],
  label: '爱好',
  children: [
    {
      type: 'checkbox',
      label: '足球',
      value: '1'
    }, {
      type: 'checkbox',
      label: '蓝球',
      value: '2'
    }, {
      type: 'checkbox',
      label: '排球',
      value: '3'
    }
  ]
}, {
  type: 'radio-group',
  value: 'gender',
  label: '性别',
  rules: [{
    required: true,
    message: '性别不能为空',
    trigger: 'blur'
  }],
  children: [
    {
      type: 'radio',
      label: '男',
      value: 'male'
    }, {
      type: 'radio',
      label: '女',
      value: 'female'
    }, {
      type: 'radio',
      label: '男',
      value: 'male'
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
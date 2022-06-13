<script setup lang='ts'>
import type { FormOptions } from '../../components/form/src/types/types'
import { ElMessage, ElMessageBox, FormInstance } from 'element-plus'
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
  value: [],
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
}, {
  type: 'upload',
  label: '上传',
  prop: 'pic',
  uploadAttrs: {
    action: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
  }
}]
// 上传组件的所有方法
const onPreview = (files: any) => { console.log(files) }
const onRemove = ({ files, fileList }: any) => { console.log(files, fileList) }
const onSuccess = ({ response, files, fileList }: any) => { console.log(response, files, fileList) }
const onError = ({ error, files, fileList }: any) => { console.log(error, files, fileList) }
const onProgress = ({ event, files, fileList }: any) => { console.log(event, files, fileList) }
const onChange = ({ files, fileList }: any) => {
  console.log(files, fileList)
}
const onExceed = ({ files, fileList }: any) => {
  console.log(files, fileList)
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} filess this time, add up to ${files.length + fileList.length
    } totally`
  )
}
const beforeRemove = ({ files, fileList }: any) => {
  console.log(files, fileList)
  return ElMessageBox.confirm(
    `Cancel the transfert of ${fileList.name} ?`
  ).then(
    () => true,
    () => false
  )
}
const beforeUpload = (files: any) => { console.log(files) }
const httpRequest = () => { }
// 表单操作方法
interface Scope {
  form: FormInstance,
  model: any
}
// 提交
const submitForm = (scope: Scope) => {
  scope.form.validate((valid) => {
    if (valid) {

    } else {
      ElMessage.error('表单验证失败')
    }
  })
}
// 重置
const resetForm = (scope: Scope) => {
  scope.form.resetFields()
}
</script>
<template>
  <div>
    <w-form label-width="100px" :options="options" :on-preview="onPreview" :on-remove="onRemove" :on-success="onSuccess"
      :on-error="onError" :on-progress="onProgress" :on-change="onChange" :before-remove="beforeRemove"
      :before-upload="beforeUpload" :http-request="httpRequest" :on-exceed="onExceed">
      <template #uploadArea>
        <el-button type="primary" size="small">Click to upload</el-button>
      </template>
      <template #uploadTip>
        <div style="color:#ccc;font-size:12px">
          jpg/png files with a size less than 500KB.
        </div>
      </template>
      <template #action="scope">
        <el-button type="primary" @click="submitForm(scope)">Submit</el-button>
        <el-button @click="resetForm(scope)">Reset</el-button>
      </template>
    </w-form>
  </div>
</template>
<style lang='scss' scoped>
</style>
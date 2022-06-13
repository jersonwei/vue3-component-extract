<script setup lang='ts'>
import type { FormOptions } from '../../components/form/src/types/types'
import { ElMessage, ElMessageBox } from 'element-plus'
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
const onPreview = (file: any) => { console.log(file) }
const onRemove = ({ file, fileList }: any) => { console.log(file, fileList) }
const onSuccess = ({ response, file, fileList }: any) => { console.log(response, file, fileList) }
const onError = ({ error, file, fileList }: any) => { console.log(error, file, fileList) }
const onProgress = ({ event, file, fileList }: any) => { console.log(event, file, fileList) }
const onChange = ({ file, fileList }: any) => {
  console.log(file, fileList)
}
const onExceed = ({ file, fileList }: any) => {
  console.log(file, fileList)
  ElMessage.warning(
    `The limit is 3, you selected ${file.length} files this time, add up to ${file.length + fileList.length
    } totally`
  )
}
const beforeRemove = ({ file, fileList }: any) => {
  console.log(file, fileList)
  return ElMessageBox.confirm(
    `Cancel the transfert of ${fileList.name} ?`
  ).then(
    () => true,
    () => false
  )
}
const beforeUpload = (file: any) => { console.log(file) }
const httpRequest = () => { }
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
    </w-form>
  </div>
</template>
<style lang='scss' scoped>
</style>
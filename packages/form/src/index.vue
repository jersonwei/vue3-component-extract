<script setup lang="ts">
import { PropType, ref, onMounted, watch, nextTick } from 'vue';
import { FormOptions, FormInstance } from './types/types';
import E from 'wangeditor';
import cloneDeep from 'lodash/cloneDeep';
let props = defineProps({
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
  httpRequest: {
    type: Function,
    default: () => {},
  },
});
// 派发事件
let emits = defineEmits([
  'on-preview',
  'on-remove',
  'on-success',
  'on-error',
  'on-progress',
  'on-change',
  'on-exceed',
  'before-upload',
  'before-remove',
]);
let model = ref<any>(null);
let rules = ref<any>(null);
let form = ref<FormInstance | null>(null);
let edit = ref();
// 初始化表单
const initForm = () => {
  if (props.options && props.options.length) {
    let m: any = {};
    let r: any = {};
    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value;
      r[item.prop!] = item.rules as any;
      if (item.type === 'editor') {
        nextTick(() => {
          if (document.getElementById('editor')) {
            const editor = new E('#editor');
            editor.config.placeholder = item.placeholder!;
            editor.create();
            editor.txt.html(item.value);
            editor.config.onchange = (newHtml: string) => {
              model.value[item.prop!] = newHtml;
            };
            edit.value = editor;
          }
        });
      }
    });
    model.value = cloneDeep(m);
    rules.value = cloneDeep(r);
  }
};
// 重置表单
let resetFields = () => {
  // 重置ele表单
  form.value!.resetFields();
  // 重置表单编辑器
  if (props.options && props.options.length) {
    let editorItem = props.options.find((item) => item.type === 'editor')!;
    edit.value.txt.html(editorItem.value);
  }
};
let validate = () => {
  return form.value!.validate;
};
let getFormData = () => {
  return model.value;
};
// 分发方法
defineExpose({
  resetFields,
  validate,
  getFormData,
});
onMounted(() => {
  initForm();
});
// 监听父组件传递options
watch(
  () => props.options,
  () => {
    initForm();
  },
  { deep: true },
);
// 上传组件的左右方法
const onPreview = (file: File) => {
  emits('on-preview', file);
};
const onRemove = (file: File, fileList: FileList) => {
  emits('on-remove', { file, fileList });
};
const onSuccess = (response: any, file: File, fileList: FileList) => {
  let uploadItem = props.options.find((item) => {
    return item.type === 'upload';
  });
  model.value[uploadItem!.prop!] = { response, file, fileList };
  console.log(model);
  emits('on-success', { response, file, fileList });
};
const onError = (error: any, file: File, fileList: FileList) => {
  emits('on-error', { error, file, fileList });
};
const onProgress = (event: any, file: File, fileList: FileList) => {
  emits('on-progress', { event, file, fileList });
};
const onChange = (file: File, fileList: FileList) => {
  emits('on-change', { file, fileList });
};
const onExceed = (file: File, fileList: FileList) => {
  emits('on-exceed', { file, fileList });
};
const beforeRemove = (file: File, fileList: FileList) => {
  emits('before-remove', { file, fileList });
};
const beforeUpload = (file: File) => {
  emits('before-upload', file);
};
</script>
<template>
  <el-form ref="form" v-if="model" :validate-on-rule-change="false" :model="model" :rules="rules" v-bind="$attrs">
    <template v-for="(item, index) in options" :key="index">
      <el-form-item v-if="!item.children || !item.children.length" :prop="item.prop" :label="item.label">
        <component
          v-if="item.type !== 'upload'"
          v-model="model[item.prop]"
          v-bind="item.attrs"
          :is="`el-${item.type}`"
        ></component>
        <el-upload
          v-bind="item.uploadAttrs"
          v-if="item.type === 'upload'"
          :on-preview="onPreview"
          :on-remove="onRemove"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-success="onSuccess"
          :on-error="onError"
          :on-progress="onProgress"
          :on-change="onChange"
          :before-remove="beforeRemove"
          :before-upload="beforeUpload"
          :on-exceed="onExceed"
          :http-request="httpRequest"
        >
          <slot name="uploadArea"></slot>
          <slot name="uploadTip"></slot>
        </el-upload>
        <div id="editor" v-if="item.type === 'editor'"></div>
      </el-form-item>
      <el-form-item v-if="item.children && item.children.length" :prop="item.prop" :label="item.label">
        <component v-model="model[item.prop]" v-bind="item.attrs" :is="`el-${item.type}`">
          <component
            v-for="(child, i) in item.children"
            :key="i"
            :label="child.label"
            :value="child.value"
            :is="`el-${child.type}`"
          ></component>
        </component>
      </el-form-item>
    </template>
    <el-form-item>
      <slot name="action" :form="form" :model="model"></slot>
    </el-form-item>
  </el-form>
</template>
<style lang="scss" scoped></style>

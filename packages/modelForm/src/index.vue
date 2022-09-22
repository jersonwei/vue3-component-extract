<script setup lang="ts">
import { FormInstance } from '../../form/src/types/types';
import { ref, watch, PropType } from 'vue';
import { FormOptions } from '../../form/src/types/types';
let props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
  isScroll: {
    type: Boolean,
    default: false,
  },
  // 上传事件
  onPreview: {
    type: Function,
  },
  onRemove: {
    type: Function,
  },
  onSuccess: {
    type: Function,
  },
  onError: {
    type: Function,
  },
  onProgress: {
    type: Function,
  },
  onChange: {
    type: Function,
  },
  beforeRemove: {
    type: Function,
  },
  beforeUpload: {
    type: Function,
  },
  httpRequest: {
    type: Function,
  },
  onExceed: {
    type: Function,
  },
});
let form = ref<FormInstance | null>(null);
let dialogVisible = ref<boolean>(props.visible);
let emits = defineEmits(['update:visible']);
watch(
  () => props.visible,
  (val) => {
    dialogVisible.value = val;
  },
);
watch(
  () => dialogVisible.value,
  (val) => {
    console.log(val);
    emits('update:visible', val);
  },
);
</script>
<template>
  <div :class="{ 'm--choose-icon-dialog-body-height': isScroll }">
    <el-dialog v-bind="$attrs" v-model="dialogVisible">
      <template #default>
        <w-form
          :options="options"
          label-width="100px"
          ref="form"
          @on-preview="onPreview"
          @on-remove="onRemove"
          @on-success="onSuccess"
          @on-error="onError"
          @on-progress="onProgress"
          @on-change="onChange"
          @before-remove="beforeRemove"
          @before-upload="beforeUpload"
          @http-request="httpRequest"
          @on-exceed="onExceed"
        >
          <template #uploadArea>
            <slot name="uploadArea"></slot>
          </template>
          <template #uploadTip>
            <slot name="uploadTip"></slot>
          </template>
        </w-form>
      </template>
      <template #footer>
        <slot name="footer" :form="form"></slot>
      </template>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped></style>

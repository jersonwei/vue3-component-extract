<script setup lang="ts">
import { PropType, computed, ref, onMounted, watch } from 'vue';
import { toLine } from '../../../utils';
import { TableOptions } from './types';
import { cloneDeep } from 'lodash';
let props = defineProps({
  // 表格配置项
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true,
  },
  // 表格数据
  data: {
    type: Array as PropType<any[]>,
    required: true,
  },
  // 加载文案
  elementLoadingTxt: {
    type: String,
  },
  // 加载图标名
  elementLoadingSpinner: {
    type: String,
  },
  // 加载背景颜色
  elementLoadingBgc: {
    type: String,
  },
  // 加载svg
  elementLoadingSVG: {
    type: String,
  },
  // 加载svg容器
  elementLoadingSVGBbox: {
    type: String,
  },
  // 可编辑单元格显示的图标
  editIcon: {
    type: String,
    default: 'edit',
  },
  // 是否可编辑行
  isEditRow: {
    type: Boolean,
    default: false,
  },
  // 编辑行按钮标识
  editRowIdx: {
    type: String,
    default: '',
  },
});
onMounted(() => {
  propTableData.value.map((item) => {
    item.rowEdit = false;
  });
});
watch(
  () => props.data,
  (val) => {
    propTableData.value = cloneDeep(val);
    propTableData.value.map((item) => {
      item.rowEdit = true;
    });
  },
  { deep: true },
);
watch(
  () => props.editRowIdx,
  (val) => {
    if (val) propEditRowIdx.value = val;
  },
);
// 拷贝一份表格的数据
let propTableData = ref<any[]>(cloneDeep(props.data));
// 拷贝一份按钮的标识
let propEditRowIdx = ref<string>(props.editRowIdx);
// 当前点击的单元格
let currentEdit = ref<string>('');
// 过滤操作项的配置
let tableOptions = computed(() => props.options.filter((i) => !i.action));
// 找出操作项的配置
let actionOptions = computed(() => props.options.find((i) => i.action));
// 是否加载中
let isLoading = computed(() => !props.data || !props.data.length);
let clickEdit = (scope: any) => {
  console.log(scope);
  // 唯一的标识
  currentEdit.value = scope.$index + scope.column.id;
};
let checkClick = (scope: any) => {
  currentEdit.value = '';
  emits('check', scope);
  console.log('checkClick');
};
let closeClick = (scope: any) => {
  currentEdit.value = '';
  emits('close', scope);
  console.log('closeClick');
};
let rowClick = (row: any, column: any) => {
  console.log(row, column, actionOptions.value);
  if (column.label === actionOptions.value?.label) {
    console.log(
      '操作项',
      'props.isEditRow',
      props.isEditRow,
      'props.editRowIdx',
      props.editRowIdx,
      'propEditRowIdx.value',
      propEditRowIdx.value,
    );
    // 编辑行的操作
    if (props.isEditRow && propEditRowIdx.value === props.editRowIdx) {
      row.rowEdit = !row.rowEdit;
      // 重置其他数据
      propTableData.value.map((item) => {
        if (item !== row) {
          item.rowEdit = false;
        }
      });
      // 重置标识
      if (!row.rowEdit) {
        emits('update:editRowIdx', '');
      }
    }
    console.log(row.rowEdit, 'row.rowEdit');
  }
};
// 分发事件
let emits = defineEmits(['check', 'close', 'update:editRowIdx']);
</script>
<template>
  <el-table
    :data="propTableData"
    v-loading="isLoading"
    :element-loading-text="elementLoadingTxt"
    :element-loading-spinner="elementLoadingSpinner"
    :element-loading-svg-view-box="elementLoadingSVGBbox"
    :element-loading-background="elementLoadingBgc"
    :element-loading-svg="elementLoadingSVG"
    @row-click="rowClick"
  >
    <template v-for="(item, idx) in tableOptions" :key="idx">
      <!-- <el-table-column
        v-if="!item.slot"
        :label="item.label"
        :prop="item.prop"
        :align="item.align"
        :width="item.width"
      ></el-table-column> -->
      <el-table-column :label="item.label" :prop="item.prop" :align="item.align" :width="item.width">
        <template #default="scope">
          <!-- 没有编辑行的操作 -->
          <!-- <template v-if="scope.$index + scope.column.id === currentEdit">
            <div style="display:flex">
              <el-input size="small" v-model="scope.row[item.prop]"></el-input>
              <div>
                <slot name="editCell" v-if="$slots.editCell" :scope="scope"></slot>
                <div class="icons" v-else>
                  <el-icon-check class="check" @click="checkClick(scope)"></el-icon-check>
                  <el-icon-close class="close" @click="closeClick(scope)"></el-icon-close>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
            <span v-else>{{ scope.row[item.prop] }}</span>
            <component
              :is="`el-icon-${toLine(editIcon)}`"
              v-if="item.editable"
              @click="clickEdit(scope)"
              class="edit"
            ></component>
          </template> -->
          <!-- 有编辑行的操作 -->
          <template v-if="scope.row.rowEdit">
            <el-input size="small" v-model="scope.row[item.prop]"></el-input>
          </template>
          <template v-else>
            <template v-if="scope.$index + scope.column.id === currentEdit">
              <div style="display:flex">
                <el-input size="small" v-model="scope.row[item.prop]"></el-input>
                <div>
                  <slot name="editCell" v-if="$slots.editCell" :scope="scope"></slot>
                  <div class="icons" v-else>
                    <el-icon-check class="check" @click.stop="checkClick(scope)"></el-icon-check>
                    <el-icon-close class="close" @click.stop="closeClick(scope)"></el-icon-close>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
              <span v-else>{{ scope.row[item.prop] }}</span>
              <component
                :is="`el-icon-${toLine(editIcon)}`"
                v-if="item.editable"
                @click.stop="clickEdit(scope)"
                class="edit"
              ></component>
            </template>
          </template>
        </template>
      </el-table-column>
    </template>
    <el-table-column :label="actionOptions.label" :align="actionOptions.align" :width="actionOptions.width">
      <template #default="scope">
        <slot name="editRow" v-if="scope.row.rowEdit" :scope="scope"></slot>
        <slot name="action" v-else :scope="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>
<style lang="scss" scoped>
.edit {
  width: 1em;
  height: 1em;
  cursor: pointer;
}
.icons {
  display: flex;
  svg {
    width: 1em;
    height: 1em;
    cursor: pointer;
  }
  .check {
    color: red;
  }
  .close {
    color: green;
  }
}
</style>

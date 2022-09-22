<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { TableOptions } from '../../components/table/src/types';
import axios from 'axios';
let tableData = ref<TableData[]>([]);

interface TableData {
  username: string;
  updateDate: string;
  phone: number;
  width: number;
}
// 表格数据
// setTimeout(() => {
//   tableData.value = [
//     {
//       username: 'zs',
//       updateDate: '09/19',
//       phone: 110,
//       width: 100,
//     },
//     {
//       username: 'ls',
//       updateDate: '09/20',
//       phone: 120,
//       width: 100,
//     },
//     {
//       username: 'ww',
//       updateDate: '09/21',
//       phone: 119,
//       width: 100,
//     },
//   ];
// }, 3000);
tableData.value = [
  {
    username: 'zs',
    updateDate: '09/19',
    phone: 110,
    width: 100,
  },
  {
    username: 'ls',
    updateDate: '09/20',
    phone: 120,
    width: 100,
  },
  {
    username: 'ww',
    updateDate: '09/21',
    phone: 119,
    width: 100,
  },
];

// 分页数据定义
let current = ref<number>(1);
let pageSize = ref<number>(10);
// 表格配置
let options: TableOptions[] = [
  {
    label: '用户',
    prop: 'username',
    align: 'center',
    slot: 'username',
    editable: true,
  },
  {
    label: '日期',
    prop: 'updateDate',
    align: 'center',
    slot: 'updateDate',
  },
  {
    label: '联系方式',
    prop: 'phone',
    align: 'center',
    editable: true,
  },
  {
    label: '操作',
    prop: '',
    align: 'center',
    action: true,
  },
];
let editRowIdx = ref<string>('edit');
const tableEdit = (scope: any) => {
  console.log('tableEdit');
};
const tableDelete = (scope: any) => {
  console.log('tableDelete');
};
const rowConfirm = (scope: any) => {
  console.log('rowConfirm');
};
const rowCancel = (scope: any) => {
  console.log('rowCancel');
};
const check = (scope: any) => {
  editRowIdx.value = 'edit';
  console.log(scope, 'check', editRowIdx.value);
};
const close = (scope: any) => {
  console.log(scope);
};
const confirm = (scope: any) => {
  editRowIdx.value = 'edit';
  console.log(scope, 'confirm', editRowIdx.value);
};
const cancel = (scope: any) => {
  console.log(scope);
};
</script>
<template>
  <div>
    <w-table
      :data="tableData"
      :options="options"
      elementLoadingTxt="loading..."
      @check="check"
      @close="close"
      v-model:editRowIdx="editRowIdx"
      isEditRow
    >
      <template #updateDate="{scope}">
        <el-icon-timer></el-icon-timer>
        {{ scope.row.updateDate }}
      </template>
      <template #username="{scope}">
        <div style="width:50px;height:50px;color:rgb(122,122,200)">
          {{ scope.row.username }}
        </div>
      </template>
      <template #action="{scope}">
        <el-button type="primary" @click="tableEdit(scope)">编辑</el-button>
        <el-button type="danger" @click="tableDelete(scope)">删除</el-button>
      </template>
      <template #editRow>
        <el-button type="primary" @click="rowConfirm(scope)">确认</el-button>
        <el-button type="danger" @click="rowCancel(scope)">取消</el-button>
      </template>
      <template #editCell="{scope}">
        <el-button type="primary" size="small" @click.stop="confirm(scope)">确认</el-button>
        <el-button type="warning" size="small" @click.stop="cancel(scope)">取消</el-button>
      </template>
    </w-table>
  </div>
</template>
<style lang="scss" scoped>
svg {
  width: 1em;
  height: 1em;
}
</style>

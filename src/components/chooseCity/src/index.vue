<script setup lang='ts'>
import { ref } from 'vue';
let result = ref<string>('请选择')
let visible = ref<boolean>(false)
let radioVal = ref<string>('按城市')
let selectValue = ref<string>('')
const selectOptions = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
const showPoper = () => visible.value = !visible.value
</script>
<template>
  <el-popover v-model:visible="visible" placement="bottom-start" :width="430" trigger="click">
    <template #reference>
      <div class="result" @click="showPoper">
        <div>{{ result }}</div>
        <div>
          <transition>
            <el-icon-arrowdown></el-icon-arrowdown>
          </transition>
        </div>
      </div>
    </template>
    <div class="container">
      <el-row>
        <el-col :span="8">
          <el-radio-group v-model="radioVal" size="small">
            <el-radio-button label="按城市" />
            <el-radio-button label="按省份" />
          </el-radio-group>
        </el-col>
        <el-col :offset="1" :span="15">
          <el-select size="small" v-model="selectValue" filterable placeholder="Select">
            <el-option v-for="item in selectOptions" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-col>
      </el-row>
    </div>
  </el-popover>
</template>
<style lang='scss' scoped>
.result {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  cursor: pointer;

  svg {
    width: 1em;
    height: 1em;
  }
}

.container {
  padding: 8px;
}
</style>
<script setup lang='ts'>
import { ref } from 'vue';
import citys from '../lib/city'
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
          <el-icon-arrowdown :class="{ rotate: visible }"></el-icon-arrowdown>
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
      <div class="city">
        <!-- <div v-for="(value, key) in citys.cities"></div> -->
        <div class="city-item" v-for="(item, index) in Object.keys(citys.cities)" :key="index">{{ item }}</div>
      </div>
      <el-scrollbar max-height="300px">
        <template v-for="(value, key) in citys.cities" ::key="key">
          <el-row style="marginBottom:10px">
            <el-col :span='2'>
              {{ key }}
            </el-col>
            <el-col :span="22" class="city-name">
              <div class="city-name-item" v-for="item in value" :key="item.id">
                <div>
                  {{ item.name }}
                </div>
              </div>
            </el-col>
          </el-row>
        </template>
      </el-scrollbar>
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
    position: relative;
    width: 1em;
    height: 1em;
    top: 2px;
    margin-left: 4px;
    transition: all .25s linear;
  }
}

.container {
  padding: 8px;
}

.city {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom:10px;

  &-item {
    padding: 3px 6px;
    margin-right: 8px;
    margin-bottom: 8px;
    border: 1px solid #eee;
    cursor: pointer;
  }
}

.city-name {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .city-name-item {
    margin-right: 6px;
    margin-bottom: 6px;
  }
}

.rotate {
  transform: rotate(180deg);
}
</style>
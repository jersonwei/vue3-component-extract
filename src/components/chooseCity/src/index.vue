<script setup lang='ts'>
import { ref, onMounted } from 'vue';
// 城市数据
import type { CityItem } from './types'
// 所有省份数据
import provinces from '../lib/province.json'
// 所有城市数据
import citys from '../lib/city'
// 带拼音的数据
import city from '../lib/city';
// 备份数据准备
let allCity = ref<CityItem[]>([])
// 数据拷贝
let provincesData = ref(provinces)
// 分发事件
let emits = defineEmits(['cityChange', 'provinceChange'])
// 最终结果
let result = ref<string>('请选择')
// 弹出层显示状态
let visible = ref<boolean>(false)
// 单选框的值,按城市还是省份
let radioVal = ref<string>('按省份')
// 下拉框的值
let selectValue = ref<string>('')
// 下拉框数据
const selectOptions = ref<CityItem[]>([])
// 点击显示隐藏弹出框
const showPoper = () => visible.value = !visible.value
// 城市点击事件
const clickCity = (item: string) => {
  result.value = item
  visible.value = false
  emits('cityChange', item)
}
// 省份点击
const clickProvince = (item: string) => {
  result.value = item
  visible.value = false
  emits('provinceChange', item)
}
// 点击字母
const clickChat = (item: string) => {
  let el = document.getElementById(item)
  if (el) el.scrollIntoView()
}
// 自定义搜索过滤
const filterMethod = (val: string) => {
  let values = Object.values(city.cities).flat(2)
  if (val === '') {
    // 获取下拉框的城市数据
    selectOptions.value = values
  } else {
    if (radioVal.value === '按城市') {
      // 中英文一起过滤
      selectOptions.value = values.filter((item: CityItem) => {
        return item.name.includes(val) || item.spell.includes(val)
      })
    } else {
      // 只过滤中文
      selectOptions.value = values.filter((item: CityItem) => {
        return item.name.includes(val)
      })
    }
  }
}
// 下拉框选择
const changSelect = (val: number) => {
  let cityItem = allCity.value.find(item => item.id === val)!
  result.value = cityItem.name
  if (radioVal.value === '按城市') {
    emits('cityChange', cityItem)
  } else {
    emits('provinceChange', cityItem.name)
  }
}
onMounted(() => {
  // 获取下拉框的城市数据
  let values = Object.values(city.cities).flat(2)
  allCity.value = values
  selectOptions.value = values
})
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
          <el-select @change="changSelect" size="small" v-model="selectValue" filterable placeholder="请搜索城市"
            :filter-method="filterMethod">
            <el-option v-for="item in selectOptions!" :key="item.id" :label="item.name" :value="item.id"
              @click="clickCity(item.name)" />
          </el-select>
        </el-col>
      </el-row>
      <!-- 将城市区域和滚动条区域包裹 根据单选框的值选择性显示-->
      <template v-if="radioVal === '按城市'">
        <div class="city">
          <!-- <div v-for="(value, key) in citys.cities"></div> -->
          <!-- 字母区域 -->
          <div class="city-item" @click="clickChat(item)" v-for="(item, index) in Object.keys(citys.cities)"
            :key="index">
            {{ item }}</div>
        </div>
        <!-- 滚动区域 -->
        <el-scrollbar max-height="300px">
          <template v-for="(value, key) in citys.cities" ::key="key">
            <el-row style="marginBottom:10px" :id="key">
              <el-col :span='2'>
                {{ key }}
              </el-col>
              <el-col :span="22" class="city-name">
                <div class="city-name-item" v-for="items in value" :key="items.id" @click="clickCity(items.name)">
                  <div>
                    {{ items.name }}
                  </div>
                </div>
              </el-col>
            </el-row>
          </template>
        </el-scrollbar>
      </template>
      <!-- 按省份显示的区域 -->
      <template v-else>
        <div class="province">
          <div class="province-item" @click="clickChat(item)" v-for="(item, index) in Object.keys(provincesData)"
            :key="index">
            {{ item }}
          </div>
        </div>
        <!-- 滚动区域 -->
        <el-scrollbar max-height="300px">
          <!-- 二维数组需要二次循环 -->
          <template v-for="(item, index) in Object.values(provinces)" :key="index">
            <template v-for="(subitem, idx) in item" :key="subitem.name.id">
              <el-row style="marginBottom:10px" :id="subitem.id">
                <el-col :span='3'>
                  {{ subitem.name }}
                </el-col>
                <el-col :span="21" class="province-name">
                  <div class="province-name-item" v-for="(ThirdItems, tidx) in subitem.data" :key="tidx">
                    <div @click="clickProvince(ThirdItems)">
                      {{ ThirdItems }}
                    </div>
                  </div>
                </el-col>
              </el-row>
            </template>
          </template>
        </el-scrollbar>
      </template>
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

.city,
.province {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;

  .city-item,
  .province-item {
    padding: 3px 6px;
    margin-right: 8px;
    margin-bottom: 8px;
    border: 1px solid #eee;
    cursor: pointer;
  }
}

.city-name,
.province-name {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;

  .city-name-item,
  .province-name-item {
    margin-right: 6px;
    margin-bottom: 6px;
  }
}

.rotate {
  transform: rotate(180deg);
}
</style>
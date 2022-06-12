<script setup lang='ts'>
import { PropType } from 'vue'
import { toLine } from '../../../utils';
import type { ListOptions, ActionOptions } from './type'
let props = defineProps({
  // 当前列表的内容
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true
  },
  // 操作内容
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => []
  }
})
console.log(props.list)
</script>
<template>
  <div class="list-tabs__item">
    <el-tabs>
      <el-tab-pane v-for="(item, index) in list" :key="index" :label="item.title">
        <el-scrollbar max-height="300px">
          <div v-for="(options, index) in item.content" :key="index" class="container">
            <div class="avatar">
              <el-avatar v-if="options.avatar" :size="50" :src="options.avatar" />
            </div>
            <div class="content">
              <div v-if="options.title" class="title">
                <div>
                  {{ options.title }}
                </div>
                <el-tag v-if="options.tag" size="mini" :type="options.tagType">{{ options.tag }}</el-tag>
              </div>
              <div class="time" v-if="options.desc">{{ options.desc }}</div>
              <div class="time" v-if="options.time">{{ options.time }}</div>
            </div>
          </div>
          <div class="actions">
            <div v-for="(action, index) in actions" :key="index" class="a-item"
              :class="{ 'border': index !== actions.length }">
              <div class="a-icon" v-if="action.icon">
                <component :is="`el-icon-${toLine(action.icon)}`"></component>
              </div>
              <div class="a-text">{{ action.text }}</div>
            </div>
          </div>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style lang='scss' scoped>
.container {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  cursor: pointer;

  &:hover {
    background-color: #e6f6ff;
  }

  .avatar {
    flex: 1;
    height: 100%;
    vertical-align: middle;
  }

  .content {
    flex: 3;

    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .time {
      font-size: 12px;
      color: #999;
      margin-top: 4px;
    }
  }
}

.actions {
  display: flex;
  height: 50px;
  align-items: center;
  border-top: 1px solid #eee;

  .a-item {
    flex: 1;
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: center;

    &:hover {
      background: rgba(14, 194, 230, 0.2);
    }

    .a-icon {
      margin-right: 4px;
      position: relative;
      top: 2px;
    }
  }
}

.border {
  border-right: 1px solid #eee;
}
</style>
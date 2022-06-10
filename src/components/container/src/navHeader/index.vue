<script setup lang='ts'>
let props = defineProps<{ collapse: boolean }>()
let emits = defineEmits(['update:collapse'])
const toggleMenu = () => {
  // TODO切换修改父组件的数据
  emits('update:collapse', !props.collapse)
}

</script>
<template>
  <div class="header">
    <span @click="toggleMenu">
      <el-icon-expand v-if="!collapse" style="margin-right:10px;cursor: pointer"></el-icon-expand>
      <el-icon-fold v-else style="cursor: pointer"></el-icon-fold>
    </span>
  </div>
</template>
<style lang="scss" scoped>
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>
<script setup lang='ts'>
import { lists, actions } from './data.d'
const clickItem = (val: any) => {
  console.log(val)
}
const clickAction = (val: any) => {
  console.log(val)
}
</script>
<template>
  <div class="notBox">
    <notification :value="50">
      <template #default>
        <list :list="lists" :actions="actions" @clickItem="clickItem" @clickActions="clickAction"></list>
      </template>
    </notification>
    <notification :value="100" :max="99" :icon="'ChatRound'">
      <template #default>
        <list :list="lists" :actions="actions" @clickItem="clickItem" @clickActions="clickAction"></list>
      </template>
    </notification>
    <!-- <notification :value="60" :max="30"></notification>
    <notification :value="100" :max="99" isDot></notification>
    <notification :value="100" :max="99" :icon="'ChatDotRound'"></notification> -->
  </div>
</template>
<style lang='scss' scoped>
.notBox {
  display: flex;
  height: 200px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
}
</style>
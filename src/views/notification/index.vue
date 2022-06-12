<script setup lang='ts'>

</script>
<template>
  <div class="notBox">
    <notification :value="50">
      <template #default>
        <list></list>
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
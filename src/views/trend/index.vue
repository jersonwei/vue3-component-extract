<script setup lang='ts'>

</script>
<template>
  <div class="trendBox">
    <div>
      <trend text="营业额"></trend>
    </div>
    <div>
      <trend text="销售额" type="down"></trend>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.trendBox {
  display: flex;

  div {
    margin-right: 10px;
  }
}
</style>
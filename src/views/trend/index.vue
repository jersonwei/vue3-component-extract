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
  <div class="trendBox">
    <div>
      <trend text="营业额" upIconColor="yellowgreen"></trend>
    </div>
    <div>
      <trend text="销售额" type="down" downIconColor="#123456"></trend>
    </div>
  </div>
  <trend text="全年总创收"></trend>
</template>
<style lang="scss" scoped>
.trendBox {
  display: flex;

  div {
    margin-right: 10px;
  }
}
</style>
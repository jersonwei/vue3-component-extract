<script setup lang='ts'>
const finishLoad = (val: string) => {
  console.log(val)
}
</script>
<template>
  <div>
    <w-progress @finishLoad="finishLoad" isAnimation :text-inside="true" :stroke-width="24" :percentage="100"
      status="success">
    </w-progress>
  </div>
</template>
<style lang='scss' scoped>
</style>
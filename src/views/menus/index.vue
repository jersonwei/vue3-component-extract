<script setup lang='ts'>
let data1 = [
  {
    name: '导航1',
    index: '1',
    icon: 'document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'document',
    children: [{
      name: '导航2-1',
      index: '2-1',
      icon: 'document',
    }]
  },
  {
    name: '导航3',
    index: '3',
    icon: 'document',
    children: [{
      name: '导航3-1',
      index: '3-1',
      icon: 'document'
    }]
  }
]
</script>
<template>
  <div style="width: 200px;">
    <menus :data="data1" defaultActive="2" active-text-color="red"></menus>
  </div>
</template>
<style lang='scss' scoped>
</style>
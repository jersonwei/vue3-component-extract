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
let data2 = [
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
    }, {
      name: '导航2-2',
      index: '2-2',
      icon: 'document',
    }, {
      name: '导航2-3',
      index: '2-3',
      icon: 'document',
      children: [
        {
          name: '导航2-3-1',
          index: '2-3-1',
          icon: 'document',
        }, {
          name: '导航2-3-2',
          index: '2-3-2',
          icon: 'document',
        }
      ]
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
    }, {
      name: '导航3-2',
      index: '3-2',
      icon: 'document',
      children: [{
        name: '导航3-2-1',
        index: '3-2-1',
        icon: 'document',
      }, {
        name: '导航3-2-2',
        index: '3-2-2',
        icon: 'document',
      }]
    }]
  }
]
</script>
<template>
  <div style="width: 200px;">
    <!-- <menus :data="data1" defaultActive="2" active-text-color="red"></menus> -->
    <infinite-menus :data="data2" defaultActive='2-3-1' active-text-color="red"></infinite-menus>
  </div>
</template>
<style lang='scss' scoped>
</style>
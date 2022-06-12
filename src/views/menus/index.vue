<script setup lang='ts'>
let data1 = [
  {
    a: '导航1',
    b: '1',
    c: 'Document'
  },
  {
    a: '导航2',
    b: '2',
    c: 'Document',
    d: [{
      a: '导航2-1',
      b: '2-1',
      c: 'Document',
    }]
  },
  {
    a: '导航3',
    b: '3',
    c: 'Document',
    d: [{
      a: '导航3-1',
      b: '3-1',
      c: 'Document'
    }]
  }
]
let data2 = [
  {
    a: '导航1',
    b: '1',
    c: 'Document'
  },
  {
    a: '导航2',
    b: '2',
    c: 'Document',
    d: [{
      a: '导航2-1',
      b: '2-1',
      c: 'Document',
    }, {
      a: '导航2-2',
      b: '2-2',
      c: 'Document',
    }, {
      a: '导航2-3',
      b: '2-3',
      c: 'Document',
      d: [
        {
          a: '导航2-3-1',
          b: '2-3-1',
          c: 'Document',
        }, {
          a: '导航2-3-2',
          b: '2-3-2',
          c: 'Document',
        }
      ]
    }]
  },
  {
    a: '导航3',
    b: '3',
    c: 'Document',
    d: [{
      a: '导航3-1',
      b: '3-1',
      c: 'Document'
    }, {
      a: '导航3-2',
      b: '3-2',
      c: 'Document',
      d: [{
        a: '导航3-2-1',
        b: '3-2-1',
        c: 'Document',
      }, {
        a: '导航3-2-2',
        b: '3-2-2',
        c: 'Document',
      }]
    }]
  }
]
</script>
<template>
  <div style="width: 200px;">
    <!-- <menus :data="data1" defaultActive="2" active-text-color="red" name="a" index="b" icon="c" d="d"></menus> -->
    <infinite-menus :data="data2" defaultActive='2-3-1' active-text-color="red" name="a" index="b" icon="c"
      children="d"></infinite-menus>
  </div>
</template>
<style lang='scss' scoped>
</style>
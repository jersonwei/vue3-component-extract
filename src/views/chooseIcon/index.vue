<script setup lang='ts'>
// import ChooseIcon from "@/components/chooseIcon/src/index.vue"
import { ref } from "vue";
let visible = ref<boolean>(false)
</script>
<template>
  <div>
    <choose-icon title="选择图标" v-model:visible="visible">
      选择图标
    </choose-icon>
  </div>
</template>
<style>
</style>
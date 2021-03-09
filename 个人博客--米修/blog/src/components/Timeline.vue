<template>
  <div class="d-flex j-center">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(period, index) in periods" :key="index" :label="period"
        :name="String(index)" data-test="period">
        {{period}}</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
// toRefs  解包
import { defineComponent } from "vue";
import { Period } from "@/types";
export default defineComponent({
  setup(props, context) {
    const periods: Period[] = ["今天", "本周", "本月"];
    const activeName = "0";
    function handleClick() {}
    return { periods, activeName, handleClick };
  },
});
</script>
<template>
  <div class="home">
    <Navbar />
    <Suspense>
      <template #default>
        <Timeline />
      </template>
      <template #fallback>
        <progress></progress>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import Timeline from "@/components/Timeline.vue";
// toRefs  解包
import { defineComponent } from "vue";
import { Period } from "@/types";
export default defineComponent({
  components: {
    Timeline,
  },
  setup() {
    const periods: Period[] = ["今天", "本周", "本月"];
    const activeName = "0";
    return { periods, activeName };
  },
});
/**
 * Suspense   延时加载   当组件setup函数使用到async时  必须使用
 */
</script>


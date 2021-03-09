<template>
  <div class="home">
    <Timeline />
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
  setup(props, context) {
    const periods: Period[] = ["今天", "本周", "本月"];
    const activeName = "0";
    function handleClick() {}
    return { periods, activeName, handleClick };
  },
});
</script>

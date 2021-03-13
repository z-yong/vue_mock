<template>
  <div>
    <p>{{ post.createTime.format('yyyy-MM-dd') }}</p>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { Post } from "@/types";
export default defineComponent({
  name: "TimelinePost",
  props: {
    post: {
      type: Object as () => Post,
      require: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="less">
</style>

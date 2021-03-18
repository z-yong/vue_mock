<template>
  <div>
    <AddPost :post="title" />
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
import AddPost from "@/components/AddPost.vue";
export default defineComponent({
  components: { AddPost },
  setup() {
    const title = ref("我是标题");
    return { title };
  },
});
</script>

<style scoped lang="less">
</style>

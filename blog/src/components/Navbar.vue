<template>
  <div class="py-2 d-flex j-end">
    <router-link to="/NewPost">
      <ElButton type="primary" size="small" plain>添加博客</ElButton>
    </router-link>

  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped lang="less">
</style>

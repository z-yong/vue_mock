<template>
  <div class="d-flex a-center j-sb">
    <div contenteditable="" ref="contenteditable" id="contenteditable" class="el-input"
      @input="handleEditable"></div>
    <div>{{ editable}}</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive, ref } from "vue";
export default defineComponent({
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    // const contenteditable: any = reactive<null | HTMLDivElement>(null);
    let contenteditable: any = "";
    const editable = ref(props.post);

    const handleEditable = () => {
      editable.value = contenteditable.innerText;
    };
    onMounted(() => {
      contenteditable = document.getElementById("contenteditable");
      contenteditable.innerText = editable.value;
      console.log(contenteditable);
    });
    return { editable, handleEditable };
  },
});
</script>

<style scoped lang="less">
</style>

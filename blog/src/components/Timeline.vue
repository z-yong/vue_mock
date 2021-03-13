<template>
  <div class="">
    <div class="d-flex j-center">
      <el-tabs v-model="activeName">
        <el-tab-pane v-for="(period, index) in periods" :key="index" :label="period"
          :name="String(index)" data-test="period">
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="text-center">
      <div v-for="(post, index) in posts" :key="index">
        <TimelinePost :post="post" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// toRefs  解包
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  ref,
  watch,
} from "vue";
import { ElLoading } from "element-plus";
import { Period, Post } from "@/types";
import { today, thisWeek, thisMounth } from "@/mock";
import moment from "moment";
import store from "@/store";

import TimelinePost from "./TimelinePost.vue";

export default defineComponent({
  name: "Timeline",
  components: {
    TimelinePost,
  },
  async setup(props, context) {
    const periods: Period[] = ["今天", "本周", "本月"];
    const activeName = ref<string>("0");
    const posts = ref<Post[]>([today]);
    watch(
      () => activeName.value,
      (val) => {
        posts.value = [today, thisWeek, thisMounth].filter((post) => {
          if (
            val == "0" &&
            post.createTime.isAfter(moment().subtract(1, "days"))
          ) {
            return true;
          } else if (
            val == "1" &&
            post.createTime.isAfter(moment().subtract(1, "weeks"))
          ) {
            return true;
          } else if (
            val == "2" &&
            post.createTime.isAfter(moment().subtract(1, "months"))
          ) {
            return true;
          }
          return false;
        });
      }
    );
    const loading = ElLoading.service({
      lock: true,
      text: "Loading",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)",
    });
    setTimeout(() => {
      loading.close();
    }, 2000);
    console.log("store", store);

    return { periods, activeName, posts };
  },
});
</script>
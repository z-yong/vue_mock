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
import { computed, defineComponent, ref } from "vue";
import { Period, Post } from "@/types";
import moment from "moment";
import store from "@/store";
import { get } from "@/util/http";
import { Toast } from "vant";

import TimelinePost from "./TimelinePost.vue";

export default defineComponent({
  name: "Timeline",
  components: {
    TimelinePost,
  },
  async setup() {
    const periods: Period[] = ["今天", "本周", "本月"];
    const activeName = ref<string>("0");

    const allPosts = store.getState().posts.ids.reduce<Post[]>((list, id) => {
      const post = store.getState().posts.all[id];
      return list.concat(post);
    }, []);
    // const allPosts = [];
    // for (const key in store.getState().posts.all) {
    //   allPosts.push(store.getState().posts.all[key]);
    // }

    const posts = computed(() =>
      allPosts.filter((post) => {
        if (
          activeName.value == "0" &&
          post.createTime.isAfter(moment().subtract(1, "days"))
        ) {
          return true;
        } else if (
          activeName.value == "1" &&
          post.createTime.isAfter(moment().subtract(1, "weeks"))
        ) {
          return true;
        } else if (
          activeName.value == "2" &&
          post.createTime.isAfter(moment().subtract(1, "months"))
        ) {
          return true;
        }
        return false;
      })
    );
    get(
      "/wechat/share/shareCourse",
      { courseId: "1366200410599464960" },
      { loading: true }
    ).then((res) => {
      Toast("666");
    });
    return { periods, activeName, posts };
  },
  mounted() {
    // this.$options
  },
});
</script>

<style>
.el-tabs__item {
  width: 150px;
  text-align: center;
  font-size: 16px;
}
</style>
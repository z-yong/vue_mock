import moment from "moment"
import { Post } from '@/types'


// cnpm i moment -S
// cnpm i @types/moment -D

export const basePost: Post = {
  id: 1,
  title: "米修在线",
  markdown: "课程列表",
  html: "<p>课程列表</p>",
  authorId: 1,
  createTime: moment()
}

export const today: Post = {
  ...basePost,
  title: "今天"
}

export const thisWeek: Post = {
  ...basePost,
  title: "本周",
  // 大于一天就是本周
  createTime: moment().subtract(2, "days")
}

export const thisMounth: Post = {
  ...basePost,
  title: "本月",
  // 大于一周就是本月
  createTime: moment().subtract(2, "weeks")
}
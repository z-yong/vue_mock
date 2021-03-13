import { mount } from '@vue/test-utils'
import Timeline from '@/components/Timeline.vue'

describe('Timeline.vue', () => {
  it('测试三个标签', () => {
    const wrapper = mount(Timeline)
    // console.log(wrapper.html())
    // const a = wrapper.findAll('el-tab-pane')
    // expect(a.length).toBe(3)
    // expect(wrapper.findAll('el-tab-pane')).toHaveLength(3)
    expect(wrapper.findAll("[data-test='period']")).toHaveLength(3)
  })
})

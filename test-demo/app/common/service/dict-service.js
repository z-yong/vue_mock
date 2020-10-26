/**
 * 字典配置服务
 */
export default {

  // 审核状态：0 未审核 1审核通过  2审核中 3审核失败
  getStatus(status) {
    return {
      '0': { text: '未审核', class: ' color-black' },
      '1': { text: '审核通过', class: ' color-black' },
      '2': { text: '审核中', class: ' color-blue' },
    }[status] || {}
  },
  // 视频转码状态
  tranStatus(status) {
    return {
      '0': { text: '未转码', class: ' color-gray' },
      '1': { text: '转码中', class: ' color-yellow' },
      '2': { text: '转码成功', class: ' color-green' },
      '3': { text: '转码失败', class: ' color-red' },
    }[status] || {}
  },
}
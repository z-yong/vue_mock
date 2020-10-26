(req, res) => {
  // 获取系统配置
  var request = {
    queryConfig: ['webTitle', 'cateList']
  }

  return {
    config: { 'webTitle': '配置信息1', 'cateList': { 'total': '12321', 'data': [1, 2, 3] } },
    code: '000000',
    msg: '成功',
    fail: false,
  }

  
}
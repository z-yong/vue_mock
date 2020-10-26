(req, res, mock) => {
  var data = {
    code: '000000',
    msg: '成功',
    fail: false,
    'result|10': [{
      'id': '@id',
      'title|1': '@ctitle',
      'cate|1': [1, 2, 3, 100],
      'createTime': '@dateTime',
    }],
    total: 53,
    extData: {
      config: {
        'msgCates': {
          '1': '系统信息',
          '2': '活动信息',
          '3': '彩铃信息',
          '100': '其他'
        },
      }
    }
  }
  return mock.mock(data)
}
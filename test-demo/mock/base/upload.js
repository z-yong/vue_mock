(req, res, mock) => {
  return mock.mock({
    code: '000000',
    msg: '成功',
    fail: false,
    result: {
      'url|1': ['https://puui.qpic.cn/tv/0/25945149_250140/0', 'https://puui.qpic.cn/qqvideo/0/c0185wei7uf/332']
    }
  })
}
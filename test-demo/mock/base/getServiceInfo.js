(req, res, mock) => {
  var data = {
    code: '000000',
    msg: '成功',
    fail: false,
    result: {
      'name': '@ctitle',
      'tel': /^1[3-9]\d{9}$/,
      'qq': /\d{5,11}/,
    }
  }
  return mock.mock(data)
}
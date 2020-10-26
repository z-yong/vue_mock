(req, res, mock) => {
  var data = {
    code: '000000',
    msg: '成功',
    fail: false,
    'result': {
      'details': {
        'tid': '@id',
        'title': '@ctitle',
        'content': '@cparagraph(20,100)',
        'cate|1': [1, 2, 3, 100],
        'createTime': '@dateTime',
      },
      'prevId|1': [0, '@id', '@id', '@id'],
      'nextId|1': ['@id', '@id', '@id', 0],
    }
  }
  return mock.mock(data)
}
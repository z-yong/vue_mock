(req, res, mock) => {

  // 已登录
  var resp = {
    code: '000000',
    msg: '成功',
    fail: false,
    result: {
      // 代理商
      loginUser: {
        id: '@id',
        phone: '13911119999',
        name: '南方时代有限公司',
        userName: 'admin',
        leval: 1,
        roles: ['一级代理商','平台管理员'],
        'photo|1': ['00', '02', '03'],
        'invite|1': ['10001', '20183', '98772'],
        'createTime':'@dateTime',
      },
      // 对应权限
      permissions: ['video:agent:index:main', 'video:agent:index:menu']
    }
  }
  res.cookie('token', mock.Random.string('upper', 8), { path: '/' })
  // 未登录
  var resp2 = {
    code: '010000',
    msg: '未登录',
    fail: true,
  }
  return mock.mock(resp)
}
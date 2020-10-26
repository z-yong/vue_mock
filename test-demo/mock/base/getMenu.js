(req, res, mock) => {
  // 获取菜单

  var key = req.query.cateKey || 'indexMenu';

  var data = {
    'indexMenu': [{
        id: 1,
        pId: 0,
        name: '首页',
        router: '/',
        icon: '&#xe648;'
      },
      {
        id: 2,
        pId: 0,
        name: '商户管理',
        router: '/group',
        icon: '&#xe634;'
      },
      {
        id: 3,
        pId: 0,
        name: '子代理管理',
        router: '/children',
        icon: '&#xe675;'
      },
      {
        id: 4,
        pId: 0,
        name: '代理商工具',
        router: '/tool',
        icon: '&#xe62a'
      },
      {
        id: 5,
        pId: 0,
        name: '财务管理',
        router: '/finance',
        icon: '&#xe66c;'
      },
      {
        id: 6,
        pId: 0,
        name: '账户与消息',
        router: '/base',
        icon: '&#xe605;'
      },
      {
        id: 41,
        pId: 4,
        name: '设置失败用户查询',
        router: '/tool/fails',
        icon: ''
      },
      {
        id: 42,
        pId: 4,
        name: '终端工具',
        router: '/tool/terminal',
        icon: ''
      },
      {
        id: 51,
        pId: 5,
        name: '财务信息',
        router: '/finance/index',
        icon: ''
      },
      {
        id: 52,
        pId: 5,
        name: '账户返现',
        router: '/finance/cashback',
        icon: ''
      },
      {
        id: 61,
        pId: 6,
        name: '个人信息',
        router: '/base/user',
        icon: ''
      },
      {
        id: 62,
        pId: 6,
        name: '客服信息',
        router: '/base/service',
        icon: ''
      },
      {
        id: 63,
        pId: 6,
        name: '公告',
        router: '/base/message',
        icon: ''
      },
    ],
    'videoMenu': [{
        id: 1,
        pId: 0,
        name: '视频创作中心',
        router: '/video/tpls',
        icon: '&#xe624;'
      },
      {
        id: 2,
        pId: 0,
        name: '视频彩铃业务管理',
        router: '/video/emps',
        icon: '&#xe62b;'
      },
      {
        id: 3,
        pId: 0,
        name: '作品管理',
        router: '/video/works',
        icon: '&#xe62f;'
      },
      {
        id: 4,
        pId: 0,
        name: '用户查询',
        router: '/video/fails',
        icon: '&#xe618;'
      },
      {
        id: 11,
        pId: 1,
        name: '彩铃视频',
        router: '/video',
        icon: ''
      },
      {
        id: 21,
        pId: 2,
        name: '业务员工管理',
        router: '/video/emps',
        icon: ''
      },
      {
        id: 31,
        pId: 3,
        name: '作品集',
        router: '/video/works',
        icon: ''
      },
      {
        id: 32,
        pId: 3,
        name: '草稿箱',
        router: '/video/drafts',
        icon: ''
      },
      {
        id: 41,
        pId: 4,
        name: '设置失败用户查询',
        router: '/video/fails',
        icon: ''
      },
    ],
  }

  res.json(mock.mock({
    code: '000000',
    msg: '成功',
    faile: false,
    result: data[key],
    total: '@integer(0,12)',
    extData:{
      config:{
        uploadImageSizeLimit:2
      },
      resource:{
        msgCount:'@integer(1,100)',
        msg:{
          id:'120000199502010452',
          title:'@ctitle',
          content:'@cparagraph(20,100)'
        }
      }
    }
  }))
}
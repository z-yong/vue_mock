(req, res, mock) => {
  var data = {
    code: '000000',
    msg: '成功',
    fail: false,
    result: {
      totalInfo: {
        'recharge|900-20000.2': 400.00,
        'consume|900-20000.2': 400.00,
        'cashback|900-20000.2': 400.00,
        'groupTotal|10-2000': 199,
        'empTotal|10-2000': 199,

        'zeroRecharge|1-600': 199,
        'zeroConsume|1-500': 199,
        'empFails|10-500': 199,
      },
      'bannerList|3': [{
        'url|1': ['', '/finance/index'],
        'pic|1': ['http://img1.gtimg.com/sports/pics/hv1/235/20/2281/148327360.jpg', 'http://img1.gtimg.com/sports/pics/hv1/119/20/2281/148327244.jpg', 'http://img1.gtimg.com/sports/pics/hv1/8/216/2280/148312088.jpg', ]
      }],
      'newsList|2':[{
      	'id':'@id',
      	'title':'@ctitle(10,30)',
      	'date':'@date("MM-dd")',
      }],
      'service': {
        'qq|4': [{
          'name': '@cname',
          'value|1': ['211711968','@integer(50000,9999999999)'],
        }],
        'tel': '400-234-4567',
      },
      'help':[{
      	'question':'商务彩铃业务如何收费？支持哪些省份以及运营商用户使用？',
      	'answer':'商务彩铃业务费用按包月形式收取，具体收费及业务覆盖范围说明请见平台公告。',
      	'remark':'业务功能费不含运营商基本彩铃功能费',
      },{
      	'question':'商户彩铃与彩铃业务的关系是如何，为何开通商户彩铃业务时让我开通彩铃业务？',
      	'answer':'商户彩铃业务依赖于彩铃业务,需先开通彩铃基本功能方能正常使用商户彩铃业务，彩铃业务功能费有运营商收取，具体资费详询当地运营商。',
      }]
    },
  }
  res.json(mock.mock(data))
}
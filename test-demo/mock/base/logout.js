(req, res, mock) => {
  res.cookie('token', null, { path: '/', maxAge: -1 })
  return {
    code: '000000',
    msg: '成功',
    fail: false
  }
}
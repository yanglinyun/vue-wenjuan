import ax from '../utils/request.js'
const root = 'http://localhost'
export const commonParams = {
  login: `${root}/Admin.php?c=User&a=loginCheck`,
  admin: `${root}/Admin.php`,
  captcha: `${root}/Admin.php?c=User&a=captcha`
}

export function login (data) {
  return ax({
    method: 'post',
    url: commonParams.login,
    data
  })
}

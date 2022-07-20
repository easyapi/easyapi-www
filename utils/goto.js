import { getUser } from '@/api/account'
import Cookies from 'js-cookie'

/**
 * 跳转到团队页面
 */
export const gotoTeam = (path, context) => {
  getUser(context)
    .then(res => {
      let href = 'https://team.easyapi.com' + path
      if (res.data.code === 1 && res.data.content.team) {
        if (res.data.content.team.url) {
          href = 'https://' + res.data.content.team.url + '.easyapi.com' + path
        }
      }
      window.location.href = href
    })
    .catch(error => {
      Cookies.remove('authenticationToken')
      Cookies.remove('authenticationToken', { path: '/', domain: '.easyapi.com' })
      window.location.href = 'https://account.easyapi.com/login'
    })
}
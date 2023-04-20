import { account } from '@/api/account'
import { removeToken } from '~/utils/token'

/**
 * 跳转到团队页面
 */
export function gotoEasyTeam(path) {
  account.getUser().then((res) => {
    let href = `https://team.easyapi.com${path}`
    if (res.code === 1 && res.content.team) {
      if (res.content.team.url)
        href = `https://${res.data.content.team.url}.easyapi.com${path}`
    }
    window.location.href = href
  }).catch((error) => {
    removeToken()
    window.location.href = 'https://account.easyapi.com/login'
  })
}

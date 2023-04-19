import { useCookies } from '@vueuse/integrations/useCookies'
import { account } from '@/api/account'

const cookies = useCookies()

/**
 * 跳转到团队页面
 */
export function gotoEasyTeam(path) {
  account.getUser(path)
    .then((res) => {
      let href = `https://team.easyapi.com${path}`
      if (res.code === 1 && res.content.team) {
        if (res.content.team.url)
          href = `https://${res.data.content.team.url}.easyapi.com${path}`
      }
      window.location.href = href
    })
    .catch((error) => {
      cookies.remove('authenticationToken')
      cookies.remove('authenticationToken', { path: '/', domain: '.easyapi.com' })
      window.location.href = 'https://account.easyapi.com/login'
    })
}

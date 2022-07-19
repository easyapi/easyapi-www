import { getUser } from '@/api/account'

/**
 * 跳转到团队页面
 */
export const gotoTeam = (path, context) => {
  getUser(context).then(res => {
    if (res.data.code === 1 && res.data.content.team) {
      if (!res.data.content.team.url) {
        window.location.href = 'https://team.easyapi.com' + path
      }
      window.location.href = 'https://' + res.data.content.team.url + '.easyapi.com' + path
    }
  })
}

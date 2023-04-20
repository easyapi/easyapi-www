import { defineStore } from 'pinia'
import { useCookies } from '@vueuse/integrations/useCookies'

import { account } from '@/api/account'

const cookies = useCookies()

// useStore 可以任意，比如 useUser, useCart
// 参数1是整个应用中唯一的store id
export const userStore = defineStore('user', {
  state() {
    return {
      userId: '',
      username: '',
      nickname: '',
      photo: '',
      mobile: '',
      email: '',
      team: '',
      token: cookies.get('authenticationToken'),
    }
  },
  actions: {
    /**
     * 获取用户信息
     */
    getUser() {
      account.getUser()
        .then((res) => {
          if (res.code === 1) {
            this.userId = res.content.id
            this.username = res.content.username
            this.nickname = res.content.nickname
            this.photo = res.content.photo
            this.mobile = res.content.mobile
            this.email = res.content.email
            this.team = res.content.team
          }
        })
        .catch((error) => {
          cookies.remove('authenticationToken')
          cookies.remove('authenticationToken', { path: '/', domain: '.easyapi.com' })
        })
    },
    /**
     * 登出
     */
    logout() {
      cookies.remove('authenticationToken')
      cookies.remove('authenticationToken', { path: '/', domain: '.easyapi.com' })
    },
  },
})

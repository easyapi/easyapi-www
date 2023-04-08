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
    getUser({ commit }) {
      account.getUser()
        .then((res) => {
          if (res.data.code === 1) {
            commit('SET_USER_ID', res.data.content.id)
            commit('SET_USERNAME', res.data.content.username)
            commit('SET_NICKNAME', res.data.content.nickname)
            commit('SET_PHOTO', res.data.content.photo)
            commit('SET_MOBILE', res.data.content.mobile)
            commit('SET_EMAIL', res.data.content.email)
            commit('SET_TEAM', res.data.content.team)
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

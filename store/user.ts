import { defineStore } from 'pinia'
import { account } from '@/api/account'
import { getToken, removeToken } from '~/utils/token'

export const useUser = defineStore('user', {
  state() {
    return {
      userId: '',
      username: '',
      nickname: '',
      photo: '',
      mobile: '',
      email: '',
      team: '',
      teamName: '',
      teamImg: '',
      userTeam: '',
      token: getToken(),
    }
  },
  actions: {
    /**
     * 获取用户信息
     */
    getUser() {
      account.getUser().then((res) => {
        if (res.code === 1) {
          this.userId = res.content.id
          this.username = res.content.username
          this.nickname = res.content.nickname
          this.photo = res.content.photo
          this.mobile = res.content.mobile
          this.email = res.content.email
          this.team = res.content.team
          this.teamName = res.content.teamName
          this.teamImg = res.content.teamImg
          this.userTeam = res.content.userTeam
        }
      })
    },
    /**
     * 登出
     */
    logout() {
      removeToken()
    },
  },
})

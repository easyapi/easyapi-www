import Cookies from 'js-cookie'
import {getUser} from '@/api/account'

const user = {
  state: {
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
    token: Cookies.get('authenticationToken')
  },

  mutations: {
    SET_USER_ID: (state, userId) => {
      state.userId = userId
    },
    SET_USERNAME: (state, username) => {
      state.username = username
    },
    SET_NICKNAME: (state, nickname) => {
      state.nickname = nickname
    },
    SET_PHOTO: (state, photo) => {
      state.photo = photo
    },
    SET_MOBILE: (state, mobile) => {
      state.mobile = mobile
    },
    SET_EMAIL: (state, email) => {
      state.email = email
    },
    SET_TEAM: (state, team) => {
      state.team = team
    },
    SET_TEAM_NAME: (state, teamName) => {
      state.teamName = teamName
    },
    SET_TEAM_IMG: (state, teamImg) => {
      state.teamImg = teamImg
    },
    SET_USER_TEAM: (state, userTeam) => {
      state.userTeam = userTeam
    }
  },

  actions: {
    /**
     * 获取用户信息
     */
    getUser({commit}) {
      getUser(this).then(res => {
        if (res.data.code === 1) {
          commit('SET_USER_ID', res.data.content.id)
          commit('SET_USERNAME', res.data.content.username)
          commit('SET_NICKNAME', res.data.content.nickname)
          commit('SET_PHOTO', res.data.content.photo)
          commit('SET_MOBILE', res.data.content.mobile)
          commit('SET_EMAIL', res.data.content.email)
          commit('SET_TEAM', res.data.content.team)
          commit('SET_TEAM_NAME', res.data.content.team.name)
          commit('SET_TEAM_IMG', res.data.content.team.img)
          commit('SET_USER_TEAM', res.data.content.userTeam)
        }
      }).catch(error => {
        Cookies.remove('authenticationToken')
      })
    },
    /**
     * 登出
     */
    logout() {
      Cookies.remove('authenticationToken')
    }
  }
}

export default user

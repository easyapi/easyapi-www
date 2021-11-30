/**
 * 获取用户信息
 *
 * @see https://www.easyapi.com
 */
export const getUser = (context) => {
  return context.$axios.get(`https://account-api.easyapi.com/account`)
}

/**
 * 获取用户团队列表
 *
 * @see https://www.easyapi.com
 */

export const getUserTeamList = (context) => {
  return context.$axios.get(`https://account-api.easyapi.com/user/teams`)
}

/**
 * 切换团队
 *
 * @see https://www.easyapi.com
 */
export const changeTeam = (teamId, context) => {
  return context.$axios.put(`https://account-api.easyapi.com/team/${teamId}/change`)
}

/**
 * 获取api信息
 *
 * @see https://www.easyapi.com
 */
export const getApi = (context) => {
  return context.$axios.get(`https://account-api.easyapi.com/api/account`)
}

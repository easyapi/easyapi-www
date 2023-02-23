import http from '~/api/request'

/**
 * 获取用户信息
 *
 * @see https://www.easyapi.com
 */
export const getUser = () => {
  return http.get(`${http.accountUrl}/account`)
}

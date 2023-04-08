import http from '~/api/request'

export const account = {
  /**
   * 获取用户信息
   *
   * @see https://www.easyapi.com
   */
  getUser() {
    return http.get(`${useRuntimeConfig().public.baseUrl}/account`)
  },
}

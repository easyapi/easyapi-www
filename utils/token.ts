import { useCookie } from '#app/composables/cookie'

const key = 'authenticationToken'

/**
 * 获取token
 */
export function getToken(): string | undefined {
  return useCookie(key).value as string | undefined
}

/**
 * 移除token
 */
export function removeToken(): void {
  useCookie(key).value = null
  useCookie(key, { path: '/', domain: '.easyapi.com' }).value = null
}

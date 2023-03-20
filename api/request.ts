import { ElMessage } from 'element-plus'

/**
 * API请求封装
 * @param url
 * @param options
 * @param headers
 */
const fetch = async (url: string, options?: any, headers?: any): Promise<ApiResponse> => {
  try {
    const customHeaders = { Authorization: `Bearer ${useCookie('authenticationToken').value}`, ...headers }
    const res = await $fetch<ApiResponse>(url,
      { ...options, headers: customHeaders },
    )
    return res
  } catch (error: any) {
    ElMessage({
      type: 'error',
      message: error.data.message,
    })
    if (error.data.code === -9) {
      window.location.href = 'https://account.easyapi.com/login?from=https://wwww.easyapi.com/home'
    }
    return error.data
  }
}

export default new class http {
  get(url: string, params?: any, headers?: any): Promise<any> {
    return fetch(url, { method: 'get', params }, headers)
  }

  post(url: string, data?: any, headers?: any): Promise<any> {
    return fetch(url, { method: 'post', body: data }, headers)
  }

  put(url: string, data?: any, headers?: any): Promise<any> {
    return fetch(url, { method: 'put', body: data }, headers)
  }

  delete(url: string, data?: any, headers?: any): Promise<any> {
    return fetch(url, { method: 'delete', body: data }, headers)
  }
}()

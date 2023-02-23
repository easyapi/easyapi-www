import { ElMessage } from 'element-plus'

const baseUrl = 'https://api.easyapi.com'
const accountUrl = 'https://account-api.easyapi.com'

const get = async (url: string, params = {}): Promise<ApiResponse> => {
  const router = useRouter()
  try {
    const token = useCookie('authenticationToken')
    const res = await $fetch<ApiResponse>(url, {
      headers: {
        Authorization: token.value ? `Bearer ${token.value}` : ''
      },
      method: 'GET',
      params
    })
    return res
  } catch (error : any) {
    if (error.data.code === -9) {
      window.location.href = 'https://account.easyapi.com/login?from=https://wwww.easyapi.com/home'
    }
    ElMessage({
      type: 'error',
      message: error.data.message
    })
    return error.data
  }
}

const post = async (url: string, data = {}): Promise<ApiResponse> => {
  const router = useRouter()
  try {
    const token = useCookie('authenticationToken')
    const res = await $fetch<ApiResponse>(url, {
      headers: {
        Authorization: token.value ? `Bearer ${token.value}` : ''
      },
      method: 'POST',
      body: data
    })
    return res
  } catch (error : any) {
    if (error.data.code === -9) {
      window.location.href = 'https://account.easyapi.com/login?from=https://wwww.easyapi.com/home'
    }
    ElMessage({
      type: 'error',
      message: error.data.message
    })
    return error.data
  }
}

const put = async (url: string, data = {}): Promise<ApiResponse> => {
  const router = useRouter()
  try {
    const token = useCookie('authenticationToken')
    const res = await $fetch<ApiResponse>(url, {
      headers: {
        Authorization: token.value ? `Bearer ${token.value}` : ''
      },
      method: 'PUT',
      body: data
    })
    return res
  } catch (error : any) {
    if (error.data.code === -9) {
      window.location.href = 'https://account.easyapi.com/login?from=https://wwww.easyapi.com/home'
    }
    ElMessage({
      type: 'error',
      message: error.data.message
    })
    return error.data
  }
}

const del = async (url: string, data = {}): Promise<ApiResponse> => {
  const router = useRouter()
  try {
    const token = useCookie('authenticationToken')
    const res = await $fetch<ApiResponse>(url, {
      headers: {
        Authorization: token.value ? `Bearer ${token.value}` : ''
      },
      method: 'DELETE',
      body: data
    })
    return res
  } catch (error : any) {
    if (error.data.code === -9) {
      window.location.href = 'https://account.easyapi.com/login?from=https://wwww.easyapi.com/home'
    }
    ElMessage({
      type: 'error',
      message: error.data.message
    })
    return error.data
  }
}

export default { get, post, put, del, baseUrl, accountUrl }

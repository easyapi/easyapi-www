import Cookies from 'js-cookie'

export default function ({$axios, redirect}) {
  $axios.onRequest((config) => {
    Cookies.set('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ6aGFuZzIwMDg0QDEyNi5jb20iLCJhdXRoIjoiUk9MRV9BRE1JTiIsImV4cCI6MTY0ODg2MDMxMn0.5UqyBTbc_5XDlMv3aGoMcqsJj2Wbbno0q136dRk9lAxanD4bTxFtXpy85DOqdo3dtG076zo2-6jEZwHaHamFng')
    if (Cookies.get('authenticationToken')) {
      config.headers.Authorization = 'Bearer ' + Cookies.get('authenticationToken')
    }
  })
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      if (error.response.data.code === -9) {
        window.location.href = 'https://account.easyapi.com/login?from=https://market.easyapi.com'
      } else if (error.response.data.code === -8) {
        window.location.href = 'https://team.easyapi.com/new?from=https://market.easyapi.com'
      } else {
        this.$message.warning(error.response.data.message)
      }
    }
  })
}

import './index.scss'
import 'assets/scss/case.scss'
import '/assets/scss/banner.scss'

export default {
  name: 'SolutionPortal',
  head() {
    return {
      title: 'API管理门户 - EasyAPI服务平台',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'EasyAPIAPI管理门户'
        },
        {
          hid: 'keyword',
          name: 'keyword',
          content: 'API管理门户'
        }
      ]
    }
  }
}

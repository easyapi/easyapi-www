import './index.scss'
import '/assets/scss/banner.scss'

export default {
  name: 'ProductDoc',
  head() {
    return {
      title: '文档管理 - EasyAPI服务平台',
      meta: [
        {hid: 'description', name: 'description', content: '文档管理'},
        {hid: 'keyword', name: 'keyword', content: '文档管理'}
      ]
    }
  },
  mounted() {
  }
}

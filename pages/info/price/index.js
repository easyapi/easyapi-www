import './index.scss'

export default {
  name: 'InfoPrice',
  head() {
    return {
      title: '价格 - EasyAPI服务平台',
      meta: [
        { hid: 'description', name: 'description', content: 'EasyAPI服务平台价格体系' },
        { hid: 'keyword', name: 'keyword', content: '价格' }
      ]
    }
  },
  methods: {
    jumpFree() {
      window.location.href = 'https://team.easyapi.com/project/'
    }
  }
}

import './index.scss'

export default {
  name: 'InfoAbout',
  layout: 'default',
  head() {
    return {
      title: '关于我们 - EasyAPI服务平台',
      meta: [
        { hid: 'description', name: 'description', content: 'EasyAPI关于我们' },
        { hid: 'keyword', name: 'keyword', content: '关于我们,EasyAPI团队成员,EasyAPI团队介绍,EasyAPI公司介绍' }
      ]
    }
  }
}

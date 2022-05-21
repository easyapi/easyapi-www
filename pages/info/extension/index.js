import './index.scss'
import 'assets/scss/donate.scss'

export default {
  name: 'InfoExtension',
  head() {
    return {
      title: '浏览器插件 - EasyAPI服务平台',
      meta: [
        {hid: 'description', name: 'description', content: 'EasyAPI浏览器插件'},
        {hid: 'keyword', name: 'keyword', content: 'EasyAPI浏览器插件,浏览器插件,接口插件'}
      ]
    }
  },
  methods: {
    jumpGoogle() {
      this.$message.warning("谷歌浏览器插件正在审核中")
    },
    jumpFirefox() {
      window.open("https://addons.mozilla.org/zh-CN/firefox/addon/easyapi%E6%B5%8F%E8%A7%88%E5%99%A8%E6%89%A9%E5%B1%95/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search","_blank");
    },
    jumpZip() {
      window.open("https://qiniu.easyapi.com/easyapi-extension.zip","_blank");
    }
  }
}

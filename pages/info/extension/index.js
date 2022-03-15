import './index.scss'
import 'assets/scss/donate.scss'
import Pay from "../../../components/pay";

export default {
  name: 'InfoExtension',
  components: {Pay},
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
    showCode() {
      this.$refs.child.dialogVisible = true
    }
  }
}

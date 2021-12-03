import './index.scss'
import Code from "./components/code";

export default {
  name: 'Support',
  components: {Code},
  head() {
    return {
      title: '支持名单 - EasyAPI服务平台',
      meta: [
        {hid: 'description', name: 'description', content: 'EasyAPI支持名单'},
        {hid: 'keyword', name: 'keyword', content: 'EasyAPI支持名单,支持我们'}
      ]
    }
  },
  methods: {
    showCode() {
      this.$refs.child.dialogVisible = true
    }
  }
}

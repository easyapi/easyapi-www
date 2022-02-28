import './index.scss'
import 'assets/scss/donate.scss'
import Pay from "../../../components/pay";

export default {
  name: 'InfoSupport',
  components: {Pay},
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

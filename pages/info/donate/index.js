import './index.scss'
import 'assets/scss/donate.scss'
import Pay from "../../../components/pay";

export default {
  name: 'InfoDonate',
  components: {Pay},
  head() {
    return {
      title: '支持我们 - EasyAPI服务平台',
      meta: [
        {hid: 'description', name: 'description', content: '支持EasyAPI'},
        {hid: 'keyword', name: 'keyword', content: '支持EasyAPI'}
      ]
    }
  },
  methods: {
    showCode() {
      this.$refs.child.dialogVisible = true
    }
  }
}

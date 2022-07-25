import './index.scss'

export default {
  name: 'Footer',
  data() {
    return {
      ifShow: true,
      screenWidth: null
    }
  },
  watch: {
    screenWidth: {
      handler: function (val, oldVal) {
        console.log(val)
        this.ifShow = val >= 800
      },
      immediate: true
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth
    window.onresize = () => {
      //屏幕尺寸变化就重新赋值
      return (() => {
        this.screenWidth = document.body.clientWidth
      })()
    }
  }
}

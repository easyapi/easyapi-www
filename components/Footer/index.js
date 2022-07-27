import './index.scss'

export default {
  name: 'Footer',
  props: ['screenWidth'],
  data() {
    return {
      ifShowFooter: true
    }
  },
  watch: {
    screenWidth: {
      handler: function (val, oldVal) {
        this.ifShowFooter = val >= 800
      },
      immediate: true
    }
  },
  methods: {
    jump(val) {
      if (val === '帮助中心') {
        window.open('https://help.easyapi.com', '_blank')
      } else {
        window.open('https://support.qq.com/products/352231', '_blank')
      }
    },
    handleOpen(key, keyPath) {
      console.log(document.getElementsByClassName('el-submenu__title'))
      console.log(key, keyPath)
    },
    handleClose() {}
  }
}

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
  }
}

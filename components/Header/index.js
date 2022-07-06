import './index.scss'

import Cookies from 'js-cookie'
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      screenWidth: null,
      authenticationToken: Cookies.get('authenticationToken'),
      ifShowProduct: true,
      ifShowPrivatization: true,
      ifShow: true,
      ifNavShow: false,
      type: '',
      headerActive: '',
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  watch: {
    $route() {
      this.ifNavShow = false
    },
    screenWidth: {
      handler: function (val, oldVal) {
        this.ifShow = val >= 800
      },
      immediate: true
    }
  },
  computed: {
    ...mapGetters(['photo', 'team'])
  },
  mounted() {
    if (this.authenticationToken) {
      this.$store.dispatch('getUser')
    }
    if (this.$route.name === 'post' || this.$route.name === 'post-id') {
      this.headerActive = 'background-color:#49CDDD'
    }
    this.screenWidth = document.body.clientWidth
    window.onresize = () => {
      //屏幕尺寸变化就重新赋值
      return (() => {
        this.screenWidth = document.body.clientWidth
      })()
    }
  },
  methods: {
    showNav(val) {
      this.type = val
      this.ifNavShow = !this.ifNavShow
    },
    closeMenu() {
      this.ifNavShow = false
    },
    jump() {
      window.open('https://market.easyapi.com')
    },
    jumpSign() {
      window.open('https://account.easyapi.com/signup/')
    },
    jumpLogin() {
      window.open('https://account.easyapi.com/login/')
    },
    showProduct() {
      this.ifShowProduct = false
    },
    showPrivatization() {
      this.ifShowPrivatization = false
    },
    hideProduct() {
      this.ifShowProduct = true
    },
    hidePrivatization() {
      this.ifShowPrivatization = true
    },
    handleCommand(command) {
      if (command === 'notice') {
        window.open(`https://team.easyapi.com/notification`)
      } else if (command === 'edit') {
        window.open(`https://team.easyapi.com/user/edit`)
      } else if (command === 'quitLogin') {
        this.quitLogin()
      }
    },
    quitLogin() {
      this.$store.dispatch('logout')
      window.location.href = 'https://account.easyapi.com/login'
    }
  }
}

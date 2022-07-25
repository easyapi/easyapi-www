import './index.scss'

import Cookies from 'js-cookie'
import { mapGetters } from 'vuex'
import { gotoTeam } from '../../utils/goto'

export default {
  name: 'Header',
  props: ['screenWidth'],
  data() {
    return {
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
      this.headerActive = 'background-color:#18c1d6'
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
    gotoTeam() {
      gotoTeam('', this)
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
        gotoTeam('/notification', this)
      } else if (command === 'edit') {
        gotoTeam('/user/edit', this)
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

import './index.scss'
import Cookies from 'js-cookie'
import { getUser } from '../api/account'
import { gotoTeam } from '../utils/goto'

export default {
  name: 'Index',
  head() {
    return {
      title: 'EasyAPI - API文档管理、API测试、API监控、API低代码、API接口服务新一代工具',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'EasyAPI 简单，好用的API管理系统，为您提供API文档管理、API测试、API监控、API低代码、API接口服务，新一代API管理工具。EasyAPI是国内第一家做API文档管理的产品。'
        },
        {
          hid: 'keyword',
          name: 'keyword',
          content:
            'API文档管理,API管理系统,API接口管理系统,API管理平台,API管理,API,API工具,API Mock,Mock API,API接口,接口管理,API接口管理,API监控,API测试,API服务,API低代码,API门户,API脚本,API服务市场'
        }
      ]
    }
  },
  mounted() {
    if ($nuxt.$route.path === '/' && Cookies.get('authenticationToken')) {
      getUser(this)
        .then(res => {
          if (res.data.code === 1 && res.data.content.team) {
            if (res.data.content.team.url) {
              window.location.href = 'https://' + res.data.content.team.url + '.easyapi.com'
            }
          }
        })
        .catch(error => {
          Cookies.remove('authenticationToken')
          Cookies.remove('authenticationToken', { path: '/', domain: '.easyapi.com' })
          window.location.href = 'https://account.easyapi.com/login'
        })
    }
  },
  methods: {
    gotoTeam() {
      gotoTeam('', this)
    }
  }
}

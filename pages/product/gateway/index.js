import './index.scss'

import Cookies from 'js-cookie'

export default {
  name: 'Gateway',
  head() {
    return {
      title: '首页 - EasyAPI服务平台',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'EasyAPI 简单，好用的API管理系统，移动互联网时代，每个应用都需要后台API支撑，通过API管理系统，后台与APP开发者进行很好的沟通，还在用Word文档写API吗，OUT了！'
        },
        {
          hid: 'keyword',
          name: 'keyword',
          content: 'API文档管理,API管理系统,API接口管理系统,API管理平台,API管理,API,API接口,接口管理,API接口管理,API监控,API测试,API服务'
        }
      ]
    }
  },
  mounted() {
  }
}

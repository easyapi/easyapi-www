import './index.scss'

import { getArticleList } from '~/api/article'
import Item from './components/item'

export default {
  name: 'Post',
  head() {
    return {
      title: '市场动态 - EasyAPI服务市场',
      meta: [
        { hid: 'description', name: 'description', content: '市场动态' },
        { hid: 'keyword', name: 'keyword', content: '市场动态' }
      ]
    }
  },
  components: {
    Item
  },
  data() {
    return {
      list: [],
      loading: false,
      noData: false,
      noMoreData: false,
      pagination: {
        size: 15,
        page: 0,
        totalPages: 0
      }
    }
  },
  methods: {
    getPageList() {
      this.pagination.page = this.pagination.page + 1
      if (this.pagination.page === this.pagination.totalPages) {
        this.noMoreData = true
      }
      if (this.pagination.page < this.pagination.totalPages) {
        this.getArticleList()
      }
    },
    getArticleList() {
      this.loading = true
      let params = {
        size: this.pagination.size,
        page: this.pagination.page
      }
      getArticleList(params, this).then(res => {
        this.loading = false
        if (res.data.code === 1) {
          this.list = this.list.concat(res.data.content)
          this.pagination.totalPages = res.data.totalPages
        } else {
          this.noData = true
        }
      })
    },
    lazyLoading() {
      // 滚动到底部，再加载的处理事件
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      let clientHeight = document.documentElement.clientHeight
      let scrollHeight = document.documentElement.scrollHeight
      if (scrollHeight - clientHeight - scrollTop <= 150) {
        // 滚动到底部，逻辑代码
        //事件处理
        if (!this.loading) {
          this.getPageList()
        }
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.lazyLoading)
    this.getArticleList()
  }
}

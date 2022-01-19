import './_id.scss'

import {getArticle} from '../../api/article'

export default {
  name: 'PostDetail',
  head() {
    return {
      title: this.article.title + ' - EasyAPI服务市场',
      meta: [
        {hid: 'description', name: 'description', content: this.article.title},
        {hid: 'keyword', name: 'keyword', content: '文章详情'}
      ]
    }
  },
  data() {
    return {
      article: null
    }
  },
  async asyncData(context) {
    let [res] = await Promise.all([
      getArticle(context.route.params.id, context)
    ])
    return {
      article: res.data.content
    }
  }
}

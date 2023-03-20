import http from '~/api/request'

/**
 * 获取文章列表
 */
export const getArticleList = (params: any) => {
  return http.get(`${useRuntimeConfig().public.serviceUrl}/articles`, {
    ...params,
    appKey: 'ja4fkcz35kfqywi7',
    appSecret: 'k1v8c637vr4swgr8'
  })
}

/**
 * 获取文章详情
 *
 * @see http://www.easyapi.com/market/get/article
 */
export const getArticle = (id: number) => {
  return http.get(`${useRuntimeConfig().public.serviceUrl}/article/${id}`, {
    appKey: 'ja4fkcz35kfqywi7',
    appSecret: 'k1v8c637vr4swgr8'
  })
}

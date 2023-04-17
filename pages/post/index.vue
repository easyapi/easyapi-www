<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import Item from './components/item.vue'
import { article } from '~/api/article'

useHead({
  title: '市场动态 - EasyAPI服务平台',
  meta: [{ name: 'description', content: '市场动态' },
    { name: 'keyword', content: '市场动态' }],
})

const state = reactive({
  list: [],
  loading: false,
  noData: false,
  noMoreData: false,
})

const pagination = reactive({
  size: 15,
  page: 0,
  totalPages: 0,
})

function getPageList() {
  pagination.page = pagination.page + 1
  if (pagination.page === pagination.totalPages)
    state.noMoreData = true

  if (pagination.page < pagination.totalPages)
    getArticleList()
}

function getArticleList() {
  state.loading = true
  const params = {
    size: pagination.size,
    page:pagination.page,
  }
  article.getArticleList(params).then((res) => {
    state.loading = false
    if (res.code === 1) {
      state.list = state.list.concat(res.content)
      pagination.totalPages = res.totalPages
    } else {
      state.noData = true
    }
  })
}
function lazyLoading() {
  // 滚动到底部，再加载的处理事件
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  const clientHeight = document.documentElement.clientHeight
  const scrollHeight = document.documentElement.scrollHeight
  if (scrollHeight - clientHeight - scrollTop <= 150) {
    // 滚动到底部，逻辑代码
    // 事件处理
    if (!state.loading)
      getPageList()
  }
}
onMounted(() => {
  window.addEventListener('scroll', lazyLoading)
  getArticleList()
})
</script>

<template>
  <div class="main mg-t-94">
    <div v-if="!state.noData" class="content pd-t-20">
      <div v-for="item of state.list" :key="item.articleId">
        <Item :list="item" />
      </div>
    </div>
    <div v-else class="no-data">
      <el-empty description="暂无数据" />
    </div>
    <div v-if="state.loading" class="loading">
      <Icon type="ios-loading" size="18" class="demo-spin-icon-load" />
      <div>加载中......</div>
    </div>
    <div v-if="state.noMoreData" class="noMoreData">
      <div>没有更多数据了...</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  text-align: center;
  color: #2d8cf0;
}

.noMoreData {
  margin: 0 0 20px 0;
  text-align: center;
  color: #666;
}

.no-data {
  margin: 400px auto;
  text-align: center;
}

.mg-t-94 {
  margin-top: 94px;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'

import { article } from '@/api/article'

const route = useRoute()

const articleDetail = ref({})

async function asyncData() {
  const result = await article.getArticle(route.params.id as any)
  if (result.code === 1) {
    articleDetail.value = result.content
    document.title = `${result.content.title} - EasyAPI服务市场`
  }
}

onMounted(() => {
  asyncData()
})
</script>

<template>
  <div class="mg-t-72">
    <div class="content py-8">
      <div class="post-detail">
        <div class="post-title">
          <span>{{ articleDetail.title }}</span>
          <label class="post-title_time">{{ articleDetail.updateTime }}</label>
        </div>
        <div class="post-content" v-html="articleDetail.content" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 20px 0 20px 0;
}

@media screen and (min-width: 500px) {
  .post-detail {
    padding: 0 58px;
    border: 1px solid #ddd;
    font-size: 14px;
    line-height: 24px;
    color: #333;
  }
}

@media screen and (min-width: 300px) and (max-width: 500px) {
  .post-detail {
    padding: 0 28px;
    border: 1px solid #ddd;
    font-size: 14px;
    line-height: 24px;
    color: #333;
  }
}

.post-title {
  padding-bottom: 30px;
  font-size: 14px;
  color: #a9a9a9;
  text-align: center;
  padding-top: 32px;
  border-bottom: 1px solid #ddd;
}

.post-title span {
  display: block;
  color: #333;
  text-align: center;
  font-size: 18px;
  font-weight: bolder;
}

.post-title_time {
  margin-top: 5px;
  display: block;
}

.post-content {
  padding: 30px 0 20px 0;
}

.post-detail p {
  margin-bottom: 10px;
}

.post-detail img {
  display: block;
  max-width: 100%;
  margin: 20px auto;
  padding: 5px;
  border: 1px solid #ddd;
}
</style>

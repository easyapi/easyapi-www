<template>
  <div class="main">
    <div class="error" v-if="error.statusCode === 403">
      <span class="title">权限不足</span>
      <span class="subtitle">你无权访问当前的页面</span>
    </div>
    <div class="error" v-if="error.statusCode === 404">
      <span class="title">404</span>
      <span class="subtitle">页面不存在</span>
    </div>
    <div class="error" v-else>
      <span class="title">错误信息</span>
      <span class="subtitle">您访问了错误的信息</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default',
  head() {
    return {
      title: '错误 - EasyAPI服务平台',
      meta: [
        {hid: 'description', name: 'description', content: '错误'},
        {hid: 'keyword', name: 'keyword', content: '错误'}
      ]
    }
  },
}
</script>

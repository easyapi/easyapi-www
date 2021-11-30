<template>
  <div class="main">
    <div v-if="!noData">
      <div v-for="item of list" :key="item.articleId">
        <ListItem v-bind:list="item"></ListItem>
      </div>
    </div>
    <div v-else class="no-data">
      <el-empty description="暂无数据"></el-empty>
    </div>
    <div class="loading" v-if="loading">
      <Icon type="ios-loading" size="18" class="demo-spin-icon-load"></Icon>
      <div>加载中......</div>
    </div>
    <div class="noMoreData" v-if="noMoreData">
      <div>没有更多数据了...</div>
    </div>
  </div>
</template>

<script>
  import Index from './index'

  export default Index
</script>

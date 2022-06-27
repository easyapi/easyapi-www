<template>
  <div class="mg-t-72">
    <div class="content py-8">
      <div class="post-detail">
        <div class="post-title">
          <span>{{ article.title }}</span>
          <label class="post-title_time">{{ article.updateTime.split(' ')[0] }}</label>
        </div>
        <div class="post-content" v-html="article.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Id from './_id'

export default Id
</script>

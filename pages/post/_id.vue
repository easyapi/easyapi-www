<template>
  <div class="mg-t-72">
    <div class='container pd-t-20'>
      <div class='detail-wrapper'>
        <div class='detail-title'>
          <span>{{ article.title }}</span>
          <label class='time'>{{ article.updateTime.split(' ')[0] }}</label>
        </div>
        <div class='detail-content' v-html='article.content'>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Id from './_id'

  export default Id
</script>

<template>
  <div>
    <Header></Header>
    <div class='container'>
      <div class='detail-wrapper'>
        <div class='detail-title'>
          <span>{{ article.title }}</span>
          <label class='time'>{{ article.updateTime.split(' ')[0] }}</label>
        </div>
        <div class='detail-content' v-html='article.content'>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Id from './_id'

export default Id
</script>

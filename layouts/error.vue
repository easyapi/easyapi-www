<template>
  <div class="main">
    <div class="error mg-t-72" v-if="error.statusCode === 403">
      <div class="error-content">
        <div>
          <p class="title">权限不足</p>
          <p class="subtitle">你无权访问当前的页面</p>
        </div>
        <img src="https://qiniu.easyapi.com/photo/girl32.jpg"/>
      </div>
    </div>
    <div class="error mg-t-72" v-if="error.statusCode === 404">
      <div class="error-content">
        <div>
          <p class="error-title">404</p>
          <p class="error-subtitle">页面不存在</p>
        </div>
        <img src="https://qiniu.easyapi.com/photo/girl32.jpg"/>
      </div>
    </div>
    <div class="error mg-t-72" v-else>
      <div class="content">
        <div>
          <p class="title">错误信息</p>
          <p class="subtitle">您访问了错误的信息</p>
        </div>
        <img src="https://qiniu.easyapi.com/photo/girl32.jpg"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'default',
    mounted() {
      console.log(this.error)
    },
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

<style lang="scss" scoped>
  .error-content {
    width: 600px;
    margin: 132px auto 60px;

    div {
      border: 1px solid #ccc;
      padding: 10px 20px;
      background: #f5f5f5;
      text-align: center;

      .error-title {
        font-size: 60px;
        font-family: Trebuchet MS;
      }

      .error-subtitle {
        font-size: 18px;
      }
    }

    img {
      width: 100%;
    }
  }
</style>

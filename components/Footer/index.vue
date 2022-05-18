<template>
  <div class="footer flex-c items-center">
    <div class="content">
      <div class="footer-item flex justify-between mg-15-auto">
        <div class="w-3/12">
          <img class="w-40" src="https://qiniu.easyapi.com/EasyAPI_Logo.png">
          <p class="w-4/5 mt-6">
            新一代API接口管理平台，EasyAPI是一个为您提供API管理、API测试、API监控、API文档、API低代码服务的综合性API服务平台
          </p>
          <p>联系电话：<span class="color-2D737C">13656171020</span></p>
          <div class="flex">
            <img class="w-12 mr-4" src="../../assets/images/wechat.svg">
            <img class="w-12" src="../../assets/images/gitHub.svg">
          </div>
        </div>
        <div class="w-6/12 flex">
          <div class="w-1/4">
            <h2>产品介绍</h2>
            <a>API协作</a>
            <a>API低代码</a>
            <a>API测试</a>
            <a>API服务</a>
            <a>API监控</a>
            <a>API场景化服务</a>
          </div>
          <div class="w-1/4">
            <h2>私有化方案</h2>
            <a>API管理门户</a>
            <a>API服务市场</a>
            <a>API开放平台</a>
          </div>
          <div class="w-1/4">
            <h2>使用文档</h2>
            <a>帮助中心</a>
            <a>BUG反馈</a>
            <a>浏览器插件</a>
            <a>前端开源计划</a>
          </div>
          <div class="w-1/4">
            <h2>关于</h2>
            <a>关于我们</a>
            <a>合作伙伴</a>
            <a>联系我们</a>
            <a>支持我们</a>
          </div>
        </div>
        <div class="w-3/12 flex justify-between text-c">
          <div>
            <img class="w-32" src="https://qiniu.easyapi.com/qrcode/leida.png">
            <p class="mt-5">技术咨询</p>
          </div>
          <div>
            <img class="w-32" src="https://qiniu.easyapi.com/qrcode/suri.png">
            <p class="mt-5">商务咨询</p>
          </div>
        </div>
      </div>
      <el-divider class="mg-15-auto"></el-divider>
      <div class="mg-15-auto text-c"><a href="https://beian.miit.gov.cn/" target="_blank">Copyright ©
        2015～2022
        上海帮趣网络技术有限公司</a></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped lang="scss">
  .footer {
    background: #3C3C3C;
    color: gray;
    padding: 20px 0;
    font-size: 1.2rem;

    h2 {
      font-size: 16px;
      margin-bottom: 10px;
    }

    p {
      margin-bottom: 10px;
    }

    a {
      color: gray;
      display: block;
      margin-bottom: 10px;

      &:hover {
        color: #555;
      }
    }
  }

  .mg-15-auto {
    margin: 15px auto;
  }

  .color-2D737C {
    color: #2D737C;
  }

  .text-c {
    text-align: center;
  }

  .el-divider {
    background-color: gray;
  }
</style>

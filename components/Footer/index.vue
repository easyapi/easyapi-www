<template>
  <div class="footer flex justify-center">
    <div class="footer-item w-full md:w-4/5 flex justify-between">
      <div class="w-4/12">
        <img class="w-40" src="https://qiniu.easyapi.com/EasyAPI_Logo.png">
        <p>
          新一代API接口管理平台，EasyAPI是一个为您提供API管理、API测试、API监控、API文档、API低代码服务的综合性API服务平台
        </p>
      </div>
      <div></div>
      <div></div>
    </div>
    <!--<p>-->
    <!--<a href="/info/about">关于我们</a>-->
    <!--<a href="/info/together">合作伙伴</a>-->
    <!--<a href="/info/contact">联系我们</a>-->
    <!--<a href="/info/donate">支持我们</a>-->
    <!--<a href="/post/">平台动态</a>-->
    <!--</p>-->
    <!--<p>Copyright © 2015～2022 帮趣团队</p>-->
    <!--<p><a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备19007521号</a></p>-->
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped lang="scss">
  .footer {
    text-align: center;
    background: #3C3C3C;
    color: gray;
    padding: 20px 0 50px;
    font-size: 1.2rem;

    p {
      margin-bottom: 10px;
    }

    a {
      color: gray;
      padding: 0 10px;

      &:hover {
        color: #555;
      }
    }
  }
</style>

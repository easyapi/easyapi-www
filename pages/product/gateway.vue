<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: '网关系统 - EasyAPI服务平台',
  meta: [{ name: 'description', content: 'EasyAPI网关系统' },
    { name: 'keyword', content: '网关系统' }],
})
</script>

<template>
  <div>
    <div class="banner">
      <div class="title">
        <h1>EasyAPI网关系统</h1>
        <p>企业API安全基础构架正确之选</p>
        <!-- <p>认证、鉴权、安全、流量控制、缓存、接口容器</p> -->
      </div>
    </div>
    <div class="pd-100 f-border-b">
      <div class="title">
        构建面向未来的 API 网关
      </div>
      <div class="description">
        API网关是数据及系统的集成的基础设施，支持将云端应用及数据通过简单、快速地配置转化成 API
        <br>
        同时提供安全独立的数据门户以及统一管控的开发者中心，帮助用户实现数据开放及共享
      </div>
      <ul class="u-iconui content">
        <li>
          <img src="/images/info/gateway_icon1.png">
          <span>安全保障</span>
          <p>
            用户鉴权身份验证
            <br>
            签名防止请求篡改
            <br>
            调用权限审核把控
          </p>
        </li>
        <li>
          <img src="/images/info/gateway_icon2.png">
          <span>独立访问</span>
          <p>
            集成数据独享存储
            <br>
            开放门户单独部署
            <br>
            自定义域名及门户
          </p>
        </li>
        <li>
          <img src="/images/info/gateway_icon3.png">
          <span>简单应用</span>
          <p>
            自动实现主机部署
            <br>
            零代码配置化操作
            <br>
            自动实现接口SDK
          </p>
        </li>
        <li>
          <img src="/images/info/gateway_icon4.png">
          <span>场景灵活</span>
          <p>
            多种集成业务场景
            <br>
            功能模块按需配置
            <br>
            支持多数据源集成
          </p>
        </li>
      </ul>
    </div>
    <div class="pd-100 f-border-b">
      <div class="title">
        专注API网关
      </div>
      <div class="u-igateway f-cb">
        <img class="f-fr img_w" src="/images/info/gateway_2.png">
        <div class="text f-fl">
          <p class="f_2">
            <img src="/images/info/gateway_icon5.png">
            快速创建API接口
            <br>
            <img src="/images/info/gateway_icon6.png">
            自动是吸纳数据网关
            <br>
            <img src="/images/info/gateway_icon7.png">
            API接口网关版本管理
            <br>
            <img src="/images/info/gateway_icon8.png">
            数据可根据需要返回
          </p>
        </div>
      </div>
    </div>

    <div class="pd-100">
      <div class="title">
        EasyAPI网关的价值
      </div>
      <div class="description">
        让API跟安全，更灵活
      </div>
      <ul class="icon-dispaly content">
        <li>
          <img src="/images/info/gateway_icon9.png">
          <span>降低成本</span>
        </li>
        <li>
          <img src="/images/info/gateway_icon10.png">
          <span>提高效率</span>
        </li>
        <li>
          <img src="/images/info/gateway_icon11.png">
          <span>海量规模</span>
        </li>
        <li>
          <img src="/images/info/gateway_icon12.png">
          <span>轻松监控</span>
        </li>
        <li>
          <img src="/images/info/gateway_icon13.png">
          <span>简化开发</span>
        </li>
        <li>
          <img src="/images/info/gateway_icon14.png">
          <span>授权灵活</span>
        </li>
        <li>
          <img src="/images/info/gateway_icon15.png">
          <span>无缝对接</span>
        </li>
        <li>
          <img src="/images/info/gateway_icon16.png">
          <span>融合开发</span>
        </li>
      </ul>
    </div>

    <div class="u-infofoot">
      <p>为了更多的开发我们的产品，API测试适当收费，感谢支持</p>
      <a href="https://gateway.easyapi.com" class="btn">立即使用EasyAPI网关</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/banner.scss';

.f_2 {
  font-size: 1.9rem !important;
  padding-left: 80px;
}

.img_w {
  width: 380px;
  padding-right: 200px !important;
}

.dis_showtxt p:hover {
  color: #2eaccb !important;
}

.u-igateway .text {
  padding-top: 15px;
}

.banner {
  background-image: url('/images/product/bg_gateway.png');
}
</style>

<template>
  <div>
    <div class="u-banner-bg">
      <div class="content">
        <div class="sysinfo f-tac">
          <h1>API管理门户</h1>
          <p>为您的公司打造私有化API管理门户，提升API管理效率</p>
          <a href="/info/contact" class="bug_btn">立即提升API管理水平</a>
          <div class="more">独立第三方API管理门户解决方案提供商</div>
        </div>
      </div>
    </div>

    <div class="pd-100">
      <div class="title">什么是API管理门户</div>
      <div class="description">
        API管理门户主要为开发企业搭建API门户，核心功能包括API文档管理、API测试工具、API监控系统等服务
        <br />
        对于大中型开发团队，API内部管理较注重隐私，特推出私有化版本
      </div>
      <ul class="u-iconui one content">
        <li>
          <img class="mx-auto" src="/images/info/open_icon6.png" />
          <span>API编辑</span>
        </li>
        <li>
          <img class="mx-auto" src="/images/info/open_icon7.png" />
          <span>API浏览</span>
        </li>
        <li>
          <img class="mx-auto" src="/images/info/open_icon8.png" />
          <span>API测试</span>
        </li>
        <li>
          <img class="mx-auto" src="/images/info/open_icon9.png" />
          <span>API监控</span>
        </li>
        <li>
          <img class="mx-auto" src="/images/info/open_icon10.png" />
          <span>API门户</span>
        </li>
      </ul>
    </div>

    <div class="pd-100 bg_img" style="background-image: url('/images/solution/bg_portal2.png'); background-size: cover">
      <div class="title f-c-white">轻量级环境部署</div>
      <div class="description f-c-white">基于云服务器环境轻量级部署，前端源码开放，可自由修改符合自己公司的API门户风格 立刻让自己公司的API管理更具有效率</div>
      <div class="oneimg">
        <img class="mx-auto" src="/images/info/open_3.png" />
      </div>
    </div>

    <div class="pd-100">
      <div class="title">客户案例</div>
      <div class="description">我们始终坚持为客户提供优质的服务</div>
      <div class="u-casebox" style="position: relative">
        <div class="thisroll">
          <div class="item">
            <div class="box">
              <img class="mx-auto" src="https://static.easyapi.com/images/app/yinwan.png" />
              <span>银湾社区开放平台</span>
            </div>
            <div class="u-lay">
              <img class="mx-auto" src="https://static.easyapi.com/images/app/yinwan.png" />
              <h4>银湾社区开放平台</h4>
              <span class="line"></span>
              <p>近千个小区的数据，开放给第三方合作伙伴</p>
            </div>
          </div>
          <div class="item">
            <div class="box">
              <img class="mx-auto" src="https://static.easyapi.com/images/app/key.png" />
              <span>银钥匙物业联盟开放平台</span>
            </div>
            <div class="u-lay">
              <img class="mx-auto" src="https://static.easyapi.com/images/app/key.png" />
              <h4>银钥匙物业联盟开放平台</h4>
              <span class="line"></span>
              <p>银钥匙物业联盟拥有会员企业1000家，通过API开放平台实现数据进行互联互通</p>
            </div>
          </div>
          <div class="item">
            <div class="box">
              <img class="mx-auto" src="https://static.easyapi.com/images/app/gl.png" />
              <span>国联供应链API开放平台</span>
            </div>
            <div class="u-lay">
              <img class="mx-auto" src="https://static.easyapi.com/images/app/gl.png" />
              <h4>国联供应链API开放平台</h4>
              <span class="line"></span>
              <p>国联供应链服务需要整合上下游资源，通过API开放平台打通上下游资源</p>
            </div>
          </div>
          <div class="item">
            <div class="box">
              <img class="mx-auto" src="https://static.easyapi.com/images/app/jf_logo.png" />
              <span>中国家纺城API开放平台</span>
            </div>
            <div class="u-lay">
              <img class="mx-auto" src="https://static.easyapi.com/images/app/jf_logo.png" />
              <h4>中国家纺城API开放平台</h4>
              <span class="line"></span>
              <p>打造世界一流的家纺线上API平台</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'assets/scss/case.scss'
import '/assets/scss/banner.scss'

export default {
  name: 'SolutionPortal',
  head() {
    return {
      title: 'API管理门户 - EasyAPI服务平台',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'EasyAPIAPI管理门户'
        },
        {
          hid: 'keyword',
          name: 'keyword',
          content: 'API管理门户'
        }
      ]
    }
  }
}

</script>
<style lang="scss" scoped>
.bug_btn:hover {
  color: rgb(3, 101, 151);
}

.bug_btn:active {
  color: rgb(3, 101, 151);
}

.u-banner-bg .sysinfo {
  padding-top: 184px;
}

.u-banner-bg {
  background-image: url('/images/solution/bg_portal.png');
  height: 520px;
  background-size: cover;
}

</style>
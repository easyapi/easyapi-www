<template>
  <div :class="[isActive?'header':'other-header']" class="header-index">
    <div class="content">
      <nuxt-link to="/">
        <img class="logo f-fl" src="https://qiniu.easyapi.com/market/logo.svg">
      </nuxt-link>
      <div class="navs f-fl">
       <span class="f-rel navs-item">
        产品
        <div class="popover">
          <img class="popover-img" src="/images/info/narrow.png">
          <ul>
            <a href="/product/doc" class="a_link">
              <li>
                <img class="icon_img" src="/images/info/down_icon1.png">
                <div class="popover-content">
                  <p>
                    文档管理
                  </p>
                  <span>
                    在线编辑API接口文档，强大的API接口测试功能，团队协作超便捷
                  </span>
                </div>
              </li>
            </a>
            <a href="/product/gateway" class="a_link">
              <li>
                <img class="icon_img" src="/images/info/down_icon2.png">
                <div class="popover-content">
                  <p>
                    网关系统
                  </p>
                  <span>
                    企业API架构正确之选，轻松管理海量API，特有的接口容器功能更强大
                  </span>
                </div>
              </li>
            </a>
            <a href="/product/test" class="a_link">
              <li>
                <img class="icon_img" src="/images/info/down_icon3.png">
                <div class="popover-content">
                  <p>
                    接口测试
                  </p>
                  <span>
                    在线API测试工具，快速完成接口测试任务，支持团队共同测试
                  </span>
                </div>
              </li>
            </a>
            <a href="/product/interface" class="a_link">
              <li>
                <img class="icon_img" src="/images/info/down_icon4.png">
                <div class="popover-content">
                  <p>
                    接口服务
                  </p>
                  <span>
                    众多接口服务，满足开发的每一个环节，让开发更高效，让开发更高效
                  </span>
                </div>
              </li>
            </a>
            <a href="/product/monitor" class="a_link">
              <li>
                <img class="icon_img" src="/images/info/down_icon5.png">
                <div class="popover-content">
                  <p>
                    监控系统
                  </p>
                  <span>
                    API监控实时反馈API状态，保障产品稳定性，提升运维响应速度
                  </span>
                </div>
              </li>
            </a>
            <a href="/product/scene" class="a_link">
              <li>
                <img class="icon_img" src="/images/info/down_icon6.png">
                <div class="popover-content">
                  <p>
                    场景化服务
                  </p>
                  <span>
                    企业专注于核心业务开发，提供非核心标准化场景业务开发服务，性价比更高
                  </span>
                </div>
              </li>
            </a>
          </ul>
        </div>
      </span>
        <a href="/info/price">
          价格
        </a>
        <span class="f-rel navs-item">
        私有化
        <div class="popover">
          <img class="popover-img" src="/images/info/narrow.png">
          <ul>
            <a href="/solution/portal" class="a_link">
              <li>
                <img class="icon_img" src="/images/info/header-icon2.png">
                <div class="popover-content">
                  <p>
                    API管理门户
                  </p>
                  <span>
                    API管理门户主要为开发企业搭建API门户，企业集中化API管理解决方案
                  </span>
                </div>
              </li>
            </a>
            <a href="/solution/market" class="a_link">
              <li>
                <img class="icon_img" src="/images/info/header-icon3.png">
                <div class="popover-content">
                  <p>
                    API服务市场
                  </p>
                  <span>
                    推进企业数字化转型，构建联盟生态服务，统一企业的API服务进出口径
                  </span>
                </div>
              </li>
            </a>
            <a href="/solution/open" class="a_link">
              <li>
                <img class="icon_img" src="/images/info/header-icon1.png">
                <div class="popover-content">
                  <p>
                    API开放平台
                  </p>
                  <span>
                    让企业的数据通过开放平台连接更多的可能性，实现上下游生态建设
                  </span>
                </div>
              </li>
            </a>
          </ul>
        </div>
      </span>
        <a href="https://market.easyapi.com" target="_blank">
          API市场
        </a>
      </div>
      <div class="side-navs">
        <a class="register" href="https://account.easyapi.com/signup" id="register">
          注册
        </a>
        <!-- <a class="navlogo" href="https://account.easyapi.com/login" id="login">登录</a> -->
        <!-- id="console" -->
        <span class="f-rel nav">
        <p class="console">
          控制台
        </p>
        <div class="popover">
          <img class="popover-img" src="/images/info/narrow.png"/>
          <ul>
            <a href="https://doc.easyapi.com">
              <li>
                <img class="console_icon" src="/images/info/down_icon7.png">
                <div class="popover-content">
                  <p>
                    API管理
                  </p>
                </div>
              </li>
            </a>
            <a href="https://monitor.easyapi.com">
              <li>
                <img class="console_icon" src="/images/info/down_icon8.png">
                <div class="popover-content">
                  <p>
                    API监控
                  </p>
                </div>
              </li>
            </a>
            <a href="https://service.easyapi.com">
              <li>
                <img class="console_icon" src="/images/info/down_icon9.png">
                <div class="popover-content">
                  <p>
                    API服务
                  </p>
                </div>
              </li>
            </a>
            <a href="https://gateway.easyapi.com">
              <li>
                <img class="console_icon" src="/images/info/down_icon10.png">
                <div class="popover-content">
                  <p>
                    API网关
                  </p>
                </div>
              </li>
            </a>
          </ul>
        </div>
      </span>
        <!--<div class="navs f-fr" id="avatar">-->
        <!--<div class="upbx">-->
        <!--<div class="avatar dis_hide" style="padding-right: 40px;box-sizing: border-box;">-->
        <!--<a class="f-fr " href="/project/" style="margin-top: -20px;">-->
        <!--<img src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"-->
        <!--/>-->
        <!--</a>-->
        <!--<ul class="avatarnav_down">-->
        <!--<li>-->
        <!--<a href="https://account.easyapi.com/notification/" style="color: #666">-->
        <!--我的通知-->
        <!--</a>-->
        <!--</li>-->
        <!--<li>-->
        <!--<a href="https://account.easyapi.com/setting/data" style="color: #666">-->
        <!--个人设置-->
        <!--</a>-->
        <!--</li>-->
        <!--<li>-->
        <!--<a href="https://account.easyapi.com/logout" style="color: #666">-->
        <!--退出-->
        <!--</a>-->
        <!--</li>-->
        <!--</ul>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        isActive: true
      }
    },
    mounted() {
      let path = $nuxt.$route.path
      if (path === "/info/about") {
        this.isActive = false
      }
      if (path === "/info/together") {
        this.isActive = false
      }
      if (path === "/info/contact") {
        this.isActive = false
      }
      if (path === "/info/donate") {
        this.isActive = false
      }
      if (path.indexOf("post") != -1) {
        this.isActive = false
      }
      if (path === "/info/support") {
        this.isActive = false
      }
      if (path === "/error") {
        this.isActive = false
      }
    },
    watch: {
      '$route'(res) {
        console.log(res.path)
        if (res.path === "/info/about") {
          this.isActive = false
        } else {
          this.isActive = true
        }
        if (res.path === "/info/together") {
          this.isActive = false
        }
        if (res.path === "/info/contact") {
          this.isActive = false
        }
        if (res.path === "/info/donate") {
          this.isActive = false
        }
        if (res.path.indexOf("post") != -1) {
          this.isActive = false
        }
        if (res.path === "/info/support") {
          this.isActive = false
        }
        if (res.path === "/error") {
          this.isActive = false
        }
      }
    },
    methods: {
      indicatorStyle() {
        return {header}
      }
    }
  }
</script>

<style scoped lang="scss">
  .header {
    position: relative;
    top: 0;
    height: 72px;
    box-shadow: none;
    background-color: (0, 0, 0, 0.3);
  }

  .other-header {
    position: relative;
    top: 0;
    height: 72px;
    box-shadow: none;
    background-color: #18c1d6;
  }

  .header-index {
    position: absolute;
    left: 0;
    right: 0;
  }

  .header .navs span:after {
    content: '';
    position: absolute;
    right: -10px;
    top: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    background: url(/images/angle.png) center no-repeat;
    background-size: 20px auto;
  }

  .other-header .navs span:after {
    content: '';
    position: absolute;
    right: -10px;
    top: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    background: url(/images/angle.png) center no-repeat;
    background-size: 20px auto;
  }

  .header .navs span:hover:after {
    background-image: url(/images/angle-1.png);
  }

  .other-header .navs span:hover:after {
    background-image: url(/images/angle-1.png);
  }
</style>

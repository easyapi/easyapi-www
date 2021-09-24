<template>
  <div class="header header-index" style="background: none;box-shadow:none">
    <div class="x-wp">
      <a href="/">
        <img class="logo f-fl" src="https://qiniu.easyapi.com/market/logo.svg">
      </a>
      <div class="navs f-fl">
      <span class="f-rel show_name">
        产品
        <div class="dis_show">
          <img class="down_img" src="/static/images/info/narrow.png">
          <ul class="hover_color">
            <a href="/pages/product/doc.vue" class="a_link">
              <li>
                <img class="icon_img" src="/static/images/info/down_icon1.png">
                <div class="dis_showtxt">
                  <p>
                    文档管理
                  </p>
                  <span>
                    在线编辑API接口文档，强大的API接口测试功能，团队协作超便捷
                  </span>
                </div>
              </li>
            </a>
            <a href="/pages/product/gateway.vue" class="a_link">
              <li>
                <img class="icon_img" src="/static/images/info/down_icon2.png">
                <div class="dis_showtxt">
                  <p>
                    网关系统
                  </p>
                  <span>
                    企业API架构正确之选，轻松管理海量API，特有的接口容器功能更强大
                  </span>
                </div>
              </li>
            </a>
            <a href="/pages/product/test.vue" class="a_link">
              <li>
                <img class="icon_img" src="/static/images/info/down_icon3.png">
                <div class="dis_showtxt">
                  <p>
                    接口测试
                  </p>
                  <span>
                    在线API测试工具，快速完成接口测试任务，支持团队共同测试
                  </span>
                </div>
              </li>
            </a>
            <a href="/pages/product/interface.vue" class="a_link">
              <li>
                <img class="icon_img" src="/static/images/info/down_icon4.png">
                <div class="dis_showtxt">
                  <p>
                    接口服务
                  </p>
                  <span>
                    众多接口服务，满足开发的每一个环节，让开发更高效，让开发更高效
                  </span>
                </div>
              </li>
            </a>
            <a href="/pages/product/monitor.vue" class="a_link">
              <li>
                <img class="icon_img" src="/static/images/info/down_icon5.png">
                <div class="dis_showtxt">
                  <p>
                    监控系统
                  </p>
                  <span>
                    API监控实时反馈API状态，保障产品稳定性，提升运维响应速度
                  </span>
                </div>
              </li>
            </a>
            <a href="/pages/product/scene.vue" class="a_link">
              <li>
                <img class="icon_img" src="/static/images/info/down_icon6.png">
                <div class="dis_showtxt">
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
        <a href="/pages/info/price.vue">
          价格
        </a>
        <span class="f-rel show_names">
        私有化
        <div class="dis_show">
          <img class="down_img" src="/static/images/info/narrow.png">
          <ul class="isShow">
            <a href="/pages/solution/portal.vue" class="a_link">
              <li>
                <img class="icon_img" src="/static/images/info/header-icon2.png">
                <div class="dis_showtxt">
                  <p>
                    API管理门户
                  </p>
                  <span>
                    API管理门户主要为开发企业搭建API门户，企业集中化API管理解决方案
                  </span>
                </div>
              </li>
            </a>
            <a href="/pages/solution/market.vue" class="a_link">
              <li>
                <img class="icon_img" src="/static/images/info/header-icon3.png">
                <div class="dis_showtxt">
                  <p>
                    API服务市场
                  </p>
                  <span>
                    推进企业数字化转型，构建联盟生态服务，统一企业的API服务进出口径
                  </span>
                </div>
              </li>
            </a>
            <a href="/pages/solution/open.vue" class="a_link">
              <li>
                <img class="icon_img" src="/static/images/info/header-icon1.png">
                <div class="dis_showtxt">
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
        <a class="navlogo" href="https://account.easyapi.com/signup" id="register">
          注册
        </a>
        <!-- <a class="navlogo" href="https://account.easyapi.com/login" id="login">登录</a> -->
        <!-- id="console" -->
        <span class="f-rel nav" style="height: 50px">
        <p class="console " style="padding: 0 10px">
          控制台
        </p>
        <div class="show_console">
          <img class="console_narrow" src="/static/images/info/narrow.png" />
          <ul>
            <a href="https://doc.easyapi.com">
              <li>
                <img class="console_icon" src="/static/images/info/down_icon7.png">
                <div class="dis_consoletxt">
                  <p>
                    API管理
                  </p>
                </div>
              </li>
            </a>
            <a href="https://monitor.easyapi.com">
              <li>
                <img class="console_icon" src="/static/images/info/down_icon8.png">
                <div class="dis_consoletxt">
                  <p>
                    API监控
                  </p>
                </div>
              </li>
            </a>
            <a href="https://service.easyapi.com">
              <li>
                <img class="console_icon" src="/static/images/info/down_icon9.png">
                <div class="dis_consoletxt">
                  <p>
                    API服务
                  </p>
                </div>
              </li>
            </a>
            <a href="https://gateway.easyapi.com">
              <li>
                <img class="console_icon" src="/static/images/info/down_icon10.png">
                <div class="dis_consoletxt">
                  <p>
                    API网关
                  </p>
                </div>
              </li>
            </a>
          </ul>
        </div>
      </span>
        <div class="navs f-fr" id="avatar">
          <div class="upbx">
            <div class="avatar dis_hide" style="padding-right: 40px;box-sizing: border-box;">
              <a class="f-fr " href="/project/" style="margin-top: -20px;">
                <img src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
                />
              </a>
              <ul class="avatarnav_down">
                <li>
                  <a href="https://account.easyapi.com/notification/" style="color: #666">
                    我的通知
                  </a>
                </li>
                <li>
                  <a href="https://account.easyapi.com/setting/data" style="color: #666">
                    个人设置
                  </a>
                </li>
                <li>
                  <a href="https://account.easyapi.com/logout" style="color: #666">
                    退出
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="less">
.footer {
  text-align: center;
  background: #fafafa;
  color: #777;
  margin: 20px 0 0 0;
  padding: 70px 0 50px 0;
  font-size: 12px;
}

.footer p {
  margin-bottom: 10px;
}

.footer a {
  color: #777;
  padding: 0 20px;
}
</style>

<template>
  <div class="header header-index" style="background: none;box-shadow:none">
    <div class="x-wp">
      <nuxt-link to="/">
        <img class="logo f-fl" src="https://qiniu.easyapi.com/market/logo.svg">
      </nuxt-link>
      <div class="navs f-fl">
      <span class="f-rel show_name">
        产品
        <div class="dis_show">
          <img class="down_img" src="/images/info/narrow.png">
          <ul class="hover_color">
            <a href="/product/doc" class="a_link">
              <li>
                <img class="icon_img" src="/images/info/down_icon1.png">
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
            <a href="/product/gateway" class="a_link">
              <li>
                <img class="icon_img" src="/images/info/down_icon2.png">
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
            <a href="/product/test" class="a_link">
              <li>
                <img class="icon_img" src="/images/info/down_icon3.png">
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
            <a href="/product/interface" class="a_link">
              <li>
                <img class="icon_img" src="/images/info/down_icon4.png">
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
            <a href="/product/monitor" class="a_link">
              <li>
                <img class="icon_img" src="/images/info/down_icon5.png">
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
            <a href="/product/scene" class="a_link">
              <li>
                <img class="icon_img" src="/images/info/down_icon6.png">
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
        <a href="/info/price">
          价格
        </a>
        <span class="f-rel show_names">
        私有化
        <div class="dis_show">
          <img class="down_img" src="/images/info/narrow.png">
          <ul class="isShow">
            <a href="/solution/portal" class="a_link">
              <li>
                <img class="icon_img" src="/images/info/header-icon2.png">
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
            <a href="/solution/market" class="a_link">
              <li>
                <img class="icon_img" src="/images/info/header-icon3.png">
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
            <a href="/solution/open" class="a_link">
              <li>
                <img class="icon_img" src="/images/info/header-icon1.png">
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
          <img class="console_narrow" src="/images/info/narrow.png" />
          <ul>
            <a href="https://doc.easyapi.com">
              <li>
                <img class="console_icon" src="/images/info/down_icon7.png">
                <div class="dis_consoletxt">
                  <p>
                    API管理
                  </p>
                </div>
              </li>
            </a>
            <a href="https://monitor.easyapi.com">
              <li>
                <img class="console_icon" src="/images/info/down_icon8.png">
                <div class="dis_consoletxt">
                  <p>
                    API监控
                  </p>
                </div>
              </li>
            </a>
            <a href="https://service.easyapi.com">
              <li>
                <img class="console_icon" src="/images/info/down_icon9.png">
                <div class="dis_consoletxt">
                  <p>
                    API服务
                  </p>
                </div>
              </li>
            </a>
            <a href="https://gateway.easyapi.com">
              <li>
                <img class="console_icon" src="/images/info/down_icon10.png">
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

<style scoped lang="scss">


.header .navs span {
  position: relative;

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

.header .side-navs .nav {
  padding: 0;
}

.header .side-navs .console {
  border: 1px solid #fff;
}

.side-navs span:hover .console {
  border: 1px solid #fff;
}

.header .navs span:hover:after {
  background-image: url(/images/angle-1.png);
}

.header .navs .dis_show .isShow li .icon_img {
  width: 30px;
  height: 30px;
  float: left;
}

.header .navs .dis_show .isShow li .dis_showtxt {
  float: right;
  width: 85%;
}


.navs .show_name .dis_show .hover_color a li:hover p {
  color: #0AB3CB;
}

.navs .show_name .dis_show .hover_color a li:hover span {
  color: #999
}

.navs .show_names .dis_show .isShow a li:hover p {
  /* color: #de9000; */
  color: #0AB3CB;
}

.navs .show_names .dis_show .isShow a li:hover span {
  color: #999
}

.side-navs .nav .show_console ul a li:hover .dis_consoletxt p {
  color: #0AB3CB;
  font-weight: bold;
}


.avatar {
  overflow: hidden;
  height: 500px;
  width: 100px;
  text-align: center;
}

.avatar:hover .avatarnav_down {
  display: block;
}

.avatarnav_down {
  display: none;
  width: 100px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  border: 1px solid #ddd;
  top: 50px;
  right: 50%;
  margin-right: -80px;
}

.avatarnav_down li {
  text-align: center;
  line-height: 40px;
  border-bottom: 1px solid #ddd;
}

.avatarnav_down li:last-child {
  border-bottom: 0;
}

.avatarnav_down li a {
  font-size: 14px;
  text-align: center;
}

.avatarnav_down li a:hover {
  color: #18c1d6;
}
</style>

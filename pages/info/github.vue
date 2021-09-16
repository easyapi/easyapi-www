<!DOCTYPE html>
<html lang="zh">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <title>开源计划 - EasyAPI服务平台</title>
  <meta name="keywords" content="API文档管理,API管理系统,API接口管理系统,API管理平台,API管理,API,API接口,接口管理,API接口管理,API监控,API测试,API服务"/>
  <meta name="description"
        content="EasyAPI 简单，好用的API管理系统，移动互联网时代，每个应用都需要后台API支撑，通过API管理系统，后台与APP开发者进行很好的沟通，还在用Word文档写API吗，OUT了！"/>
  <script src="../../static/style/style.js"></script>
</head>
<style>
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
    /* color: #de9000; */
    color: #0AB3CB;

    font-weight: bold;
  }

  /* bug */
  .bg_white {
    background: #f0bf43 !important;
    border-bottom: 4px solid #bf9f43;
    position: relative;
    display: inline-block;
    color: #ffffff;
    height: 46px;
    padding: 10px 60px;
    font-size: 16px;
    line-height: 46px;
    font-weight: 600;
    border-radius: 6px
  }

  .img > img {
    width: 100%;
  }

  .bg_white > p {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .bg_white > p > img {
    width: 16px;
    height: 16px;
    margin-left: 20px;
  }

  .bg_white > p a {
    font-size: 26px;
    color: #fff;
    letter-spacing: 2px;
  }

  .font_w {
    font-weight: bold;
  }

  .text_c {
    text-align: center !important;

  }

  /* .dis_showtxt p:hover {
      color: #2EACCB!important;
  } */

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
    background: url(/static/images/angle.png) center no-repeat;
    background-size: 20px auto;
  }

  .header .side-navs .nav {
    padding: 0;
  }

  .header .side-navs .console {
    border: 1px solid #fff;
  }

  .bg_white:hover {
    /* color: rgb(244, 244, 244,0.7); */
    color: rgba(49, 176, 213, 0.7);
  }

  .bg_white:active {
    /* color: rgba(238, 238, 238,0.6); */
    color: rgba(49, 176, 213, 0.6)
  }

  .side-navs span:hover .console {
    border: 1px solid #fff;
  }

  .header .navs span:hover:after {
    background-image: url(/static/images/angle-1.png);
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

  .u-page1 {
    background: url(../../static/images/info/bg_github.png) no-repeat center !important;
    background-size: cover !important;
  }

  .floor1 {
    padding-bottom: 70px;
  }

  .floor1 > h1 {
    text-align: center;
    font-weight: normal;
    color: #555555;
    font-size: 4.8rem;
    padding: 100px 0 60px;
  }

  .floor1 > ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 1200px;
    margin: auto;
  }

  .floor1 > ul > li {
    width: 200px;
    text-align: center;
  }

  .floor1 > ul > li > a {
    display: block;
    margin-top: 20px;
  }

  .floor1 > ul > li > a > span {
    font-family: MicrosoftYaHei;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    line-height: 30px;
    letter-spacing: 0px;
    color: #333333;
  }

  .floor1 > ul > li img {
    width: 100px;
    height: 100px;
  }

  .floor1 li p {
    padding-top: 10px;
    font-family: MicrosoftYaHei;
    font-size: 14px !important;
    font-weight: normal;
    font-stretch: normal;
    line-height: 22px;
    color: #828282 !important;
    text-align: left;
  }

  .u-page2 img {
    width: 385px !important;
    height: 223px;
  }

  .one {
    width: 383px !important;
  }

  .u-page2 span {
    width: 383px;
    background-color: #ffffff;
    border: solid 1px #dddddd;
    font-family: MicrosoftYaHei;
    font-size: 14px !important;
    padding: 10px 0 !important;
    color: #000000;
  }

  .u-page3 {
    border-bottom: 1px solid #ddd;
    padding-bottom: 20px;
  }

  .u-page3 h3 {
    font-family: MicrosoftYaHei;
    font-size: 18px;
    font-weight: bold;
    line-height: 30px;
    color: #000000;
    padding: 10px 0;
  }

  .u-page3 p {
    font-family: MicrosoftYaHei;
    text-align: left !important;
    padding-bottom: 20px !important;
    font-size: 14px !important;
    line-height: 24px !important;
    color: #666666 !important;
  }
</style>

<body>
<div class="header header-index" style="background: none;box-shadow:none">
  <div class="x-wp">
    <a href="/"><img class="logo f-fl" src="https://qiniu.easyapi.com/market/logo.svg"></a>
    <div class="navs f-fl">
        <span class="f-rel show_name">产品
          <div class="dis_show">
            <img class="down_img" src="/../static/images/info/narrow.png">
            <ul class="hover_color">
              <a href="/pages/product/doc.vue" class="a_link">
                <li>
                  <img class="icon_img" src="/../static/images/info/down_icon1.png">
                  <div class="dis_showtxt">
                    <p>文档管理</p>
                    <span>在线编辑API接口文档，强大的API接口测试功能，团队协作超便捷</span>
                  </div>
                </li>
              </a>
              <a href="/pages/product/gateway.vue" class="a_link">
                <li>
                  <img class="icon_img" src="/../static/images/info/down_icon2.png">
                  <div class="dis_showtxt">
                    <p>网关系统</p>
                    <span>企业API架构正确之选，轻松管理海量API，特有的接口容器功能更强大</span>
                  </div>
                </li>
              </a>
              <a href="/pages/product/test.vue" class="a_link">
                <li>
                  <img class="icon_img" src="/../static/images/info/down_icon3.png">
                  <div class="dis_showtxt">
                    <p>接口测试</p>
                    <span>在线API测试工具，快速完成接口测试任务，支持团队共同测试</span>
                  </div>
                </li>
              </a>
              <a href="/pages/product/interface.vue" class="a_link">
                <li>
                  <img class="icon_img" src="/../static/images/info/down_icon4.png">
                  <div class="dis_showtxt">
                    <p>接口服务</p>
                    <span>众多接口服务，满足开发的每一个环节，让开发更高效，让开发更高效</span>
                  </div>
                </li>
              </a>
              <a href="/pages/product/monitor.vue" class="a_link">
                <li>
                  <img class="icon_img" src="/../static/images/info/down_icon5.png">
                  <div class="dis_showtxt">
                    <p>监控系统</p>
                    <span>API监控实时反馈API状态，保障产品稳定性，提升运维响应速度</span>
                  </div>
                </li>
              </a>
              <a href="/pages/product/scene.vue" class="a_link">
                <li>
                  <img class="icon_img" src="/../static/images/info/down_icon6.png">
                  <div class="dis_showtxt">
                    <p>场景化服务</p>
                    <span>企业专注于核心业务开发，提供非核心标准化场景业务开发服务，性价比更高</span>
                  </div>
                </li>
              </a>
            </ul>
          </div>
        </span>
      <a href="/pages/infos/info/price.html">价格</a>
      <span class="f-rel show_names">私有化
          <div class="dis_show">
            <img class="down_img" src="/../static/images/info/narrow.png">
            <ul class="isShow">
              <a href="/pages/solution/portal.vue" class="a_link">
                <li>
                  <img class="icon_img" src="/../static/images/info/header-icon2.png">
                  <div class="dis_showtxt">
                    <p>API管理门户</p>
                    <span>API管理门户主要为开发企业搭建API门户，企业集中化API管理解决方案</span>
                  </div>
                </li>
              </a>
              <a href="/pages/solution/market.vue" class="a_link">
                <li>

                  <img class="icon_img" src="/../static/images/info/header-icon3.png">
                  <div class="dis_showtxt">
                    <p>API服务市场</p>
                    <span>推进企业数字化转型，构建联盟生态服务，统一企业的API服务进出口径</span>
                  </div>
                </li>
              </a>
              <a href="/pages/solution/open.vue" class="a_link">
                <li>

                  <img class="icon_img" src="/../static/images/info/header-icon1.png">
                  <div class="dis_showtxt">
                    <p>API开放平台</p>
                    <span>让企业的数据通过开放平台连接更多的可能性，实现上下游生态建设</span>
                  </div>
                </li>
              </a>
            </ul>
          </div>
        </span>
      <a href="https://market.easyapi.com" target="_blank">API市场</a>
    </div>
    <div class="side-navs">
      <a class="navlogo" href="https://account.easyapi.com/signup" id="register">注册</a>
      <!-- <a class="navlogo" href="https://account.easyapi.com/login" id="login">登录</a> -->
      <!-- id="console" -->
      <span class="f-rel nav" style="height: 50px">
          <p class="console " style="padding: 0 10px">控制台</p>
          <div class="show_console">
            <img class="console_narrow" src="/../static/images/info/narrow.png"/>
            <ul>
              <a href="https://doc.easyapi.com">
                <li>
                  <img class="console_icon" src="/../static/images/info/down_icon7.png">
                  <div class="dis_consoletxt">
                    <p>API管理</p>
                  </div>
                </li>
              </a>
              <a href="https://monitor.easyapi.com">
                <li>
                  <img class="console_icon" src="/../static/images/info/down_icon8.png">
                  <div class="dis_consoletxt">
                    <p>API监控</p>
                  </div>
                </li>
              </a>
              <a href="https://service.easyapi.com">
                <li>
                  <img class="console_icon" src="/../static/images/info/down_icon9.png">
                  <div class="dis_consoletxt">
                    <p>API服务</p>
                  </div>
                </li>
              </a>
              <a href="https://gateway.easyapi.com">
                <li>
                  <img class="console_icon" src="/../static/images/info/down_icon10.png">
                  <div class="dis_consoletxt">
                    <p>API网关</p>
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
              <img src="https://qiniu.easyapi.com/user/default.jpg!icon.jpg">
            </a>
            <ul class="avatarnav_down">
              <li>
                <a href="https://account.easyapi.com/notification/" style="color: #666">我的通知</a>
              </li>
              <li>
                <a href="https://account.easyapi.com/setting/data" style="color: #666">个人设置</a>
              </li>
              <li>
                <a href="https://account.easyapi.com/logout" style="color: #666">退出</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="page-index">
  <div class="u-page u-page1 f-cb">
    <div class="main wp">
      <div class="u-info" style=" margin: 0 auto;padding:172px 0;">
        <h1>前端开源计划</h1>
        <p>为您的公司打造私有化API管理门户，提升API管理效率</p>
        <div class="bg_white">
          <p>
            <span><a href="https://github.com/easyapi">前往GITHUB参与</a></span>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="clearfix floor1">
    <h1 style="font-size:36px;">为什么要加入？</h1>
    <ul>
      <li>
        <a href="/pages/product/doc.vue">
          <img src="../../static/images/info/github/open1.png">
        </a>
        <a href="/pages/product/doc.vue">
          <span class="font_w">提升前端技能</span>
          <p>可能为成为一款不断商业化的Vue代表之作，作为前端一起学习进步</p>
        </a>
      </li>
      <li>
        <a href="/pages/product/monitor.vue">
          <img src="../../static/images/info/github/open2.png">
        </a>
        <a href="/pages/product/monitor.vue">
          <span class="font_w">技术创造价值</span>
          <p>通过自己手中的技术，让产品给更多开发者带来价值，那种满足感无与伦比</p>
        </a>
      </li>
      <li>
        <a href="/pages/product/gateway.vue">
          <img src="../../static/images/info/github/open3.png">
        </a>
        <a href="/pages/product/gateway.vue">
          <span class="font_w">一份长期的事业</span>
          <p>EasyAPI致力于成为API领域的知名品牌，需要更多的伙伴一起来坚持这份长期事业</p>
        </a>
      </li>
      <li>
        <a href="/pages/product/market.vue">
          <img src="../../static/images/info/github/open4.png"></a>
        <a href="/pages/product/market.vue">
          <span class="font_w">认识更多朋友</span>
          <p>结交来自五湖四海的技术朋友，每年至少1次集体出行</p>
        </a>
      </li>
    </ul>
  </div>

  <div class="u-page u-page2 f-cb">
    <div class="ii">
      <h1 style="font-size:36px;padding-bottom:90px;">需要做什么？</h1>
      <div class="inn f-cb">
        <div class="one f-fl">
          <img src="../../static/images/info/github/1.png">
          <span>前端开源合伙人每周投入60小时</span>
        </div>
        <div class="one f-fr">
          <img src="../../static/images/info/github/2.png">
          <span>前端开源志愿者每月参与2个以上ISSUE</span>
        </div>
      </div>
    </div>
  </div>


  <div class="u-page u-page2 f-cb" style="background: #fff;">
    <div class="ii">
      <h1 style="font-size:36px;padding-bottom:90px;">你将获得什么？</h1>
      <div class="inn f-cb">
        <div class="one f-fl">
          <img src="../../static/images/info/github/3.png">
          <span>前端开源合伙人获得每小时66元分成</span>
        </div>
        <div class="one f-fr">
          <img src="../../static/images/info/github/4.png">
          <span>前端开源志愿者获得文档管理免费试用特权</span>
        </div>
      </div>
    </div>
  </div>

  <div class="u-page u-page3 f-cb" style="background:#fafafa">
    <div class="ii">
      <h1 style="font-size:36px;padding-bottom:30px;">常见问题</h1>
      <h3>开源的版权怎么区分？</h3>
      <p>EasyAPI产品上线后，为了满足广大开发者用户的使用，特推出前端开源产品，为了充分发挥我们的用户群体优势，希望大家共同完善EasyAPI产品，EasyAPI自始至终版权均为EasyAPI运营公司
        所有，EasyAPI给予开发者投入回报包括收入分成，免费试用特权，旅游奖励。</p>
      <h3>开源的版权怎么区分？</h3>
      <p>EasyAPI产品上线后，为了满足广大开发者用户的使用，特推出前端开源产品，为了充分发挥我们的用户群体优势，希望大家共同完善EasyAPI产品，EasyAPI自始至终版权均为EasyAPI运营公司
        所有，EasyAPI给予开发者投入回报包括收入分成，免费试用特权，旅游奖励。</p>
    </div>
  </div>
</div>

<div class="footer clearfix" style="background: #fff;">
  <p>
    <a href="/pages/infos/info/about.html">关于我们</a>
    <a href="/pages/infos/info/together.html">合作伙伴</a>
    <a href="/pages/infos/info/contact.html">联系我们</a>
    <a href="/pages/infos/info/donate.html">支持我们</a>
    <a href="/pages/infos/info/changlog.html">平台动态</a>
  </p>
  <p>Copyright © 2015～2019 上海帮趣网络技术有限公司</p>
  <p><a href="http://www.miitbeian.gov.cn" target="_blank">沪ICP备19007521号</a></p>
</div>

<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript" src="https://cdn.bootcss.com/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
<script type="text/javascript">
  if ($.cookie("authenticationToken")) {
    $.ajax({
      method: 'GET',
      url: 'https://account-api.easyapi.com/api/account',
      beforeSend: function (request) {
        request.setRequestHeader("Authorization", "Bearer " + ($.cookie("authenticationToken")));
      },
      success: function (data) {
        $("#photo").attr("src", data.photo + "!icon.jpg");
        $(".avatar").removeClass('dis_hide');
        $("#login").addClass('dis_hide');
        $("#register").addClass('dis_hide');
        $("#console").removeClass('dis_hide');
      }
    });
  }
</script>
</body>

</html>

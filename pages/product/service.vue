<!DOCTYPE html>
<html lang="zh">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <title>API自动化测试 - EasyAPI服务平台</title>
  <meta name="keywords" content="API文档管理,API管理系统,API接口管理系统,API管理平台,API管理,API,API接口,接口管理,API接口管理,API监控,API测试,API服务"/>
  <meta name="description"
        content="EasyAPI 简单，好用的API管理系统，移动互联网时代，每个应用都需要后台API支撑，通过API管理系统，后台与APP开发者进行很好的沟通，还在用Word文档写API吗，OUT了！"/>
  <script src="../../static/style/style.js"></script>
</head>
<style>
  .avatarnav_down li a:hover {
    color: #18c1d6;
  }

  .navs .show_name .dis_show .hover_color a li:hover p {
    color: #2EACCB;
  }

  .navs .show_name .dis_show .hover_color a li:hover span {
    color: #999
  }

  .navs .show_names .dis_show .isShow a li:hover p {
    /* color: #de9000; */
    color: #2EACCB;

  }

  .navs .show_names .dis_show .isShow a li:hover span {
    color: #999
  }

  .side-navs .nav .show_console ul a li:hover .dis_consoletxt p {
    color: #2EACCB;
    font-weight: bold;
  }

  .dis_showtxt p:hover {
    color: #2EACCB !important;
  }

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

  .u-banner-bg {
    background-image: url('../static/images/info/test_1.png');
    background-size: cover;
    height: 520px;
  }
</style>

<body>

<div class="header header-op">
  <div class="x-wp">
    <a href="/"><img class="logo f-fl" src="https://qiniu.easyapi.com/market/logo.svg"></a>
    <div class="navs f-fl">
        <span class="f-rel">产品

          <div class="dis_show">
            <img class="down_img" src="../../static/images/info/narrow.png">

            <ul>
              <a href="/pages/productroduct/doc.html" class="a_link">
                <li>
                  <img class="icon_img" src="/static/images/info/down_icon1.png">
                  <div class="dis_showtxt">
                    <p>文档管理</p>
                    <span>在线API测试工具，快速完成接口测试任务，支持团队共同测试</span>
                  </div>
                </li>
              </a>
              <a href="/pages/productroduct/gateway.html" class="a_link">
                <li>

                  <img class="icon_img" src="/static/images/info/down_icon2.png">
                  <div class="dis_showtxt">
                    <p>网关系统</p>
                    <span>企业API架构正确之选，轻松管理海量API，特有的接口容器功能更强大</span>
                  </div>
                </li>
              </a>
              <a href="/pages/productroduct/test.html" class="a_link">
                <li>
                  <img class="icon_img" src="/static/images/info/down_icon3.png">
                  <div class="dis_showtxt">
                    <p>接口测试</p>
                    <span>在线API测试工具，快速完成接口测试任务，支持团队共同测试</span>
                  </div>
                </li>
              </a>
              <a href="/pages/productroduct/interface.html" class="a_link">
                <li>
                  <img class="icon_img" src="/static/images/info/down_icon4.png">
                  <div class="dis_showtxt">
                    <p>接口服务</p>
                    <span>众多接口服务，满足开发的每一个环节，让开发更高效</span>
                  </div>
                </li>
              </a>
              <a href="/pages/productroduct/monitor.html" class="a_link">
                <li>
                  <img class="icon_img" src="/static/images/info/down_icon5.png">
                  <div class="dis_showtxt">
                    <p>监控系统</p>
                    <span>API监控实时反馈API状态，保障产品稳定性，提升运维响应速度</span>
                  </div>
                </li>
              </a>
              <a href="/pages/productroduct/scene.html" class="a_link">
                <li>
                  <img class="icon_img" src="/static/images/info/down_icon6.png">
                  <div class="dis_showtxt">
                    <p>场景化服务</p>
                    <span>企业专注于核心业务开发，提供非核心标准化场景业务开发服务，性价比更高</span>
                  </div>
                </li>
              </a>
            </ul>

          </div>
        </span>
      <a href="/pages/info/price.vue">价格</a>
      <span class="f-rel">私有化
          <div class="dis_show">
            <img class="down_img" src="/static/images/info/narrow.png">
            <ul class="isShow">
              <a href="/pages/solution/portal.vue" class="a_link">
                <li>
                  <img class="icon_img" src="/static/images/info/header-icon2.png">
                  <div class="dis_showtxt">
                    <p>API管理门户</p>
                    <span>API管理门户主要为开发企业搭建API门户，企业集中化API管理解决方案</span>
                  </div>
                </li>
              </a>
              <a href="/pages/solution/market.vue" class="a_link">
                <li>

                  <img class="icon_img" src="/static/images/info/header-icon3.png">
                  <div class="dis_showtxt">
                    <p>API服务市场</p>
                    <span>推进企业数字化转型，构建联盟生态服务，统一企业的API服务进出口径</span>
                  </div>
                </li>
              </a>
              <a href="/pages/solution/open.vue" class="a_link">
                <li>

                  <img class="icon_img" src="/static/images/info/header-icon1.png">
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
      <span class="f-rel nav" style="height: 50px">
          <p class="console" style="padding: 0 15px">控制台</p>
          <div class="show_console">
            <img class="console_narrow" src="/static/images/info/narrow.png"/>
            <ul>
              <a href="https://doc.easyapi.com">
                <li>
                  <img class="console_icon" src="/static/images/info/down_icon7.png">
                  <div class="dis_consoletxt">
                    <p>API文档</p>
                  </div>
                </li>
              </a>
              <a href="https://monitor.easyapi.com">
                <li>
                  <img class="console_icon" src="/static/images/info/down_icon8.png">
                  <div class="dis_consoletxt">
                    <p>API监控</p>
                  </div>
                </li>
              </a>
              <a href="https://service.easyapi.com">
                <li>
                  <img class="console_icon" src="/static/images/info/down_icon9.png">
                  <div class="dis_consoletxt">
                    <p>API服务</p>
                  </div>
                </li>
              </a>
              <a href="https://gateway.easyapi.com">
                <li>
                  <img class="console_icon" src="/static/images/info/down_icon10.png">
                  <div class="dis_consoletxt">
                    <p>API网关</p>
                  </div>
                </li>
              </a>
            </ul>
          </div>
        </span>
      <div class="navs f-fr dis_hide" id="avatar">
        <div class="upbx">
          <a class="f-fr" href="/project/" style="margin-top: -20px;"><img
            src="https://qiniu.easyapi.com/user/default.jpg!icon.jpg"></a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="u-banner-bg">
  <div class="x-wp">
    <div class="title">
      <h1>API自动化测试</h1>
      <p>API测试是对移动端开发人员负责，我们支持粗放式测试，支持精细化自定义测试<br>
        协助您快速测试API接口，高标准交付</p>
    </div>
  </div>
</div>

<div class="u-infobox">
  <div class="u-title">您的API总有问题存在</div>
  <div class="oneimg wp clearfix">
    <img src="../../static/images/info/test_2.png">
  </div>
</div>

<div class="u-infobox bgfa" style="background:#eff9fc">
  <div class="u-title">测试工具</div>
  <div class="u-inro">致力于成为中国最好的API测试工具</div>
  <div class="oneimg">
    <img src="../../static/images/info/test_3.png">
  </div>
</div>

<div class="u-infobox">
  <div class="u-title">产品特色</div>
  <ul class="u-tese x-wp f-cb">
    <li>
      <i class="iconfont icon-xingxing"></i>
      <h3>对接文档管理</h3>
      <p>如果您在线管理接口，那么测试易如反掌</p>
    </li>
    <li>
      <i class="iconfont icon-xingxing"></i>
      <h3>测试报告通知</h3>
      <p>为您定制的自动化测试报告，发送结果到邮箱</p>
    </li>
    <li>
      <i class="iconfont icon-xingxing"></i>
      <h3>接口示例管理</h3>
      <p>创建接口测试示例，方便移动端快速测试，参数传递更清楚</p>
    </li>
    <li>
      <i class="iconfont icon-xingxing"></i>
      <h3>历史测试记录一览</h3>
      <p>还怕忘记测试的参数是什么吗？测试历史记录随时随地查看，方便多人开发</p>
    </li>
    <li>
      <i class="iconfont icon-xingxing"></i>
      <h3>参数支持JSON格式</h3>
      <p>支持格式化输入参数，并转换为JSON参数进行测试</p>
    </li>
    <li>
      <i class="iconfont icon-xingxing"></i>
      <h3>缩短测试时间</h3>
      <p>为了提供自动化测试，方便测试工程师频繁测试，浪费时间成本</p>
    </li>
  </ul>
</div>

<div class="u-infofoot">
  <a href="" class="btn">立即体验更多特性</a>
  <p>为了更多的开发我们的产品，API测试适当收费，感谢支持</p>
</div>

<div class="footer clearfix">
  <p>
    <a href="/pages/info/about.vue">关于我们</a>
    <a href="/pages/info/together.vue">合作伙伴</a>
    <a href="/pages/info/contact.vue">联系我们</a>
    <a href="/pages/info/donate.vue">支持我们</a>
    <a href="/pages/info/changlog.vue">平台动态</a>
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
        $("#register").addClass('dis_hide');
        $("#photo").attr("src", data.photo + "!icon.jpg");
        $("#avatar").removeClass('dis_hide');
      }
    });
  }
</script>

</body>

</html>

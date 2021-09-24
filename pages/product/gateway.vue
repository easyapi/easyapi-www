<template>
  <div class="u-banner-bg">
    <div class="x-wp">
      <div class="title">
        <h1>EasyAPI网关系统</h1>
        <p>企业API安全基础构架正确之选</p>
        <!-- <p>认证、鉴权、安全、流量控制、缓存、接口容器</p> -->
      </div>
    </div>
  </div>
  <div class="u-infobox f-border-b">
    <div class="u-title">构建面向未来的 API 网关</div>
    <div class="u-inro">API网关是数据及系统的集成的基础设施，支持将云端应用及数据通过简单、快速地配置转化成 API<br>
      同时提供安全独立的数据门户以及统一管控的开发者中心，帮助用户实现数据开放及共享
    </div>
    <ul class="u-iconui x-wp">
      <li>
        <img src="../../static/images/info/gateway_icon1.png">
        <span>安全保障</span>
        <p>用户鉴权身份验证 <br>签名防止请求篡改<br>调用权限审核把控
        </p>
      </li>
      <li>
        <img src="../../static/images/info/gateway_icon2.png">
        <span>独立访问</span>
        <p>集成数据独享存储<br>开放门户单独部署<br>自定义域名及门户
        </p>
      </li>
      <li>
        <img src="../../static/images/info/gateway_icon3.png">
        <span>简单应用</span>
        <p>自动实现主机部署<br>零代码配置化操作<br>自动实现接口SDK
        </p>
      </li>
      <li>
        <img src="../../static/images/info/gateway_icon4.png">
        <span>场景灵活</span>
        <p>多种集成业务场景<br>功能模块按需配置<br>支持多数据源集成
        </p>
      </li>
    </ul>
  </div>
  <div class="u-infobox  f-border-b">
    <div class="u-title">专注API网关</div>
    <div class="u-igateway f-cb">
      <img class="f-fr img_w" src="../../static/images/info/gateway_2.png">
      <div class="text f-fl">
        <p class="f_2 "><img src="../../static/images/info/gateway_icon5.png">快速创建API接口<br>
          <img src="../../static/images/info/gateway_icon6.png">自动是吸纳数据网关<br>
          <img src="../../static/images/info/gateway_icon7.png">API接口网关版本管理<br>
          <img src="../../static/images/info/gateway_icon8.png">数据可根据需要返回
        </p>
      </div>
    </div>
  </div>

  <div class="u-infobox ">
    <div class="u-title">EasyAPI网关的价值</div>
    <div class="u-inro">
      让API跟安全，更灵活
    </div>
    <ul class="u-iconui x-wp">
      <li>
        <img src="../../static/images/info/gateway_icon9.png">
        <span>降低成本</span>
      </li>
      <li>
        <img src="../../static/images/info/gateway_icon10.png">
        <span>提高效率</span>
      </li>
      <li>
        <img src="../../static/images/info/gateway_icon11.png">
        <span>海量规模</span>
      </li>
      <li>
        <img src="../../static/images/info/gateway_icon12.png">
        <span>轻松监控</span>
      </li>
      <li>
        <img src="../../static/images/info/gateway_icon13.png">
        <span>简化开发</span>
      </li>
      <li>
        <img src="../../static/images/info/gateway_icon14.png">
        <span>授权灵活</span>
      </li>
      <li>
        <img src="../../static/images/info/gateway_icon15.png">
        <span>无缝对接</span>
      </li>
      <li>
        <img src="../../static/images/info/gateway_icon16.png">
        <span>融合开发</span>
      </li>
    </ul>
  </div>

  <div class="u-infofoot">
    <p>为了更多的开发我们的产品，API测试适当收费，感谢支持</p>
    <a href="https://gateway.easyapi.com" class="btn">立即使用EasyAPI网关</a>
  </div>

</template>

<script>
export default {
  name: 'Gateway',
  head() {
    return {
      title: '首页 - EasyAPI服务平台',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'EasyAPI 简单，好用的API管理系统，移动互联网时代，每个应用都需要后台API支撑，通过API管理系统，后台与APP开发者进行很好的沟通，还在用Word文档写API吗，OUT了！'
        },
        {
          hid: 'keyword',
          name: 'keyword',
          content: 'API文档管理,API管理系统,API接口管理系统,API管理平台,API管理,API,API接口,接口管理,API接口管理,API监控,API测试,API服务'
        }
      ]
    }
  },
  mounted() {
    if ($.cookie("authenticationToken")) {
      $.ajax({
        method: 'GET',
        url: 'https://account-api.easyapi.com/api/account',
        beforeSend: function (request) {
          request.setRequestHeader("Authorization", "Bearer " + ($.cookie("authenticationToken")));
        },
        success: function (data) {
          $("#register").addClass('dis_hide');
          $("#avatar").removeClass('dis_hide');
          $("#photo").attr("src", data.photo + "!icon.jpg");
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
.f_2 {
  font-size: 1.9rem !important;
  padding-left: 80px;
}

.img_w {
  width: 380px;
  padding-right: 200px !important;
}

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

.u-infobox .u-igateway .text {
  padding-top: 15px;
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
  background-image: url('../../static/images/product/bg_gateway.png');
  height: 520px;
  background-size: 100% 100%;
}
</style>

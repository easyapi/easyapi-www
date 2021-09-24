<template>

  <div class="u-banner-bg">
    <div class="x-wp">
      <div class="sysinfo f-tac">
        <h1>API接口服务</h1>
        <p>提供专业的API数据服务，打造一站式的接口管理</p>
        <a href="https://market.easyapi.com" class="bug_btn">前往服务市场</a>
        <div class="more">
          旗下站点 APIMarket
        </div>
      </div>
    </div>
  </div>

  <div class="u-infobox ">
    <div class="u-title">精选API接口服务</div>
    <div class="u-inro">通过整合不同接口服务，提供标准化接口文档 <br>
      未来同一API接口可绑定多个供应商，随时切换，真正实现API接口的100%可用
    </div>
    <ul class="u-iconui one x-wp">
      <li>
        <img src="../../static/images/info/api_icon1.png">
        <span>短信验证码</span>
      </li>
      <li>
        <img src="../../static/images/info/api_icon2.png">
        <span>加油卡充值</span>
      </li>
      <li>
        <img src="../../static/images/info/api_icon4.png">
        <span>中文分词</span>
      </li>
      <li>
        <img src="../../static/images/info/api_icon3.png">
        <span>天气预报</span>
      </li>
      <li>
        <img src="../../static/images/info/api_icon5.png">
        <span>流量充值</span>
      </li>
    </ul>
  </div>
  <div class="u-infobox bgfa nbottom" style="margin-bottom: 100px;">
    <div class="u-title">统一的API服务管理</div>
    <div class="u-inro">实时反馈APP与API的交互情况，请求参数，返回结果，瞬间重现问题场景 <br>
      实现发现问题，快速解决问题
    </div>
    <div class="oneimg">
      <img src="../../static/images/info/api_img.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
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
.bug_btn {
  background: #fff;
  display: inline-block;
  color: #05a1f2;
  margin: 10px auto;
  height: 46px;
  font-size: 16px;
  line-height: 46px;
  padding: 0 40px;
  border-radius: 5px;

}

.bug_btn:hover {
  color: rgb(5, 161, 242, 0.7);
}

.bug_btn:active {
  color: rgb(5, 161, 242, 0.6);
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
  background-image: url('../../static/images/product/bg_interface.png');
  height: 520px;
  background-size: 100% 100%;
}
</style>

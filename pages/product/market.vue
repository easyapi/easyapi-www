<template>

  <div class="u-banner-bg">
    <div class="x-wp">
      <div class="sysinfo f-tac">
        <h1>API服务市场</h1>
        <p>为您的企业搭建API服务市场，建立自己的开放合作的行业生态圈</p>
        <a href="/system/order/add" class="bug_btn">立刻部署API服务市场</a>
        <div class="more">
          独立第三方API服务市场解决方案提供商
        </div>
      </div>
    </div>
  </div>

  <div class="u-infobox" style="padding-bottom: 0">
    <div class="u-title">最专业API服务市场供应商</div>
    <div class="u-inro">我们是专一的API团队，我们有成熟的API服务市场运营经验 <br>
      基于我们的经验，为您的公司快速架构API服务市场，助力贵公司行业生态建设
    </div>
    <div class="u-igateway f-cb">
      <div style="width:600px;margin-right: 0;height:400px" class="f-fr img">
        <img style="width: 100%" src="../../static/images/info/market_img1.png">
      </div>

      <div class="text f-fl" style="margin-top: 0px;">
        <p style="color: #000;font-size: 24px;">服务市场门户</p>
        <p>
          <img style="width: 6px;height: 6px;" src="../../static/images/info/market_tag.png">
          实现API服务分类浏览，API服务搜索<br>
          <img style="width: 6px;height: 6px;" src="../../static/images/info/market_tag.png">了解API服务详情，API接口信息

        </p>
      </div>
    </div>
  </div>


  <div class="u-infobox" style="background-color: #eee;padding-bottom: 0">

    <div class="u-igateway f-cb">
      <div style="width: 600px;margin-right: 0;height:400px;" class="f-fl img">
        <img style="width: 100%;" src="../../static/images/info/market_img2.png">
      </div>
      <div class="text f-fr" style="margin-top: 0px;">
        <p style="color: #000;font-size: 24px;">开发者中心</p>
        <p><img style="width: 6px;height: 6px;" src="../../static/images/info/market_tag.png">申请API服务，创建应用，获取密钥信息
          <br>
          <img style="width: 6px;height: 6px;" src="../../static/images/info/market_tag.png">API服务充值与续费，API调用请求明细

        </p>
      </div>
    </div>
  </div>

  <div class="u-infobox" style="padding-bottom: 0">
    <div class="u-igateway f-cb">
      <div style="width: 600px;margin-right: 0;height:400px;" class="f-fr img">
        <img style="width: 100%;margin-top: -6px;" src="../../static/images/info/market_img3.png">
      </div>
      <div class="text f-fl" style="margin-top: 0px;">
        <p style="color: #000;font-size: 24px;">服务商管理中心</p>
        <p><img style="width: 6px;height: 6px;" src="../../static/images/info/market_tag.png">申请成为平台服务商，实现API服务发布
          <br>
          <img style="width: 6px;height: 6px;" src="../../static/images/info/market_tag.png">了解自己的API服务销售业务开展情况

        </p>
      </div>
    </div>
  </div>


  <div class="u-infofoot">
    <h3>想了解更多的内容</h3>
    <div class="codebox">
      <div class="code f-fl">
        <img width="120" src="../../static/images/info/leida_wechat.png">
        <p>微信联系</p>
      </div>
      <div class="code f-fr">
        <img width="120" src="../../static/images/info/leida_qq.png">
        <p>QQ联系</p>
      </div>
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
  color: #2D77DD;
  height: 46px;
  line-height: 46px;
  margin: 10px auto;
  font-size: 16px;
  padding: 0 40px;
  border-radius: 5px;

}

.bug_btn:hover {
  color: rgb(44, 117, 220, 0.7);
}

.bug_btn:active {
  color: rgb(45, 119, 221, 0.6);
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
  background-image: url('../../static/images/solution/bg_market.png');
  background-size: cover;
  height: 520px;
}
</style>

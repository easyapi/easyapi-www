<template>>

  <div class="u-banner-bg">
    <div class="x-wp">
      <div class="sysinfo f-tac">
        <h1>API场景化服务</h1>
        <p>EasyAPI顺应技术开发趋势，推出通过API实现特定的场景化服务</p>
        <a href="/system/order/add" class="bug_btn">前往服务市场</a>
        <div class="more">
          体验API场景化服务的魅力
        </div>
      </div>
    </div>
  </div>
  <div class="u-infobox">
    <div class="u-title">什么是API场景化服务</div>
    <div class="u-inro">提供完善的后端管理服务，前端通过API实现定制化的的一种服务<br>
      我们的目标是为提供企业提供非核心功能标准化产品服务
    </div>
    <ul class="u-iconui  x-wp">
      <li class="u-display">
        <img src="../../static/images/info/open_icon19.png">
        <div class="lefttext">
          <p>SaaS服务</p>
          <span>传统的SaaS服务灵活方便是它的优点，但是不可定制化，不能满足企业的个性化展示需求</span>
        </div>
      </li>
      <li class="u-display">
        <img src="../../static/images/info/open_icon20.png">
        <div class="lefttext">
          <p>API场景化服务</p>
          <span>可选择满足自己的场景化服务，如果前端展示需要修改，和方便，缺点需要一点开发工作量</span>
        </div>
      </li>
      <li class="u-display">
        <img src="../../static/images/info/open_icon21.png">
        <div class="lefttext">
          <p>自主开发</p>
          <span>优点完全可定制化，企业想要什么就开发什么，缺点短期开发出来的产品，问题较多，并且开发成本较大</span>
        </div>
      </li>
    </ul>
  </div>

  <div class="u-infobox " style="background-color: #f8f8f8">
    <div class="u-title">我们正在做的场景化服务</div>
    <div class="u-inro"></div>
    <ul class="u-iconui x-wp">
      <li>
        <img src="../../static/images/info/open_icon11.png">
        <span>聚合通知</span>
      </li>
      <li>
        <img src="../../static/images/info/open_icon12.png">
        <span>会员营销</span>
      </li>
      <li>
        <img src="../../static/images/info/open_icon13.png">
        <span>工单系统</span>
      </li>
      <li>
        <img src="../../static/images/info/open_icon14.png">
        <span>快速提现</span>
      </li>
      <li>
        <img src="../../static/images/info/open_icon15.png">
        <span>微商城</span>
      </li>
      <li>
        <img src="../../static/images/info/open_icon16.png">
        <span>积分商城</span>
      </li>
      <li>
        <img src="../../static/images/info/open_icon17.png">
        <span>邀请好友</span>
      </li>
      <li>
        <img src="../../static/images/info/open_icon18.png">
        <span>新人有礼</span>
      </li>
    </ul>
  </div>

  <div class="u-infofoot">
    <a href="" class="btn">提交新的场景化服务需求</a>
    <p>如果您的企业人员紧张，可以把非核心标准化功能，提交给我们来开发，满足您的企业整体开发需求</p>
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
  height: 46px;
  line-height: 46px;
  margin: 10px auto;
  font-size: 16px;
  padding: 0 40px;
  border-radius: 5px;

}

.bug_btn:hover {
  color: rgb(45, 119, 221, 0.7);
}

.bug_btn:active {
  color: rgb(44, 117, 220, 0.6);
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
  background-image: url('../../static/images/product/bg_scene.png');
  height: 520px;
  background-size: cover;
}
</style>

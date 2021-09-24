<template>

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

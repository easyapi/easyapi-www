<template>

  <div class="u-banner-bg">
    <div class="x-wp">
      <div class="title">
        <h1>API自动化测试</h1>
        <p>API测试是对移动端开发人员负责，我们支持粗放式测试，支持精细化自定义测试
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
    <div class="u-tese-wrap">
      <ul class="u-tese x-wp text_img_auto  f-cb add_img_line">
        <li>
          <!-- <i class="iconfont icon-xingxing"></i> -->
          <div class="d_inline_block line_tips">
            <img src="../../static/images/info/document.png" alt="未加载">
            <div class="d_inline_block " style="padding-left: 15px;">
              <h3>对接文档管理</h3>
              <p>如果您在线管理接口，那么测试易如反掌</p>
            </div>
          </div>
        </li>
        <li>
          <!-- <i class="iconfont icon-xingxing"></i> -->
          <div class="d_inline_block line_tips">
            <img src="../../static/images/info/notice.png" alt="未加载">
            <div class="d_inline_block " style="padding-left: 15px;">
              <h3>测试报告通知</h3>
              <p>为您定制的自动化测试报告，发送结果到邮箱</p>
            </div>
          </div>

        </li>
        <li>
          <!-- <i class="iconfont icon-xingxing"></i> -->
          <div class="d_inline_block line_tips">
            <img src="../../static/images/info/manange.png" alt="未加载">
            <div class="d_inline_block" style="padding-left: 15px;">
              <h3>接口示例管理</h3>
              <p>创建接口测试示例，方便移动端快速测试，参数传递更清楚</p>
            </div>
          </div>
        </li>
        <li>
          <!-- <i class="iconfont icon-xingxing"></i> -->
          <div class="d_inline_block line_tips">
            <img src="../../static/images/info/history.png" alt="未加载">
            <div class="d_inline_block" style="padding-left: 5px;">
              <h3>历史测试记录一览</h3>
              <p>还怕忘记测试的参数是什么吗？随时随地查看，方便多人开发</p>
            </div>
          </div>
        </li>
        <li>
          <!-- <i class="iconfont icon-xingxing"></i> -->
          <div class="d_inline_block line_tips">

            <img src="../../static/images/info/sopport.png" alt="未加载">
            <div class="d_inline_block" style="padding-left: 15px;">

              <h3>参数支持JSON格式</h3>
              <p>支持格式化输入参数，并转换为JSON参数进行测试</p>
            </div>
          </div>
        </li>
        <li>

          <!-- <i class="iconfont icon-xingxing"></i> -->
          <div class="d_inline_block line_tips">

            <img src="../../static/images/info/lessTime.png" alt="未加载">
            <div class="d_inline_block" style="padding-left: 15px;">

              <h3>缩短测试时间</h3>
              <p>为了提供自动化测试，方便测试工程师频繁测试，浪费时间成本</p>
            </div>
          </div>
        </li>
      </ul>
    </div>

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
.add_img_line li {
  /* width: 46%!important; */
}

.add_img_line li img {
  /* display: inline-block;
  width: 51px;
  padding-right: 34px;
  margin-right: -44px; */
  width: 50px;
  height: 50px;
  box-sizing: border-box;
}

.d_inline_block {
  display: inline-block;
}

.line_tips {
  padding: 20px 10px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  /* padding-right: 100px; */
  width: 512px;
}

.text_img_auto {
  /* text-align: center; */
  /* padding: 40px 20% 40px 15%!important; */
}

.u-infobox .u-tese {
  padding: unset;
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

.u-infobox .u-tese li {
  width: auto;
  margin-right: 30px;
}

.u-tese-wrap {
  width: 1104px;
  margin: 0 auto;
  overflow: hidden;
}

.u-tese-wrap ul {
  width: 1150px;
  margin: 0 auto;
}

.u-banner-bg .title {
  padding-top: 184px;
}

.u-banner-bg {
  background-image: url('../../static/images/product/bg_test.png');
  height: 520px;
  background-size: cover;
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

.u-infobox .u-title {
  margin-bottom: 60px;
}
</style>

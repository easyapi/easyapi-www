<template>>

  <div class="u-banner-bg">
    <div class="x-wp">
      <div class="sysinfo">
        <h1>EasyAPI接口监控系统</h1>
        <p>专注API接口监控，让您的API接口更稳定，与APP更紧密</p>
        <a href="https://monitor.easyapi.com" class="bug_btn">立即使用API监控</a>
        <div class="more">
          <a href="https://help.easyapi.com/monitor/sdk">SDK下载</a> |
          <a href="https://help.easyapi.com/monitor/changelog">更新历史</a>
        </div>
      </div>
    </div>
  </div>


  <div class="u-infobox bgfa f-border-b">
    <div class="u-title">接口性能分析</div>
    <div class="u-inro">分析App对应的API接口请求性能，包含HTTP响应时间、吞吐率、HTTP错误率，解析崩溃率分析等等<br>
      帮您快速优化后端服务性能
    </div>
    <div class="oneimg">
      <img src="../../static/images/info/monitor_2.png">
    </div>
  </div>

  <div class="u-infobox bgfa f-border-b">
    <div class="u-title">业务风险降低</div>
    <div class="u-inro">实时反馈APP与API的交互情况，请求参数，返回结果，瞬间重现问题场景 <br>
      实现发现问题，快速解决问题
    </div>
    <div class="oneimg">
      <img src="../../static/images/info/monitor_3.png">
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
  color: #30a6d7;
  height: 46px;
  line-height: 46px;
  margin: 10px auto;
  font-size: 16px;
  padding: 0 40px;
  border-radius: 5px;

}

.bug_btn:hover {
  color: rgb(48, 166, 215, 0.7);
}

.bug_btn:active {
  color: rgb(48, 166, 215, 0.6);
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

.u-banner-bg .sysinfo {
  padding-top: 154px;
}

.u-banner-bg {
  background-image: url('../../static/images/product/bg_monitor.png');
  background-size: cover;
  height: 520px;
}

.u-banner-bg .sysinfo h1 {
  margin-bottom: 29px;
}
</style>

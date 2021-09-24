<template>
  <div class="u-banner-bg">
    <div class="x-wp">
      <div class="sysinfo f-tac">
        <h1>API管理门户</h1>
        <p>为您的公司打造私有化API管理门户，提升API管理效率</p>
        <a href="/pages/info/contact.vue" class="bug_btn">立即提升API管理水平</a>
        <div class="more">
          独立第三方API开放平台解决方案提供商
        </div>
      </div>
    </div>
  </div>

  <div class="u-infobox ">
    <div class="u-title">什么是API管理门户</div>
    <div class="u-inro">API管理门户主要为开发企业搭建API门户，核心功能包括API文档管理、API测试工具、API监控系统等服务<br>
      对于大中型开发团队，API内部管理较注重隐私，特推出私有化版本
    </div>
    <ul class="u-iconui one x-wp">
      <li>
        <img src="../../static/images/info/open_icon6.png">
        <span>API编辑</span>
      </li>
      <li>
        <img src="../../static/images/info/open_icon7.png">
        <span>API浏览</span>
      </li>
      <li>
        <img src="../../static/images/info/open_icon8.png">
        <span>API测试</span>
      </li>
      <li>
        <img src="../../static/images/info/open_icon9.png">
        <span>API监控</span>
      </li>
      <li>
        <img src="../../static/images/info/open_icon10.png">
        <span>API门户</span>
      </li>
    </ul>
  </div>

  <div class="u-infobox bgfa bg_img" style="background-image:url('../../static/images/solution/bg_portal2.png')">
    <div class="u-title f-c-white">轻量级环境部署</div>
    <div class="u-inro f-c-white">基于云服务器环境轻量级部署，前端源码开放，可自由修改符合自己公司的API门户风格
      立刻让自己公司的API管理更具有效率
    </div>
    <div class="oneimg">
      <img src="../../static/images/info/open_3.png">
    </div>
  </div>

  <div class="u-infobox bgfa">
    <div class="u-title">客户案例</div>
    <div class="u-inro">我们始终坚持为客户提供优质的服务</div>
    <div class="u-casebox" style="position:relative;">
      <div class=" arrow_bug left-arrow">
        <
      </div>
      <div class="thisroll">
        <div class="item">
          <div class="box">
            <img src="https://static.easyapi.com/images/app/yinwan.png">
            <span>银湾社区开放平台</span>
          </div>
          <div class="u-lay">
            <img src="https://static.easyapi.com/images/app/yinwan.png">
            <h4>银湾社区开放平台</h4>
            <span class="line"></span>
            <p>近千个小区的数据，开放给第三方合作伙伴</p>
          </div>
        </div>
        <div class="item">
          <div class="box">
            <img src="https://static.easyapi.com/images/app/key.png">
            <span>银钥匙物业联盟开放平台</span>
          </div>
          <div class="u-lay">
            <img src="https://static.easyapi.com/images/app/key.png">
            <h4>银钥匙物业联盟开放平台</h4>
            <span class="line"></span>
            <p>银钥匙物业联盟拥有会员企业1000家，通过API开放平台实现数据进行互联互通</p>
          </div>
        </div>
        <div class="item">
          <div class="box">
            <img src="https://static.easyapi.com/images/app/gl.png">
            <span>国联供应链API开放平台</span>
          </div>
          <div class="u-lay">
            <img src="https://static.easyapi.com/images/app/gl.png">
            <h4>国联供应链API开放平台</h4>
            <span class="line"></span>
            <p>国联供应链服务需要整合上下游资源，通过API开放平台打通上下游资源</p>
          </div>
        </div>
        <div class="item">
          <div class="box">
            <img src="https://static.easyapi.com/images/app/jf_logo.png">
            <span>中国家纺城API开放平台</span>
          </div>
          <div class="u-lay">
            <img src="https://static.easyapi.com/images/app/jf_logo.png">
            <h4>中国家纺城API开放平台</h4>
            <span class="line"></span>
            <p>打造世界一流的家纺线上API平台</p>
          </div>
        </div>
      </div>
      <div class=" arrow_bug right-arrow"> ></div>
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
    $(document).ready(function () {
      $(".thisroll").owlCarousel({
        items: 4,
        dots: false,
        //                nav: true
      });
    });
  }
}
</script>

<style lang="less" scoped>
.bug_btn {
  background: #fff;
  display: inline-block;
  color: #036597;
  height: 40px;
  line-height: 40px;
  margin: 25px auto 10px;
  font-size: 16px;
  padding: 0 40px;
  border-radius: 5px;

}

.bug_btn:hover {
  color: rgb(3, 101, 151, 0.7);
}

.bug_btn:active {
  color: rgb(3, 101, 151, 0.6);
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

.arrow_bug {
  font-size: 20px;
  width: 22px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 4px;
  background: #DFE5E9;
  color: #8B9EB2;
  cursor: pointer;
}

.left-arrow {
  position: absolute;
  left: -28px;
  top: 140px;
}

.right-arrow {
  position: absolute;
  right: 0;
  top: 140px;
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

.u-banner-bg .sysinfo {
  padding-top: 184px;
}

.u-banner-bg {
  background-image: url('../../static/images/solution/bg_portal.png');
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
</style>

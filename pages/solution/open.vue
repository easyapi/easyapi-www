<template>

  <div class="u-banner-bg">
    <div class="x-wp">
      <div class="sysinfo f-tac">
        <h1>API开放平台</h1>
        <p>您有数据，我们有API开放平台解决方案</p>
        <a href="/pages/info/contact.vue" class="bug_btn">立刻部署API开放平台</a>
        <div class="more">
          独立第三方API开放平台解决方案提供商
        </div>
      </div>
    </div>
  </div>

  <div class="u-infobox">
    <div class="u-title">最专业API开放平台供应商</div>
    <div class="u-inro">基于EasyAPI成熟的API文档、API监控、API网关系统<br>
      为您通过国内最重要的API开发平台解决方案，30天建立属于自己的开放平台
    </div>
    <ul class="u-iconui one x-wp">
      <li>
        <img src="../../static/images/info/open_icon1.png">
        <span>简单易用</span>
      </li>
      <li>
        <img src="../../static/images/info/open_icon2.png">
        <span>多模板选择</span>
      </li>
      <li>
        <img src="../../static/images/info/open_icon3.png">
        <span>接口变更动态</span>
      </li>
      <li>
        <img src="../../static/images/info/open_icon4.png">
        <span>访问统计</span>
      </li>
      <li>
        <img src="../../static/images/info/open_icon5.png">
        <span>测试记录</span>
      </li>
    </ul>
  </div>

  <div class="u-infobox bgfa bg_img" style="background-image:url('../../static/images/info/bg_open.png')">
    <div class="u-title f-c-white">友好的界面交互</div>
    <div class="u-inro f-c-white">通过搭建API开放平台，让您公司的数据更好的向合作伙伴、客户进行授权访问
      让贵公司的数据不断为贵公司产生价值
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
  color: #099ef2;
  margin: 10px auto;
  height: 46px;
  line-height: 46px;
  font-size: 16px;
  padding: 0 40px;
  border-radius: 5px;

}

.bug_btn:hover {
  color: rgb(9, 158, 242, 0.7);
}

.bug_btn:active {
  color: rgb(9, 158, 242, 0.6);
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
  background-image: url('../../static/images/solution/bg_open.png');
  height: 520px;
  background-size: cover;
}
</style>

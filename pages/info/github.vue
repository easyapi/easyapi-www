<template>

  <div class="page-index">
    <div class="u-page u-page1 f-cb">
      <div class="main wp">
        <div class="u-info" style=" margin: 0 auto;padding:172px 0;">
          <h1>前端开源计划</h1>
          <p>为您的公司打造私有化API管理门户，提升API管理效率</p>
          <div class="bg_white">
            <p>
              <span><a href="https://github.com/easyapi">前往GITHUB参与</a></span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="clearfix floor1">
      <h1 style="font-size:36px;">为什么要加入？</h1>
      <ul>
        <li>
          <a href="/pages/product/doc.vue">
            <img src="../../static/images/info/github/open1.png">
          </a>
          <a href="/pages/product/doc.vue">
            <span class="font_w">提升前端技能</span>
            <p>可能为成为一款不断商业化的Vue代表之作，作为前端一起学习进步</p>
          </a>
        </li>
        <li>
          <a href="/pages/product/monitor.vue">
            <img src="../../static/images/info/github/open2.png">
          </a>
          <a href="/pages/product/monitor.vue">
            <span class="font_w">技术创造价值</span>
            <p>通过自己手中的技术，让产品给更多开发者带来价值，那种满足感无与伦比</p>
          </a>
        </li>
        <li>
          <a href="/pages/product/gateway.vue">
            <img src="../../static/images/info/github/open3.png">
          </a>
          <a href="/pages/product/gateway.vue">
            <span class="font_w">一份长期的事业</span>
            <p>EasyAPI致力于成为API领域的知名品牌，需要更多的伙伴一起来坚持这份长期事业</p>
          </a>
        </li>
        <li>
          <a href="/pages/product/market.vue">
            <img src="../../static/images/info/github/open4.png"></a>
          <a href="/pages/product/market.vue">
            <span class="font_w">认识更多朋友</span>
            <p>结交来自五湖四海的技术朋友，每年至少1次集体出行</p>
          </a>
        </li>
      </ul>
    </div>

    <div class="u-page u-page2 f-cb">
      <div class="ii">
        <h1 style="font-size:36px;padding-bottom:90px;">需要做什么？</h1>
        <div class="inn f-cb">
          <div class="one f-fl">
            <img src="../../static/images/info/github/1.png">
            <span>前端开源合伙人每周投入60小时</span>
          </div>
          <div class="one f-fr">
            <img src="../../static/images/info/github/2.png">
            <span>前端开源志愿者每月参与2个以上ISSUE</span>
          </div>
        </div>
      </div>
    </div>


    <div class="u-page u-page2 f-cb" style="background: #fff;">
      <div class="ii">
        <h1 style="font-size:36px;padding-bottom:90px;">你将获得什么？</h1>
        <div class="inn f-cb">
          <div class="one f-fl">
            <img src="../../static/images/info/github/3.png">
            <span>前端开源合伙人获得每小时66元分成</span>
          </div>
          <div class="one f-fr">
            <img src="../../static/images/info/github/4.png">
            <span>前端开源志愿者获得文档管理免费试用特权</span>
          </div>
        </div>
      </div>
    </div>

    <div class="u-page u-page3 f-cb" style="background:#fafafa">
      <div class="ii">
        <h1 style="font-size:36px;padding-bottom:30px;">常见问题</h1>
        <h3>开源的版权怎么区分？</h3>
        <p>EasyAPI产品上线后，为了满足广大开发者用户的使用，特推出前端开源产品，为了充分发挥我们的用户群体优势，希望大家共同完善EasyAPI产品，EasyAPI自始至终版权均为EasyAPI运营公司
          所有，EasyAPI给予开发者投入回报包括收入分成，免费试用特权，旅游奖励。</p>
        <h3>开源的版权怎么区分？</h3>
        <p>EasyAPI产品上线后，为了满足广大开发者用户的使用，特推出前端开源产品，为了充分发挥我们的用户群体优势，希望大家共同完善EasyAPI产品，EasyAPI自始至终版权均为EasyAPI运营公司
          所有，EasyAPI给予开发者投入回报包括收入分成，免费试用特权，旅游奖励。</p>
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
.avatar {
  overflow: hidden;
  height: 500px;
  width: 100px;
  text-align: center;
}

.avatar:hover .avatarnav_down {
  display: block;
}

.avatarnav_down {
  display: none;
  width: 100px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  border: 1px solid #ddd;
  top: 50px;
  right: 50%;
  margin-right: -80px;
}

.avatarnav_down li {
  text-align: center;
  line-height: 40px;
  border-bottom: 1px solid #ddd;
}

.avatarnav_down li:last-child {
  border-bottom: 0;
}

.avatarnav_down li a {
  font-size: 14px;
  text-align: center;
}

.avatarnav_down li a:hover {
  color: #18c1d6;
}

.navs .show_name .dis_show .hover_color a li:hover p {
  color: #0AB3CB;
}

.navs .show_name .dis_show .hover_color a li:hover span {
  color: #999
}

.navs .show_names .dis_show .isShow a li:hover p {
  /* color: #de9000; */
  color: #0AB3CB;

}

.navs .show_names .dis_show .isShow a li:hover span {
  color: #999
}

.side-navs .nav .show_console ul a li:hover .dis_consoletxt p {
  /* color: #de9000; */
  color: #0AB3CB;

  font-weight: bold;
}

/* bug */
.bg_white {
  background: #f0bf43 !important;
  border-bottom: 4px solid #bf9f43;
  position: relative;
  display: inline-block;
  color: #ffffff;
  height: 46px;
  padding: 10px 60px;
  font-size: 16px;
  line-height: 46px;
  font-weight: 600;
  border-radius: 6px
}

.img > img {
  width: 100%;
}

.bg_white > p {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.bg_white > p > img {
  width: 16px;
  height: 16px;
  margin-left: 20px;
}

.bg_white > p a {
  font-size: 26px;
  color: #fff;
  letter-spacing: 2px;
}

.font_w {
  font-weight: bold;
}

.text_c {
  text-align: center !important;

}

/* .dis_showtxt p:hover {
    color: #2EACCB!important;
} */

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

.bg_white:hover {
  /* color: rgb(244, 244, 244,0.7); */
  color: rgba(49, 176, 213, 0.7);
}

.bg_white:active {
  /* color: rgba(238, 238, 238,0.6); */
  color: rgba(49, 176, 213, 0.6)
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

.u-page1 {
  background: url(../../static/images/info/bg_github.png) no-repeat center !important;
  background-size: cover !important;
}

.floor1 {
  padding-bottom: 70px;
}

.floor1 > h1 {
  text-align: center;
  font-weight: normal;
  color: #555555;
  font-size: 4.8rem;
  padding: 100px 0 60px;
}

.floor1 > ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1200px;
  margin: auto;
}

.floor1 > ul > li {
  width: 200px;
  text-align: center;
}

.floor1 > ul > li > a {
  display: block;
  margin-top: 20px;
}

.floor1 > ul > li > a > span {
  font-family: MicrosoftYaHei;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  line-height: 30px;
  letter-spacing: 0px;
  color: #333333;
}

.floor1 > ul > li img {
  width: 100px;
  height: 100px;
}

.floor1 li p {
  padding-top: 10px;
  font-family: MicrosoftYaHei;
  font-size: 14px !important;
  font-weight: normal;
  font-stretch: normal;
  line-height: 22px;
  color: #828282 !important;
  text-align: left;
}

.u-page2 img {
  width: 385px !important;
  height: 223px;
}

.one {
  width: 383px !important;
}

.u-page2 span {
  width: 383px;
  background-color: #ffffff;
  border: solid 1px #dddddd;
  font-family: MicrosoftYaHei;
  font-size: 14px !important;
  padding: 10px 0 !important;
  color: #000000;
}

.u-page3 {
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
}

.u-page3 h3 {
  font-family: MicrosoftYaHei;
  font-size: 18px;
  font-weight: bold;
  line-height: 30px;
  color: #000000;
  padding: 10px 0;
}

.u-page3 p {
  font-family: MicrosoftYaHei;
  text-align: left !important;
  padding-bottom: 20px !important;
  font-size: 14px !important;
  line-height: 24px !important;
  color: #666666 !important;
}
</style>

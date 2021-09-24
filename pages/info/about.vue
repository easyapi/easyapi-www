<template>
  <div class="page-together">
    <h2 class="u-title">
      <div class="x-wp">关于我们</div>
    </h2>
    <div class="x-wp">
      <img src="../../static/images/info/about/team.png"/>
    </div>

  </div>

  <div class="u-infobox">
    <div class="x-wp">
      <div class="u-title">团队介绍</div>
      <div class="u-inro">
        上海帮趣网络技术有限公司创建于2014年，致力于成为中国领先的移动互联网工具提供商，公司核心团队，数年行业资深经验，开发过数十个移动APP，与行业合作伙伴保持业务沟通，加大移动互联网工具建设。公司总部位于上海博济智汇园、在无锡滨湖区创意产业园（蠡湖边）设立研发基地，是一家拥有自主知识产权的移动互联网企业。团队成员20人+。
      </div>
      <div class="u-teambox f-cb">
        <ul>
          <li>
            <img src="https://qiniu.easyapi.com/user/leida.jpg">
            <h4>张磊</h4>

            <p>产品经理</p>
          </li>
          <li>
            <img src="https://qiniu.easyapi.com/user/afunti.jpg">
            <h4>刘小春</h4>

            <p>前端工程师</p>
          </li>
          <li>
            <img src="https://qiniu.easyapi.com/user/fangting.jpg!small.jpg">
            <h4>房婷</h4>

            <p>UI设计师</p>
          </li>
          <li>
            <img src="https://qiniu.easyapi.com/user/lililai.jpg">
            <h4>李士万</h4>

            <p>程序员</p>
          </li>
          <li>
            <img src="https://qiniu.easyapi.com/user/mary.jpg">
            <h4>管婵娴</h4>

            <p>模板贡献者</p>
          </li>
          <li>
            <img src="https://qiniu.easyapi.com/user/suri.jpg">
            <h4>黄婷婷</h4>

            <p>模板贡献者</p>
          </li>
          <li>
            <img src="https://qiniu.easyapi.com/user/zhaozilong.jpg!small.jpg">
            <h4>赵子龙</h4>

            <p>程序员</p>
          </li>
          <li>
            <img src="https://static.easyapi.com/images/team/you.jpg">
            <h4>您</h4>

            <p>模板贡献者</p>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="u-infobox bgfa bg_img" style="background:#f5f5f5">
    <div class="u-title f-c-white f-c-gray">EasyAPI是什么</div>
    <div class="u-inro f-c-white f-c-gray">EasyAPI最初是我们团队内部的工具，因为热爱，我们希望她能得到更多的人来使用，我们也会一直站在她的旁边优化她，完美她，希望广大的苦B开发人员，
      希望广大的苦B 的开发人员，程序员早日用上，致力于数十万移<br>动开发者,后端的开发人员提供全套的API系统解决方案（发布，测试，浏览，监控）
    </div>

  </div>

  <div class="u-infobox bgfa ">
    <div class="u-title">

      <span style="padding: 10px 10px;
       border-bottom: 2px solid #18c1d6;">团队文化</span>
    </div>
    <div class="u-inro">为客户创造价值</div>
    <div class="u-values f-l">
      <ul>
        <li>
          <img src="../../static/images/info/about_3.png" alt="">
          <span>使命</span>
          <p>让移动互联网开发变得更容易</p>
        </li>
        <li>
          <img src="../../static/images/info/about_4.png" alt="">
          <span>价值观</span>
          <p>始终以客户为中心，不断提升学习能力，把复杂 <br> 事变简单，用心做好每一件事情</p>
        </li>
        <li>
          <img src="../../static/images/info/about_5.png" alt="">
          <span>愿景</span>
          <p>打造软件开发企业基础工具，让每个软件开发企<br>业都使用帮趣的产品</p>
        </li>
      </ul>
    </div>
  </div>


  <div class="u-infobox bgfa f-border-b" style="">
    <div class="u-title">我们的目标</div>
    <div class="u-inro">
      EasyAPI最初是我们团队内部的工具，因为热爱，我们希望她能得到更多的人来使用，我们也会一直站在她的旁边优化她，完美她，希望广大的苦B开发人员，<br>程序猿早日用上，致力于为数十万移动开发者，后端开发人员提供全套的API系统解决方案（发布、浏览、测试、监控、网关、接口服务）。
    </div>

  </div>

</template>

<script>
export default {
  name: 'About',
  layout: "default",
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
.u-teambox ul li {
  width: 15% !important;
}

.u-values {
  width: 60%;
  margin: 0 auto;
}

.u-values ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.u-values ul li {
  float: left;
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
</style>

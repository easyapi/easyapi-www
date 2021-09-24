<template>

  <div class="u-banner-bg">
    <div class="x-wp">
      <div class="title">
        <h1>EasyAPI文档管理</h1>
        <p class="text-c">EasyAPI文档管理致力于API文档从过去的Word服务提升到在线管理，一切只为提升开发效率，<br>降低开发成本，打造一支高效的开发团队。
          我们为开发者而创造，创造属于开发者的时代</p>
      </div>
    </div>
  </div>

  <div class="u-infobox ">
    <ul class="u-iconui x-wp">
      <li>
        <img src="../../static/images/info/test-icon-1.png">
        <span>简单易用</span>
        <p>在线管理接口，实时更新，始终浏览到文档的最新状态，告别Word文档传阅版本混乱。</p>
      </li>
      <li>
        <img src="../../static/images/info/test-icon-2.png">
        <span>多模板选择</span>
        <p>我们提供多种风格的模版，总有一种风格适合你的团队，轻易打造属于自己的API系统。</p>
      </li>
      <li>
        <img src="../../static/images/info/test-icon-3.png">
        <span>接口变更动态</span>
        <p>系统内置timeline功能，可根据时间点查看文档管理记录，一目了然。</p>
      </li>
      <li>
        <img src="../../static/images/info/test-icon-4.png">
        <span>访问统计</span>
        <p>科学的方式，准确的纪录接口访问的流量，更加帮助了解你的接口。
        </p>
      </li>
      <li>
        <img src="../../static/images/info/test-icon-5.png">
        <span>测试记录</span>
        <p>无论你是刚在创业路上的小团队还是飞速发展的创业公司，我们不限制使用人数。</p>
      </li>
      <li>
        <img src="../../static/images/info/test-icon-6.png">
        <span>数据结构</span>
        <p>无论你是做产品公司，还是做项目的公司，项目越多越好，我们不限制应用数量。</p>
      </li>
      <li>
        <img src="../../static/images/info/test-icon-7.png">
        <span>安全保密</span>
        <p>我们为团队管理员提供成员管理功能，你可以自行设置团队成员，安全有保障。</p>
      </li>
      <li>
        <img src="../../static/images/info/test-icon-8.png">
        <span>基于阿里云安全稳定</span>
        <p>阿里云海量安全存储，支持大规模、高并发访问，负载均衡让访问更稳定。 </p>
      </li>
    </ul>
  </div>

  <div class="u-infobox bgfa nbottom" style="background:#f5f5f5">
    <div class="u-title">文档清晰可见</div>
    <div class="u-inro">接口文档隶属于项目，让文档管理更轻松</div>
    <div class="oneimg">
      <img src="../../static/images/info/doc_2.png">
    </div>
  </div>

  <div class="u-infobox bgfa nbottom">
    <div class="u-title">最方便的文档编辑</div>
    <div class="u-inro">可能是国内最好的文档编辑工具，我们力争做的更好</div>
    <div class="oneimg">
      <img src="../../static/images/info/doc_3.png">
    </div>
  </div>


  <div class="u-infobox bgfa nbottom" style="background:#f5f5f5">
    <div class="u-title">关联数据结构
    </div>
    <div class="u-inro">让移动端开发工程师，参照数据结构进行对象构建
    </div>
    <div class="oneimg">
      <img src="../../static/images/info/doc_4.png">
    </div>
  </div>


  <div class="u-infofoot">
    <h3>EasyAPI文档服务 </h3>
    <p>软件团队的接口服务管理，从API文档开始</p>
    <a href="https://account.easyapi.com/signup" class="btn">立即免费注册</a>
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
.text-c {
  text-align: center;
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
  background-image: url('../../static/images/product/bg_document.png');
  height: 520px;
  background-size: 100% 100%;
}
</style>

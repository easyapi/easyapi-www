<template>

  <div class="u-changlogbanner" style="background-image:url('../../static/images/info/bg_changlog.png');height: 520px;">
    <div class="x-wp ">
      <div class="title color-gray">
        <h1>EasyAPI 平台动态</h1>
        <p>每天都在进步，保持每周迭代更新，你用的每天都是新的</p>
      </div>
    </div>
  </div>

  <div class="u-changlog">
    <div class="x-wp">
      <div class="u-box f-rel f-cb">
        <div class="line"></div>
        <div class="u-log">
          <h4>2017-03-30</h4>
          <p>项目任务筛选；
            聊天顶部导航重构；
            项目顶部导航栏重构；
            项目查看文件；
            归档任务按时间分组；
          </p>
        </div>

        <div class="u-log">
          <h4>2017-03-30</h4>
          <p>项目任务筛选；
            聊天顶部导航重构；
            项目顶部导航栏重构；
            项目查看文件；
            归档任务按时间分组；
          </p>
        </div>
      </div>
      <div class="u-hd f-cb"><Span>2016年</Span></div>
      <div class="u-box f-rel f-cb">
        <div class="line"></div>
        <div class="u-log">
          <h4>2017-03-30</h4>
          <p>项目任务筛选；
            聊天顶部导航重构；
            项目顶部导航栏重构；
            项目查看文件；
            归档任务按时间分组；
          </p>
        </div>

        <div class="u-log">
          <h4>2017-03-30</h4>
          <p>项目任务筛选；
            聊天顶部导航重构；
            项目顶部导航栏重构；
            项目查看文件；
            归档任务按时间分组；
          </p>
        </div>
      </div>
      <div class="u-hd f-cb"><Span>2016年</Span></div>
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

<template>


  <div class="x-wp">
    <div class="page-infopage">
      <h2 class="u-title">支持名单</h2>

      <div class="u-donatelist f-cb">
        <ul class="ulist f-cb">
          <li>
            <p><img src="https://qiniu.easyapi.com/user/zhaozilong.jpg"></p>
            <strong>赵子龙</strong>
            <span>Java工程师</span>
          </li>
          <li>
            <p><img src="https://qiniu.easyapi.com/user/tangwenchang.jpg"></p>
            <strong>唐文昌</strong>
            <span>iOS工程师</span>
          </li>
          <li>
            <p><img src="https://qiniu.easyapi.com/user/banxin.jpg"></p>
            <strong>班新</strong>
            <span>Android工程师</span>
          </li>
          <li>
            <p><img src="https://qiniu.easyapi.com/user/zhangsheng.jpg"></p>
            <strong>张胜</strong>
            <span>项目总监</span>
          </li>
          <li>
            <p><img src="https://qiniu.easyapi.com/user/huangmingjie.jpg"></p>
            <strong>黄明杰</strong>
            <span>技术总监</span>
          </li>
          <li>
            <p><img src="https://qiniu.easyapi.com/user/zhanglinghui.jpg"></p>
            <strong>张凌辉</strong>
            <span>Java架构师</span>
          </li>
          <li>
            <p><img src="https://qiniu.easyapi.com/user/jiyixin.jpg"></p>
            <strong>季乙心</strong>
            <span>产品经理</span>
          </li>
        </ul>

        <div class="utex f-cb">
          <a href="">房婷</a>
          <a href="">邹莉</a>
          <a href="">傅潇莹</a>
          <a href="">杜耀椿</a>
          <a href="">张泽泉</a>
          <a href="">罗献波</a>
          <a href="">胡晓雷</a>
          <a href="">张丹</a>
          <a href="">金璟</a>
          <a href="">黄俊</a>
          <a href="">张圣跃</a>
          <a href="">王亚东</a>
          <a href="">田章易</a>
          <a href="">胡晨辉</a>
        </div>

        <div class="u-open">
          <a href="javascript:" id="thisop">支持我们</a>
        </div>
      </div>
    </div>
  </div>

  <div id="laybox" style="display: none">
    <div class="layer-alertdon">
      <dl class=" clearfix">
        <dd>
          <p><img src="https://static.easyapi.com/images/info/fanfanle.png"/></p>
          <span>微信扫一扫</span>
        </dd>
        <dd>
          <p><img src="https://static.easyapi.com/images/info/leida.png"/></p>
          <span>支付宝扫一扫</span>
        </dd>
      </dl>
      <p>注意：请通过上面支付宝，微信支付支持费用，可加微信好友，或者QQ149151419联系，需要您提供快递地址，我们会立即安排发货，
        一旦支付成功将无法取消支持，我们由衷感谢您的支持，将持续提供完善的产品服务。
      </p>
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

<style>
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

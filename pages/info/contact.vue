<template>

  <div class="page-together">

    <h2 class="u-title">
      <div class="x-wp">联系我们</div>
    </h2>
    <div class="u-contact">
      <div class="x-wp">
        <div class="tex ">
          <div id="allmap" style=""></div>
          <h3>无锡到群软件科技有限公司</h3>

          <p>地址:无锡市滨湖区滴翠路100号创意产业园4号楼302</p>

          <p>联系人：Leida</p>

          <p>公司电话： 0510-85180020</p>

          <p>邮箱：leida#daoqun.com (将#替换为@)</p>

          <p>QQ：32498653客服小佳, 45583248客服小菲</p>

          <p>&nbsp;</p>

          <p><a target="_blank"
                href="http://shang.qq.com/wpa/qunwpa?idkey=4976bbcfecb3dccced94a6c99ba612348bf9d52e3d438ec9556b24b562e9fd53"><img
            border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="EasyAPI开发者交流群"
            title="EasyAPI开发者交流群"></a></p>
        </div>

        <div class="cerwm" style="padding-bottom: 45px;">
          <div class="hd">
            <a class="active" style="color: black;">添加联络人微信</a>
          </div>
          <ul class="link_list clearfix" style="overflow:hidden;">
            <li class="code">
              <div class="code_img">
                <img src="https://qiniu.easyapi.com/weixin/weixin01.png">
                <div class="line"></div>
              </div>
              <div class="link_infr">
                <span>联络人微信</span>
              </div>
            </li>
            <li style="margin-left: 184px;">
              <img src="../../static/images/tips_promlem.png">
              <div class="link_infr">
                <p style="color: #333;font-size: 18px;margin-bottom: 5px;">快速反馈问题</p>
                <span style="color: #666;font-size: 14px;">7*24小时接受您的反馈并处理</span>
              </div>

            </li>
            <li style="margin-left: 184px;">
              <img src="../../static/images/join_wechat.png">
              <div class="link_infr">
                <p style="color: #333;font-size: 18px;margin-bottom: 5px;">加入EasyAPI微信城市群</p>
                <span style="color: #666;font-size: 14px;">上海 无锡 苏州 北京 深圳 广州 成都 重庆 西安</span>
              </div>
            </li>
          </ul>
        </div>
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
    // 百度地图API功能
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(121.446005, 31.34974);
    var marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker);              // 将标注添加到地图中
    map.centerAndZoom(point, 15);
    var opts = {
      width: 200,     // 信息窗口宽度
      height: 100,     // 信息窗口高度
      title: "上海帮趣网络技术有限公司"  // 信息窗口标题
    }
    var infoWindow = new BMap.InfoWindow("地址：中国·上海市 宝山区呼兰路911弄11号3号楼一层", opts);  // 创建信息窗口对象
    marker.addEventListener("click", function () {
      map.openInfoWindow(infoWindow, point); //开启信息窗口
    });

    if ($.cookie("authenticationToken")) {
      $.ajax({
        method: 'GET',
        url: 'https://account-api.easyapi.com/api/account',
        beforeSend: function (request) {
          request.setRequestHeader("Authorization", "Bearer " + ($.cookie("authenticationToken")));
        },
        success: function (data) {
          $("#register").addClass('dis_hide');
          $("#photo").attr("src", data.photo + "!icon.jpg");
          $("#avatar").removeClass('dis_hide');
        }
      });
    }
  }
}
</script>


<style lang="less" scoped>
#allmap {
  width: 100%;
  height: 300px;
}

.link_list {
  overflow: hidden;
  padding-top: 50px;

}

.link_list li {
  float: left;
  text-align: center;
  overflow: hidden;
}

.link_list .code .code_img {
  overflow: hidden;
}

.link_list li img {
}

.link_list .code .code_img img {
  width: 114px;
  height: 114px;
  float: left;
}

.link_list .code .code_img .line {
  width: 2px;
  height: 100px;
  border-right: 2px solid #18c1d6;
  float: left;
  margin-top: 7px;
  margin-left: 80px;

}

.link_list .code .link_infr {
  clear: both;
  margin-top: 10px;
  text-align: left;
}

.link_list .code .link_infr span {
  margin-left: 18px;
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

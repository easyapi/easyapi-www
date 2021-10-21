import './index.scss'

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

import './index.scss'
import Cookies from 'js-cookie'
import {getApi} from "../../../api/account";

export default {
  name: 'Contact',
  head() {
    return {
      title: '联系我们 - EasyAPI服务平台',
      meta: [
        {hid: 'description', name: 'description', content: 'EasyAPI联系我们'},
        {hid: 'keyword', name: 'keyword', content: '联系我们'}
      ],
      script: [
        {
          type: 'text/javascript',
          src: 'https://api.map.baidu.com/api?v=3.0&ak=yZYo7WmkUj3bMFZMcP7PRSpuvjUfGw0B',
          body: true
        },
        {
          type: 'text/javascript',
          src: "https://api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.js",
          body: true
        }
      ]
    }
  },
  mounted() {
    this.reurl()
    this.init()
  },
  methods: {
    reurl() { // 解决第一次进入不加载js文件
      if (location.href.indexOf('#reloaded') === -1) {
        location.href = location.href + '#reloaded'
        location.reload()
      }
    },
    init() {
      var map = new BMap.Map("allmap", {
        enableHighResolution: true
      });
      var point = new BMap.Point(121.446005, 31.34974);
      var marker = new BMap.Marker(point);
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
      if (Cookies.get("authenticationToken")) {
        getApi(this).then(res => {

        })
      }
    }
  }
}

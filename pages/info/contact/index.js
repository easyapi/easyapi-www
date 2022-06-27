import './index.scss'
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'

export default {
  name: 'InfoContact',
  head() {
    return {
      title: '联系我们 - EasyAPI服务平台',
      meta: [
        { hid: 'description', name: 'description', content: 'EasyAPI联系我们' },
        { hid: 'keyword', name: 'keyword', content: '联系我们' }
      ]
    }
  },
  components: {
    BaiduMap
  },
  data() {
    return {
      center: { lng: 121.446005, lat: 31.34974 },
      zoom: 15,
      title: '上海帮趣网络技术有限公司',
      contents: '地址：中国·上海市 宝山区呼兰路911弄11号3号楼一层',
      show: true,
      scroll: true,
      dragging: true
    }
  }
}

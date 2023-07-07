<script setup lang="ts">
import { reactive } from 'vue'

import { useHead } from '@unhead/vue'

useHead({
  title: '联系我们 - EasyAPI服务平台',
  meta: [{ name: 'description', content: 'EasyAPI联系我们' },
    { name: 'keyword', content: '联系我们' }],
})

const map = reactive({
  center: { lng: 121.446005, lat: 31.34974 },
  zoom: 15,
  title: '上海帮趣网络技术有限公司',
  contents: '地址：中国·上海市 宝山区呼兰路911弄11号3号楼一层',
  show: true,
  scroll: true,
  dragging: true,
})
</script>

<template>
  <div class="main">
    <div class="content">
      <div class="info-page">
        <h2 class="title">
          联系我们
        </h2>
        <div class="u-contact">
          <div class="tex">
            <!--            <BaiduMap class="bm-view" ak="yZYo7WmkUj3bMFZMcP7PRSpuvjUfGw0B" :center="map.center" :zoom="map.zoom" :scroll-wheel-zoom="scroll" /> -->
            <div class="u-contact-text">
              <h3>无锡帮趣数据服务有限公司</h3>
              <p>地址：中国·无锡市 滨湖区吟白路1号超级计算无锡中心6楼</p>
              <p>联系人：Leida</p>
              <p>公司电话：0510-85180020</p>
              <p>邮箱：leida#easyapi.com (将#替换为@)</p>
              <p>QQ：149151419 产品经理</p>
              <p>&nbsp;</p>
              <p>
                <a target="_blank" href="https://shang.qq.com/wpa/qunwpa?idkey=4976bbcfecb3dccced94a6c99ba612348bf9d52e3d438ec9556b24b562e9fd53">
                  <img border="0" src="https://pub.idqqimg.com/wpa/images/group.png" alt="EasyAPI开发者交流群" title="EasyAPI开发者交流群">
                </a>
              </p>
            </div>
          </div>

          <div class="cerwm" style="padding-bottom: 45px">
            <div class="hd">
              <a class="active" style="color: black">添加联络人微信</a>
            </div>
            <ul class="link_list clearfix flex justify-around" style="overflow: hidden">
              <li>
                <div class="code_img">
                  <img src="https://qiniu.easyapi.com/easyapi_contact_weixin.png">
                </div>
                <div class="link_info">
                  <span>联络人微信</span>
                </div>
              </li>
              <li>
                <img class="mx-auto" src="/images/contact/problem.png">
                <div class="link_info">
                  <p>快速反馈问题</p>
                  <span>7*24小时接受您的反馈并处理</span>
                </div>
              </li>
              <li>
                <img class="mx-auto" src="/images/join_wechat.png">
                <div class="link_info">
                  <p>加入EasyAPI微信城市群</p>
                  <span>上海 无锡 苏州 北京 深圳 广州 成都 重庆 西安</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bm-view {
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
}

@media screen and (min-width: 1000px) {
  .u-contact {
    padding: 20px 50px;

    .tex {
      font-size: 1.4rem;

      p {
        line-height: 23px;
        padding: 0;
        color: #555;
      }

      h3 {
        padding: 20px 0 5px;
      }
    }

    .cerwm {
      padding: 50px 0 5px;

      .hd {
        border-bottom: 1px solid #ddd;
        margin-bottom: 15px;

        a {
          display: inline-block;
          padding: 5px 2px;
          color: gray;
          margin-right: 10px;
          font-size: 14px;
        }
      }
    }

    .ermbx {
      li {
        float: left;
        width: 120px;
        margin-right: 50px;
        font-size: 12px;

        img {
          width: 100%;
        }

        span {
          display: block;
          text-align: center;
          padding: 5px 0;
        }
      }
    }
  }

  .link_list {
    overflow: hidden;
    padding-top: 50px;

    li {
      float: left;
      text-align: center;
      overflow: hidden;

      .link_info {
        clear: both;
        margin-top: 10px;

        p {
          color: #333;
          font-size: 18px;
          margin-bottom: 5px;
          text-align: center;
        }

        span {
          color: #666;
          font-size: 14px;
        }
      }
    }

    .code_img {
      overflow: hidden;
      display: flex;
      justify-content: center;

      img {
        width: 114px;
        height: 114px;
      }

      .line {
        width: 2px;
        height: 100px;
        border-right: 2px solid #18c1d6;
        float: left;
        margin-top: 7px;
        margin-left: 80px;
      }
    }
  }
}

@media screen and (min-width: 800px) and (max-width: 1000px) {
  .u-contact {
    margin-top: 50px;
    padding: 20px 50px;

    .tex {
      font-size: 1.4rem;

      p {
        line-height: 23px;
        padding: 0;
        color: #555;
      }

      h3 {
        padding: 20px 0 5px;
      }
    }

    .cerwm {
      padding: 50px 0 5px;

      .hd {
        border-bottom: 1px solid #ddd;
        margin-bottom: 15px;

        a {
          display: inline-block;
          padding: 5px 2px;
          color: gray;
          margin-right: 10px;
          font-size: 14px;
        }
      }
    }

    .ermbx {
      li {
        float: left;
        width: 120px;
        margin-right: 50px;
        font-size: 12px;

        img {
          width: 100%;
        }

        span {
          display: block;
          text-align: center;
          padding: 5px 0;
        }
      }
    }
  }

  .link_list {
    overflow: hidden;
    padding-top: 50px;

    li {
      width: 33%;
      text-align: center;
      overflow: hidden;

      .link_info {
        clear: both;
        margin-top: 10px;

        p {
          color: #333;
          font-size: 16px;
          margin-bottom: 5px;
          text-align: center;
        }

        span {
          color: #666;
          font-size: 14px;
          text-align: center;
        }
      }
    }

    .code_img {
      overflow: hidden;
      display: flex;
      justify-content: center;

      img {
        width: 114px;
        height: 114px;
      }

      .line {
        width: 2px;
        height: 100px;
        border-right: 2px solid #18c1d6;
        float: left;
        margin-top: 7px;
        margin-left: 80px;
      }
    }
  }
}

@media screen and (min-width: 300px) and (max-width: 800px) {
  .u-contact {
    padding: 20px 25px;

    .u-contact-text {
      padding: 0 15px;
    }

    .tex {
      font-size: 1.4rem;

      p {
        line-height: 23px;
        padding: 0;
        color: #555;
      }

      h3 {
        padding: 20px 0 5px;
      }
    }

    .cerwm {
      padding: 50px 0 5px;

      .hd {
        border-bottom: 1px solid #ddd;
        margin-bottom: 15px;

        a {
          display: inline-block;
          padding: 5px 2px;
          color: gray;
          margin-right: 10px;
          font-size: 14px;
        }
      }
    }

    .ermbx {
      li {
        float: left;
        width: 120px;
        margin-right: 50px;
        font-size: 12px;

        img {
          width: 100%;
        }

        span {
          display: block;
          text-align: center;
          padding: 5px 0;
        }
      }
    }
  }

  .link_list {
    overflow: hidden;
    padding-top: 50px;

    li {
      width: 100%;
      text-align: center;
      overflow: hidden;

      img {
        width: 60px;
      }

      .link_info {
        clear: both;
        margin-top: 10px;

        p {
          color: #333;
          font-size: 14px;
          margin-bottom: 5px;
          text-align: center;
        }

        span {
          color: #666;
          font-size: 12px;
          text-align: center;
        }
      }
    }

    .code_img {
      overflow: hidden;
      display: flex;
      justify-content: center;

      img {
        width: 75px;
        height: 75px;
      }

      .line {
        width: 2px;
        height: 100px;
        border-right: 2px solid #18c1d6;
        float: left;
        margin-top: 7px;
        margin-left: 80px;
      }
    }
  }
}
</style>

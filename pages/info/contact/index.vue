<template>
  <div class="main">
    <div class="content">
      <div class="info-page">
        <h2 class="title">
          联系我们
        </h2>
        <div class="u-contact">
          <div class="tex">
            <baidu-map class="bm-view" ak="yZYo7WmkUj3bMFZMcP7PRSpuvjUfGw0B" :center="center" :zoom="zoom"
                       :scroll-wheel-zoom='scroll'>
            </baidu-map>
            <div class="u-contact-text">
              <h3>无锡帮趣数据服务有限公司</h3>

              <p>地址：中国·无锡市 滨湖区吟白路1号超级计算无锡中心6楼</p>

              <p>联系人：Leida</p>

              <p>公司电话：0510-85180020</p>

              <p>邮箱：leida#easyapi.com (将#替换为@)</p>

              <p>QQ：149151419 产品经理</p>

              <p>&nbsp;</p>

              <p><a target="_blank"
                    href="https://shang.qq.com/wpa/qunwpa?idkey=4976bbcfecb3dccced94a6c99ba612348bf9d52e3d438ec9556b24b562e9fd53"><img
                border="0" src="https://pub.idqqimg.com/wpa/images/group.png" alt="EasyAPI开发者交流群"
                title="EasyAPI开发者交流群"></a></p>
            </div>
          </div>

          <div class="cerwm" style="padding-bottom: 45px;">
            <div class="hd">
              <a class="active" style="color: black;">添加联络人微信</a>
            </div>
            <ul class="link_list clearfix flex justify-around" style="overflow:hidden;">
              <li>
                <div class="code_img">
                  <img src="https://qiniu.easyapi.com/easyapi_contact_weixin.png">
                  <!--<div class="line"></div>-->
                </div>
                <div class="link_infr">
                  <span>联络人微信</span>
                </div>
              </li>
              <li>
                <img class="mx-auto" src="/images/tips_promlem.png">
                <div class="link_infr">
                  <p>快速反馈问题</p>
                  <span>7*24小时接受您的反馈并处理</span>
                </div>
              </li>
              <li>
                <img class="mx-auto" src="/images/join_wechat.png">
                <div class="link_infr">
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

<script>
  import Index from './index'

  export default Index
</script>

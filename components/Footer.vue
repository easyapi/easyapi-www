<script setup lang="ts">
import {onMounted, ref} from 'vue'

const screenWidth = ref(null)

function jump(val) {
  if (val === '帮助中心') {
    window.open('https://help.easyapi.com', '_blank')
  } else {
    window.open('https://support.qq.com/products/352231', '_blank')
  }
}
function handleOpen(key, keyPath) {
  console.log(document.getElementsByClassName('el-submenu__title'))
}
function handleClose() {}

onMounted(() => {
  this.screenWidth = document.body.clientWidth
  window.onresize = () => {
    //屏幕尺寸变化就重新赋值
    return (() => {
      this.screenWidth = document.body.clientWidth
    })()
  }
})
</script>
<script>
export default {
  props: ['screenWidth'],
  data() {
    return {
      ifShowFooter: true
    }
  },
  watch: {
    screenWidth: {
      handler: function (val, oldVal) {
        this.ifShowFooter = val >= 800
      },
      immediate: true
    }
  },
}

</script>

<template>
  <div v-if="ifShowFooter" class="bottom-footer flex-c items-center">
    <div class="content">
      <div class="footer-item flex justify-between mg-15-auto">
        <div class="w-3/12">
          <img class="w-40" src="https://qiniu.easyapi.com/market/logo.svg" />
          <p class="w-4/5 mt-6 text-xl">新一代API接口管理平台，EasyAPI是一个为您提供API管理、API测试、API监控、API文档、API低代码服务的综合性API服务平台</p>
          <p>
            联系电话：
            <span class="color-00AEC5">136-5617-1020</span>
          </p>
          <div class="flex">
            <el-popover placement="top" width="100" trigger="hover">
              <img src="https://qiniu.easyapi.com/weixin-easyapi.jpg" />
              <a slot="reference"><img class="w-12 mr-4" src="../../assets/images/wechat.svg" alt="" /></a>
            </el-popover>
            <a href="https://github.com/easyapi" target="_blank">
              <img class="w-12" src="../../assets/images/github.svg" alt="" />
            </a>
          </div>
        </div>
        <div class="w-6/12 flex justify-around">
          <div class="flex flex-col">
            <h2>产品介绍</h2>
            <a href="/product/doc">API协作</a>
            <a href="/product/lowcode">API低代码</a>
            <a href="/product/test">API测试</a>
            <a href="/product/interface">API服务</a>
            <a href="/product/monitor">API监控</a>
            <a href="/product/scene">API场景化服务</a>
          </div>
          <div class="flex flex-col">
            <h2>私有化方案</h2>
            <a href="/solution/portal">API管理门户</a>
            <a href="/solution/market">API服务市场</a>
            <a href="/solution/open">API开放平台</a>
          </div>
          <div class="flex flex-col">
            <h2>使用文档</h2>
            <a href="https://help.easyapi.com" target="_blank">帮助中心</a>
            <a href="https://support.qq.com/products/352231" target="_blank">BUG反馈</a>
            <a href="/info/extension">浏览器插件</a>
            <a href="/info/github">前端开源计划</a>
          </div>
          <div class="flex flex-col">
            <h2>关于</h2>
            <a href="/info/about">关于我们</a>
            <a href="/info/together">合作伙伴</a>
            <a href="/info/contact">联系我们</a>
            <a href="/info/donate">支持我们</a>
            <a href="/post/">平台动态</a>
          </div>
        </div>
        <div class="w-2/12 flex justify-end text-center">
          <div class="mr-12">
            <img class="w-32" src="https://qiniu.easyapi.com/qrcode/leida.png" alt="EasyAPI技术咨询" />
            <p class="mt-5">技术咨询</p>
          </div>
          <div>
            <img class="w-32" src="https://qiniu.easyapi.com/qrcode/suri.png" alt="EasyAPI商务咨询" />
            <p class="mt-5">商务咨询</p>
          </div>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="mg-15-auto text-center">
        <a href="https://beian.miit.gov.cn/" target="_blank">Copyright © 2015～2022 无锡帮趣数据服务有限公司</a>
      </div>
    </div>
    <div class="text-center"><a href="https://beian.miit.gov.cn" target="_blank">沪ICP备19007521号</a></div>
  </div>
  <div v-else class="mobile-footer">
    <div class="w-4/5 mx-auto">
      <div>
        <img class="w-40" src="https://qiniu.easyapi.com/market/logo.svg" />
      </div>
      <div class="mt-12">
        <el-menu background-color="#27282c" text-color="#fff" active-text-color="#fff" class="el-menu-vertical-demo" router>
          <el-submenu index="1">
            <template slot="title">
              <span>产品介绍</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/product/doc">API协作</el-menu-item>
              <el-menu-item index="/product/lowcode">API低代码</el-menu-item>
              <el-menu-item index="/product/test">API测试</el-menu-item>
              <el-menu-item index="/product/interface">API服务</el-menu-item>
              <el-menu-item index="/product/monitor">API监控</el-menu-item>
              <el-menu-item index="/product/scene">API场景化服务</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span>私有化方案</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/solution/portal">API管理门户</el-menu-item>
              <el-menu-item index="/solution/market">API服务市场</el-menu-item>
              <el-menu-item index="/solution/open">API开放平台</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <span>使用文档</span>
            </template>
            <el-menu-item-group>
              <el-menu-item @click="jump('帮助中心')" index="/">帮助中心</el-menu-item>
              <el-menu-item @click="jump('BUG反馈')" index="/">BUG反馈</el-menu-item>
              <el-menu-item index="/info/extension">浏览器插件</el-menu-item>
              <el-menu-item index="/post/">前端开源计划</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <span>关于</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/info/about">关于我们</el-menu-item>
              <el-menu-item index="/info/together">合作伙伴</el-menu-item>
              <el-menu-item index="/info/contact">联系我们</el-menu-item>
              <el-menu-item index="/info/support">支持我们</el-menu-item>
              <el-menu-item index="/post/">平台动态</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
      <div class="mt-16">
        <div class="flex">
          <el-popover placement="top" width="100" trigger="hover">
            <img src="https://qiniu.easyapi.com/weixin-easyapi.jpg" />
            <a slot="reference"><img class="w-12 mr-4" src="../../assets/images/wechat.svg" alt="" /></a>
          </el-popover>
          <a href="https://github.com/easyapi" target="_blank">
            <img class="w-12 mr-4" src="../../assets/images/github.svg" alt="" />
          </a>
          <p class="flex items-center">
            联系电话：
            <span class="color-00AEC5">136-5617-1020</span>
          </p>
        </div>
      </div>
    </div>
    <div class="text-center"><a href="https://beian.miit.gov.cn" target="_blank">沪ICP备19007521号</a></div>
  </div>
</template>

<style lang="scss" scoped>
.bottom-footer {
  background: #27282c !important;
  color: gray;
  padding: 20px 0;
  font-size: 1.2rem;

  h2 {
    font-size: 14px;
    margin-bottom: 10px;
    color: #fdfdfe;
  }

  p {
    margin-bottom: 10px;
  }

  a {
    color: gray;
    margin-bottom: 10px;

    &:hover {
      color: #fff;
      text-decoration: underline;
    }
  }
}

.mobile-footer {
  background: #27282c;
  color: gray;
  padding: 20px 0;
  font-size: 1.2rem;

  .el-menu {
    border-right: 1px solid #27282c;

    a {
      color: #ffffff;
      margin-bottom: 10px;

      &:hover {
        color: #fff;
      }
    }
  }

  .el-submenu .el-menu-item {
    font-size: 12px;
  }

  .el-submenu__title {
    padding: 0 !important;
    color: #c0c4cc !important;
    background-color: #27282c !important;
  }

  .el-submenu .el-menu-item {
    padding: 0 25px !important;
  }
}

.mg-15-auto {
  margin: 15px auto;
}

.color-00AEC5 {
  color: #00aec5;
}

.el-divider {
  background-color: #606266;
}

</style>
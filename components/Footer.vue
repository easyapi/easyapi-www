<script setup lang="ts">
import { reactive, ref, watch } from 'vue'

const props = defineProps(['screenWidth'])
const screenWidth = ref(null)

const data = reactive({
  ifShowFooter: true,
})
function jump(val) {
  if (val === '帮助中心')
    window.open('https://help.easyapi.com', '_blank')
  else
    window.open('https://support.qq.com/products/352231', '_blank')
}

watch(() => props.screenWidth,
  (val, oldVal) => {
    data.ifShowFooter = props.screenWidth >= 800
  },
  {
    deep: true,
  })
</script>

<template>
  <div v-show="data.ifShowFooter" class="bottom-footer flex-c items-center">
    <div class="content">
      <div class="footer-item flex justify-between my-7">
        <div class="w-3/12">
          <img class="w-40" src="https://qiniu.easyapi.com/market/logo.svg">
          <p class="w-4/5 mt-6 text-xl">
            新一代API接口管理平台，EasyAPI是一个为您提供API管理、API测试、API监控、API文档、API低代码服务的综合性API服务平台
          </p>
          <p>
            联系电话：
            <span class="color-00AEC5">136-5617-1020</span>
          </p>
          <div class="flex">
            <client-only>
              <el-popover placement="top" width="100" trigger="hover">
                <img src="https://qiniu.easyapi.com/weixin-easyapi.jpg">
                <template #reference>
                  <a><img class="w-12 mr-4" src="../assets/images/wechat.svg" alt=""></a>
                </template>
              </el-popover>
            </client-only>
            <a href="https://github.com/easyapi" target="_blank">
              <img class="w-12" src="../assets/images/github.svg" alt="">
            </a>
          </div>
        </div>
        <div class="w-6/12 flex justify-around">
          <div class="flex flex-col">
            <h2>产品介绍</h2>
            <nuxt-link to="/product/doc">
              API协作
            </nuxt-link>
            <nuxt-link to="/product/lowcode">
              API低代码
            </nuxt-link>
            <nuxt-link to="/product/test">
              API测试
            </nuxt-link>
            <nuxt-link to="/product/interface">
              API服务
            </nuxt-link>
            <nuxt-link to="/product/monitor">
              API监控
            </nuxt-link>
            <nuxt-link to="/product/scene">
              API场景化服务
            </nuxt-link>
          </div>
          <div class="flex flex-col">
            <h2>私有化方案</h2>
            <nuxt-link to="/solution/portal">
              API管理门户
            </nuxt-link>
            <nuxt-link to="/solution/market">
              API服务市场
            </nuxt-link>
            <nuxt-link to="/solution/open">
              API开放平台
            </nuxt-link>
          </div>
          <div class="flex flex-col">
            <h2>使用文档</h2>
            <a href="https://help.easyapi.com" target="_blank">帮助中心</a>
            <a href="https://support.qq.com/products/352231" target="_blank">BUG反馈</a>
            <nuxt-link to="/info/extension">
              浏览器插件
            </nuxt-link>
            <nuxt-link to="/info/github">
              前端开源计划
            </nuxt-link>
          </div>
          <div class="flex flex-col">
            <h2>关于</h2>
            <nuxt-link to="/info/about">
              关于我们
            </nuxt-link>
            <nuxt-link to="/info/together">
              合作伙伴
            </nuxt-link>
            <nuxt-link to="/info/contact">
              联系我们
            </nuxt-link>
            <nuxt-link to="/info/donate">
              支持我们
            </nuxt-link>
            <nuxt-link to="/post/">
              平台动态
            </nuxt-link>
          </div>
        </div>
        <div class="w-2/12 flex justify-end text-center">
          <div class="mr-12">
            <img class="w-32" src="https://qiniu.easyapi.com/qrcode/leida.png" alt="EasyAPI技术咨询">
            <p class="mt-5">
              技术咨询
            </p>
          </div>
          <div>
            <img class="w-32" src="https://qiniu.easyapi.com/qrcode/suri.png" alt="EasyAPI商务咨询">
            <p class="mt-5">
              商务咨询
            </p>
          </div>
        </div>
      </div>
      <el-divider />
      <div class="my-7 text-center">
        <a href="https://beian.miit.gov.cn/" target="_blank">Copyright © 2015～2023 无锡帮趣数据服务有限公司</a>
      </div>
    </div>
    <div class="text-center">
      <a href="https://beian.miit.gov.cn" target="_blank">沪ICP备19007521号</a>
    </div>
  </div>
  <div v-show="!data.ifShowFooter" class="mobile-footer">
    <div class="w-4/5 mx-auto">
      <div>
        <img class="w-40" src="https://qiniu.easyapi.com/market/logo.svg">
      </div>
      <div class="mt-12">
        <el-menu background-color="#27282c" text-color="#fff" active-text-color="#fff" class="el-menu-vertical-demo">
          <el-sub-menu index="1">
            <template #title>
              <span>产品介绍</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/product/doc">
                API协作
              </el-menu-item>
              <el-menu-item index="/product/lowcode">
                API低代码
              </el-menu-item>
              <el-menu-item index="/product/test">
                API测试
              </el-menu-item>
              <el-menu-item index="/product/interface">
                API服务
              </el-menu-item>
              <el-menu-item index="/product/monitor">
                API监控
              </el-menu-item>
              <el-menu-item index="/product/scene">
                API场景化服务
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <span>私有化方案</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/solution/portal">
                API管理门户
              </el-menu-item>
              <el-menu-item index="/solution/market">
                API服务市场
              </el-menu-item>
              <el-menu-item index="/solution/open">
                API开放平台
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <span>使用文档</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/" @click="jump('帮助中心')">
                帮助中心
              </el-menu-item>
              <el-menu-item index="/" @click="jump('BUG反馈')">
                BUG反馈
              </el-menu-item>
              <el-menu-item index="/info/extension">
                浏览器插件
              </el-menu-item>
              <el-menu-item index="/post/">
                前端开源计划
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <span>关于</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/info/about">
                关于我们
              </el-menu-item>
              <el-menu-item index="/info/together">
                合作伙伴
              </el-menu-item>
              <el-menu-item index="/info/contact">
                联系我们
              </el-menu-item>
              <el-menu-item index="/info/support">
                支持我们
              </el-menu-item>
              <el-menu-item index="/post/">
                平台动态
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </div>
      <div class="mt-16">
        <div class="flex">
          <client-only>
            <el-popover placement="top" width="100" trigger="hover">
              <img src="https://qiniu.easyapi.com/weixin-easyapi.jpg">
              <template #reference>
                <a><img class="w-12 mr-4 outline" src="../assets/images/wechat.svg" alt=""></a>
              </template>
            </el-popover>
          </client-only>
          <a href="https://github.com/easyapi" target="_blank">
            <img class="w-12 mr-4" src="../assets/images/github.svg" alt="">
          </a>
          <p class="flex items-center">
            联系电话：
            <span class="color-00AEC5">136-5617-1020</span>
          </p>
        </div>
      </div>
    </div>
    <div class="text-center">
      <a href="https://beian.miit.gov.cn" target="_blank">沪ICP备19007521号</a>
    </div>
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

  .el-sub-menu .el-menu-item {
    font-size: 12px;
  }

  .el-sub-menu__title {
    padding: 0 !important;
    color: #c0c4cc !important;
    background-color: #27282c !important;
  }

  .el-sub-menu .el-menu-item {
    padding: 0 25px !important;
  }
}

.color-00AEC5 {
  color: #00aec5;
}

.el-divider {
  border-top-color: #606266 !important;
}
</style>

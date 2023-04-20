<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'API低代码 - EasyAPI服务平台',
  meta: [{ name: 'description', content: 'API低代码' },
    { name: 'keyword', content: 'API低代码' }],
})
</script>

<template>
  <div class="lowcode">
    <div class="banner">
      <div class="title">
        <h1>专业的API低代码(Low-Code)开发平台</h1>
        <p>快速实现业务、数据服务化，协助企业实现数字化升级</p>
        <el-button class="mg-t-10" size="large" >
          立即体验
        </el-button>
      </div>
    </div>
    <div class="flex justify-between content py-24">
      <img src="https://qiniu.easyapi.com/IntroductionToAPILowCodeDevelopmentPlatform.png">
      <div class="py-16">
        <h1>API低代码开发平台介绍</h1>
        <div class="line" />
        <span class="lowcode-introduce">
          API低代码开发平台是一款基于微服务构架的专注API高效开发的专业化平台，平台相比
          <br>
          于传统API开发模式具有更轻量级、更快速、更全面、更低代码量、更易于学习等特点，
          <br>
          通过平台可以实现以少量的代码快速发布各种API服务(数据服务，算法服务...)。使用本
          <br>
          平台普通工程师通过浏览器即可快速实现API的开发和发布，API开发效率提升80%以上。
        </span>
      </div>
    </div>
    <div class="lowcode-box bg">
      <div class="content">
        <div>
          <h1 class="text-center mb-12">
            我们的解决方案
          </h1>
          <div class="flex justify-between">
            <div class="lowcode-box-item bg-white">
              <img src="https://qiniu.easyapi.com/VisualOutputStandardReturnContent.png">
              <h2>可视化输出标准返回内容</h2>
              <p>支持HTML（HTML+CSS+JavaScript编程、微页面拖拽设计），JSON（自动表单化或者表格化），XML，文本，可视化输出。</p>
              <el-button size="small" type="primary">
                帮助中心 >
              </el-button>
            </div>
            <div class="lowcode-box-item bg-white">
              <img src="https://qiniu.easyapi.com/SupportSyntaxProgrammingAndLightweightPublishing.png">
              <h2>支持语法编程，轻量级发布</h2>
              <p>基于Node.js语法（不断支持更多语言），轻量级编程，保存即发布接口，能轻松应对复杂业务的需求变化。</p>
              <el-button size="small" type="primary">
                帮助中心 >
              </el-button>
            </div>
            <div class="lowcode-box-item bg-white">
              <img src="https://qiniu.easyapi.com/AutomaticConstructionOfMassiveNonCoreBusinessModuleAPIs.png">
              <h2>非核心业务模块API自动构建</h2>
              <p>客户公司专注于核心业务，非核心业务接口，在这里统统都能找到，如果找不到，可以联系我们进行开发提供。</p>
              <el-button size="small" type="primary">
                海量接口 >
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lowcode-box">
      <div class="content">
        <h1 class="text-center mb-12">
          API低代码优势
        </h1>
        <div class="flex justify-between">
          <div class="lowcode-box-index bg-white">
            <img src="https://qiniu.easyapi.com/EasyToUse.png">
            <h2 class="mx-12">
              简单易用
            </h2>
            <p class="mx-12">
              聚焦业务逻辑开发，无需关心服务器购买、服务部署、后期运维等操作
            </p>
          </div>
          <div class="lowcode-box-index bg-white">
            <img src="https://qiniu.easyapi.com/CostReduction.png">
            <h2 class="mx-12">
              降低成本
            </h2>
            <p class="mx-12">
              无论是人员开发成本，还是服务器运维成本，都能显著的降低
            </p>
          </div>
          <div class="lowcode-box-index bg-white">
            <img src="https://qiniu.easyapi.com/StableAndReliable.png">
            <h2 class="mx-12">
              稳定可靠
            </h2>
            <p class="mx-12">
              后端采取分布式服务部署，保障服务的稳定运行，还支持私有化
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lowcode {
  .banner {
    background-image: url('/images/product/bg_gateway.png');
  }

  h1 {
    font-size: 32px;
  }

  .line {
    width: 50px;
    border: 4px solid #1ac1d6;
    margin: 10px 0;
  }

  .lowcode-introduce {
    line-height: 24px;
  }

  .bg {
    background-color: #f7f7f7;
  }

  .lowcode-box {
    padding-top: 50px;

    .lowcode-box-item {
      width: 31%;
      padding: 20px;
      border-radius: 10px;
      margin-bottom: 50px;

      img {
        margin-bottom: 20px;
      }

      h2 {
        font-size: 24px;
      }

      p {
        font-size: 1.4rem;
        line-height: 34px;
        color: #777;
        padding-bottom: 20px;
      }
    }

    .lowcode-box-index {
      width: 31%;
      border-radius: 10px;
      margin-bottom: 50px;
      border: #e4e7ed 1px solid;

      img {
        margin-bottom: 20px;
      }

      h2 {
        font-size: 24px;
      }

      p {
        font-size: 1.8rem;
        line-height: 34px;
        color: #777;
        padding-bottom: 20px;
      }
    }
  }
}

.mg-t-10 {
  margin-top: 10px;
}
</style>

<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: '接口测试 - EasyAPI服务平台',
  meta: [{ name: 'description', content: '接口测试' },
    { name: 'keyword', content: '接口测试' }],
})
</script>

<template>
  <div>
    <div class="banner">
      <div class="title">
        <h1>API自动化测试</h1>
        <p>API测试是对移动端开发人员负责，我们支持粗放式测试，支持精细化自定义测试 协助您快速测试API接口，高标准交付</p>
      </div>
    </div>

    <div class="pd-100">
      <div class="title">
        您的API总有问题存在
      </div>
      <div class="text-center wp clearfix">
        <img class="mx-auto align-bottom" src="/images/info/test_2.png">
      </div>
    </div>

    <div class="pd-100" style="background: #eff9fc">
      <div class="title">
        测试工具
      </div>
      <div class="description">
        致力于成为中国最好的API测试工具
      </div>
      <div class="text-center">
        <img class="mx-auto w-1200 align-bottom" src="https://qiniu.easyapi.com/TestInstrument.png">
      </div>
    </div>

    <div class="pd-100">
      <div class="title">
        产品特色
      </div>
      <div class="u-tese-wrap">
        <ul class="u-tese content text_img_auto f-cb add_img_line">
          <li>
            <div class="line_tips flex">
              <img class="" src="/images/info/document.png" alt="未加载">
              <div class="d_inline_block" style="padding-left: 15px">
                <h3>对接文档管理</h3>
                <p>如果您在线管理接口，那么测试易如反掌</p>
              </div>
            </div>
          </li>
          <li>
            <div class="flex line_tips">
              <img src="/images/info/notice.png" alt="未加载">
              <div class="d_inline_block" style="padding-left: 15px">
                <h3>测试报告通知</h3>
                <p>为您定制的自动化测试报告，发送结果到邮箱</p>
              </div>
            </div>
          </li>
          <li>
            <div class="flex line_tips">
              <img src="/images/info/manage.png" alt="未加载">
              <div class="d_inline_block" style="padding-left: 15px">
                <h3>接口示例管理</h3>
                <p>创建接口测试示例，方便移动端快速测试，参数传递更清楚</p>
              </div>
            </div>
          </li>
          <li>
            <!-- <i class="iconfont icon-xingxing"></i> -->
            <div class="flex line_tips">
              <img src="/images/info/history.png" alt="未加载">
              <div class="d_inline_block" style="padding-left: 15px">
                <h3>历史测试记录一览</h3>
                <p>还怕忘记测试的参数是什么吗？随时随地查看，方便多人开发</p>
              </div>
            </div>
          </li>
          <li>
            <!-- <i class="iconfont icon-xingxing"></i> -->
            <div class="flex line_tips">
              <img src="/images/info/support.png" alt="未加载">
              <div class="d_inline_block" style="padding-left: 15px">
                <h3>参数支持JSON格式</h3>
                <p>支持格式化输入参数，并转换为JSON参数进行测试</p>
              </div>
            </div>
          </li>
          <li>
            <!-- <i class="iconfont icon-xingxing"></i> -->
            <div class="flex line_tips">
              <img src="/images/info/lessTime.png" alt="未加载">
              <div class="d_inline_block" style="padding-left: 15px">
                <h3>缩短测试时间</h3>
                <p>为了提供自动化测试，方便测试工程师频繁测试，浪费时间成本</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="u-infofoot">
      <a href="" class="btn">立即体验更多特性</a>
      <p>为了更多的开发我们的产品，API测试适当收费，感谢支持</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.add_img_line li img {
  width: 50px;
  height: 50px;
  box-sizing: border-box;
}

.d_inline_block {
  display: inline-block;
}

@media screen and (min-width: 1200px) {
  .line_tips {
    padding: 20px 10px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    width: 500px;
  }

  .u-tese {
    padding: 0 58px;
  }
}

@media screen and (min-width: 1000px) and (max-width: 1200px) {
  .line_tips {
    padding: 20px 10px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    width: 374px;
  }

  .u-tese {
    padding: 0 58px;
  }
}

@media screen and (min-width: 800px) and (max-width: 1000px) {
  .line_tips {
    padding: 20px 10px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    width: 274px;
  }

  .u-tese {
    padding: 0 58px;
  }
}

@media screen and (min-width: 500px) and (max-width: 800px) {
  .line_tips {
    padding: 20px 10px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    width: 367px;
  }

  .u-tese {
    padding: 0 58px;
  }
}

@media screen and (min-width: 300px) and (max-width: 500px) {
  .line_tips {
    padding: 20px 10px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    width: 264px;
  }
}

.u-tese {
  text-align: center;
  display: flex;
  flex-wrap: wrap;

  li {
    width: 50%;
    text-align: left;
    position: relative;
    padding-bottom: 30px;

    i {
      color: #00a3c1;
      position: absolute;
      left: -30px;
    }

    h3 {
      padding-bottom: 7px;
      font-size: 1.6rem;
      font-weight: 400;
    }

    p {
      color: gray;
      font-size: 1.4rem;
    }
  }
}

.u-tese li {
  width: auto;
  margin-left: 30px;
}

.u-tese-wrap {
  margin: 0 auto;
  overflow: hidden;
}

.u-tese-wrap ul {
  margin: 0 auto;
}

.banner {
  background-image: url('/images/product/bg_test.png');

  .title {
    padding-top: 184px;
  }
}

.title {
  margin-bottom: 60px;
}

.w-1200 {
  width: 1200px;
}
</style>

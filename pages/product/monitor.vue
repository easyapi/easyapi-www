<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: '监控系统',
  meta: [{ name: 'description', content: 'API监控系统' },
    { name: 'keyword', content: '监控系统' }],
})
</script>

<template>
  <div>
    <div class="banner">
      <div class="content">
        <div class="title">
          <h1>EasyAPI接口监控系统</h1>
          <p>专注API接口监控，让您的API接口更稳定，与APP更紧密</p>
          <a href="https://team.easyapi.com/project/" class="bug_btn">立即使用API监控</a>
          <div class="more">
            <a href="https://help.easyapi.com/monitor/sdk">SDK下载</a>
            |
            <a href="https://help.easyapi.com/monitor/changelog">更新历史</a>
          </div>
        </div>
      </div>
    </div>

    <div class="pd-100 f-border-b">
      <div class="title">
        接口性能分析
      </div>
      <div class="description">
        分析App对应的API接口请求性能，包含HTTP响应时间、吞吐率、HTTP错误率，解析崩溃率分析等等
        <br>
        帮您快速优化后端服务性能
      </div>
      <div class="text-center">
        <img class="mx-auto align-bottom" src="/images/info/monitor_2.png">
      </div>
    </div>

    <div class="pd-100 f-border-b">
      <div class="title">
        业务风险降低
      </div>
      <div class="description">
        实时反馈APP与API的交互情况，请求参数，返回结果，瞬间重现问题场景
        <br>
        实现发现问题，快速解决问题
      </div>
      <div class="text-center">
        <img class="mx-auto align-bottom" src="/images/info/monitor_3.png">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bug_btn:hover {
  color: rgba(48, 166, 215, 0.7);
}

.bug_btn:active {
  color: rgba(48, 166, 215, 0.6);
}

@media screen and (min-width: 1000px) {
  .bug_btn {
    background: #fff;
    display: inline-block;
    color: #30a6d7;
    height: 46px;
    line-height: 46px;
    margin: 10px auto;
    font-size: 16px;
    padding: 0 40px;
    border-radius: 5px;
  }

  .banner {
    background-image: url('/images/product/bg_monitor.png');

    .title {
      padding-top: 154px;
      text-align: left;

      .more a {
        color: #fff;
      }

      h1 {
        margin-bottom: 29px;
      }

      p {
        text-align: left;
      }
    }
  }
}

@media screen and (min-width: 800px) and (max-width: 1000px) {
  .bug_btn {
    background: #fff;
    display: inline-block;
    color: #30a6d7;
    height: 46px;
    line-height: 46px;
    margin: 10px auto;
    font-size: 16px;
    padding: 0 40px;
    border-radius: 5px;
  }

  .banner {
    background-image: url('/images/product/bg_monitor.png');

    .title {
      padding-top: 94px;
      text-align: left;

      .more a {
        color: #fff;
      }

      h1 {
        margin-bottom: 29px;
      }

      p {
        text-align: left;
      }
    }
  }
}

@media screen and (min-width: 500px) and (max-width: 800px) {
  .bug_btn {
    background: #fff;
    display: inline-block;
    color: #30a6d7;
    height: 46px;
    line-height: 46px;
    margin: 10px auto;
    font-size: 16px;
    padding: 0 40px;
    border-radius: 5px;
  }

  .banner {
    background-image: url('/images/product/bg_monitor.png');

    .title {
      padding-top: 74px;
      text-align: left;

      .more a {
        color: #fff;
      }

      h1 {
        margin-bottom: 29px;
      }

      p {
        text-align: left;
      }
    }
  }
}

@media screen and (min-width: 300px) and (max-width: 500px) {
  .bug_btn {
    background: #fff;
    display: inline-block;
    color: #30a6d7;
    height: 30px;
    line-height: 30px;
    margin: 5px auto;
    font-size: 12px;
    padding: 0 20px;
    border-radius: 5px;
  }

  .banner {
    background-image: url('/images/product/bg_monitor.png');

    .title {
      padding-top: 50px;
      text-align: left;

      .more a {
        color: #fff;
      }

      h1 {
        margin-bottom: 15px;
      }

      p {
        text-align: left;
      }
    }
  }
}
</style>

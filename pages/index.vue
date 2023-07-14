<script>
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'

import { gotoEasyTeam } from '~/utils/goto'
import { account } from '@/api/account'
import { getToken } from '~/utils/token'

export default defineComponent({
  name: 'Home',
  setup() {
    const route = useRoute()
    useHead({
      title: 'EasyAPI - API文档管理、API测试、API监控、API低代码、API接口服务新一代工具',
      meta: [{ name: 'description', content: 'EasyAPI 简单，好用的API管理系统，为您提供API文档管理、API测试、API监控、API低代码、API接口服务，新一代API管理工具。EasyAPI是国内第一家做API文档管理的产品。' },
        { name: 'keyword', content: 'API文档管理,API管理系统,API接口管理系统,API管理平台,API管理,API,API工具,API Mock,Mock API,API接口,接口管理,API接口管理,API监控,API测试,API服务,API低代码,API门户,API脚本,API服务市场' }],
    })

    const gotoTeam = () => {
      gotoEasyTeam('')
    }

    onMounted(() => {
      // if (route.path === '/' && getToken()) {
      //   account.getUser().then((res) => {
      //     if (res.code === 1 && res.content.team) {
      //       if (res.content.team.url)
      //         window.location.href = `https://${res.content.team.url}.easyapi.com`
      //     }
      //   })
      // }
    })
    return {
      gotoTeam,
    }
  },
})
</script>

<template>
  <div class="main">
    <div class="card card-bg f-cb">
      <div class="card-info">
        <h1>简单，好用的API服务平台</h1>
        <p>
          新一代API接口管理平台，EasyAPI是一个为您提供API管理、API测试、API监控、API文档、API低代码服务的综合性API服务平台。
          <br>
          还有丰富的API接口服务
        </p>
        <div class="bg_white" @click="gotoTeam">
          <p>
            <span>
              <a>前往API管理门户</a>
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="sm:mx-auto max-width-1000 sm:py-16">
      <ul class="flex justify-center">
        <li class="flex flex-col cursor-pointer items-center sm:w-50 lg:w-1/3 text-center" @click="gotoTeam">
          <img class="lg:w-5/12 md:w-36 sm:w-28" src="https://static.easyapi.com/images/index/ic1.png">
          <span class="my-6 text-2xl font-black text-gray-600">API文档</span>
          <p class="text-xl text-gray-500">
            结构化文档操作，自动化测试
          </p>
        </li>
        <li class="flex flex-col cursor-pointer items-center sm:w-50 md:mx-4 lg:w-1/3 text-center" @click="gotoTeam">
          <img class="lg:w-5/12 md:w-36 sm:w-28" src="https://static.easyapi.com/images/index/ic2.png">
          <span class="my-6 text-2xl font-black text-gray-600">API监控</span>
          <p class="text-xl text-gray-500">
            提升接口运维响应效率
          </p>
        </li>
        <li class="flex flex-col cursor-pointer items-center sm:w-50 lg:w-1/3 text-center" @click="gotoTeam">
          <img class="lg:w-5/12 md:w-36 sm:w-28" src="https://static.easyapi.com/images/index/ic4.png">
          <span class="my-6 text-2xl font-black text-gray-600">API服务</span>
          <p class="text-xl text-gray-500">
            API接口服务领域的专业服务商
          </p>
        </li>
      </ul>
    </div>
    <div class="card page f-cb">
      <div class="card-item">
        <h1>在线管理，API文档实时更新</h1>
        <p>
          在线添加，编辑接口，API系统实时更新，保证团队成员始终浏览到文档的最新状态告
          <br>
          别 World 文档传阅版本混乱
        </p>
        <div class="pd-b-50 f-cb">
          <div class="inner-item f-fl">
            <img class="mx-auto" src="https://static.easyapi.com/images/w1.png">
            <span>Word</span>
            <p class="text_c">
              World软件打开延迟，卡顿，内容丢失？ 一次
              <br>
              文档编辑，需要多人互传，版本更新混乱？
              <br>
              是时候和Word说再见了！
            </p>
          </div>
          <div style="display: inline-block; margin-top: 60px">
            <img class="arrow" src="/images/info/ic_home_arrow.png">
          </div>
          <div class="inner-item f-fr">
            <img class="mx-auto" src="https://static.easyapi.com/images/w2.png">
            <span>EasyAPI</span>
            <p class="text_c">
              简单易用，接口变更动态一目了然。不限制使用人数，不限制项目数量，基于阿里云安全稳定高速。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="card f-cb">
      <div class="card-item">
        <h1>监控系统，提升接口性能</h1>
        <p>
          除了崩溃监控，其实我们还要对API进行详细监控，实时反馈接口相应数据，
          <br>
          为您准确分析性能数据。
        </p>
        <div class="inner pd-b-50 f-cb">
          <div class="inner-item">
            <img class="mx-auto" src="https://static.easyapi.com/images/index-i-3.png">
            <span>开发效率提升</span>
            <p>
              再也不用来回调试接口
              <br>
              更快速开发
            </p>
          </div>
          <div class="inner-item">
            <img class="mx-auto" src="https://static.easyapi.com/images/index-i-2.png">
            <span>运维响应提升</span>
            <p>
              还原用户场景
              <br>
              快速解决问题
            </p>
          </div>
          <div class="inner-item">
            <img class="mx-auto" src="https://static.easyapi.com/images/index-i-1.png">
            <span>业务风险降低</span>
            <p>
              实时反馈APP与API的交互情况
              <br>
              及早发现及早解决
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="card f-cb" style="background: #fafafa">
      <div class="card-item">
        <h1>API低代码，助力企业数字化转型、业务快速迭代</h1>
        <p>可以帮助开发者轻松开发、发布、维护、监控用低代码构建的API服务。</p>
        <div class="img">
          <img src="https://static.easyapi.com/images/index/img1.png">
        </div>
      </div>
    </div>
    <div class="card f-cb">
      <div class="card-item">
        <h1>API接口服务，选择优质的接口</h1>
        <p>致力于成为最专业稳定的接口服务商</p>
        <div class="img">
          <img src="https://static.easyapi.com/images/index/img2.png">
        </div>
      </div>
    </div>
    <div class="card bor-b f-cb f-border-b" style="background: #fafafa">
      <div class="card-item">
        <h1>更多API解决方案，欢迎联系</h1>
        <p>
          我们是国内专注API领域的专业开发团队
          <br>
          期待你的咨询合作
        </p>
        <div class="img">
          <img src="/images/info/pic_home_more.png">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 500px) {
  .bg_white {
    background: #f0bf43 !important;
    border-bottom: 2px solid #bf9f43;
    position: relative;
    display: inline-block;
    color: #ffffff;
    cursor: pointer;
    height: 68px;
    z-index: 1;
    padding: 10px 60px;
    font-size: 16px;
    line-height: 46px;
    font-weight: 600;
    border-radius: 6px;
  }

  .bg_white::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #e9b21c;
    transform-origin: center bottom;
    border-radius: 6px;
    transform: scaleY(0);
    transition: transform 0.4s ease-in-out;
  }

  .bg_white > img {
    position: absolute;
    top: 62px;
    left: 50%;
    width: 40px;
    visibility: hidden;
    transform: translate(-50%, 0);
  }

  .img > img {
    width: 100%;
  }

  .bg_white > p {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .bg_white > p > img {
    width: 16px;
    height: 16px;
    margin-left: 20px;
  }

  .bg_white > p a {
    font-size: 26px;
    color: #fff;
    letter-spacing: 4px;
  }

  .font_w {
    font-weight: bold;
  }

  .text_c {
    text-align: center !important;
  }

  .bg_white:hover {
    color: rgba(49, 176, 213, 0.7);
  }

  .bg_white:hover::before {
    transform-origin: center top;
    transform: scaleY(1);
  }

  .bg_white:active {
    color: rgba(49, 176, 213, 0.6);
  }

}

@media screen and (min-width: 300px) and (max-width: 500px) {
  .bg_white {
    background: #f0bf43 !important;
    border-bottom: 2px solid #bf9f43;
    position: relative;
    display: inline-block;
    color: #ffffff;
    cursor: pointer;
    height: 58px;
    z-index: 1;
    padding: 6px 60px;
    font-size: 16px;
    line-height: 46px;
    font-weight: 600;
    border-radius: 6px;
  }

  .bg_white::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #e9b21c;
    transform-origin: center bottom;
    border-radius: 6px;
    transform: scaleY(0);
    transition: transform 0.4s ease-in-out;
  }

  .bg_white > img {
    position: absolute;
    top: 62px;
    left: 50%;
    width: 40px;
    visibility: hidden;
    transform: translate(-50%, 0);
  }

  .img > img {
    width: 100%;
  }

  .bg_white > p {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .bg_white > p > img {
    width: 16px;
    height: 16px;
    margin-left: 20px;
  }

  .bg_white > p a {
    font-size: 18px;
    color: #fff;
    letter-spacing: 4px;
  }

  .font_w {
    font-weight: bold;
  }

  .text_c {
    text-align: center !important;
  }

  .bg_white:hover {
    color: rgba(49, 176, 213, 0.7);
  }

  .bg_white:hover::before {
    transform-origin: center top;
    transform: scaleY(1);
  }

  .bg_white:active {
    color: rgba(49, 176, 213, 0.6);
  }

}

.max-width-500{
  max-width: 500px;
}

.max-width-1000{
  max-width: 1000px;
}
</style>

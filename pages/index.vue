<template>
  <div class="main">
    <div class="card card-bg f-cb">
      <div class="card-info">
        <h1>简单，好用的API服务平台</h1>
        <p>
          新一代API接口管理平台，EasyAPI是一个为您提供API管理、API测试、API监控、API文档、API低代码服务的综合性API服务平台。
          <br />
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
    <div class="card-icon">
      <ul>
        <li>
          <a href="https://team.easyapi.com/project/">
            <img src="https://static.easyapi.com/images/index/ic1.png" />
          </a>
          <a href="https://team.easyapi.com/project/">
            <span class="font_w">API文档</span>
            <p>结构化文档操作，自动化测试</p>
          </a>
        </li>
        <li>
          <a href="https://team.easyapi.com/project/">
            <img src="https://static.easyapi.com/images/index/ic2.png" />
          </a>
          <a href="https://team.easyapi.com/project/">
            <span class="font_w">API监控</span>
            <p>提升接口运维响应效率</p>
          </a>
        </li>
        <li>
          <a href="https://team.easyapi.com/service/">
            <img src="https://static.easyapi.com/images/index/ic4.png" />
          </a>
          <a href="https://team.easyapi.com/service/">
            <span class="font_w">API服务</span>
            <p>API接口服务领域的专业服务商</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="card page f-cb">
      <div class="card-item">
        <h1>在线管理，API文档实时更新</h1>
        <p>
          在线添加，编辑接口，API系统实时更新，保证团队成员始终浏览到文档的最新状态告
          <br />
          别 World 文档传阅版本混乱
        </p>
        <div class="pd-b-50 f-cb">
          <div class="inner-item f-fl">
            <img class="mx-auto" src="https://static.easyapi.com/images/w1.png" />
            <span>Word</span>
            <p class="text_c">
              World软件打开延迟，卡顿，内容丢失？ 一次
              <br />
              文档编辑，需要多人互传，版本更新混乱？
              <br />
              是时候和Word说再见了！
            </p>
          </div>
          <div style="display: inline-block; margin-top: 60px">
            <img class="arrow" src="/images/info/ic_home_arrow.png" />
          </div>
          <div class="inner-item f-fr">
            <img class="mx-auto" src="https://static.easyapi.com/images/w2.png" />
            <span>EasyAPI</span>
            <p class="text_c">简单易用，接口变更动态一目了然。不限制使用人数，不限制项目数量，基于阿里云安全稳定高速。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card f-cb">
      <div class="card-item">
        <h1>监控系统，提升接口性能</h1>
        <p>
          除了崩溃监控，其实我们还要对API进行详细监控，实时反馈接口相应数据，
          <br />
          为您准确分析性能数据。
        </p>
        <div class="inner pd-b-50 f-cb">
          <div class="inner-item">
            <img class="mx-auto" src="https://static.easyapi.com/images/index-i-3.png" />
            <span>开发效率提升</span>
            <p>
              再也不用来回调试接口
              <br />
              更快速开发
            </p>
          </div>
          <div class="inner-item">
            <img class="mx-auto" src="https://static.easyapi.com/images/index-i-2.png" />
            <span>运维响应提升</span>
            <p>
              还原用户场景
              <br />
              快速解决问题
            </p>
          </div>
          <div class="inner-item">
            <img class="mx-auto" src="https://static.easyapi.com/images/index-i-1.png" />
            <span>业务风险降低</span>
            <p>
              实时反馈APP与API的交互情况
              <br />
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
          <img src="https://static.easyapi.com/images/index/img1.png" />
        </div>
      </div>
    </div>
    <div class="card f-cb">
      <div class="card-item">
        <h1>API接口服务，选择优质的接口</h1>
        <p>致力于成为最专业稳定的接口服务商</p>
        <div class="img">
          <img src="https://static.easyapi.com/images/index/img2.png" />
        </div>
      </div>
    </div>
    <div class="card bor-b f-cb f-border-b" style="background: #fafafa">
      <div class="card-item">
        <h1>更多API解决方案，欢迎联系</h1>
        <p>
          我们是国内专注API领域的专业开发团队
          <br />
          期待你的咨询合作
        </p>
        <div class="img">
          <img src="/images/info/pic_homg_more.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Index from './index'

export default Index
</script>

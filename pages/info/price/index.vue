<template>
  <div class="main">
    <div class="price-bg">
      <div class="content">
        <div class="price-title">
          <h1>支持我们创造更好的 API 产品</h1>
          <p>EasyAPI为您的团队提供易用、好用的API服务，我们专注于围绕应用API服务<br>
            一起携手创造更好的API服务</p>
        </div>
      </div>
    </div>
    <div class="price-card f-border-b">
      <ul class="price-card-title">
        <li>
          <div class="price-card-title-top">基础版</div>
          <div class="price">
            <p><span>￥29</span><em class="f-fs1">/团队/月</em></p>
            <p class="subtitle">使用上限20人，增员￥5/人/月</p>
            <el-button class="w-full" type="primary" plain @click="jumpFree">免费试用</el-button>
          </div>
          <div class="description">
            <div class="item">
              <span>服务</span>
              <p>设计API<i class="el-icon-check"></i></p>
              <p>API文档<i class="el-icon-check"></i></p>
              <p>生成API文档<i class="el-icon-check"></i></p>
              <p>API编辑历史<i class="el-icon-check"></i></p>
              <p>导出Word<i class="el-icon-check"></i></p>
              <p>API测试<i class="el-icon-check"></i></p>
              <p>管理API测试用例<i class="el-icon-check"></i></p>
              <p>环境管理<i class="el-icon-check"></i></p>
              <p>数据结构管理<i class="el-icon-check"></i></p>
              <p>返回码管理<i class="el-icon-check"></i></p>
            </div>
            <div class="item mg-t-20">
              <span>监控</span>
              <p>API自动监控</p>
              <p>监控概况</p>
              <p>自定义监控</p>
              <p>响应异常</p>
              <p>监控记录</p>
              <p>报警规则</p>
              <p>每日统计</p>
            </div>
            <div class="mg-t-20">
              <span>API低代码</span>
              <p>云接口管理</p>
              <p>微页面接口管理</p>
              <p>数据表自动化接口</p>
              <p>数据库转API接口</p>
              <p>Node.js语法低代码</p>
            </div>
          </div>
        </li>
        <li>
          <div class="price-card-title-top">高级版</div>
          <div class="price">
            <p><span>￥99</span><em class="f-fs1">/团队/月</em></p>
            <p class="subtitle">使用上限20人，增员￥5/人/月</p>
            <el-button class="w-full" type="primary" plain @click="jumpFree">免费试用</el-button>
          </div>
          <div class="description">
            <div class="item">
              <span>服务</span>
              <p>设计API<i class="el-icon-check"></i></p>
              <p>API文档<i class="el-icon-check"></i></p>
              <p>生成API文档<i class="el-icon-check"></i></p>
              <p>API编辑历史<i class="el-icon-check"></i></p>
              <p>导出Word<i class="el-icon-check"></i></p>
              <p>API测试<i class="el-icon-check"></i></p>
              <p>管理API测试用例<i class="el-icon-check"></i></p>
              <p>环境管理<i class="el-icon-check"></i></p>
              <p>数据结构管理<i class="el-icon-check"></i></p>
              <p>返回码管理<i class="el-icon-check"></i></p>
            </div>
            <div class="item mg-t-20">
              <span>监控</span>
              <p>API自动监控<i class="el-icon-check"></i></p>
              <p>监控概况<i class="el-icon-check"></i></p>
              <p>自定义监控<i class="el-icon-check"></i></p>
              <p>响应异常<i class="el-icon-check"></i></p>
              <p>监控记录<i class="el-icon-check"></i></p>
              <p>报警规则<i class="el-icon-check"></i></p>
              <p>每日统计<i class="el-icon-check"></i></p>
            </div>
            <div class="mg-t-20">
              <span>API低代码</span>
              <p>云接口管理</p>
              <p>微页面接口管理</p>
              <p>数据表自动化接口</p>
              <p>数据库转API接口</p>
              <p>Node.js语法低代码</p>
            </div>
          </div>
        </li>
        <li>
          <div class="price-card-title-top">旗舰版</div>
          <div class="price">
            <p><span>￥199</span><em class="f-fs1">/团队/月</em></p>
            <p class="subtitle">使用上限20人，增员￥5/人/月</p>
            <el-button class="w-full" type="primary" plain @click="jumpFree">免费试用</el-button>
          </div>
          <div class="description">
            <div class="item">
              <span>服务</span>
              <p>设计API<i class="el-icon-check"></i></p>
              <p>API文档<i class="el-icon-check"></i></p>
              <p>生成API文档<i class="el-icon-check"></i></p>
              <p>API编辑历史<i class="el-icon-check"></i></p>
              <p>导出Word<i class="el-icon-check"></i></p>
              <p>API测试<i class="el-icon-check"></i></p>
              <p>管理API测试用例<i class="el-icon-check"></i></p>
              <p>环境管理<i class="el-icon-check"></i></p>
              <p>数据结构管理<i class="el-icon-check"></i></p>
              <p>返回码管理<i class="el-icon-check"></i></p>
            </div>
            <div class="item mg-t-20">
              <span>监控</span>
              <p>API自动监控<i class="el-icon-check"></i></p>
              <p>监控概况<i class="el-icon-check"></i></p>
              <p>自定义监控<i class="el-icon-check"></i></p>
              <p>响应异常<i class="el-icon-check"></i></p>
              <p>监控记录<i class="el-icon-check"></i></p>
              <p>报警规则<i class="el-icon-check"></i></p>
              <p>每日统计<i class="el-icon-check"></i></p>
            </div>
            <div class="mg-t-20">
              <span>API低代码</span>
              <p>云接口管理<i class="el-icon-check"></i></p>
              <p>微页面接口管理<i class="el-icon-check"></i></p>
              <p>数据表自动化接口<i class="el-icon-check"></i></p>
              <p>数据库转API接口<i class="el-icon-check"></i></p>
              <p>Node.js语法低代码<i class="el-icon-check"></i></p>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="pd-100 f-border-b bg-f5">
      <div class="title">他们都在选我们</div>
      <div class="description">API管理门户主要为开发企业搭建 API 门户，核心功能包括 API 文档管理、API 测试工具、API 监控系统等服务
        <br>对于大中型开发团队，API 内部管理比较注重隐私，特推出私有化版本
      </div>
      <div class="appshows content">
        <ul class="appshows-imgs">
          <li>
            <a title="中兴" href="https://www.zte.com.cn" target="_blank">
              <img src="/images/info/pic_price_logo1.png">
            </a>
          </li>
          <li>
            <a title="华为" href="https://www.huawei.com" target="_blank">
              <img src="/images/info/pic_price_logo2.png">
            </a>
          </li>
          <li>
            <a title="平安银行" href="https://bank.pingan.com/" target="_blank">
              <img src="/images/info/pic_price_logo3.png">
            </a>
          </li>
          <li>
            <a title="翼龙贷" href="https://www.eloancn.com/" target="_blank">
              <img src="/images/info/pic_price_logo4.png">
            </a>
          </li>
          <li>
            <a title="宝象金融" href="https://www.bxjr.com/" target="_blank">
              <img src="/images/info/pic_price_logo5.png">
            </a>
          </li>
          <li>
            <a title="超级表格" href="https://www.chaojibiaoge.com/" target="_blank">
              <img src="/images/info/pic_price_logo6.png">
            </a>

          </li>
          <li>
            <a title="程序员客栈" href="https://www.proginn.com" target="_blank">
              <img src="/images/info/pic_price_logo7.png">
            </a>
          </li>
          <li>
            <a title="计蒜客" href="https://www.jisuanke.com/" target="_blank">
              <img src="/images/info/pic_price_logo8.png">
            </a>
          </li>
          <li>
            <a title="中国电科" href="http://www.cetc.com.cn/" target="_blank">
              <img src="/images/info/pic_price_logo9.png">
            </a>
          </li>
          <li>
            <a title="华润创业" href="http://www.cre.com.hk/" target="_blank">
              <img src="/images/info/pic_price_logo10.png">
            </a>
          </li>
          <li>
            <a title="山东魏桥" href="http://www.weiqiaocy.com/" target="_blank">
              <img src="/images/info/pic_price_logo11.png">
            </a>
          </li>
          <li>
            <a title="服务区" href="https://www.fuwuqu.com/" target="_blank">
              <img src="/images/info/pic_price_logo12.png">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Index from './index'

export default Index
</script>

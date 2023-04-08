<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { gotoTeam } from '~/utils/goto'

useHead({
  title: '价格 - EasyAPI服务平台',
  meta: [{ name: 'description', content: 'EasyAPI服务平台价格体系' },
    { name: 'keyword', content: '价格' }],
})
function gotoTeam() {
  gotoTeam('', this)
}
</script>

<template>
  <div class="main">
    <div class="price-bg">
      <div class="content">
        <div class="price-title">
          <h1>支持我们创造更好的 API 产品</h1>
          <p>
            EasyAPI为您的团队提供易用、好用的API服务，我们专注于围绕应用API服务
            <br>
            一起携手创造更好的API服务
          </p>
        </div>
      </div>
    </div>
    <div class="price-card f-border-b">
      <ul class="price-card-title">
        <li>
          <div class="price-card-title-top">
            基础版
          </div>
          <div class="price">
            <p>
              <span>￥29</span>
              <em class="f-fs1">/团队/月</em>
            </p>
            <p class="subtitle">
              使用上限20人，增员￥5/人/月
            </p>
            <el-button class="w-full" type="primary" plain @click="gotoTeam">
              免费试用 90天
            </el-button>
          </div>
          <div class="description">
            <div class="item">
              <span>API协作</span>
              <p>
                设计API
                <i class="el-icon-check" />
              </p>
              <p>
                API文档
                <i class="el-icon-check" />
              </p>
              <p>
                生成API文档
                <i class="el-icon-check" />
              </p>
              <p>
                API编辑历史
                <i class="el-icon-check" />
              </p>
              <p>
                导出Word
                <i class="el-icon-check" />
              </p>
              <p>
                API测试
                <i class="el-icon-check" />
              </p>
              <p>
                管理API测试用例
                <i class="el-icon-check" />
              </p>
              <p>
                环境管理
                <i class="el-icon-check" />
              </p>
              <p>
                数据结构管理
                <i class="el-icon-check" />
              </p>
              <p>
                返回码管理
                <i class="el-icon-check" />
              </p>
            </div>
            <div class="item mg-t-20">
              <span>API监控</span>
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
          <div class="price-card-title-top">
            高级版
          </div>
          <div class="price">
            <p>
              <span>￥99</span>
              <em class="f-fs1">/团队/月</em>
            </p>
            <p class="subtitle">
              使用上限20人，增员￥5/人/月
            </p>
            <el-button class="w-full" type="primary" plain @click="gotoTeam">
              免费试用 90天
            </el-button>
          </div>
          <div class="description">
            <div class="item">
              <span>API协作</span>
              <p>
                设计API
                <i class="el-icon-check" />
              </p>
              <p>
                API文档
                <i class="el-icon-check" />
              </p>
              <p>
                生成API文档
                <i class="el-icon-check" />
              </p>
              <p>
                API编辑历史
                <i class="el-icon-check" />
              </p>
              <p>
                导出Word
                <i class="el-icon-check" />
              </p>
              <p>
                API测试
                <i class="el-icon-check" />
              </p>
              <p>
                管理API测试用例
                <i class="el-icon-check" />
              </p>
              <p>
                环境管理
                <i class="el-icon-check" />
              </p>
              <p>
                数据结构管理
                <i class="el-icon-check" />
              </p>
              <p>
                返回码管理
                <i class="el-icon-check" />
              </p>
            </div>
            <div class="item mg-t-20">
              <span>API监控</span>
              <p>
                API自动监控
                <i class="el-icon-check" />
              </p>
              <p>
                监控概况
                <i class="el-icon-check" />
              </p>
              <p>
                自定义监控
                <i class="el-icon-check" />
              </p>
              <p>
                响应异常
                <i class="el-icon-check" />
              </p>
              <p>
                监控记录
                <i class="el-icon-check" />
              </p>
              <p>
                报警规则
                <i class="el-icon-check" />
              </p>
              <p>
                每日统计
                <i class="el-icon-check" />
              </p>
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
          <div class="price-card-title-top">
            旗舰版
          </div>
          <div class="price">
            <p>
              <span>￥199</span>
              <em class="f-fs1">/团队/月</em>
            </p>
            <p class="subtitle">
              使用上限20人，增员￥5/人/月
            </p>
            <el-button class="w-full" type="primary" plain @click="gotoTeam">
              免费试用 90天
            </el-button>
          </div>
          <div class="description">
            <div class="item">
              <span>API协作</span>
              <p>
                设计API
                <i class="el-icon-check" />
              </p>
              <p>
                API文档
                <i class="el-icon-check" />
              </p>
              <p>
                生成API文档
                <i class="el-icon-check" />
              </p>
              <p>
                API编辑历史
                <i class="el-icon-check" />
              </p>
              <p>
                导出Word
                <i class="el-icon-check" />
              </p>
              <p>
                API测试
                <i class="el-icon-check" />
              </p>
              <p>
                管理API测试用例
                <i class="el-icon-check" />
              </p>
              <p>
                环境管理
                <i class="el-icon-check" />
              </p>
              <p>
                数据结构管理
                <i class="el-icon-check" />
              </p>
              <p>
                返回码管理
                <i class="el-icon-check" />
              </p>
            </div>
            <div class="item mg-t-20">
              <span>API监控</span>
              <p>
                API自动监控
                <i class="el-icon-check" />
              </p>
              <p>
                监控概况
                <i class="el-icon-check" />
              </p>
              <p>
                自定义监控
                <i class="el-icon-check" />
              </p>
              <p>
                响应异常
                <i class="el-icon-check" />
              </p>
              <p>
                监控记录
                <i class="el-icon-check" />
              </p>
              <p>
                报警规则
                <i class="el-icon-check" />
              </p>
              <p>
                每日统计
                <i class="el-icon-check" />
              </p>
            </div>
            <div class="mg-t-20">
              <span>API低代码</span>
              <p>
                云接口管理
                <i class="el-icon-check" />
              </p>
              <p>
                微页面接口管理
                <i class="el-icon-check" />
              </p>
              <p>
                数据表自动化接口
                <i class="el-icon-check" />
              </p>
              <p>
                数据库转API接口
                <i class="el-icon-check" />
              </p>
              <p>
                Node.js语法低代码
                <i class="el-icon-check" />
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="pd-100 f-border-b bg-f5">
      <div class="title">
        他们都在选我们
      </div>
      <div class="description">
        API管理门户主要为开发企业搭建 API 门户，核心功能包括 API 文档管理、API 测试工具、API 监控系统等服务
        <br>
        对于大中型开发团队，API 内部管理比较注重隐私，特推出私有化版本
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

<style lang="scss" scoped>
.price-bg {
  background-image: url('/images/info/bg_price.png');
  height: 520px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .title {
    padding-top: 184px;
    text-align: center;
    color: #fff;

    &.color-gray {
      color: #555;
    }

    h1 {
      font-size: 4.8rem;
      margin: 15px 0;
    }

    p {
      font-size: 2rem;
      line-height: 1.7;
    }
  }
}

.appshows {
  //max-width: 80%;
  overflow: hidden;
  margin: 50px auto;
}

.price-card .price-card-title li {
  width: 340px;
}

.appshows-imgs li {
  float: left;
  width: 15%;
  margin-right: 2%;
  margin-bottom: 15px;
}

.appshows-imgs li:nth-child(6) {
  margin-right: 0;
}

.appshows-imgs li:nth-child(12) {
  margin-right: 0;
}

.appshows-imgs li img {
  width: 100%;
}

.free_use {
  height: 100%;
  height: 60px;
  line-height: 54px;
  border-radius: 4px;
  text-align: center;
}

.free_use a {
  color: #18c1d6;
  width: 100%;
  height: 100%;
  display: block;
  text-align: center;
}

.free_use a:hover {
  color: white;
  background: #18c1d6;
}

.price-card .price-card-title li:hover {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.price-card .price-card-title li .free_use {
  position: relative;
  font-size: 14px;
}

.price-card .price-card-title li .free_use img {
  position: absolute;
  right: 15px;
  top: 50%;
  width: 15px;
  -webkit-transform: translate(0, -70%);
}

.price-title {
  padding-top: 130px;
}

@media screen and (min-width: 800px) {
  .price-title {
    padding-top: 130px;
    text-align: center;
    color: #fff;

    &.color-gray {
      color: #555;
    }

    h1 {
      font-size: 4.8rem;
      margin: 15px 0;
    }

    p {
      font-size: 2rem;
      line-height: 1.7;
    }
  }

  .price-card {
    padding-bottom: 100px;

    .price-card-title {
      margin-top: -170px;
      display: flex;
      justify-content: center;

      li {
        display: inline-block;
        vertical-align: middle;
        height: auto;
        width: 340px;
        background: #fff;
        margin: 10px 30px;
        border: solid #ddd 1px;
        border-radius: 10px;
        overflow: hidden;

        .price-card-title-top {
          padding: 25px 20px 10px;
          font-size: 1.6rem;
          text-align: center;
        }

        .description {
          padding: 20px;

          .mg-t-20 {
            margin-top: 20px;
          }

          .item {
            border-bottom: solid #ddd 1px;
          }

          span {
            color: #909399;
            margin-bottom: 10px;
          }

          .el-icon-check {
            color: #86be54;
          }

          p {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            margin: 10px 0;
          }
        }

        .price {
          padding: 0 20px 20px;
          border-bottom: solid #ddd 1px;
          text-align: center;

          .subtitle {
            font-size: 12px;
            color: #afafaf;
          }

          p {
            display: block;
            font-size: 4.3rem;
            padding-bottom: 5px;

            span {
              color: #00aec5;
            }

            em {
              margin-right: 5px;
            }
          }
        }

        .btn {
          border: solid #18c1d6 1px;
          display: inline-block;
          padding: 5px 15px;
          border-radius: 3px;
          color: #18c1d6;

          &:hover {
            color: #fff;
            background: #18c1d6;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 500px) and (max-width: 800px) {
  .price-title {
    padding-top: 130px;
    text-align: center;
    color: #fff;

    &.color-gray {
      color: #555;
    }

    h1 {
      font-size: 3.6rem;
      margin: 15px 0;
    }

    p {
      font-size: 1.4rem;
      line-height: 1.7;
    }
  }

  .price-card {
    padding-bottom: 100px;

    .price-card-title {
      margin-top: -170px;
      text-align: center;
      display: flex;
      justify-content: center;

      li {
        display: inline-block;
        vertical-align: middle;
        height: auto;
        width: 340px;
        background: #fff;
        margin: 10px 30px;
        border: solid #ddd 1px;
        border-radius: 10px;
        overflow: hidden;

        .price-card-title-top {
          padding: 25px 20px 10px;
          font-size: 1.6rem;
        }

        .description {
          padding: 20px;

          .mg-t-20 {
            margin-top: 20px;
          }

          .item {
            border-bottom: solid #ddd 1px;
          }

          span {
            color: #909399;
            margin-bottom: 10px;
          }

          .el-icon-check {
            color: #86be54;
          }

          p {
            display: flex;
            justify-content: space-between;
            margin: 10px 0;
          }
        }

        .price {
          padding: 0 20px 20px;
          border-bottom: solid #ddd 1px;
          text-align: center;

          .subtitle {
            font-size: 12px;
            color: #d2d2d2;
          }

          p {
            display: block;
            font-size: 4.3rem;
            padding-bottom: 5px;

            span {
              color: #00aec5;
            }

            em {
              margin-right: 5px;
            }
          }
        }

        .btn {
          border: solid #18c1d6 1px;
          display: inline-block;
          padding: 5px 15px;
          border-radius: 3px;
          color: #18c1d6;

          &:hover {
            color: #fff;
            background: #18c1d6;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 300px) and (max-width: 500px) {
  .price-title {
    padding-top: 100px;
    text-align: center;
    color: #fff;

    &.color-gray {
      color: #555;
    }

    h1 {
      font-size: 3.6rem;
      margin: 15px 0;
    }

    p {
      font-size: 1.4rem;
      line-height: 1.7;
    }
  }

  .price-card {
    padding-bottom: 100px;

    .price-card-title {
      margin-top: -170px;
      text-align: center;

      li {
        display: inline-block;
        vertical-align: middle;
        height: auto;
        width: 245px;
        background: #fff;
        margin: 10px 30px;
        border: solid #ddd 1px;
        border-radius: 10px;
        overflow: hidden;

        .price-card-title-top {
          padding: 15px 10px 5px;
          font-size: 1.4rem;
        }

        .description {
          padding: 20px;

          .mg-t-20 {
            margin-top: 20px;
          }

          .item {
            border-bottom: solid #ddd 1px;
          }

          span {
            color: #909399;
            margin-bottom: 10px;
          }

          .el-icon-check {
            color: #86be54;
          }

          p {
            display: flex;
            justify-content: space-between;
            margin: 10px 0;
          }
        }

        .price {
          padding: 0 20px 20px;
          border-bottom: solid #ddd 1px;
          text-align: center;

          .subtitle {
            font-size: 12px;
            color: #d2d2d2;
          }

          p {
            display: block;
            font-size: 4.3rem;
            padding-bottom: 5px;

            span {
              color: #00aec5;
            }

            em {
              margin-right: 5px;
            }
          }
        }

        .btn {
          border: solid #18c1d6 1px;
          display: inline-block;
          padding: 5px 15px;
          border-radius: 3px;
          color: #18c1d6;

          &:hover {
            color: #fff;
            background: #18c1d6;
          }
        }
      }
    }
  }
}
</style>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { ref } from 'vue'
import Pay from './components/pay.vue'
import { Check } from '@element-plus/icons-vue'

useHead({
  title: '支持我们 - EasyAPI服务平台',
  meta: [{ name: 'description', content: '支持EasyAPI' },
    { name: 'keyword', content: '支持EasyAPI' }],
})

const dialogVisible = ref(false)

function showCode() {
  dialogVisible.value = true
}
</script>

<template>
  <div class="main">
    <div class="content">
      <div class="info-page">
        <h2 class="title">
          支持我们
        </h2>
        <div class="donate-img">
          <img src="https://static.easyapi.com/images/info/donate.jpg" alt="">
        </div>
        <div class="donate-description f-cb">
          <p>
            <em>如</em>
            果您觉得 EasyAPI 对您非常有用，您可以考虑通过捐赠来支持我们。 您的捐赠将帮助我们应付日益增长的主机和宽带，
            以及软件开发、美工与网站编辑等方面费用，帮助我们在未来为您提供更加优质的内容和服务 。我们非常感谢您的捐赠与支持。
          </p>
          <dl class="pay">
            <dd>
              <p><img src="https://static.easyapi.com/images/info/fanfanle.png"></p>
              <span>微信扫一扫</span>
            </dd>
            <dd>
              <p><img src="https://static.easyapi.com/images/info/leida.png"></p>
              <span>支付宝扫一扫</span>
            </dd>
          </dl>
        </div>

        <div class="supporter f-cb">
          <div class="support">
            支持名单
          </div>
          <ul class="f-cb">
            <li>
              <p><img class="mx-auto" src="https://qiniu.easyapi.com/user/zhaozilong.jpg"></p>
              <strong>赵子龙</strong>
              <span>Java工程师</span>
            </li>
            <li>
              <p><img class="mx-auto" src="https://qiniu.easyapi.com/user/tangwenchang.jpg"></p>
              <strong>唐文昌</strong>
              <span>iOS工程师</span>
            </li>
            <li>
              <p><img class="mx-auto" src="https://qiniu.easyapi.com/user/banxin.jpg"></p>
              <strong>班新</strong>
              <span>Android工程师</span>
            </li>
            <li>
              <p><img class="mx-auto" src="https://qiniu.easyapi.com/user/zhangsheng.jpg"></p>
              <strong>张胜</strong>
              <span>项目总监</span>
            </li>
            <li>
              <p><img class="mx-auto" src="https://qiniu.easyapi.com/user/huangmingjie.jpg"></p>
              <strong>黄明杰</strong>
              <span>技术总监</span>
            </li>
            <li>
              <p><img class="mx-auto" src="https://qiniu.easyapi.com/user/zhanglinghui.jpg"></p>
              <strong>张凌辉</strong>
              <span>Java架构师</span>
            </li>
            <li>
              <p><img class="mx-auto" src="https://qiniu.easyapi.com/user/jiyixin.jpg"></p>
              <strong>季乙心</strong>
              <span>产品经理</span>
            </li>
            <li>
              <p><img class="mx-auto" src="/images/user-phone.png"></p>
              <a href="/info/support" class="more">更多支持者</a>
            </li>
          </ul>
        </div>

        <div class="support-project f-cb">
          <div class="support">
            支持项目
          </div>
          <div class="box">
            <dl>
              <dt>
                <span>￥15元</span>
                <i>33人支持</i>
              </dt>
              <dd>
                <p>
                  署名
                   <el-icon><Check /></el-icon>
                </p>
                <p>鼠标垫</p>
                <p>马克杯</p>
                <p>T恤衫</p>
                <p>充电宝</p>
                <p>广告机会</p>
                <span>
                  <el-button type="primary" size="small" @click="showCode">支持15元</el-button>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>
                <span>￥50元</span>
                <i>8人支持</i>
              </dt>
              <dd>
                <p>
                  署名
                   <el-icon><Check /></el-icon>
                </p>
                <p>
                  鼠标垫
                   <el-icon><Check /></el-icon>
                </p>
                <p>马克杯</p>
                <p>T恤衫</p>
                <p>充电宝</p>
                <p>广告机会</p>
                <span>
                  <el-button type="primary" size="small" @click="showCode">支持50元</el-button>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>
                <span>￥100元</span>
                <i>18人支持</i>
              </dt>
              <dd>
                <p>
                  署名
                   <el-icon><Check /></el-icon>
                </p>
                <p>
                  鼠标垫
                   <el-icon><Check /></el-icon>
                </p>
                <p>
                  马克杯
                   <el-icon><Check /></el-icon>
                </p>
                <p>T恤衫</p>
                <p>充电宝</p>
                <p>广告机会</p>
                <span>
                  <el-button type="primary" size="small" @click="showCode">支持100元</el-button>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>
                <span>￥200元</span>
                <i>23人支持</i>
              </dt>
              <dd>
                <p>
                  署名
                   <el-icon><Check /></el-icon>
                </p>
                <p>
                  鼠标垫
                   <el-icon><Check /></el-icon>
                </p>
                <p>
                  马克杯
                   <el-icon><Check /></el-icon>
                </p>
                <p>
                  T恤衫
                   <el-icon><Check /></el-icon>
                </p>
                <p>充电宝</p>
                <p>广告机会</p>
                <span>
                  <el-button type="primary" size="small" @click="showCode">支持200元</el-button>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>
                <span>￥500元</span>
                <i>2人支持</i>
              </dt>
              <dd>
                <p>
                  署名
                   <el-icon><Check /></el-icon>
                </p>
                <p>
                  鼠标垫
                   <el-icon><Check /></el-icon>
                </p>
                <p>
                  马克杯
                   <el-icon><Check /></el-icon>
                </p>
                <p>
                  T恤衫
                   <el-icon><Check /></el-icon>
                </p>
                <p>
                  充电宝
                   <el-icon><Check /></el-icon>
                </p>
                <p>广告机会</p>
                <span>
                  <el-button type="primary" size="small" @click="showCode">支持500元</el-button>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>
                <span>￥2000元</span>
                <i>1人支持</i>
              </dt>
              <dd>
                <p>
                  署名
                   <el-icon><Check /></el-icon>
                </p>
                <p>
                  鼠标垫
                   <el-icon><Check /></el-icon>
                </p>
                <p>
                  马克杯
                   <el-icon><Check /></el-icon>
                </p>
                <p>
                  T恤衫
                   <el-icon><Check /></el-icon>
                </p>
                <p>
                  充电宝
                   <el-icon><Check /></el-icon>
                </p>
                <p>广告机会</p>
                <span>
                     <el-button type="primary" size="small" @click="showCode">支持2000元</el-button>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>
                <span>￥5000元</span>
                <i>0人支持</i>
              </dt>
              <dd>
                <p>
                  署名
                   <el-icon><Check /></el-icon>
                </p>
                <p>
                  鼠标垫
                   <el-icon><Check /></el-icon>
                </p>
                <p>
                  马克杯
                   <el-icon><Check /></el-icon>
                </p>
                <p>
                  T恤衫
                   <el-icon><Check /></el-icon>
                </p>
                <p>
                  充电宝
                   <el-icon><Check /></el-icon>
                </p>
                <p>
                  广告机会
                   <el-icon><Check /></el-icon>
                </p>
                <span>
                    <el-button type="primary" size="small" @click="showCode">支持5000元</el-button>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>
                <span>￥10000元</span>
                <i>0人支持</i>
              </dt>
              <dd>
                <p>
                  署名
                   <el-icon><Check /></el-icon>
                </p>
                <p>
                  鼠标垫
                   <el-icon><Check /></el-icon>
                </p>
                <p>
                  马克杯
                   <el-icon><Check /></el-icon>
                </p>
                <p>
                  T恤衫
                   <el-icon><Check /></el-icon>
                </p>
                <p>
                  充电宝
                   <el-icon><Check /></el-icon>
                </p>
                <p>
                  股份
                   <el-icon><Check /></el-icon>
                </p>
                <span>
                    <el-button type="primary" size="small" @click="showCode">支持10000元</el-button>
                </span>
              </dd>
            </dl>
          </div>
          <p class="foo f-cb">
            注意：请通过上面支付宝，微信支付支持费用，可加微信好友，或者QQ149151419联系，需要您提供快递地址，我们会立即安排发货，
            一旦支付成功将无法取消支持，我们由衷感谢您的支持，将持续提供完善的产品服务。
          </p>
        </div>
      </div>
    </div>
    <div>
      <Pay ref="child" v-model="dialogVisible" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/donate.scss';
@media screen and (min-width: 1200px) {
  .donate-description {
    padding: 10px 50px 100px;

    p {
      width: 60%;
      float: left;
      padding-top: 20px;
      font-size: 1.4rem;
      color: #555;
      line-height: 29px;

      em {
        font-size: 22px;
        font-style: normal;
        padding-right: 3px;
      }
    }

    .pay {
      width: 40%;
      float: right;
      text-align: center;

      img {
        width: 180px;
        height: 180px;
        border-radius: 5px;
      }

      dd {
        width: 160px;
        margin-left: 20px;
        text-align: center;
        display: inline-block;
        float: right;

        p {
          width: 160px;
          padding-bottom: 20px;
          text-align: center;
          //background: url(../../../static/images/info/about_1.png) bottom center no-repeat;

          img {
            width: 160px;
            height: 160px;
          }
        }

        span {
          display: inline-block;
          margin-top: 5px;
          font-size: 1.4rem;
          color: #555;
        }
      }
    }
  }

  .support-project {
    dt {
      border-bottom: solid #ddd 1px;
      padding: 5px 20px;
      height: 38px;
      line-height: 38px;

      span {
        float: left;
        font-size: 1.5rem;
      }

      i {
        float: right;
        color: gray;
        font-weight: 400;
        font-size: 1.2rem;
      }
    }

    .box {
      padding: 20px 0 0 20px;
      margin: 0 auto;

      dl {
        border: solid #ddd 1px;
        border-radius: 5px;
        width: 20%;
        float: left;
        margin: 2%;

        dd {
          p {
            border-bottom: 1px dashed #ddd;
            font-size: 1.4rem;
            color: gray;
            padding: 9px 20px;

            i {
              float: right;
              color: #87bf54;
              display: block;
            }
          }

          span {
            text-align: center;
            display: block;
            padding: 10px 0;
          }

          .btn {
            background-color: #18c1d6;
            padding: 3px 10px;
            font-size: 1.4rem;
            color: #fff;
            border-radius: 3px;
            border-bottom: 2px solid #15a6b8;

            &:hover {
              background-color: #16b3c6;
            }
          }
        }
      }
    }

    .foo {
      padding: 15px 60px 15px 40px;
      color: gray;
      font-size: 1.4rem;
      line-height: 1.7;
    }
  }
}

@media screen and (min-width: 1000px) and (max-width: 1200px) {
  .donate-description {
    padding: 10px 50px 100px;

    p {
      width: 60%;
      float: left;
      padding-top: 20px;
      font-size: 1.4rem;
      color: #555;
      line-height: 29px;

      em {
        font-size: 22px;
        font-style: normal;
        padding-right: 3px;
      }
    }

    .pay {
      width: 40%;
      float: right;
      text-align: center;

      dd {
        width: 100px;
        margin-left: 20px;
        text-align: center;
        display: inline-block;
        float: right;

        p {
          width: 160px;
          padding-bottom: 20px;
          text-align: center;
          //background: url(../../../static/images/info/about_1.png) bottom center no-repeat;

          img {
            width: 100px;
            height: 100px;
          }
        }

        span {
          display: inline-block;
          margin-top: 5px;
          font-size: 1.4rem;
          color: #555;
        }
      }
    }
  }

  .support-project {
    dt {
      border-bottom: solid #ddd 1px;
      padding: 5px 20px;
      height: 38px;
      line-height: 38px;

      span {
        float: left;
        font-size: 1.5rem;
      }

      i {
        float: right;
        color: gray;
        font-weight: 400;
        font-size: 1.2rem;
      }
    }

    .box {
      padding: 20px 0 0 20px;
      margin: 0 auto;

      dl {
        border: solid #ddd 1px;
        border-radius: 5px;
        width: 20%;
        float: left;
        margin: 2%;

        dd {
          p {
            border-bottom: 1px dashed #ddd;
            font-size: 1.4rem;
            color: gray;
            padding: 9px 20px;

            i {
              float: right;
              color: #87bf54;
              display: block;
            }
          }

          span {
            text-align: center;
            display: block;
            padding: 10px 0;
          }

          .btn {
            background-color: #18c1d6;
            padding: 3px 10px;
            font-size: 1.4rem;
            color: #fff;
            border-radius: 3px;
            border-bottom: 2px solid #15a6b8;

            &:hover {
              background-color: #16b3c6;
            }
          }
        }
      }
    }

    .foo {
      padding: 15px 60px 15px 40px;
      color: gray;
      font-size: 1.4rem;
      line-height: 1.7;
    }
  }
}

@media screen and (min-width: 800px) and (max-width: 1000px) {
  .donate-description {
    padding: 10px 50px 100px;

    p {
      width: 60%;
      float: left;
      padding-top: 20px;
      font-size: 1.4rem;
      color: #555;
      line-height: 29px;

      em {
        font-size: 22px;
        font-style: normal;
        padding-right: 3px;
      }
    }

    .pay {
      width: 40%;
      float: right;
      text-align: center;

      dd {
        width: 100px;
        margin-left: 20px;
        text-align: center;
        display: inline-block;
        float: right;

        p {
          width: 160px;
          padding-bottom: 20px;
          text-align: center;
          //background: url(../../../static/images/info/about_1.png) bottom center no-repeat;

          img {
            width: 100px;
            height: 100px;
          }
        }

        span {
          display: inline-block;
          margin-top: 5px;
          font-size: 1.4rem;
          color: #555;
        }
      }
    }
  }

  .support-project {
    dt {
      border-bottom: solid #ddd 1px;
      padding: 5px 5px;
      height: 38px;
      line-height: 38px;

      span {
        float: left;
        font-size: 1.5rem;
      }

      i {
        float: right;
        color: gray;
        font-weight: 400;
        font-size: 1.2rem;
      }
    }

    .box {
      padding: 20px 0 0 20px;
      margin: 0 auto;

      dl {
        border: solid #ddd 1px;
        border-radius: 5px;
        width: 20%;
        float: left;
        margin: 2%;

        dd {
          p {
            border-bottom: 1px dashed #ddd;
            font-size: 1.4rem;
            color: gray;
            padding: 9px 15px;

            i {
              float: right;
              color: #87bf54;
              display: block;
            }
          }

          span {
            text-align: center;
            display: block;
            padding: 10px 0;
          }

          .btn {
            background-color: #18c1d6;
            padding: 3px 10px;
            font-size: 1.4rem;
            color: #fff;
            border-radius: 3px;
            border-bottom: 2px solid #15a6b8;

            &:hover {
              background-color: #16b3c6;
            }
          }
        }
      }
    }

    .foo {
      padding: 15px 60px 15px 40px;
      color: gray;
      font-size: 1.4rem;
      line-height: 1.7;
    }
  }
}

@media screen and (min-width: 500px) and (max-width: 800px) {
  .donate-description {
    padding: 10px 50px 100px;

    p {
      width: 60%;
      float: left;
      padding-top: 20px;
      font-size: 1.4rem;
      color: #555;
      line-height: 29px;

      em {
        font-size: 22px;
        font-style: normal;
        padding-right: 3px;
      }
    }

    .pay {
      width: 40%;
      float: right;
      text-align: center;

      dd {
        width: 100px;
        margin-left: 20px;
        text-align: center;
        display: inline-block;
        float: right;

        p {
          width: 160px;
          padding-bottom: 20px;
          text-align: center;
          //background: url(../../../static/images/info/about_1.png) bottom center no-repeat;

          img {
            width: 100px;
            height: 100px;
          }
        }

        span {
          display: inline-block;
          margin-top: 5px;
          font-size: 1.4rem;
          color: #555;
        }
      }
    }
  }

  .support-project {
    dt {
      border-bottom: solid #ddd 1px;
      padding: 5px 5px;
      height: 38px;
      line-height: 38px;

      span {
        float: left;
        font-size: 1.5rem;
      }

      i {
        float: right;
        color: gray;
        font-weight: 400;
        font-size: 1.2rem;
      }
    }

    .box {
      padding: 20px 0 0 20px;
      margin: 0 auto;

      dl {
        border: solid #ddd 1px;
        border-radius: 5px;
        width: 44%;
        float: left;
        margin: 2%;

        dd {
          p {
            border-bottom: 1px dashed #ddd;
            font-size: 1.4rem;
            color: gray;
            padding: 9px 15px;

            i {
              float: right;
              color: #87bf54;
              display: block;
            }
          }

          span {
            text-align: center;
            display: block;
            padding: 10px 0;
          }

          .btn {
            background-color: #18c1d6;
            padding: 3px 10px;
            font-size: 1.4rem;
            color: #fff;
            border-radius: 3px;
            border-bottom: 2px solid #15a6b8;

            &:hover {
              background-color: #16b3c6;
            }
          }
        }
      }
    }

    .foo {
      padding: 15px 60px 15px 40px;
      color: gray;
      font-size: 1.4rem;
      line-height: 1.7;
    }
  }
}

@media screen and (min-width: 500px) {
  .supporter {
    ul {
      font-size: 1.4rem;
      padding: 20px 45px;

      li {
        text-align: center;
        width: 110px;
        float: left;
        margin: 10px;
        padding-bottom: 20px;

        p {
          img {
            width: 60px;
            border-radius: 50%;
            height: 60px;
          }
        }

        strong {
          display: block;
          font-weight: 400;
          padding: 8px 0 5px;
        }

        span {
          display: block;
          color: gray;
        }

        a {
          &.more {
            display: block;
            color: #18c1d6;
          }
        }
      }
    }
  }

  .donate-img {
    padding: 0 30px 30px;
    margin: 20px;
    background: url('/images/about_0.png') bottom no-repeat;

    img {
      width: 100%;
    }
  }
}

@media screen and (min-width: 300px) and (max-width: 500px) {
  .donate-description {
    padding: 10px 10px 50px;

    p {
      width: 60%;
      float: left;
      padding-top: 20px;
      font-size: 1.4rem;
      color: #555;
      line-height: 29px;

      em {
        font-size: 22px;
        font-style: normal;
        padding-right: 3px;
      }
    }

    .pay {
      width: 40%;
      float: right;
      text-align: center;

      dd {
        width: 80px;
        margin-left: 20px;
        text-align: center;
        display: inline-block;
        float: right;

        p {
          width: 80px;
          padding-bottom: 20px;
          text-align: center;
          //background: url(../../../static/images/info/about_1.png) bottom center no-repeat;

          img {
            width: 80px;
            height: 80px;
          }
        }

        span {
          display: inline-block;
          margin-top: 5px;
          font-size: 1.4rem;
          color: #555;
        }
      }
    }
  }

  .support-project {
    dt {
      border-bottom: solid #ddd 1px;
      padding: 5px 5px;
      height: 38px;
      line-height: 38px;

      span {
        float: left;
        font-size: 1.5rem;
      }

      i {
        float: right;
        color: gray;
        font-weight: 400;
        font-size: 1.2rem;
      }
    }

    .box {
      padding: 20px 0 0 20px;
      margin: 0 auto;

      dl {
        border: solid #ddd 1px;
        border-radius: 5px;
        width: 44%;
        float: left;
        margin: 2%;

        dd {
          p {
            border-bottom: 1px dashed #ddd;
            font-size: 1.4rem;
            color: gray;
            padding: 9px 15px;

            i {
              float: right;
              color: #87bf54;
              display: block;
            }
          }

          span {
            text-align: center;
            display: block;
            padding: 10px 0;
          }

          .btn {
            background-color: #18c1d6;
            padding: 3px 10px;
            font-size: 1.4rem;
            color: #fff;
            border-radius: 3px;
            border-bottom: 2px solid #15a6b8;

            &:hover {
              background-color: #16b3c6;
            }
          }
        }
      }
    }

    .foo {
      padding: 15px 60px 15px 40px;
      color: gray;
      font-size: 1.4rem;
      line-height: 1.7;
    }
  }

  .supporter {
    ul {
      font-size: 1.4rem;
      padding: 20px 45px;

      li {
        text-align: center;
        width: 45px;
        float: left;
        margin: 10px;
        padding-bottom: 20px;

        p {
          img {
            width: 45px;
            border-radius: 50%;
            height: 45px;
          }
        }

        strong {
          display: block;
          font-weight: 400;
          padding: 8px 0 5px;
        }

        span {
          display: block;
          color: gray;
        }

        a {
          &.more {
            display: block;
            color: #18c1d6;
          }
        }
      }
    }
  }

  .donate-img {
    margin: 20px;
    //background: url(../../../static/images/info/about_0.png) bottom no-repeat;

    img {
      width: 100%;
    }
  }
}

.header {
  background-color: #18c1d6;
}

.btn {
  padding: 5px 20px;
}

.support {
  font-size: 2rem;
  padding: 10px 40px;
  color: #333;
}
</style>

﻿<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'API开放平台',
  meta: [
    { name: 'description', content: 'API开放平台' },
    { name: 'keyword', content: 'API开放平台' },
  ],
})
</script>

<template>
  <div>
    <div class="u-banner-bg">
      <div class="content">
        <div class="sysinfo f-tac">
          <h1>API开放平台</h1>
          <p>您有数据，我们有API开放平台解决方案</p>
          <a href="/info/contact" class="bug_btn">立刻部署API开放平台</a>
          <div class="more">独立第三方API开放平台解决方案提供商</div>
        </div>
      </div>
    </div>

    <div class="pd-100">
      <div class="title">最专业API开放平台供应商</div>
      <div class="description">
        基于EasyAPI成熟的API文档、API监控、API网关系统
        <br />
        为您提供国内最专业的API开发平台解决方案，30天建立属于自己的开放平台
      </div>
      <ul class="u-iconui one content">
        <li>
          <img class="mx-auto" src="/images/info/open_icon1.png" />
          <span>简单易用</span>
        </li>
        <li>
          <img class="mx-auto" src="/images/info/open_icon2.png" />
          <span>多模板选择</span>
        </li>
        <li>
          <img class="mx-auto" src="/images/info/open_icon3.png" />
          <span>接口变更动态</span>
        </li>
        <li>
          <img class="mx-auto" src="/images/info/open_icon4.png" />
          <span>访问统计</span>
        </li>
        <li>
          <img class="mx-auto" src="/images/info/open_icon5.png" />
          <span>测试记录</span>
        </li>
      </ul>
    </div>

    <div
      class="pd-100 bg_img"
      style="
        background-image: url('/images/info/bg_open.png');
        background-size: cover;
      "
    >
      <div class="title f-c-white">友好的界面交互</div>
      <div class="description f-c-white">
        通过搭建API开放平台，让您公司的数据更好的向合作伙伴、客户进行授权访问
        让贵公司的数据不断为贵公司产生价值
      </div>
      <div class="oneimg">
        <img class="mx-auto" src="/images/info/open_3.png" />
      </div>
    </div>

    <div class="pd-100">
      <div class="title">客户案例</div>
      <div class="description">我们始终坚持为客户提供优质的服务</div>
      <div class="u-casebox" style="position: relative">
        <div class="thisroll">
          <div class="item">
            <div class="box">
              <img
                class="mx-auto"
                src="https://static.easyapi.com/images/app/yinwan.png"
              />
              <span>银湾社区开放平台</span>
            </div>
            <div class="u-lay">
              <img
                class="mx-auto"
                src="https://static.easyapi.com/images/app/yinwan.png"
              />
              <h4>银湾社区开放平台</h4>
              <span class="line" />
              <p>近千个小区的数据，开放给第三方合作伙伴</p>
            </div>
          </div>
          <div class="item">
            <div class="box">
              <img
                class="mx-auto"
                src="https://static.easyapi.com/images/app/key.png"
              />
              <span>银钥匙物业联盟开放平台</span>
            </div>
            <div class="u-lay">
              <img
                class="mx-auto"
                src="https://static.easyapi.com/images/app/key.png"
              />
              <h4>银钥匙物业联盟开放平台</h4>
              <span class="line" />
              <p>
                银钥匙物业联盟拥有会员企业1000家，通过API开放平台实现数据进行互联互通
              </p>
            </div>
          </div>
          <div class="item">
            <div class="box">
              <img
                class="mx-auto"
                src="https://static.easyapi.com/images/app/gl.png"
              />
              <span>国联供应链API开放平台</span>
            </div>
            <div class="u-lay">
              <img
                class="mx-auto"
                src="https://static.easyapi.com/images/app/gl.png"
              />
              <h4>国联供应链API开放平台</h4>
              <span class="line" />
              <p>
                国联供应链服务需要整合上下游资源，通过API开放平台打通上下游资源
              </p>
            </div>
          </div>
          <div class="item">
            <div class="box">
              <img
                class="mx-auto"
                src="https://static.easyapi.com/images/app/jf_logo.png"
              />
              <span>中国家纺城API开放平台</span>
            </div>
            <div class="u-lay">
              <img
                class="mx-auto"
                src="https://static.easyapi.com/images/app/jf_logo.png"
              />
              <h4>中国家纺城API开放平台</h4>
              <span class="line" />
              <p>打造世界一流的家纺线上API平台</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bug_btn {
  background: #fff;
  display: inline-block;
  color: #099ef2;
  margin: 10px auto;
  height: 46px;
  line-height: 46px;
  font-size: 16px;
  padding: 0 40px;
  border-radius: 5px;
}

.bug_btn:hover {
  color: rgba(9, 158, 242, 0.7);
}

.bug_btn:active {
  color: rgba(9, 158, 242, 0.6);
}

.arrow_bug {
  font-size: 20px;
  width: 22px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 4px;
  background: #dfe5e9;
  color: #8b9eb2;
  cursor: pointer;
}

.left-arrow {
  position: absolute;
  left: -28px;
  top: 140px;
}

.right-arrow {
  position: absolute;
  right: 0;
  top: 140px;
}

.u-banner-bg {
  background-image: url('/images/solution/bg_open.png');
  height: 520px;
  background-size: cover;
}

@media screen and (min-width: 1200px) {
  .u-casebox {
    max-width: 1000px;
    margin: 0 auto;

    .thisroll {
      position: relative;
      display: flex;
      justify-content: space-between;

      .item {
        position: relative;
        border: solid #ddd 1px;
        width: 220px;
        height: 320px;
        text-align: center;

        img {
          width: 80px;
          height: 80px;
        }

        .box {
          margin-top: 100px;

          span {
            display: block;
            margin-top: 10px;
            color: gray;
            font-size: 1.4rem;
          }
        }

        .u-lay {
          position: absolute;
          display: none;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: -webkit-linear-gradient(
            top left,
            #34a1d6,
            #34c1d6 90%
          );
          box-sizing: border-box;
          padding: 60px 20px 0;
          color: #fff;

          h4 {
            margin-top: 5px;
            font-size: 1.5rem;
          }

          .line {
            display: inline-block;
            height: 3px;
            width: 50px;
            background: #fff;
          }

          p {
            margin-top: 15px;
            line-height: 24px;
            font-size: 1.4rem;
          }
        }

        &:hover {
          .u-lay {
            display: block;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 1000px) and (max-width: 1200px) {
  .u-casebox {
    max-width: 950px;
    margin: 0 auto;

    .thisroll {
      position: relative;
      display: flex;
      justify-content: space-between;

      .item {
        position: relative;
        border: solid #ddd 1px;
        width: 220px;
        height: 320px;
        text-align: center;

        img {
          width: 80px;
          height: 80px;
        }

        .box {
          margin-top: 100px;

          span {
            display: block;
            margin-top: 10px;
            color: gray;
            font-size: 1.4rem;
          }
        }

        .u-lay {
          position: absolute;
          display: none;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: -webkit-linear-gradient(
            top left,
            #34a1d6,
            #34c1d6 90%
          );
          box-sizing: border-box;
          padding: 60px 20px 0;
          color: #fff;

          h4 {
            margin-top: 5px;
            font-size: 1.5rem;
          }

          .line {
            display: inline-block;
            height: 3px;
            width: 50px;
            background: #fff;
          }

          p {
            margin-top: 15px;
            line-height: 24px;
            font-size: 1.4rem;
          }
        }

        &:hover {
          .u-lay {
            display: block;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 800px) and (max-width: 1000px) {
  .u-casebox {
    max-width: 750px;
    margin: 0 auto;

    .thisroll {
      position: relative;
      display: flex;
      justify-content: space-between;

      .item {
        position: relative;
        border: solid #ddd 1px;
        width: 160px;
        height: 260px;
        text-align: center;

        img {
          width: 80px;
          height: 80px;
        }

        .box {
          margin-top: 60px;

          span {
            display: block;
            margin-top: 10px;
            color: gray;
            font-size: 1.4rem;
          }
        }

        .u-lay {
          position: absolute;
          display: none;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: -webkit-linear-gradient(
            top left,
            #34a1d6,
            #34c1d6 90%
          );
          box-sizing: border-box;
          padding: 60px 20px 0;
          color: #fff;

          h4 {
            margin-top: 5px;
            font-size: 1.5rem;
          }

          .line {
            display: inline-block;
            height: 3px;
            width: 50px;
            background: #fff;
          }

          p {
            margin-top: 15px;
            line-height: 24px;
            font-size: 1.4rem;
          }
        }

        &:hover {
          .u-lay {
            display: block;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 500px) and (max-width: 800px) {
  .u-casebox {
    max-width: 500px;
    margin: 0 auto;

    .thisroll {
      position: relative;
      display: flex;
      justify-content: space-between;

      .item {
        position: relative;
        border: solid #ddd 1px;
        width: 100px;
        height: 200px;
        text-align: center;

        img {
          width: 50px;
          height: 50px;
        }

        .box {
          margin-top: 60px;

          span {
            display: block;
            margin-top: 10px;
            color: gray;
            font-size: 1.2rem;
          }
        }

        .u-lay {
          position: absolute;
          display: none;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: -webkit-linear-gradient(
            top left,
            #34a1d6,
            #34c1d6 90%
          );
          box-sizing: border-box;
          padding: 60px 20px 0;
          color: #fff;

          h4 {
            margin-top: 5px;
            font-size: 1.5rem;
          }

          .line {
            display: inline-block;
            height: 3px;
            width: 50px;
            background: #fff;
          }

          p {
            margin-top: 15px;
            line-height: 24px;
            font-size: 1.4rem;
          }
        }

        &:hover {
          .u-lay {
            display: block;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 300px) and (max-width: 500px) {
  .u-casebox {
    max-width: 300px;
    margin: 0 auto;

    .thisroll {
      position: relative;
      display: flex;
      justify-content: space-between;

      .item {
        position: relative;
        border: solid #ddd 1px;
        width: 60px;
        height: 160px;
        text-align: center;

        img {
          width: 30px;
          height: 30px;
        }

        .box {
          margin-top: 35px;

          span {
            display: block;
            margin-top: 10px;
            color: gray;
            font-size: 1.2rem;
          }
        }

        .u-lay {
          position: absolute;
          display: none;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: -webkit-linear-gradient(
            top left,
            #34a1d6,
            #34c1d6 90%
          );
          box-sizing: border-box;
          padding: 60px 20px 0;
          color: #fff;

          h4 {
            margin-top: 5px;
            font-size: 1.5rem;
          }

          .line {
            display: inline-block;
            height: 3px;
            width: 50px;
            background: #fff;
          }

          p {
            margin-top: 15px;
            line-height: 24px;
            font-size: 1.4rem;
          }
        }

        &:hover {
          .u-lay {
            display: block;
          }
        }
      }
    }
  }
}
</style>

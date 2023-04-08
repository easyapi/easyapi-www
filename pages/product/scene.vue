<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: '场景化服务 - EasyAPI服务平台',
  meta: [{ name: 'description', content: '场景化服务' },
    { name: 'keyword', content: '场景化服务' }],
})
</script>

<template>
  <div class="main">
    <div class="banner">
      <div class="title">
        <h1>API场景化服务</h1>
        <p>EasyAPI顺应技术开发趋势，推出通过API实现特定的场景化服务</p>
        <a href="https://market.easyapi.com/scene" class="bug_btn">前往服务市场</a>
        <div class="more">
          体验API场景化服务的魅力
        </div>
      </div>
    </div>
    <div class="pd-100">
      <div class="title">
        什么是API场景化服务
      </div>
      <div class="description">
        提供完善的后端管理服务，前端通过API实现定制化的的一种服务
        <br>
        我们的目标是为提供企业提供非核心功能标准化产品服务
      </div>
      <ul class="content scene-icon">
        <li class="u-display">
          <img class="mx-auto" src="/images/info/open_icon19.png">
          <div class="lefttext">
            <p>SaaS服务</p>
            <span>传统的SaaS服务灵活方便是它的优点，但是不可定制化，不能满足企业的个性化展示需求</span>
          </div>
        </li>
        <li class="u-display-center">
          <img class="mx-auto" src="/images/info/open_icon20.png">
          <div class="lefttext">
            <p>API场景化服务</p>
            <span>可选择满足自己的场景化服务，如果前端展示需要修改，和方便，缺点需要一点开发工作量</span>
          </div>
        </li>
        <li class="u-display">
          <img class="mx-auto" src="/images/info/open_icon21.png">
          <div class="lefttext">
            <p>自主开发</p>
            <span>优点完全可定制化，企业想要什么就开发什么，缺点短期开发出来的产品，问题较多，并且开发成本较大</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="pd-100" style="background-color: #f8f8f8">
      <div class="title">
        我们正在做的场景化服务
      </div>
      <div class="description" />
      <ul class="content icon-dispaly">
        <li>
          <img class="mx-auto" src="/images/info/open_icon11.png">
          <span>聚合通知</span>
        </li>
        <li>
          <img class="mx-auto" src="/images/info/open_icon12.png">
          <span>会员营销</span>
        </li>
        <li>
          <img class="mx-auto" src="/images/info/open_icon13.png">
          <span>工单系统</span>
        </li>
        <li>
          <img class="mx-auto" src="/images/info/open_icon14.png">
          <span>快速提现</span>
        </li>
        <li>
          <img class="mx-auto" src="/images/info/open_icon15.png">
          <span>微商城</span>
        </li>
        <li>
          <img class="mx-auto" src="/images/info/open_icon16.png">
          <span>积分商城</span>
        </li>
        <li>
          <img class="mx-auto" src="/images/info/open_icon17.png">
          <span>邀请好友</span>
        </li>
        <li>
          <img class="mx-auto" src="/images/info/open_icon18.png">
          <span>新人有礼</span>
        </li>
      </ul>
    </div>

    <div class="u-infofoot">
      <a href="" class="btn">提交新的场景化服务需求</a>
      <p>如果您的企业人员紧张，可以把非核心标准化功能，提交给我们来开发，满足您的企业整体开发需求</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bug_btn:hover {
  color: rgba(45, 119, 221, 0.7);
}

.bug_btn:active {
  color: rgba(44, 117, 220, 0.6);
}

.banner {
  background-image: url('/images/product/bg_scene.png');
}

@media screen and (min-width: 800px) {
  .scene-icon {
    text-align: center;
    max-width: 1000px;
    margin: 20px auto 0;
    overflow: hidden;
    display: flex;
    justify-content: space-between;

    li {
      width: 230px;
      display: inline-block;
      padding-bottom: 25px;

      img {
        width: 90px;
        height: 90px;
        margin-bottom: 10px;
      }

      i {
        font-size: 60px;
      }

      span {
        display: block;
        font-size: 16px;
      }

      p {
        font-size: 16px;
        font-weight: bold;
        line-height: 1.7;
        padding: 10px 30px 0;
      }
    }

    &.one {
      li {
        width: 160px;
      }
    }
  }

  .lefttext {
    width: 180px;
    margin: 0 auto;

    p {
      font-size: 20px;
      color: #333;
      padding: 0;
    }

    span {
      font-size: 12px;
      color: #828282;
    }
  }

  .u-display-center {
    width: 280px;
    height: 340px;
    border: 1px solid #dbe1e8;
    padding: 20px;
  }

  .u-display {
    margin: auto 0;
    width: 280px;
    height: 300px;
    border: 1px solid #dbe1e8;
    padding: 20px;
  }
}

@media screen and (min-width: 500px) and (max-width: 800px) {
  .scene-icon {
    text-align: center;
    max-width: 1000px;
    margin: 20px auto 0;
    overflow: hidden;
    display: flex;
    justify-content: space-between;

    li {
      width: 155px;
      padding-bottom: 25px;

      img {
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
      }

      span {
        font-size: 12px;
      }

      p {
        font-size: 14px;
        font-weight: bold;
        line-height: 1.4;
        padding: 10px 0;
      }
    }

    &.one {
      li {
        width: 160px;
      }
    }
  }

  .lefttext {
    margin: 0 auto;

    p {
      font-size: 20px;
      color: #333;
      padding: 0;
    }

    span {
      font-size: 12px;
      color: #828282;
    }
  }

  .u-display-center {
    width: 155px;
    height: 295px;
    border: 1px solid #dbe1e8;
    padding: 20px;
  }

  .u-display {
    margin: auto 0;
    width: 155px;
    height: 255px;
    border: 1px solid #dbe1e8;
    padding: 20px;
  }
}

@media screen and (min-width: 300px) and (max-width: 500px) {
  .scene-icon {
    text-align: center;
    max-width: 1000px;
    margin: 20px auto 0;
    overflow: hidden;
    display: flex;
    justify-content: space-between;

    li {
      width: 90px;
      padding-bottom: 25px;

      img {
        width: 40px;
        height: 40px;
      }

      span {
        font-size: 12px;
      }

      p {
        font-size: 12px;
        font-weight: bold;
        line-height: 1.4;
        padding: 5px 0;
      }
    }

    &.one {
      li {
        width: 160px;
      }
    }
  }

  .lefttext {
    margin: 0 auto;

    p {
      font-size: 20px;
      color: #333;
      padding: 0;
    }

    span {
      font-size: 12px;
      color: #828282;
    }
  }

  .u-display-center {
    width: 155px;
    height: 295px;
    border: 1px solid #dbe1e8;
    padding: 10px;
  }

  .u-display {
    margin: auto 0;
    width: 155px;
    height: 260px;
    border: 1px solid #dbe1e8;
    padding: 10px;
  }
}
</style>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: '关于我们 - EasyAPI服务平台',
  meta: [{ name: 'description', content: 'EasyAPI关于我们' },
    { name: 'keyword', content: '关于我们,EasyAPI团队成员,EasyAPI团队介绍,EasyAPI公司介绍' }],
})
</script>

<template>
  <div class="about">
    <div class="content">
      <img src="/images/info/about/team.png" alt="">
    </div>
    <div class="about-box">
      <div class="content">
        <div class="title">
          团队介绍
        </div>
        <div class="description">
          上海帮趣网络技术有限公司创建于2014年，致力于成为中国领先的开发工具提供商，公司核心团队，数年行业资深经验，开发过数十个移动APP，与行业合作伙伴保持业务沟通，加大移动互联网工具建设。公司总部位于上海博济智汇园、在无锡滨湖区创意产业园（蠡湖边）设立研发基地，是一家拥有自主知识产权的移动互联网企业。团队成员20人+。
        </div>
        <div class="team-box f-cb">
          <ul class="flex flex-wrap justify-around">
            <li>
              <img class="mx-auto w-auto" src="https://qiniu.easyapi.com/user/leida.jpg" alt="张磊">
              <h4>张磊</h4>
              <p>产品经理</p>
            </li>
            <li>
              <img class="mx-auto" src="https://qiniu.easyapi.com/user/afunti.jpg" alt="刘小春">
              <h4>刘小春</h4>
              <p>前端工程师</p>
            </li>
            <li>
              <img class="mx-auto" src="https://qiniu.easyapi.com/user/fangting.jpg!small.jpg" alt="房婷">
              <h4>房婷</h4>
              <p>UI设计师</p>
            </li>
            <li>
              <img class="mx-auto" src="https://qiniu.easyapi.com/user/lililai.jpg" alt="李士万">
              <h4>李士万</h4>
              <p>程序员</p>
            </li>
            <li>
              <img class="mx-auto" src="https://qiniu.easyapi.com/user/mary.jpg" alt="管婵娴">
              <h4>管婵娴</h4>
              <p>代码贡献者</p>
            </li>
            <li>
              <img class="mx-auto" src="https://qiniu.easyapi.com/user/suri.jpg" alt="黄婷婷">
              <h4>黄婷婷</h4>
              <p>代码贡献者</p>
            </li>
            <li>
              <img class="mx-auto" src="https://qiniu.easyapi.com/user/zhaozilong.jpg!small.jpg" alt="赵子龙">
              <h4>赵子龙</h4>
              <p>程序员</p>
            </li>
            <li>
              <img class="mx-auto" src="https://static.easyapi.com/images/team/you.jpg" alt="您">
              <h4>您</h4>
              <p>代码贡献者</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="about-box bg-f5">
      <div class="title f-c-white f-c-gray">
        EasyAPI是什么
      </div>
      <div class="description f-c-white f-c-gray content">
        EasyAPI最初是我们团队内部的工具，因为热爱，我们希望她能得到更多的人来使用，我们也会一直站在她的旁边优化她，完美她，希望广大的苦B程序员早日用上，致力于数百万前端开发者，后端的开发人员提供全套的API系统解决方案（发布，测试，浏览，监控）。
      </div>
    </div>

    <div class="about-box">
      <div class="title">
        团队文化
      </div>
      <div class="description">
        为客户创造价值
      </div>
      <div class="culture f-l content">
        <ul>
          <li>
            <img class="mx-auto" src="/images/info/about_3.png" alt="">
            <span>使命</span>
            <p>让技术开发变得更容易</p>
          </li>
          <li>
            <img class="mx-auto" src="/images/info/about_4.png" alt="">
            <span>价值观</span>
            <p>
              始终以客户为中心，不断提升学习能力<br>把复杂事变简单，用心做好每一件事情
            </p>
          </li>
          <li>
            <img class="mx-auto" src="/images/info/about_5.png" alt="">
            <span>愿景</span>
            <p>
              打造软件开发企业基础工具
              <br>让每个软件开发企业都使用EasyAPI的产品
            </p>
          </li>
        </ul>
      </div>
    </div>

    <div class="about-box">
      <div class="title">
        我们的目标
      </div>
      <div class="description content">
        让开发者更喜欢我们。
      </div>
    </div>
  </div>
</template>
<style lang="scss">

.header {
  background-color: #18c1d6;
}

.about {
  margin-top: 72px;
}

.about-box {
  padding: 50px 0;

  .title {
    text-align: center;
    font-weight: 400;
    margin-bottom: 12px;
    color: #333;

    &.f-c-white {
      color: #fff;
    }

    &.f-c-gray {
      color: #555;
    }
  }

  .description {
    text-align: center;
    line-height: 1.7;
    margin-bottom: 50px;
    color: gray;

    &.f-c-white {
      color: #fff;
    }

    &.f-c-gray {
      color: #555;
    }
  }
}

.team-box {
  text-align: center;

  ul {
    text-align: center;

    li {
      p {
        color: gray;
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .team-box ul li img {
    border-radius: 50%;
    width: 75px;
    height: 75px;
  }

  .team-box ul li {
    width: 25%;
    height: 150px;
  }

  .about-box .title {
    font-size: 36px;
  }

  .about-box .description {
    font-size: 1.6em;
  }

  .culture {
    margin: 0 auto;

    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      text-align: center;

      li {
        float: left;
        width: 33%;
        display: inline-block;
        margin: 0 25px;

        img {
          margin-bottom: 25px;
        }

        span {
          font-size: 1.6rem;
          display: block;
          margin: 7px 0;
        }

        p {
          font-size: 1.4rem;
          line-height: 1.7;
          color: gray;
        }
      }
    }
  }
}

@media screen and (min-width: 1000px) and (max-width: 1200px) {
  .team-box ul li img {
    border-radius: 50%;
    width: 75px;
    height: 75px;
  }

  .team-box ul li {
    width: 25%;
    height: 150px;
  }

  .about-box .title {
    font-size: 36px;
  }

  .about-box .description {
    font-size: 1.6em;
  }

  .culture {
    margin: 0 auto;

    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      text-align: center;

      li {
        float: left;
        width: 33%;
        display: inline-block;
        margin: 0 25px;

        img {
          margin-bottom: 25px;
        }

        span {
          font-size: 1.6rem;
          display: block;
          margin: 7px 0;
        }

        p {
          font-size: 1.4rem;
          line-height: 1.7;
          color: gray;
        }
      }
    }
  }
}

@media screen and (min-width: 800px) and (max-width: 1000px) {
  .team-box ul li img {
    border-radius: 50%;
    width: 75px;
    height: 75px;
  }

  .team-box ul li {
    width: 25%;
    height: 150px;
  }

  .about-box .title {
    font-size: 36px;
  }

  .about-box .description {
    font-size: 1.6em;
  }

  .culture {
    margin: 0 auto;

    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      text-align: center;

      li {
        float: left;
        width: 33%;
        display: inline-block;
        margin: 0 25px;

        img {
          margin-bottom: 25px;
        }

        span {
          font-size: 1.6rem;
          display: block;
          margin: 7px 0;
        }

        p {
          font-size: 1.4rem;
          line-height: 1.7;
          color: gray;
        }
      }
    }
  }
}

@media screen and (min-width: 500px) and (max-width: 800px) {
  .team-box ul li img {
    border-radius: 50%;
    width: 75px;
    height: 75px;
  }

  .team-box ul li {
    width: 25%;
    height: 150px;
  }

  .about-box .title {
    font-size: 36px;
  }

  .about-box .description {
    font-size: 1.6em;
  }

  .culture {
    margin: 0 auto;

    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      text-align: center;

      li {
        float: left;
        width: 33%;
        display: inline-block;
        margin: 0 25px;

        img {
          margin-bottom: 25px;
        }

        span {
          font-size: 1.6rem;
          display: block;
          margin: 7px 0;
        }

        p {
          font-size: 1.4rem;
          line-height: 1.7;
          color: gray;
        }
      }
    }
  }
}

@media screen and (min-width: 300px) and (max-width: 500px) {
  .team-box ul li img {
    border-radius: 50%;
    width: 35px;
    height: 35px;
  }

  .team-box ul li {
    width: 25%;
    height: 100px;
  }

  .about-box .title {
    font-size: 28px;
  }

  .about-box .description {
    font-size: 0.6em;
  }

  .culture {
    ul {
      width: 100%;

      li {
        text-align: center;
        display: inline-block;
        margin: 0 25px 10px 25px;

        img {
          margin-bottom: 10px;
        }

        span {
          font-size: 1.6rem;
          display: block;
          margin: 7px 0;
        }

        p {
          font-size: 1.4rem;
          line-height: 1.7;
          color: gray;
        }
      }
    }
  }
}
</style>

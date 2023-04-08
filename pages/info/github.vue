<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: '前端开源 - EasyAPI服务平台',
  meta: [{ name: 'description', content: 'EasyAPI前端开源计划' },
    { name: 'keyword', content: '前端开源' }],
})
</script>
<template>
  <div class="main">
    <div class="card card-bg f-cb">
      <div class="main wp">
        <div class="card-info">
          <h1>前端开源计划</h1>
          <p>为您的公司打造私有化API管理门户，提升API管理效率</p>
          <div class="bg_button">
            <p>
              <span><a href="https://github.com/easyapi" target="_blank">前往GITHUB参与</a></span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="github-content">
      <h1>为什么要加入？</h1>
      <div class="flex flex-wrap content">
        <div class="github-content-item p-12">
          <img class="mx-auto" src="/images/info/github/open1.png" alt="" />
          <p class="font-bold text-3xl my-8 text-center">提升前端技能</p>
          <p class="text-center">可能为成为一款不断商业化的Vue代表之作，作为前端一起学习进步</p>
        </div>
        <div class="github-content-item p-12">
          <img class="mx-auto" src="/images/info/github/open2.png" alt="" />
          <p class="font-bold text-3xl my-8 text-center">技术创造价值</p>
          <p class="text-center">通过自己手中的技术，让产品给更多开发者带来价值，那种满足感无与伦比</p>
        </div>
        <div class="github-content-item p-12">
          <img class="mx-auto" src="/images/info/github/open3.png" alt="" />
          <p class="font-bold text-3xl my-8 text-center">一份长期的事业</p>
          <p class="text-center">EasyAPI致力于成为API领域的知名品牌，需要更多的伙伴一起来坚持这份长期事业</p>
        </div>
        <div class="github-content-item p-12">
          <img class="mx-auto" src="/images/info/github/open4.png" alt="" />
          <p class="font-bold text-3xl my-8 text-center">认识更多朋友</p>
          <p class="text-center">结交来自五湖四海的技术朋友，每年至少1次集体出行</p>
        </div>
      </div>
    </div>

    <div class="card f-cb text-center">
      <div class="card-item">
        <h1>需要做什么？</h1>
        <div class="pd-b-50 f-cb">
          <div class="card-content-item f-fl">
            <img src="/images/info/github/1.png" />
            <span>前端开源合伙人每周投入60小时</span>
          </div>
          <div class="card-content-item f-fr">
            <img src="/images/info/github/2.png" />
            <span>前端开源志愿者每月参与2个以上ISSUE</span>
          </div>
        </div>
      </div>
    </div>

    <div class="card f-cb text-center">
      <div class="card-item">
        <h1>你将获得什么？</h1>
        <div class="pd-b-50 f-cb">
          <div class="card-content-item f-fl">
            <img src="/images/info/github/3.png" />
            <span>前端开源合伙人获得每小时66元分成</span>
          </div>
          <div class="card-content-item f-fr">
            <img src="/images/info/github/4.png" />
            <span>前端开源志愿者获得文档管理免费试用特权</span>
          </div>
        </div>
      </div>
    </div>

    <div class="card f-cb bg-f7">
      <div class="card-item">
        <h1>常见问题</h1>
        <h3>开源的版权怎么区分？</h3>
        <p>
          EasyAPI产品上线后，为了满足广大开发者用户的使用，特推出前端开源产品，为了充分发挥我们的用户群体优势，希望大家共同完善EasyAPI产品，EasyAPI自始至终版权均为EasyAPI运营公司
          所有，EasyAPI给予开发者投入回报包括收入分成，免费试用特权，旅游奖励。
        </p>
        <h3>开源的版权怎么区分？</h3>
        <p>
          EasyAPI产品上线后，为了满足广大开发者用户的使用，特推出前端开源产品，为了充分发挥我们的用户群体优势，希望大家共同完善EasyAPI产品，EasyAPI自始至终版权均为EasyAPI运营公司
          所有，EasyAPI给予开发者投入回报包括收入分成，免费试用特权，旅游奖励。
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
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
  letter-spacing: 2px;
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

.bg_white:active {
  color: rgba(49, 176, 213, 0.6);
}

.card-bg {
  background: url(/images/info/bg_github.png) no-repeat center !important;
  background-size: cover !important;
}

.github-content {
  padding-bottom: 70px;
}

.github-content > ul {
  width: 1200px;
  margin: auto;
}

.github-content > ul > li {
  width: 200px;
  text-align: center;
  display: block;
}

.github-content > ul > li > span {
  font-family: MicrosoftYaHei;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  line-height: 30px;
  letter-spacing: 0;
  color: #333333;
}

.github-content > ul > li img {
  width: 100px;
  height: 100px;
}

.github-content li p {
  padding-top: 10px;
  font-family: MicrosoftYaHei;
  font-size: 14px !important;
  font-weight: normal;
  font-stretch: normal;
  line-height: 22px;
  color: #828282 !important;
  text-align: left;
}

.u-page2 img {
  width: 385px !important;
  height: 223px;
  vertical-align: top;
}


.card span {
  width: 383px;
  font-family: MicrosoftYaHei;
  font-size: 18px !important;
  line-height: 50px;
  border-top: none;
  color: #000000;
  padding: 0 !important;
}

@media screen and (min-width: 1000px) {
  .card-content-item {
    width: 383px;
  }

  .bg_button {
    background: #f0bf43 !important;
    border-bottom: 4px solid #bf9f43;
    position: relative;
    display: inline-block;
    color: #ffffff;
    height: 68px;
    padding: 10px 60px;
    font-size: 16px;
    line-height: 46px;
    font-weight: 600;
    border-radius: 6px;
  }

  .bg_button > p a {
    font-size: 26px;
    color: #fff;
    letter-spacing: 4px;
  }

  .github-content > h1 {
    text-align: center;
    font-weight: normal;
    color: #555555;
    font-size: 4.8rem;
    padding: 100px 0 60px;
  }

  .github-content-item {
    width: 25%;
  }
}

@media screen and (min-width: 800px) and (max-width: 1000px) {
  .card-content-item {
    width: 303px;
  }

  .bg_button {
    background: #f0bf43 !important;
    border-bottom: 4px solid #bf9f43;
    position: relative;
    display: inline-block;
    color: #ffffff;
    height: 68px;
    padding: 8px 58px;
    font-size: 14px;
    line-height: 42px;
    font-weight: 600;
    border-radius: 6px;
  }

  .bg_button > p a {
    font-size: 22px;
    color: #fff;
    letter-spacing: 4px;
  }

  .github-content > h1 {
    text-align: center;
    font-weight: normal;
    color: #555555;
    font-size: 4.8rem;
    padding: 100px 0 60px;
  }

  .github-content-item {
    width: 25%;
  }
}

@media screen and (min-width: 500px) and (max-width: 800px) {
  .card-content-item {
    width: 200px;
  }

  .bg_button {
    background: #f0bf43 !important;
    border-bottom: 4px solid #bf9f43;
    position: relative;
    display: inline-block;
    color: #ffffff;
    height: 68px;
    padding: 8px 58px;
    font-size: 14px;
    line-height: 42px;
    font-weight: 600;
    border-radius: 6px;
  }

  .bg_button > p a {
    font-size: 22px;
    color: #fff;
    letter-spacing: 4px;
  }

  .github-content > h1 {
    text-align: center;
    font-weight: normal;
    color: #555555;
    font-size: 3.2rem;
    padding: 100px 0 60px;
  }

  .github-content-item {
    width: 50%;
  }
}

@media screen and (min-width: 300px) and (max-width: 500px) {
  .card-content-item {
    width: 140px;
  }

  .bg_button {
    background: #f0bf43 !important;
    border-bottom: 4px solid #bf9f43;
    position: relative;
    display: inline-block;
    color: #ffffff;
    height: 48px;
    padding: 0 38px;
    font-size: 14px;
    line-height: 42px;
    font-weight: 600;
    border-radius: 6px;
  }

  .bg_button > p a {
    font-size: 18px;
    color: #fff;
    letter-spacing: 4px;
  }

  .github-content > h1 {
    text-align: center;
    font-weight: normal;
    color: #555555;
    font-size: 2.4rem;
    padding: 100px 0 60px;
  }

  .github-content-item {
    width: 50%;
  }
}
</style>

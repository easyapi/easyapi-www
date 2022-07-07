<template>
  <div class="main">
    <div class="content">
      <div class="info-page px-8">
        <h2 class="py-12 text-5xl text-center">EasyAPI浏览器插件</h2>
        <p class="text-center text-gray-400 pb-12">EasyAPI量身定制的Chrome、Firefox浏览器插件，可以快速跨域接口测试等工作</p>
        <div class="extension-page p-12 bg-white md:shadow-md sm:border-solid sm:border rounded mx-auto">
          <p class="text-2xl py-6 text-center col-18C1D6 bg-CBEFF3">最新版本：v0.1</p>
          <div @click="jumpGoogle" class="cursor-pointer flex border-solid border w-60 p-1 mt-12 mx-auto">
            <img src="../../../assets/images/google.png" alt="Google浏览器" />
            <div class="ml-0.5">
              <p class="leading-6 font-normal">Available in the</p>
              <p class="leading-6 font-medium">Chrome Web Store</p>
            </div>
          </div>
          <div class="my-6">
            <p class="text-center">推荐</p>
            <p class="text-center text-gray-400">（需要代理）</p>
          </div>
          <div @click="jumpFirefox" class="flex cursor-pointer border-solid border w-48 p-1 mt-12 mx-auto bg-blue-500">
            <img src="https://qiniu.easyapi.com/firefox-addons.svg" alt="火狐浏览器" />
          </div>
          <div class="my-6">
            <p class="text-center">推荐</p>
          </div>
          <div class="flex justify-center">
            <el-button type="primary" round @click="jumpZip">本地安装</el-button>
          </div>
          <p class="mt-4 text-center">推荐，针对国内无法访问Chrome商店的用户，各种Chrome内核浏览器兼容</p>
          <p class="mt-4 text-center col-18C1D6 underline cursor-pointer">本地安装教程</p>
          <p class="mt-4 text-center">
            *本地安装特别注意需要开启浏览器的
            <span class="col-18C1D6">开发者模式</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Index from './index'

export default Index
</script>

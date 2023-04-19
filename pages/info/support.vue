<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import Pay from './components/pay.vue'

useHead({
  title: '支持名单 - EasyAPI服务平台',
  meta: [{ name: 'description', content: 'EasyAPI支持名单' },
    { name: 'keyword', content: 'EasyAPI支持名单,支持我们' }],
})

const dialogVisible = ref(false)

/**
 * 显示支持我们弹框
 */
function showCode() {
  dialogVisible.value = true
}
</script>

<template>
  <div class="main">
    <div class="content">
      <div class="info-page">
        <h2 class="title">
          支持名单
        </h2>
        <div class="u-donatelist f-cb">
          <ul class="ulist f-cb">
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
          </ul>

          <div class="utex f-cb">
            <a href="">房婷</a>
            <a href="">邹莉</a>
            <a href="">傅潇莹</a>
            <a href="">杜耀椿</a>
            <a href="">张泽泉</a>
            <a href="">罗献波</a>
            <a href="">胡晓雷</a>
            <a href="">张丹</a>
            <a href="">金璟</a>
            <a href="">黄俊</a>
            <a href="">张圣跃</a>
            <a href="">王亚东</a>
            <a href="">田章易</a>
            <a href="">胡晨辉</a>
          </div>

          <div class="u-open">
            <el-button size="large" type="primary" @click="showCode">
              支持我们
            </el-button>
          </div>
        </div>
      </div>
    </div>
    <Pay ref="child" v-model="dialogVisible" />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/donate.scss';

.header {
  background-color: #18c1d6;
}
</style>

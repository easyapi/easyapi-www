<template>
  <div class="footer clearfix">
    <p>
      <a href="/pages/info/about.vue">关于我们</a>
      <a href="/pages/info/together.vue">合作伙伴</a>
      <a href="/pages/info/contact.vue">联系我们</a>
      <a href="/pages/info/donate.vue">支持我们</a>
      <a href="/pages/info/changlog.vue">平台动态</a>
    </p>
    <p>Copyright © 2015～2021 帮趣团队</p>
    <p><a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备19007521号</a></p>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
.footer {
  text-align: center;
  background: #fafafa;
  color: #777;
  margin: 20px 0 0 0;
  padding: 70px 0 50px 0;
  font-size: 12px;
}

.footer p {
  margin-bottom: 10px;
}

.footer a {
  color: #777;
  padding: 0 20px;
}
</style>

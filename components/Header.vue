<script>
import { CaretBottom, CaretTop, Edit, Fold, Place, Sort, Switch } from '@element-plus/icons-vue'
import { useCookies } from '@vueuse/integrations/useCookies'
import { gotoEasyTeam } from '~/utils/goto'
import { userStore } from '@/store/user'

const cookies = useCookies()

export default {
  components: { Edit, Fold, Place, Sort, Switch, CaretTop, CaretBottom },
  props: ['screenWidth'],
  data() {
    return {
      authenticationToken: cookies.get('authenticationToken'),
      ifShowProduct: true,
      ifShowPrivatization: true,
      ifShow: true,
      ifNavShow: false,
      type: '',
      headerActive: '',
      activeIndex: '1',
      activeIndex2: '1',
      userStore: userStore(),
    }
  },
  watch: {
    $route() {
      this.ifNavShow = false
    },
    screenWidth: {
      handler(val, oldVal) {
        this.ifShow = val >= 800
      },
      immediate: true,
    },
  },
  beforeMount() {
    if (
      this.$route.name === 'post'
      || this.$route.name === 'info-about'
      || this.$route.name === 'info-about'
      || this.$route.name === 'info-together'
      || this.$route.name === 'info-donate'
      || this.$route.name === 'info-extension'
      || this.$route.name === 'post-id'
      || this.$route.name === 'info-support'
      || this.$route.name === 'info-contact'
    )
      this.headerActive = 'background-color:#18c1d6'
  },
  mounted() {
    if (this.authenticationToken)
      userStore().getUser()
  },
  methods: {
    showNav(val) {
      this.type = val
      this.ifNavShow = !this.ifNavShow
    },
    closeMenu() {
      this.ifNavShow = false
    },
    jump() {
      window.open('https://market.easyapi.com')
    },
    jumpSign() {
      window.open('https://account.easyapi.com/signup/')
    },
    jumpLogin() {
      window.open('https://account.easyapi.com/login/')
    },
    gotoTeam() {
      gotoEasyTeam('')
    },
    showProduct() {
      this.ifShowProduct = false
    },
    showPrivatization() {
      this.ifShowPrivatization = false
    },
    hideProduct() {
      this.ifShowProduct = true
    },
    hidePrivatization() {
      this.ifShowPrivatization = true
    },
    handleCommand(command) {
      if (command === 'notice')
        gotoEasyTeam('/notification')
      else if (command === 'edit')
        gotoEasyTeam('/user/edit')
      else if (command === 'quitLogin')
        this.quitLogin()
    },
    quitLogin() {
      this.$store.dispatch('logout')
      window.location.href = 'https://account.easyapi.com/login'
    },
  },
}
</script>

<template>
  <client-only>
    <div v-show="ifShow" :style="headerActive" class="header header-index">
      <div class="content">
        <nuxt-link to="/home">
          <img alt="EasyAPI LOGO" class="logo float-left" src="https://qiniu.easyapi.com/market/logo.svg">
        </nuxt-link>
        <div class="navs f-fl">
          <el-popover placement="bottom-start" width="650" trigger="hover" @show="showProduct" @hide="hideProduct">
            <ul class="popover-ul">
              <a href="/product/doc" class="a_link">
                <li class="popover-li">
                  <img class="icon_img" src="/images/info/down_icon1.png">
                  <div class="popover-content">
                    <p>文档管理</p>
                    <span>在线编辑API接口文档，强大的API接口测试功能，团队协作超便捷</span>
                  </div>
                </li>
              </a>
              <a href="/product/lowcode" class="a_link">
                <li class="popover-li">
                  <img class="icon_img" src="/images/info/icon_lowcode.png">
                  <div class="popover-content">
                    <p>低代码</p>
                    <span>轻松构建API接口服务，助力企业数字化服务，支持多种开发语言</span>
                  </div>
                </li>
              </a>
              <a href="/product/test" class="a_link">
                <li class="popover-li">
                  <img class="icon_img" src="/images/info/down_icon3.png">
                  <div class="popover-content">
                    <p>接口测试</p>
                    <span>在线API测试工具，快速完成接口测试任务，支持团队共同测试</span>
                  </div>
                </li>
              </a>
              <a href="/product/interface" class="a_link">
                <li class="popover-li">
                  <img class="icon_img" src="/images/info/down_icon4.png">
                  <div class="popover-content">
                    <p>接口服务</p>
                    <span>众多接口服务，满足开发的每一个环节，让开发更高效，让开发更高效</span>
                  </div>
                </li>
              </a>
              <a href="/product/monitor" class="a_link">
                <li class="popover-li">
                  <img class="icon_img" src="/images/info/down_icon5.png">
                  <div class="popover-content">
                    <p>监控系统</p>
                    <span>API监控实时反馈API状态，保障产品稳定性，提升运维响应速度</span>
                  </div>
                </li>
              </a>
              <a href="/product/scene" class="a_link">
                <li class="popover-li">
                  <img class="icon_img" src="/images/info/down_icon6.png">
                  <div class="popover-content">
                    <p>场景化服务</p>
                    <span>企业专注于核心业务开发，提供非核心标准化场景业务开发服务，性价比更高</span>
                  </div>
                </li>
              </a>
            </ul>
            <template #reference>
              <span class="f-rel navs-item">
                <a>
                  产品
                  <el-icon v-if="ifShowProduct"><CaretBottom /></el-icon>
                  <el-icon v-else><CaretTop /></el-icon>
                </a>
              </span>
            </template>
          </el-popover>
          <nuxt-link to="/info/price">价格</nuxt-link>
          <el-popover placement="bottom-start" width="650" trigger="hover" @show="showPrivatization" @hide="hidePrivatization">
            <ul class="popover-ul">
              <a href="/solution/portal" class="a_link">
                <li class="popover-li">
                  <img class="icon_img" src="/images/info/header-icon2.png">
                  <div class="popover-content">
                    <p>API管理门户</p>
                    <span>API管理门户主要为开发企业搭建API门户，企业集中化API管理解决方案</span>
                  </div>
                </li>
              </a>
              <a href="/solution/market" class="a_link">
                <li class="popover-li">
                  <img class="icon_img" src="/images/info/header-icon3.png">
                  <div class="popover-content">
                    <p>API服务市场</p>
                    <span>推进企业数字化转型，构建联盟生态服务，统一企业的API服务进出口径</span>
                  </div>
                </li>
              </a>
              <a href="/solution/open" class="a_link">
                <li class="popover-li">
                  <img class="icon_img" src="/images/info/header-icon1.png">
                  <div class="popover-content">
                    <p>API开放平台</p>
                    <span>让企业的数据通过开放平台连接更多的可能性，实现上下游生态建设</span>
                  </div>
                </li>
              </a>
            </ul>
            <template #reference>
              <span class="f-rel navs-item">
                <a>
                  私有化
                  <el-icon v-if="ifShowPrivatization"><CaretBottom /></el-icon>
                  <el-icon v-else><CaretTop /></el-icon>
                </a>
              </span>
            </template>
          </el-popover>
          <a href="https://market.easyapi.com" target="_blank">API市场</a>
        </div>
        <div class="side-navs">
          <a v-if="!authenticationToken" id="register" class="register" href="https://account.easyapi.com/signup/">注册</a>
          <a v-if="!authenticationToken" id="login" class="login" href="https://account.easyapi.com/login/">登录</a>
          <div v-if="authenticationToken" class="team-head-left">
            <el-dropdown trigger="hover" @command="handleCommand">
              <span id="showTeamInfo" style="cursor: pointer">
                <img v-if="userStore.photo" class="team-icon" :src="userStore.photo">
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="notice">
                    <el-icon><Edit /></el-icon>
                    <span>我的通知</span>
                  </el-dropdown-item>
                  <el-dropdown-item command="edit">
                    <el-icon><Sort /></el-icon>
                    <span>个人设置</span>
                  </el-dropdown-item>
                  <el-dropdown-item command="quitLogin">
                    <el-icon><Switch /></el-icon>
                    <span>退出</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <span class="f-rel nav">
            <p class="f-rel console navs-item" @click="gotoTeam">管理门户</p>
          </span>
        </div>
      </div>
    </div>
    <div v-show="!ifShow" class="header header-index" :style="headerActive">
      <div class="content">
        <div class="flex justify-between">
          <a href="/">
            <img class="logo float-left" src="https://qiniu.easyapi.com/market/logo.svg">
          </a>
          <div class="icon w-14 flex justify-between">
            <el-icon size="15" color="#ffffff" @click="showNav('person')">
              <Place />
            </el-icon>
            <el-icon size="15" color="#ffffff" @click="showNav('menu')">
              <Fold />
            </el-icon>
          </div>
        </div>
      </div>
      <div v-if="ifNavShow" class="menu">
        <el-col v-if="type === 'menu'" :span="24">
          <el-menu :default-active="$router.path" class="el-menu-vertical-demo" router>
            <div class="float-right mr-10">
              <el-button type="text" icon="el-icon-close" @click="closeMenu">
                关 闭
              </el-button>
            </div>
            <div class="clear-both" />
            <el-sub-menu index="1">
              <template #title>
                <a>产品</a>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/product/doc">
                  文档管理
                </el-menu-item>
                <el-menu-item index="/product/test">
                  接口测试
                </el-menu-item>
                <el-menu-item index="/product/monitor">
                  监控系统
                </el-menu-item>
                <el-menu-item index="/product/lowcode">
                  低代码
                </el-menu-item>
                <el-menu-item index="/product/interface">
                  接口服务
                </el-menu-item>
                <el-menu-item index="/product/scene">
                  场景化服务
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item index="/info/price">
              <template #title>
                <a>价格</a>
              </template>
            </el-menu-item>
            <el-sub-menu index="3">
              <template #title>
                <a>私有化</a>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/solution/portal">
                  API管理门户
                </el-menu-item>
                <el-menu-item index="/solution/open">
                  API开放平台
                </el-menu-item>
                <el-menu-item index="/solution/market">
                  API服务市场
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item @click="jump">
              <template #title>
                <a>API市场</a>
              </template>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col v-if="type === 'person'" :span="24">
          <el-menu class="el-menu-vertical-demo">
            <div class="float-right mr-10">
              <el-button type="text" icon="el-icon-close" @click="closeMenu">
                关 闭
              </el-button>
            </div>
            <div class="clear-both" />
            <el-menu-item @click="jumpSign">
              <template #title>
                <span>注册</span>
              </template>
            </el-menu-item>
            <el-menu-item @click="jumpLogin">
              <template #title>
                <span>登录</span>
              </template>
            </el-menu-item>
          </el-menu>
        </el-col>
      </div>
      <div v-if="ifNavShow" class="popContainer" />
    </div>
  </client-only>
</template>

<style lang="scss" scoped>
.el-menu {
  z-index: 50;
}

.header-index {
  position: absolute;
  left: 0;
  right: 0;
}

.header .navs span:hover:after {
  background-image: url(/images/arrow-up.png);
}

.other-header .navs span:hover:after {
  background-image: url(/images/arrow-up.png);
}

@media screen and (min-width: 1000px) {
  .header {
    top: 0;
    height: 72px;
    box-shadow: none;
    background-color: (0, 0, 0, 0.3);
  }

  .logo {
    margin-top: 20px;
    width: 120px;
  }

  .team-head-left {
    margin-right: 20px;
    display: flex;
    position: relative;
  }

  .team-icon {
    margin-top: 6px;
    width: 30px;
    height: 30px;
    border-radius: 20px;
  }

  .side-navs {
    display: flex;
    float: right;
    text-align: right;
    height: 50px;
    padding-top: 16px;

  .popover {
    display: none;

  .popover-img {
    width: 20px;
    height: 10px;
    position: absolute;
    top: 38px;
    right: 24px;
  }
}

span {
&:hover {
   color: rgba(255, 255, 255, 0.7);

.popover {
  display: block;
}
}
}

a {
&:hover {
   color: rgba(255, 255, 255, 0.5);

.console {
  background-color: rgba(255, 255, 255, 0.5);
}
}
}

.nav {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  margin-left: 5px;
  cursor: pointer;
  vertical-align: top;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
}

.register {
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  margin-left: 5px;
  cursor: pointer;
  vertical-align: top;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
}

.login {
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  margin-left: 5px;
  cursor: pointer;
  vertical-align: top;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
}

.console {
  border: 1px solid #fff;
  border-radius: 6px;
  height: 32px;
  line-height: 30px;
  margin-top: 4px;
  padding: 0 10px;
}
}

.navs {
  line-height: 68px;
  font-size: 1.6rem;
  margin-left: 20px;
  height: 48px;

a {
  color: #fff;
  padding: 10px 30px;
  border-radius: 15px;

&:hover {
   background-color: rgba(255, 255, 255, 0.5);
 }
}

.popover {
  display: none;

.popover-img {
  width: 20px;
  height: 10px;
  position: absolute;
  top: 58px;
  left: 20px;
}

ul {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  position: absolute;
  background: #fff;
  border-radius: 6px;
  width: 640px;
  padding: 20px 0 0;
  overflow: hidden;
  left: 0;
  z-index: 99999;

.a_link {
  display: block;
  margin: 0;
  padding: 0;
}

li {
  float: left;
  width: 50%;
  padding: 5px 20px 0 20px;
  box-sizing: border-box;

.icon_img {
  width: 25px;
  height: 25px;
  float: left;
}

.popover-content {
  float: right;
  width: 86%;
  margin-top: 4px;

p {
  font-size: 16px;
  color: #333;
  line-height: 18px;
}

span {
  color: #999;
  font-size: 12px;
  line-height: 18px;
  padding: 0;
  margin: 0;

&:after {
   content: none;
 }
}
}

&:hover {
   background: #f5f5f5;
 }
}
}
}

span {
  display: inline-block;
  color: #fff;
  cursor: pointer;

&:hover {
   color: rgba(255, 255, 255, 0.5);

.popover {
  display: block;
}
}
}
}
}

@media screen and (min-width: 800px) and (max-width: 1000px) {
  .header {
    top: 0;
    height: 72px;
    box-shadow: none;
    background-color: (0, 0, 0, 0.3);
  }

  .logo {
    margin-top: 24px;
    width: 100px;
  }

  .icon {
    margin-top: 24px;
  }

  .navs {
    line-height: 68px;
    font-size: 1.6rem;
    margin-left: 20px;
    height: 48px;

  a {
    color: #fff;
    padding: 10px 30px;
    border-radius: 15px;

&:hover {
   background-color: rgba(255, 255, 255, 0.5);
 }
}

.popover {
  display: none;

.popover-img {
  width: 20px;
  height: 10px;
  position: absolute;
  top: 58px;
  left: 20px;
}

ul {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  position: absolute;
  background: #fff;
  border-radius: 6px;
  width: 640px;
  padding: 20px 0 0;
  overflow: hidden;
  left: 0;
  z-index: 99999;

.a_link {
  display: block;
  margin: 0;
  padding: 0;
}

li {
  float: left;
  width: 50%;
  padding: 5px 20px 0 20px;
  box-sizing: border-box;

.icon_img {
  width: 25px;
  height: 25px;
  float: left;
}

.popover-content {
  float: right;
  width: 86%;
  margin-top: 4px;

p {
  font-size: 16px;
  color: #333;
  line-height: 18px;
}

span {
  color: #999;
  font-size: 12px;
  line-height: 18px;
  padding: 0;
  margin: 0;

&:after {
   content: none;
 }
}
}

&:hover {
   background: #f5f5f5;
 }
}
}
}

span {
  display: inline-block;
  color: #fff;
  cursor: pointer;

&:hover {
   color: rgba(255, 255, 255, 0.5);

.popover {
  display: block;
}
}
}
}

.side-navs {
  display: flex;
  float: right;
  text-align: right;
  height: 50px;
  padding-top: 16px;

.popover {
  display: none;

.popover-img {
  width: 20px;
  height: 10px;
  position: absolute;
  top: 38px;
  right: 24px;
}
}

span {
&:hover {
   color: rgba(255, 255, 255, 0.7);

.popover {
  display: block;
}
}
}

a {
&:hover {
   color: rgba(255, 255, 255, 0.5);

.console {
  background-color: rgba(255, 255, 255, 0.5);
}
}
}

.nav {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  margin-left: 5px;
  cursor: pointer;
  vertical-align: top;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
}

.register {
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  margin-left: 5px;
  cursor: pointer;
  vertical-align: top;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
}

.login {
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  margin-left: 5px;
  cursor: pointer;
  vertical-align: top;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
}

.console {
  border: 1px solid #fff;
  border-radius: 6px;
  height: 32px;
  line-height: 30px;
  margin-top: 4px;
  padding: 0 10px;
}
}

.team-icon {
  margin-top: 6px;
  width: 30px;
  height: 30px;
  border-radius: 20px;
}
}

@media screen and (min-width: 300px) and (max-width: 800px) {
  .header {
    top: 0;
    height: 52px;
    box-shadow: none;
    background-color: (0, 0, 0, 0.3);
  }

  .logo {
    margin-top: 20px;
    width: 60px;
  }

  .icon {
    margin-top: 20px;
    color: #ffffff;
  }

  .menu {
    position: relative;
    top: -36px;
  }

  .navs {
    line-height: 50px;
    font-size: 0.6rem;
    height: 48px;

  a {
    color: #fff;
    padding: 10px;
    border-radius: 15px;

&:hover {
   background-color: rgba(255, 255, 255, 0.5);
 }
}

.popover {
  display: none;

.popover-img {
  width: 20px;
  height: 10px;
  position: absolute;
  top: 58px;
  left: 20px;
}

ul {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  position: absolute;
  background: #fff;
  border-radius: 6px;
  width: 640px;
  padding: 20px 0 0;
  overflow: hidden;
  left: 0;
  z-index: 99999;

.a_link {
  display: block;
  margin: 0;
  padding: 0;
}

li {
  float: left;
  width: 50%;
  padding: 5px 20px 0 20px;
  box-sizing: border-box;

.icon_img {
  width: 25px;
  height: 25px;
  float: left;
}

.popover-content {
  float: right;
  width: 86%;
  margin-top: 4px;

p {
  font-size: 16px;
  color: #333;
  line-height: 18px;
}

span {
  color: #999;
  font-size: 12px;
  line-height: 18px;
  padding: 0;
  margin: 0;

&:after {
   content: none;
 }
}
}

&:hover {
   background: #f5f5f5;
 }
}
}
}

span {
  display: inline-block;
  color: #fff;
  padding: 0 10px;
  cursor: pointer;

&:hover {
   color: rgba(255, 255, 255, 0.5);

.popover {
  display: block;
}
}
}
}

.side-navs {
  display: flex;
  float: right;
  text-align: right;
  height: 50px;
  padding-top: 12px;

.popover {
  display: none;

.popover-img {
  width: 20px;
  height: 10px;
  position: absolute;
  top: 38px;
  right: 24px;
}
}

span {
&:hover {
   color: rgba(255, 255, 255, 0.7);

.popover {
  display: block;
}
}
}

a {
&:hover {
   color: rgba(255, 255, 255, 0.5);

.console {
  background-color: rgba(255, 255, 255, 0.5);
}
}
}

.nav {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  margin-left: 5px;
  cursor: pointer;
  vertical-align: top;
  text-decoration: none;
  color: #fff;
  font-size: 0.6em;
}

.register {
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  margin-left: 5px;
  cursor: pointer;
  vertical-align: top;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
}

.login {
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  margin-left: 5px;
  cursor: pointer;
  vertical-align: top;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
}

.console {
  border: 1px solid #fff;
  border-radius: 6px;
  height: 24px;
  line-height: 24px;
  margin-top: 4px;
  padding: 0 10px;
}
}

.team-icon {
  margin-top: 3px;
  width: 28px;
  height: 28px;
  border-radius: 20px;
}
}

.popContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 40;
}
</style>

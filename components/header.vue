<template>
  <client-only>
    <div :style="headerActive" class="header header-index">
      <div class="content">
        <a href="/">
          <img class="logo f-fl" src="https://qiniu.easyapi.com/market/logo.svg">
        </a>
        <div class="navs f-fl">
          <el-popover
            @show="showProduct"
            @hide="hideProduct"
            placement="bottom-start"
            width="650"
            trigger="hover">
            <ul class="popover-ul">
              <a href="/product/doc" class="a_link">
                <li class="popover-li">
                  <img class="icon_img" src="/images/info/down_icon1.png">
                  <div class="popover-content">
                    <p>
                      文档管理
                    </p>
                    <span>
                    在线编辑API接口文档，强大的API接口测试功能，团队协作超便捷
                  </span>
                  </div>
                </li>
              </a>
              <a href="/product/lowcode" class="a_link">
                <li class="popover-li">
                  <img class="icon_img" src="/images/info/icon_lowcode.png">
                  <div class="popover-content">
                    <p>
                      低代码
                    </p>
                    <span>
                    轻松构建API接口服务，阻力企业数字化服务，支持多种开发语言
                  </span>
                  </div>
                </li>
              </a>
              <a href="/product/test" class="a_link">
                <li class="popover-li">
                  <img class="icon_img" src="/images/info/down_icon3.png">
                  <div class="popover-content">
                    <p>
                      接口测试
                    </p>
                    <span>
                    在线API测试工具，快速完成接口测试任务，支持团队共同测试
                  </span>
                  </div>
                </li>
              </a>
              <a href="/product/interface" class="a_link">
                <li class="popover-li">
                  <img class="icon_img" src="/images/info/down_icon4.png">
                  <div class="popover-content">
                    <p>
                      接口服务
                    </p>
                    <span>
                    众多接口服务，满足开发的每一个环节，让开发更高效，让开发更高效
                  </span>
                  </div>
                </li>
              </a>
              <a href="/product/monitor" class="a_link">
                <li class="popover-li">
                  <img class="icon_img" src="/images/info/down_icon5.png">
                  <div class="popover-content">
                    <p>
                      监控系统
                    </p>
                    <span>
                    API监控实时反馈API状态，保障产品稳定性，提升运维响应速度
                  </span>
                  </div>
                </li>
              </a>
              <a href="/product/scene" class="a_link">
                <li class="popover-li">
                  <img class="icon_img" src="/images/info/down_icon6.png">
                  <div class="popover-content">
                    <p>
                      场景化服务
                    </p>
                    <span>
                    企业专注于核心业务开发，提供非核心标准化场景业务开发服务，性价比更高
                  </span>
                  </div>
                </li>
              </a>
            </ul>
            <span slot="reference" class="f-rel navs-item">产品
              <i v-if="ifShowProduct" class="el-icon-caret-bottom"></i>
            <i v-else class="el-icon-caret-top"></i>
            </span>
          </el-popover>
          <a href="/info/price">
            价格
          </a>
          <el-popover
            @show="showPrivatization"
            @hide="hidePrivatization"
            placement="bottom-start"
            width="650"
            trigger="hover">
            <ul class="popover-ul">
              <a href="/solution/portal" class="a_link">
                <li class="popover-li">
                  <img class="icon_img" src="/images/info/header-icon2.png">
                  <div class="popover-content">
                    <p>
                      API管理门户
                    </p>
                    <span>
                    API管理门户主要为开发企业搭建API门户，企业集中化API管理解决方案
                  </span>
                  </div>
                </li>
              </a>
              <a href="/solution/market" class="a_link">
                <li class="popover-li">
                  <img class="icon_img" src="/images/info/header-icon3.png">
                  <div class="popover-content">
                    <p>
                      API服务市场
                    </p>
                    <span>
                    推进企业数字化转型，构建联盟生态服务，统一企业的API服务进出口径
                  </span>
                  </div>
                </li>
              </a>
              <a href="/solution/open" class="a_link">
                <li class="popover-li">
                  <img class="icon_img" src="/images/info/header-icon1.png">
                  <div class="popover-content">
                    <p>
                      API开放平台
                    </p>
                    <span>
                    让企业的数据通过开放平台连接更多的可能性，实现上下游生态建设
                  </span>
                  </div>
                </li>
              </a>
            </ul>
            <span slot="reference" class="f-rel navs-item">私有化
            <i v-if="ifShowPrivatization" class="el-icon-caret-bottom"></i>
            <i v-else class="el-icon-caret-top"></i>
            </span>
          </el-popover>
          <a href="https://market.easyapi.com" target="_blank">
            API市场
          </a>
        </div>
        <div class="side-navs">
          <a v-if='!authenticationToken' class="register" href="https://account.easyapi.com/signup/" id="register">
            注册
          </a>
          <a v-if='!authenticationToken' class="login" href="https://account.easyapi.com/login/" id="login">
            登录
          </a>
          <div class='team-head-left' v-if='authenticationToken'>
            <el-dropdown trigger='hover' @command='handleCommand'>
              <span id='showTeamInfo' style='cursor: pointer'>
                <img v-if='photo' class='team-icon' :src='photo' alt/>
              </span>
              <el-dropdown-menu slot='dropdown'>
                <el-dropdown-item command='notice' icon='el-icon-edit'>我的通知</el-dropdown-item>
                <el-dropdown-item command='edit' icon='el-icon-sort'>个人设置</el-dropdown-item>
                <el-dropdown-item command='quitLogin' icon='el-icon-switch-button'>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <span class="f-rel nav">
          <el-popover placement="bottom-start" trigger="hover">
            <ul class="console-ul">
             <a href="https://team.easyapi.com/project/">
              <li>
                <img class="console_icon" src="/images/info/down_icon7.png">
                <div class="popover-content">
                  <p>
                    API管理
                  </p>
                </div>
              </li>
            </a>
            <a href="https://team.easyapi.com/project/">
              <li>
                <img class="console_icon" src="/images/info/down_icon8.png">
                <div class="popover-content">
                  <p>
                    API监控
                  </p>
                </div>
              </li>
            </a>
            <a href="https://team.easyapi.com/service/">
              <li>
                <img class="console_icon" src="/images/info/down_icon9.png">
                <div class="popover-content">
                  <p>
                    API服务
                  </p>
                </div>
              </li>
            </a>
          </ul>
          <p slot="reference" class="f-rel console navs-item">控制台</p>
        </el-popover>
      </span>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
import Cookies from 'js-cookie'
import {mapGetters} from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      authenticationToken: Cookies.get('authenticationToken'),
      ifShowProduct: true,
      ifShowPrivatization: true,
      headerActive: {
        // backgroundColor: 'red'
      }
    }
  },
  watch: {
    '$route'() {
      console.log('watch里面', this.$route.name);
    },
  },
  computed: {
    ...mapGetters([
      'photo',
      'team'
    ])
  },
  mounted() {
    if (this.authenticationToken) {
      this.$store.dispatch('getUser')
    }
    if (this.$route.name === 'post') {
      this.headerActive = "background-color:#49CDDD"
    }
  },
  methods: {
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
      if (command === 'notice') {
        window.open(`https://team.easyapi.com/notification`)
      } else if (command === 'edit') {
        window.open(`https://team.easyapi.com/user/edit`)
      } else if (command === 'quitLogin') {
        this.quitLogin()
      }
    },
    quitLogin() {
      this.$store.dispatch('logout')
      window.location.href = 'https://account.easyapi.com/login/?from=https://team.easyapi.com'
    },
  }
}
</script>

<style scoped lang="scss">
.header {
  position: relative;
  top: 0;
  height: 72px;
  box-shadow: none;
  background-color: (0, 0, 0, 0.3);
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

.team-head-left {
  margin-right: 20px;
  display: flex;
  position: relative;
}

.team-icon {
  margin-top: 6px;
  width: 30px;
  height: 30px;
  border-radius: 20px
}

.side-navs {
  display: flex;
  float: right;
  width: 300px;
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
      color: rgba(255, 255, 255, .7);

      .popover {
        display: block;
      }
    }
  }

  a {
    &:hover {
      color: rgba(255, 255, 255, .5);

      .console {
        background-color: rgba(255, 255, 255, .5);
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
  height: 48px;

  a {
    color: #fff;
    margin-left: 20px;
    display: inline-block;
    padding: 0 10px;

    &:hover {
      color: rgba(255, 255, 255, .5);
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
      box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
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
      color: rgba(255, 255, 255, .5);

      .popover {
        display: block;
      }
    }
  }
}
</style>

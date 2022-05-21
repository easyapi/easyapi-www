<template>
  <client-only>
    <div v-if="ifShow" :style="headerActive" class="header header-index">
      <div class="content">
        <a href="/">
          <img class="logo float-left" src="https://qiniu.easyapi.com/market/logo.svg">
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
    <div v-else class="header header-index" :style="headerActive">
      <div class="content">
        <div class="flex justify-between">
          <a href="/">
            <img class="logo float-left" src="https://qiniu.easyapi.com/market/logo.svg">
          </a>
          <div class="icon w-14 flex justify-between">
            <i class="el-icon-user" @click="showNav('person')"></i>
            <i class="el-icon-s-fold" @click="showNav('menu')"></i>
          </div>
        </div>
      </div>
      <div class="menu" v-if="ifNavShow">
        <el-col v-if="type === 'menu'" :span="24">
          <el-menu
            :default-active="this.$router.path"
            class="el-menu-vertical-demo" router>
            <div class="float-right mr-10">
              <el-button type="text" icon="el-icon-close" @click="closeMenu">关 闭</el-button>
            </div>
            <div class="clear-both"></div>
            <el-submenu index="1">
              <template slot="title">
                <span>产品</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/product/doc">文档管理</el-menu-item>
                <el-menu-item index="/product/test">接口测试</el-menu-item>
                <el-menu-item index="/product/monitor">监控系统</el-menu-item>
                <el-menu-item index="/product/lowcode">低代码</el-menu-item>
                <el-menu-item index="/product/interface">接口服务</el-menu-item>
                <el-menu-item index="/product/scene">场景化服务</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/info/price">
              <span slot="title">价格</span>
            </el-menu-item>
            <el-submenu index="3">
              <template slot="title">
                <span>私有化</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/solution/portal">API管理门户</el-menu-item>
                <el-menu-item index="/solution/open">API开放平台</el-menu-item>
                <el-menu-item index="/solution/market">API服务市场</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item @click="jump">
              <span slot="title">API市场</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col v-if="type === 'person'" :span="24">
          <el-menu
            class="el-menu-vertical-demo">
            <div class="float-right mr-10">
              <el-button type="text" icon="el-icon-close" @click="closeMenu">关 闭</el-button>
            </div>
            <div class="clear-both"></div>
            <el-menu-item @click="jumpSign">
              <span slot="title">注册</span>
            </el-menu-item>
            <el-menu-item @click="jumpLogin">
              <span slot="title">登录</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </div>
      <div v-if="ifNavShow" class='popContainer'>
      </div>
    </div>
  </client-only>
</template>

<script>
import Index from './index'

export default Index
</script>

<template>
  <div class="nav">
    <div class="uk-container">
      <div data-uk-navbar>
        <div class="uk-navbar-left">
          <router-link class="uk-navbar-item uk-logo uk-text-small" :to="{path:'/home'}">{{title}}</router-link>
        </div>
        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav uk-visible@m">
            <li>
              <router-link :to="{path:'/home'}">首页</router-link>
            </li>
            <li>
              <router-link :to="{path:'/tags'}">标签云</router-link>
            </li>
            <li>
              <router-link :to="{path:'/home'}">传送门</router-link>
            </li>
            <li>
              <router-link :to="{path:'/contact'}">留言</router-link>
            </li>
            <li>
              <router-link :to="{path:'/about'}">关于我</router-link>
            </li>
          </ul>
          <a class="uk-navbar-toggle uk-hidden@m" href="#offcanvas" data-uk-navbar-toggle-icon data-uk-toggle></a>
        </div>
      </div>
    </div>

    <div id="offcanvas" data-uk-offcanvas="flip: true; overlay: true">
      <div class="uk-offcanvas-bar">
        <button class="uk-offcanvas-close" type="button" data-uk-close></button>
        <ul class="uk-nav uk-nav-primary uk-nav-offcanvas">
          <li class="uk-nav-header uk-logo uk-margin-bottom">{{title}}</li>
          <li>
            <router-link :to="{path:'/home'}">首页</router-link>
          </li>
          <li>
            <router-link :to="{path:'/tags'}">标签云</router-link>
          </li>
          <li>
            <router-link :to="{path:'/home'}">传送门</router-link>
          </li>
          <li>
            <router-link :to="{path:'/contact'}">留言</router-link>
          </li>
          <li>
            <router-link :to="{path:'/about'}">关于我</router-link>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'Nav',
    data() {
      return {
        title: '简单笔记'
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/font.css";
  @import "../../assets/css/main.css";
</style>

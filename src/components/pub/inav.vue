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
            <!--<li>
              <router-link :to="{path:'/contact'}">留言</router-link>
            </li>-->
            <li>
              <router-link :to="{path:'/about'}">关于我</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Inav',
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

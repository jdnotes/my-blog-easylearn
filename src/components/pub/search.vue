<template>
  <div class="app">
    <div class="uk-container">
      <div class="uk-section uk-section-xsmall border-bottom">
        <div data-uk-grid>
          <div class="uk-width-2-3@m uk-flex uk-flex-middle">
            <ul class="uk-breadcrumb">
              <li>你有多自律，就有多美好!</li>
            </ul>
          </div>
          <div class="uk-width-1-3@m">
            <form class="uk-search uk-search-default uk-width-1-1 awesomplete" @submit.prevent="search">
              <a href="javascript: void(0)" @click="search" class="uk-search-icon-flip" data-uk-search-icon></a>
              <input id="search" type="search" autocomplete="off"
                     class="uk-search-input uk-search-default uk-width-1-1 uk-form-large"
                     v-model="keywords" placeholder="请输入关键字词">
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Search',
    data() {
      return {
        keywords: ''
      }
    },
    methods: {
      search() {
        let keyword = this.keywords;
        if (!keyword) {
          return;
        } else {
          //子组件调用父组件方法
          console.log('search vue :' + keyword);
          this.$parent.search(1, '', keyword);
        }
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/font.css";
  @import "../../assets/css/main.css";
</style>

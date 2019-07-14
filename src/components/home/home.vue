<template>
  <div class="app">
    <Nav></Nav>
    <Search></Search>

    <section class="uk-section">
      <div class="uk-container">
        <div class="uk-grid-match" data-uk-grid>
          <div class="uk-width-2-3@m">
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top uk-inline">
                <img src="static/images/image2.jpg" alt="Lorem ipsum">
                <a class="uk-overlay uk-position-cover" href="javascript: void(0)"
                   @click="goInfo(recent.recentId)"></a>
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">
                  <a href="javascript: void(0)" @click="goInfo(recent.recentId)">{{recent.recentArticle}}</a>
                </h3>
              </div>
              <div class="uk-card-footer">
                <a class="uk-text-small text-400" href="javascript: void(0)"
                   @click="goInfo(recent.recentId)">Read more</a>
                <span class="uk-text-small uk-text-muted uk-align-right">{{recent.recentDate}}</span>
              </div>
            </div>
          </div>

          <div class="uk-width-1-3@m">
            <div class="border-frame">
              <ul class="uk-child-width-expand" data-uk-tab>
                <li class="uk-active">
                  <a href="#">热门推荐</a>
                </li>
                <li>
                  <a href="#">最新推荐</a>
                </li>
              </ul>
              <ul class="uk-switcher article-content">
                <li>
                  <ul class="uk-list uk-list-large">
                    <li v-for="item in hotList">
                      <a href="javascript: void(0)" @click="goInfo(item.id)">{{item.title}}</a></li>
                  </ul>
                </li>
                <li>
                  <ul class="uk-list uk-list-large">
                    <li v-for="item in recentList">
                      <a href="javascript: void(0)" @click="goInfo(item.id)">{{item.title}}</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match" data-uk-grid>
          <div v-for="item in articleList">
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top uk-inline" v-if="item.logo != ''">
                <img :src="item.logo" alt="Lorem ipsum">
                <a class="uk-overlay uk-position-cover"
                   href="javascript: void(0)" @click="goInfo(item.id)"></a>
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">
                  <a href="javascript: void(0)" @click="goInfo(item.id)">{{item.title}}</a>
                </h3>
              </div>
              <div class="uk-card-footer">
                <a class="uk-text-small text-400" href="javascript: void(0)" @click="goInfo(item.id)">
                  Read more ({{item.readNum}})
                </a>
                <span class="uk-text-small uk-text-muted uk-align-right">{{item.articleDate}}</span>
              </div>
            </div>
          </div>
        </div>

        <Pager :totalRecords="total" :currentPage='page.currentPage' @pageChange="page.pageChange"
               v-if="page.pageShow"></Pager>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>

  import Nav from '../pub/nav';
  import Footer from "../pub/footer";
  import Pager from "../pub/pager";
  import Search from "../pub/search";

  export default {
    name: 'Home',
    components: {
      Search,
      Pager,
      Footer,
      Nav
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        recent: {
          recentId: '1001',
          recentArticle: '你有多自律，就有多美好!',
          recentDate: '7 days ago'
        },
        hotList: [
          {'id': '1001', 'title': '搭建我的博客之History模式(十)'},
          {'id': '1002', 'title': '搭建我的博客之History模式(九)'}
        ],
        recentList: [
          {'id': '1001', 'title': '搭建我的博客之父子组件方法调用(四)'},
          {'id': '1002', 'title': '搭建我的博客之vue环境配置(一)'}
        ],
        page: {
          currentPage: 1,
          pageRows: 10,
          total: 0,
          noDataShow: false,
          noDataText: '暂无内容,看看最新推荐吧',
          pageShow: false,
        },
        articleList: [
          {
            'id': '1001',
            'title': '搭建我的博客之父子组件方法调用(1)',
            'logo': 'static/images/image3.jpg',
            'readNum': '45',
            'articleDate': '1 days ago'
          },
          {
            'id': '1002',
            'title': '搭建我的博客之父子组件方法调用(2)',
            'logo': 'static/images/image3.jpg',
            'readNum': '45',
            'articleDate': '3 days ago'
          },
        ],
      }
    },
    mounted() {
      this.getInitList()
    },
    methods: {
      getInitList() {
        console.log('home init method');
      },
      goInfo(id) {
        console.log('home goInfo method:' + id);
      },
      search(curPage, tags, keyword) {
        this.pageChange(curPage, tags, keyword);
      },
      pageChange(curPage, tags, keyword) {
        console.log('home search', curPage, tags, keyword);
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/font.css";
  @import "../../assets/css/main.css";
</style>

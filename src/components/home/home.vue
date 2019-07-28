<template>
  <div class="app">
    <nav class="border-bottom">
      <Nav></Nav>
    </nav>
    <Search></Search>
    <section class="uk-section">
      <div class="uk-container">
        <div class="uk-grid-match" data-uk-grid>
          <div class="uk-width-2-3@m">
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top uk-inline">
                <img :src="recent.logo" alt="Lorem ipsum">
                <a class="uk-overlay uk-position-cover" href="javascript: void(0)"
                   @click="goInfo(recent.id)"></a>
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">
                  <a href="javascript: void(0)" @click="goInfo(recent.id)">{{recent.title}}</a>
                </h3>
              </div>
              <div class="uk-card-footer">
                <a class="uk-text-small text-400" href="javascript: void(0)"
                   @click="goInfo(recent.id)">Read more</a>
                <span class="uk-text-small uk-text-muted uk-align-right">{{recent.dateText}}</span>
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
                  <a href="#">优质推荐</a>
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
                    <li v-for="item in qualityList">
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
                  Read more
                </a>
                <span class="uk-text-small uk-text-muted uk-align-right">{{item.dateText}}</span>
              </div>
            </div>
          </div>
        </div>
        <Pager :totalRecords="page.total" :currentPage='page.currentPage' :pageRow='page.pageRow'
               @pageChange="pageChange" v-if="page.pageShow"></Pager>
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
        msg: 'home page',
        recent: {},
        hotList: [],
        qualityList: [],
        page: {
          currentPage: 1,
          pageRow: 6,
          total: 0,
          noDataShow: false,
          noDataText: '暂无内容,看看最新推荐吧',
          pageShow: false,
        },
        articleList: [],
      }
    },
    mounted() {
      this.getInitList();
    },
    methods: {
      getInitList() {
        this.loadRecentData();
        this.loadHotList();
        this.loadQualityList();
        this.loadArticleList();
      },
      loadArticleList() {
        let tags = '';
        let keywords = '';
        this.pageChange(1, tags, keywords);
      },
      loadQualityList() {
        this.http.post(this.ports.article.qualityList, {}, res => {
          if (res.success) {
            let datas = res.data.results;
            this.qualityList = datas;
          }
        })
      },
      loadHotList() {
        this.http.post(this.ports.article.hotList, {}, res => {
          if (res.success) {
            let datas = res.data.results;
            this.hotList = datas;
          }
        })
      },
      loadRecentData() {
        this.http.post(this.ports.article.quality, {}, res => {
          if (res.success) {
            let datas = res.data.results;
            this.recent = datas;
            this.recent.logo = this.getLogoUrl(1, 13, "static/images/top/");
            this.recent.dateText = this.getDateStr(this.recent.date);
          }
        })
      },
      goInfo(id) {
        if (id == null) {
          return;
        }
        this.$router.push({path: '/info/' + id});
      },
      search(curPage, tags, keyword) {
        //跳转taglist页面
        //this.$router.push({name: 'taglist', params: {tags: tags, keyword: keyword}});
        this.$router.push({path: '/taglist', query: {tags: tags, keyword: keyword}});
      },
      pageChange(curPage, tags, keyword) {
        this.http.post(this.ports.article.search, {
          currentPage: curPage,
          pageRow: this.page.pageRow,
          tags: tags,
          keywords: keyword
        }, res => {
          if (res.success) {
            let datas = res.data.results;
            this.articleList = datas.records;
            this.currentPage = datas.currentPage;
            this.page.total = datas.totalRecords;

            this.articleList.forEach(el => {
              el.dateText = this.getDateStr(el.createDate);
              el.logo = this.getLogoUrl(1, 50, "static/images/list/");
            });

            if (this.page.total > this.page.pageRow) {
              this.page.pageShow = true;
            } else {
              this.page.pageShow = false;
            }
          } else {
            this.articleList = [];
          }
        })
      },
      getRandomNum(lower, upper) {
        //产生随机整数，包含下限值，但不包括上限值
        //Math.floor(Math.random() * (upper - lower)) + lower;
        //产生随机整数，包含下限值，包括上限值
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
      },
      getLogoUrl(lower, upper, path) {
        let rand = this.getRandomNum(lower, upper);
        let logo = path + rand + ".jpg";
        return logo;
      },
      getDateStr(times) {
        //当前时间
        let timestamp = Date.parse(new Date());
        timestamp = timestamp / 1000;
        //过期时间
        times = parseInt(times / 1000);
        let diff = (timestamp - times) / 60;
        if (diff > 0 && diff < 60) {
          return parseInt(diff) + "分钟前";
        } else if (diff >= 60 && diff <= 1440) {
          return parseInt(diff / 60) + "小时前";
        } else if (diff > 1440 && diff < 4320) {
          return parseInt(diff / 60 / 24) + "天前";
        } else if (diff > 4320) {
          return "3天前";
        }
        return "1天前";
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/font.css";
  @import "../../assets/css/main.css";
</style>

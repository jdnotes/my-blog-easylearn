<template>
  <div class="tags">
    <nav class="border-bottom">
      <Nav></Nav>
    </nav>
    <Search></Search>
    <section class="uk-section">
      <div class="uk-container">
        <div class="uk-grid-large" data-uk-grid>
          <div class="uk-width-expand@m padding-right@m padding-large-right@l">
            <article class="uk-article" v-for="article in articleList">
              <h2 class="uk-h3 uk-margin-bottom">
                <a href="javascript: void(0)" @click="goInfo(article.id)">{{article.title}}</a>
              </h2>
              <div class="article-content">
                <p v-html="article.articleSection"></p>
              </div>
              <div>
                <a class="button-link uk-text-small" href="javascript: void(0)"
                   @click="goInfo(article.id)">Read more</a>
              </div>
            </article>
            <article class="uk-article" v-if="noData">
              {{noDataText}}
            </article>
          </div>
          <div class="uk-width-1-4@m uk-visible@m">
            <div data-uk-sticky="offset: 100; media: @m; bottom: true">
              <div class="uk-position-relative">
                <div class="divider-left">
                  <ul class="uk-nav uk-nav-default">
                    <li v-for="item in recentList">
                      <a href="javascript: void(0)" @click="goInfo(item.id)">{{item.title}}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="uk-container">
      <Pager :totalRecords="page.total" :currentPage='page.currentPage' :pageRow='page.pageRow'
             @pageChange="pageChange" v-if="page.pageShow"></Pager>

      <div class="uk-grid-large uk-flex-middle uk-margin-large-top uk-margin-large-bottom"
           data-uk-grid data-uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true">
        <div class="uk-width-auto@m">
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Nav from "../pub/nav";
  import Search from "../pub/search";
  import Footer from "../pub/footer";
  import Pager from "../pub/pager";

  export default {
    name: 'taglist',
    components: {Footer, Search, Nav, Pager},
    data() {
      return {
        noDataText: '暂无更新内容,看看最新推荐吧',
        noData: false,
        tags: '',
        keywords: '',
        page: {
          currentPage: 1,
          pageRow: 5,
          total: 0,
          noDataShow: false,
          pageShow: false,
        },
        articleList: [],
        recentList: []
      }
    },
    mounted() {
      this.getInitList()
    },
    methods: {
      getInitList() {
        this.loadArticleList();
        this.loadRecentList();
      },
      loadRecentList() {
        this.http.post(this.ports.article.recentList, {}, res => {
          if (res.success) {
            let datas = res.data.results;
            this.recentList = datas;
          }
        })
      },
      loadArticleList() {
        //let param = this.$route.params;
        let param = this.$route.query;
        if (param != null) {
          this.tags = param.tags;
          this.keywords = param.keyword;
        }
        this.pageChange(1, this.tags, this.keywords);
      },
      goInfo(id) {
        if (id == null) {
          return;
        }
        //this.$router.push({path: '/info/' + id});
        let routes = this.$router.resolve({name: "infoBlank", query: {id: id}});
        window.open(routes.href, '_blank');
      },
      pageChange(curPage, tags, keyword) {
        if (tags == null || tags == '') {
          tags = this.tags;
        }
        if (keyword == null || keyword == '') {
          keyword = this.keywords;
        }

        this.http.post(this.ports.article.search, {
          currentPage: curPage,
          pageRow: this.page.pageRow,
          tags: tags,
          keywords: keyword
        }, res => {
          if (res.success) {
            let datas = res.data.results;
            this.articleList = datas.records;
            this.page.currentPage = datas.currentPage;
            this.page.total = datas.totalRecords;
            if (this.page.total > this.page.pageRow) {
              this.page.pageShow = true;
            } else if (this.page.total > 0) {
              this.page.pageShow = false;
            } else {
              this.page.pageShow = false;
              this.noData = true;
            }
          } else {
            this.articleList = [];
          }
        })
      },
      search(curPage, tags, keyword) {
        if (keyword != null && keyword != '') {
          this.keywords = keyword;
        }
        this.pageChange(curPage, tags, keyword);
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/font.css";
  @import "../../assets/css/main.css";
</style>

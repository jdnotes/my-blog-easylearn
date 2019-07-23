<template>
  <div class="tags">
    <nav class="border-bottom">
      <Inav></Inav>
    </nav>
    <Search></Search>
    <section class="uk-section">
      <div class="uk-container">
        <div class="uk-grid-large" data-uk-grid>
          <div class="uk-width-expand@m padding-right@m padding-large-right@l">
            <article class="uk-article">
              <mavon-editor v-html="articleHtml"/>
            </article>
          </div>
          <div class="uk-width-1-4@m uk-visible@m">
            <div data-uk-sticky="offset: 100; media: @m; bottom: true">
              <div class="uk-position-relative">
                <div class="divider-left">
                  <div>
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
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
  import Search from "../pub/search";
  import Footer from "../pub/footer";
  import Inav from "../pub/inav";

  export default {
    name: 'tags',
    inject: ['reload'],
    components: {Inav, Footer, Search},
    data() {
      return {
        title: '简单笔记',
        recentList: [],
        articleHtml: ''
      }
    },
    mounted() {
      this.getInitInfo();
    },
    methods: {
      getInitInfo() {
        this.loadRecentData();
        this.loadDetails();
      },
      loadDetails() {
        let id = this.$route.params.id;
        this.http.post(this.ports.article.details, {
          id: id
        }, res => {
          if (res.success) {
            let datas = res.data.results;
            if (datas != null) {
              this.articleHtml = datas.articleHtml;
            }
          } else {
            this.articleHtml = "暂无数据";
          }
        })
      },
      loadRecentData() {
        this.http.post(this.ports.article.recentList, {}, res => {
          if (res.success) {
            let datas = res.data.results;
            this.recentList = datas;
          }
        })
      },
      search(curPage, tags, keyword) {
        this.$router.push({name: 'taglist', params: {tags: tags, keyword: keyword}});
      },
      goInfo(id) {
        if (id == null) {
          return;
        }
        this.reload();
        this.$router.push({path: '/info/' + id});
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/font.css";
  @import "../../assets/css/main.css";
</style>

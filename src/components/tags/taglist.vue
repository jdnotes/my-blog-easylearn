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
                <a href="#">{{article.title}}</a>
              </h2>
              <div class="article-content">
                <p v-html="article.selection"></p>
              </div>
              <div>
                <a class="button-link uk-text-small" href="#">Read more</a>
              </div>
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
      <Pager :totalRecords="total" :currentPage='page.currentPage' @pageChange="page.pageChange"
             v-if="page.pageShow"></Pager>

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

  export default {
    name: 'taglist',
    components: {Footer, Search, Nav},
    data() {
      return {
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
            'title': 'How do I enable payment gateway?',
            'selection': '这么多年来，我面试了很多人。我越发感到「技术基础」非常重要。' +
              '很多技术的本质是一样的。<b>技术基础足够好的话，学东西可以非常快。</b>往下到操作系统层面，甚至计算机硬件层面，' +
              '你会发现，编程语言特性和虚拟机特性不再重要。而技术基础和具体的编程语言没有太大关系，你有良好的技术基础，' +
              '面试什么样的技术人员都是无障碍的。'
          }
        ],
        recentList: [
          {'id': '1001', 'title': '搭建博客之父子组件方法调用(四)'},
          {'id': '1002', 'title': '搭建博客之vue环境配置(一)'}
        ]
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/font.css";
  @import "../../assets/css/main.css";
</style>

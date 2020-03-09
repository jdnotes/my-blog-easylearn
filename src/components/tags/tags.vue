<template>
  <div class="tags">
    <nav class="uk-background-muted">
      <Nav></Nav>
    </nav>
    <div class="uk-background-muted">
      <div class="uk-container">
        <div class="uk-margin">
          <form class="uk-search uk-search-default uk-width-1-1 awesomplete" @submit.prevent="search">
            <a href="javascript: void(0)" @click="search" class="uk-search-icon-flip" data-uk-search-icon></a>
            <input id="search" type="search" autocomplete="off"
                   class="uk-search-input uk-search-default uk-width-1-1 uk-form-large"
                   v-model="keywords" placeholder="请输入关键字词">
          </form>
        </div>
      </div>
    </div>
    <section class="uk-section uk-background-muted">
      <div class="uk-container uk-text-center">
        <h1 class="uk-heading-primary uk-margin-medium-bottom"
            data-uk-scrollspy="cls: uk-animation-slide-bottom-medium;">We can learn ...</h1>
        <div
          class="uk-grid-collapse uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid-match uk-text-center"
          data-uk-grid data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; delay: 80">
          <div v-for="item in tags">
            <a href="javascript: void(0)" @click="goList(item.code)"
               class="uk-card card-box uk-card-body uk-border-rounded">
              <img :src="item.icon">
              <p class="uk-margin-medium-top">{{item.tagName}}</p>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="uk-section">
      <div class="uk-container">
        <div class="uk-grid-divider uk-grid-large uk-child-width-1-2@m" data-uk-grid>
          <div>
            <div class="uk-flex uk-flex-middle" data-uk-grid>
              <div class="uk-width-auto uk-text-primary">
                <span data-uk-icon=""></span>
              </div>
              <div class="uk-width-4-5">
                <h4 class="margin-xsmall-bottom">待续 ...</h4>
                <p class="uk-margin-remove uk-link-reset">
                  <router-link :to="{path:'/contact'}">给我留言</router-link>
                </p>
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
  import Nav from "../pub/nav";
  import Footer from "../pub/footer";

  export default {
    name: 'tags',
    components: {
      Footer,
      Nav
    },
    data() {
      return {
        keywords: '',
        tags: []
      }
    },
    mounted() {
      this.getInitTags()
    },
    methods: {
      getInitTags() {
        this.http.post(this.ports.tag.cloud, {}, res => {
          if (res.success) {
            let datas = res.data.results;
            this.tags = datas;
          } else {
            this.tags = [];
          }
        })
      },
      goList(tags) {
        //this.$router.push({name: 'taglist', params: {tags: tags, keyword: ''}});
        this.$router.push({name: 'taglist', query: {tags: tags}});
        //this.$router.push({path: '/list/' + tags});
      },
      search(curPage, tags, keyword) {
        keyword = this.keywords;
        this.$router.push({name: 'taglist', query: {keyword: keyword}});
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/font.css";
  @import "../../assets/css/main.css";
</style>
